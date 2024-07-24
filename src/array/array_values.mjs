import { TypePHPJSError } from '../exceptions.mjs';
import { is_array } from '../variables.mjs';

/**
 * Возвращает все значения массива
 *
 * Функция array_values() возвращает индексный массив со всеми значениями массива array.
 *
 * @param {Array|Object} array Массив.
 * @returns {Array} Возвращает индексный массив значений.
 * @throws {TypePHPJSError}
 */
export default function array_values(array) {
    if (!is_array(array)) {
        throw new TypePHPJSError('The "array" parameter must be an array.');
    }

    return Object.values(array);
}
