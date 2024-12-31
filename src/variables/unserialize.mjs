import stdClass from '../classes/stdClass.mjs';
import { TypePHPJSError } from '../exceptions.mjs';
import floatval from './to_float.mjs';
import intval from './to_int.mjs';
import is_array from './is_array.mjs';
import is_callable from './is_callable.mjs';
import is_class from './is_class.mjs';
import is_int from './is_int.mjs';
import is_string from './is_string.mjs';

const ALLOWED_CLASSES = [stdClass];

function parseOptions(options) {
    if (!('allowed_classes' in options) || options.allowed_classes === true) {
        options.allowed_classes = ALLOWED_CLASSES;
    }

    if (options.allowed_classes === false) {
        options.allowed_classes = [stdClass];
    }

    options.allowed_classes = options.allowed_classes.filter(v => is_class(v));

    for (const allowed_class of ALLOWED_CLASSES) {
        if (!options.allowed_classes.find(v => v.name === allowed_class.name)) {
            options.allowed_classes.push(allowed_class);
        }
    }

    if (!('max_depth' in options) || !is_int(options.max_depth) || options.max_depth < 0) {
        options.max_depth = 4096;
    }

    if (options.max_depth === 0) {
        options.max_depth = Infinity;
    }

    if (
        !('depth' in options) ||
        !is_int(options.depth) ||
        options.depth < 0 ||
        options.depth > options.max_depth
    ) {
        options.depth = 0;
    }

    return options;
}

function unserialize_bool(value) {
    const result = value.match(/^b:(?<bool>[01]);$/);

    if (result) {
        return result.groups.bool === '1';
    }

    return false;
}

function unserialize_int(value) {
    const result = value.match(/^i:(?<int>.+);$/);

    if ((result && intval(result.groups.int) !== 0) || result.groups.int === '0') {
        return intval(result.groups.int);
    }

    return false;
}

function unserialize_double(value) {
    const result = value.match(/^d:(?<double>.+);$/);

    if ((result && floatval(result.groups.double) !== 0) || /^0\.?0*/.test(result.groups.double)) {
        return floatval(result.groups.double);
    }

    return false;
}

function unserialize_string(value) {
    const result = value.match(/^s:(?<length>\d+):"(?<string>.*)";$/);

    if (result && intval(result.groups.length) === result.groups.string.length) {
        return result.groups.string;
    }

    return false;
}

function unserialize_array(value, options) {
    const parsedOptions = parseOptions(options);

    if (parsedOptions.depth === parsedOptions.max_depth) {
        return value;
    }

    const result = value.match(/^a:(?<length>\d+):{(?<couples>.*)}$/);
    const length = intval(result.groups.length);
    const couples =
        result.groups.couples
            .match(/O:.+{[^{]*}|a:.+?{[^{]*}|.+?;/g)
            ?.filter(v => Boolean(v))
            .map(v => unserialize(v, { ...parsedOptions, depth: parsedOptions.depth + 1 })) ?? [];

    if (couples.length % 2 !== 0 || length !== couples.length / 2) {
        return false;
    }

    const array = {};
    let is_list = true;
    let index = 0;

    for (let i = 0; i < couples.length; i += 2) {
        const k = couples[i];
        const v = couples[i + 1];

        if (!is_int(k) && !is_string(k)) {
            return false;
        }

        if (is_string(k) || k !== index) {
            is_list = false;
        }

        array[k] = v;
        index++;
    }

    return is_list ? Object.values(array) : array;
}

function unserialize_object(value, options) {
    const parsedOptions = parseOptions(options);

    if (parsedOptions.depth === parsedOptions.max_depth) {
        return value;
    }

    const result = value.match(/^O:(?<length>\d+):"(?<name>.+?)":(?<count>\d+):{(?<couples>.*)}$/);

    const couples =
        result.groups.couples
            .match(/O:.+{[^{]*}|a:.+?{[^{]*}|.+?;/g)
            ?.filter(v => Boolean(v))
            .map(v => unserialize(v, { ...parsedOptions, depth: parsedOptions.depth + 1 })) ?? [];

    if (
        intval(result.groups.length) !== result.groups.name.length ||
        couples.length % 2 !== 0 ||
        intval(result.groups.count) !== couples.length / 2
    ) {
        return false;
    }

    const object = new (parsedOptions.allowed_classes.find(v => v.name === result.groups.name) ??
        stdClass)();

    const data = {};

    for (let i = 0; i < couples.length; i += 2) {
        const k = couples[i];
        const v = couples[i + 1];

        if (!is_int(k) && !is_string(k)) {
            return false;
        }

        data[k] = v;
    }

    if ('__unserialize' in object && is_callable(object.__unserialize)) {
        object.__unserialize(data);
    } else {
        Object.assign(object, data);

        if ('__wakeup' in object && is_callable(object.__wakeup)) {
            object.__wakeup();
        }
    }

    return object;
}

/**
 * Создаёт значение из хранимого представления
 *
 * Функция `unserialize()` принимает одну сериализованную переменную
 * и конвертирует её обратно в значение.
 *
 * @param {string} value Сериализованная строка.
 *
 * Если переменная, требующая десериализации, — объект, то после успешного восстановления объекта то функция автоматически попытается вызвать методы `unserialize()` или `wakeup()` (если они определены).
 *
 * @param {Object} options Любые опции в виде ассоциативного массива,
 * которые разрешено передавать в функцию `unserialize()`.
 *
 * **Корректные опции**
 *
 * | Имя | Тип | Описание |
 * |-----|-----|----------|
 * | allowed_classes | any | Либо массив имён классов, которые должны быть приняты, `false` для указания не принимать никаких классов, либо `true`, чтобы принимать все разрешенные классы. Если эта опция задана и функция `unserialize()` обнаружит объект неприемлемого класса, то он не будет принят, а вместо этого инстанцируется как объект класса `stdClass`. Если опция не задана, будет считаться, что ей задано значение `true`: функция попытается инстанцировать объекты любого класса. |
 * | max_depth | int | Максимальная глубина структур, разрешённая при десериализации и предназначенная для предотвращения переполнения стека. По умолчанию ограничение глубины составляет `4096` и отключается установкой опции `max_depth` значения `0`. |
 *
 * **Разрешенные классы:**
 *
 * - `stdClass`
 *
 * @returns {any}
 *
 * Возвращает преобразованное значение, которое принимает один из типов
 * `bool`, `int`, `float`, `string`, `array` или `object`.
 *
 * Если переданная строка не поддаётся десериализации, возвращает `false`.
 */
export default function unserialize(value, options = { allowed_classes: true, max_depth: 4096 }) {
    if (!is_string(value)) {
        throw new TypePHPJSError('The "value" parameter must be of the "string" type.');
    }

    if (!is_array(options) || options instanceof Array) {
        throw new TypePHPJSError('The "options" parameter must be an associative array.');
    }

    if (/^b:[01];$/.test(value)) {
        return unserialize_bool(value);
    }

    if (/^i:.+;$/.test(value)) {
        return unserialize_int(value);
    }

    if (/^d:.+;$/.test(value)) {
        return unserialize_double(value);
    }

    if (/^s:\d+:".*";$/.test(value)) {
        return unserialize_string(value);
    }

    if (/^a:\d+:{.*}$/.test(value)) {
        return unserialize_array(value, options);
    }

    if (/^O:\d+:".+":\d+:{.*}$/.test(value)) {
        return unserialize_object(value, options);
    }

    if (/^N;$/.test(value)) {
        return null;
    }

    if (/^d:Infinity;$/.test(value)) {
        return Infinity;
    }

    if (/^d:-Infinity;$/.test(value)) {
        return -Infinity;
    }

    if (/^u;$/.test(value)) {
        return undefined;
    }

    if (/^NaN;$/.test(value)) {
        return NaN;
    }

    return false;
}
