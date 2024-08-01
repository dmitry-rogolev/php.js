import { TypePHPJSError } from '../exceptions.mjs';
import { empty, is_array } from '../variables.mjs';
import array_key_last from './array_key_last.mjs';

/**
 * Извлекает последний элемент массива
 *
 * `array_pop()` извлекает и возвращает значение последнего элемента массива `array`,
 * уменьшая размер `array` на один элемент.
 *
 * @param {Array|Object} array Массив, из которого берётся значение.
 * @returns {any} Возвращает значение последнего элемента массива `array`. Если `array` пуст, будет возвращён `null`.
 * @throws {TypePHPJSError}
 */
export default function array_pop(array) {
    if (!is_array(array)) {
        throw new TypePHPJSError('The "array" parameter must be an array.');
    }

    if (empty(array)) {
        return null;
    }

    if (array instanceof Array) {
        return array.pop();
    }

    const last_key = array_key_last(array);
    const result = array[last_key];
    delete array[last_key];

    return result;
}
