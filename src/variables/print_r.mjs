import is_array from './is_array.mjs';
import is_bool from './is_bool.mjs';
import is_callable from './is_callable.mjs';
import is_class from './is_class.mjs';
import is_object from './is_object.mjs';
import is_symbol from './is_symbol.mjs';
import strval from './strval.mjs';

/**
 * Выводит удобочитаемую информацию о переменной
 *
 * @param {any} value Выражение для вывода на экран.
 * @param {boolean} return_result
 *
 * Если нужно перехватить вывод функции `print_r()`,
 * необходимо задать параметр `return_result`.
 * Если для этого параметра установлено значение `true`,
 * то функция `print_r()` вернёт информацию, а не выведет её.
 *
 * @returns {string|boolean}
 *
 * Если в функцию передана строка `(string)`, целое число `(int)`
 * или число с плавающей точкой `(float)`, будет напечатано само значение.
 * Если передан массив `(array)`, значения будут напечатаны в формате,
 * показывающем ключи и элементы массива.
 * Аналогичный формат вывода будет применён для объектов.
 *
 * Если параметр `return_result` установлен в true, функция вернёт строку `(string)`.
 * В противном случае возвращаемое значение будет равно `true`.
 */
export default function print_r(value, return_result = false) {
    if (!is_bool(return_result)) {
        throw new TypeError('The "return_result" parameter must be of the "boolean" type.');
    }

    let result;

    if (is_array(value)) {
        result = 'Array\n(\n';

        for (const k in value) {
            const v = value[k];

            result += `    [${k}] => ${print_r(v, true).replace(/\n/g, '\n        ')}\n`;
        }

        result += ')\n';
    } else if (is_object(value)) {
        result = `${value.constructor.name} Object\n(\n`;

        for (const k in value) {
            const v = value[k];

            if (!is_callable(v)) {
                result += `    [${k}] => ${print_r(v, true).replace(/\n/g, '\n        ')}\n`;
            }
        }

        result += ')\n';
    } else if (is_callable(value)) {
        result = 'function () {}';
    } else if (is_class(value)) {
        result = `class ${value.name}`;
    } else if (is_symbol(value)) {
        result = 'Symbol';
    } else {
        result = strval(value);
    }

    if (!return_result) {
        console.log(result);

        return true;
    }

    return result;
}
