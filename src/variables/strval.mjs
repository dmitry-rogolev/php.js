import is_array from './is_array.mjs';
import is_bool from './is_bool.mjs';
import is_callable from './is_callable.mjs';
import is_class from './is_class.mjs';
import is_null from './is_null.mjs';
import is_object from './is_object.mjs';
import is_symbol from './is_symbol.mjs';
import is_undefined from './is_undefined.mjs';

/**
 * Возвращает строковое значение переменной
 *
 * @param {any} value Переменная, которую необходимо преобразовать в строку.
 * @returns {String} Строковое значение (`string`) параметра `value`.
 */
export default function strval(value) {
    if (is_callable(value)) {
        throw new TypeError('Function could not be converted to string.');
    }

    if (is_class(value)) {
        throw new TypeError('Class could not be converted to string.');
    }

    if (is_symbol(value)) {
        throw new TypeError('Symbol could not be converted to string.');
    }

    if (is_null(value) || is_undefined(value)) {
        return '';
    }

    if (is_bool(value)) {
        return value ? '1' : '';
    }

    if (is_array(value)) {
        return 'Array';
    }

    if (is_object(value)) {
        return `[object ${value?.constructor?.name ?? 'Object'}]`;
    }

    return String(value);
}
