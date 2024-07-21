import boolval from './boolval.mjs';
import is_float from './is_float.mjs';
import is_int from './is_int.mjs';
import is_string from './is_string.mjs';

/**
 * Возвращает значение переменной в виде числа с плавающей точкой
 *
 * @param {any} value
 *
 * Может быть любого типа.
 * Типы отличные от `Number` и `String` приводятся
 * к логическому значению, а затем к числу.
 *
 * @returns {Number}
 *
 * Значение заданной переменной в виде числа с плавающей точкой.
 */
export default function floatval(value) {
    if (!is_int(value) && !is_float(value) && !is_string(value)) {
        return Number(boolval(value));
    }

    const result = parseFloat(value);

    return Number.isNaN(result) ? 0 : result;
}
