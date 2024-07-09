import is_array from './is_array.mjs';
import is_null from './is_null.mjs';
import is_object from './is_object.mjs';
import is_undefined from './is_undefined.mjs';

/**
 * Приводит значение переменной к массиву
 *
 * @param {any} value Переменная, значение которой необходимо привести к массиву.
 * @returns {Array|Object} Возвращает приведенное к (`array`) значение переменной `value`.
 */
export default function arrval(value) {
    if (is_null(value) || is_undefined(value)) {
        return [];
    }

    if (is_array(value)) {
        return value;
    }

    if (is_object(value)) {
        return { ...value };
    }

    return [value];
}
