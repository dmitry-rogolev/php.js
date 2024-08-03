import { TypePHPJSError } from '../exceptions.mjs';
import { is_array } from '../variables.mjs';

/**
 * Извлекает первый элемент массива
 *
 * array_shift() извлекает первое значение массива array и возвращает его,
 * сокращая размер array на один элемент.
 * Все числовые ключи будут изменены таким образом, что нумерация массива начнётся с нуля,
 * в то время как строковые ключи останутся прежними.
 *
 * @param {Array|Object} array Входной массив.
 * @returns {any} Возвращает извлекаемое значение или null, если array пуст.
 * @throws {TypePHPJSError}
 */
export default function array_shift(array) {
    if (!is_array(array)) {
        throw new TypePHPJSError('The "array" parameter must be an array.');
    }

    if (array instanceof Array) {
        return array.shift() ?? null;
    }

    for (const key in array) {
        const value = array[key];

        delete array[key];

        return value;
    }

    return null;
}
