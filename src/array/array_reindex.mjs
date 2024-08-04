import { TypePHPJSError } from '../exceptions.mjs';
import { is_array, is_numeric } from '../variables.mjs';

/**
 * Переиндексирует переданный массив.
 *
 * @param {Array|Object} array Исходный массив.
 * @returns {Array|Object} Возвращает переиндексированный массив.
 * @throws {TypePHPJSError}
 */
export default function array_reindex(array) {
    if (!is_array(array)) {
        throw new TypePHPJSError('The "array" parameter must be an array.');
    }

    if (array instanceof Array) {
        return array;
    }

    let index = 0;

    for (const key in array) {
        const value = array[key];

        if (is_numeric(key)) {
            delete array[key];
            array[index] = value;
            index++;
        }
    }

    return array;
}
