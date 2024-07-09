import is_array from './is_array.mjs';
import is_bool from './is_bool.mjs';
import is_callable from './is_callable.mjs';
import is_class from './is_class.mjs';
import is_float from './is_float.mjs';
import is_int from './is_int.mjs';
import is_null from './is_null.mjs';
import is_numeric from './is_numeric.mjs';
import is_object from './is_object.mjs';
import is_string from './is_string.mjs';
import is_symbol from './is_symbol.mjs';
import is_undefined from './is_undefined.mjs';

function dump(value, level = 1) {
    let result = '';

    if (is_bool(value)) {
        result = value ? 'bool(true)' : 'bool(false)';
    } else if (is_int(value)) {
        result = `int(${value})`;
    } else if (is_float(value)) {
        result = `float(${value})`;
    } else if (is_string(value)) {
        result = `string(${value.length}) "${value}"`;
    } else if (is_array(value)) {
        result = `array(${Object.values(value).length}) {\n`;

        for (const k in value) {
            const v = value[k];

            result += `  [${is_numeric(k) ? '' : '"'}${k}${is_numeric(k) ? '' : '"'}]=>\n`;
            result += `  ${dump(v, level + 1).replace(/\n/g, '\n  ')}\n`;
        }

        result += '}';
    } else if (is_object(value)) {
        const couples = is_callable(value.__debugInfo) ? value.__debugInfo() : { ...value };

        if (!is_array(couples) || couples instanceof Array) {
            throw new TypeError(
                'The "debugInfo" method should return an associative array of object properties.',
            );
        }

        result = `object(${value.constructor.name})#${level} (${Object.values(couples).length}) {\n`;

        for (const k in couples) {
            const v = couples[k];

            result += `  [${is_numeric(k) ? '' : '"'}${k}${is_numeric(k) ? '' : '"'}]=>\n`;
            result += `  ${dump(v, level + 1).replace(/\n/g, '\n  ')}\n`;
        }

        result += '}';
    } else if (is_callable(value)) {
        result = 'function () {}';
    } else if (is_null(value)) {
        result = 'NULL';
    } else if (value === Number.POSITIVE_INFINITY || value === Number.NEGATIVE_INFINITY) {
        result = `float(${value})`;
    } else if (is_undefined(value)) {
        result = 'undefined';
    } else if (Number.isNaN(value)) {
        result = 'NaN';
    } else if (is_class(value)) {
        result = `class ${value.name} {}`;
    } else if (is_symbol(value)) {
        result = 'Symbol';
    }

    return result;
}

/**
 * Выводит информацию о переменной
 *
 * Функция отображает структурированную информацию об одном
 * или нескольких выражениях, включая их тип и значение.
 * Массивы и объекты анализируются рекурсивно,
 * значениям задаются отступы, чтобы показать структуру.
 *
 * Все общедоступные, закрытые и защищённые свойства объекта будут
 * возвращены в выводе, кроме объектов, в которых реализован метод `debugInfo()`.
 *
 * @param {any} value Выражение, которое нужно вывести.
 * @param {any} values Следующие выражения для вывода.
 * @returns {void} Функция не возвращает значения после выполнения.
 */
export default function var_dump(value, ...values) {
    values.unshift(value);

    const results = [];

    for (const v of values) {
        results.push(`${dump(v)}\n`);
    }

    console.log(results.join(''));
}
