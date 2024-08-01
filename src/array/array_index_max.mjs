import { TypePHPJSError } from '../exceptions.mjs';
import { empty, is_array, is_null, is_numeric } from '../variables.mjs';

/**
 * Возвращает наибольший числовой индекс массива.
 *
 * @param {Array|Object} array Массив.
 * @returns {Number|null} Возвращает наибольший числовой индекс массива или `null` при его отсутствии.
 * @throws {TypePHPJSError}
 */
export default function array_index_max(array) {
    if (!is_array(array)) {
        throw new TypePHPJSError('The "array" parameter must be an array.');
    }

    if (empty(array)) {
        return null;
    }

    if (array instanceof Array) {
        return array.length - 1;
    }

    return Object.keys(array).reduce(
        (carry, key) =>
            is_numeric(key) && (carry < Number(key) || is_null(carry)) ? Number(key) : carry,
        null,
    );
}
