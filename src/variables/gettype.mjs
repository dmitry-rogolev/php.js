import is_array from './is_array.mjs';
import is_class from './is_class.mjs';
import is_float from './is_float.mjs';
import is_int from './is_int.mjs';
import is_null from './is_null.mjs';
import is_object from './is_object.mjs';

/**
 * Возвращает тип переменной
 *
 * Возвращает тип переменной `value`.
 * Для проверки типа переменной используйте функции `is_*`.
 *
 * @param {any} value Проверяемая переменная.
 * @returns {String}
 *
 * Возможными значениями возвращаемой строки являются:
 *
 * - undefined
 * - NULL
 * - NaN
 * - boolean
 * - integer
 * - double
 * - string
 * - array
 * - class
 * - object
 * - function
 */
export default function gettype(value) {
    if (is_null(value)) {
        return 'NULL';
    }

    if (Number.isNaN(value)) {
        return 'NaN';
    }

    if (is_int(value)) {
        return 'integer';
    }

    if (is_float(value)) {
        return 'double';
    }

    if (is_class(value)) {
        return 'class';
    }

    if (is_array(value)) {
        return 'array';
    }

    if (is_object(value)) {
        return 'object';
    }

    return typeof value;
}
