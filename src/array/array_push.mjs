import { TypePHPJSError } from '../exceptions.mjs';
import { is_array, is_null } from '../variables.mjs';
import array_index_max from './array_index_max.mjs';
import count from './count.mjs';

/**
 * Добавляет один или несколько элементов в конец массива
 *
 * `array_push()` использует array как стек и добавляет переданные значения в конец массива array.
 * Длина array увеличивается на количество переданных значений.
 *
 * @param {Array|Object} array Входной массив.
 * @param  {...any} values Значения, добавляемые в конец массива array.
 * @returns {Number} Возвращает новое количество элементов в массиве.
 * @throws {TypePHPJSError}
 */
export default function array_push(array, ...values) {
    if (!is_array(array)) {
        throw new TypePHPJSError('The "array" parameter must be an array.');
    }

    if (array instanceof Array) {
        return array.push(...values);
    }

    let index = array_index_max(array);
    index = is_null(index) ? 0 : index + 1;

    for (const value of values) {
        array[index] = value;
        index++;
    }

    return count(array);
}
