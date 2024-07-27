import { TypePHPJSError } from '../exceptions.mjs';
import { is_array } from '../variables.mjs';

/**
 * Подсчитывает количество вхождений каждого отдельного значения в массиве
 *
 * Функция `array_count_values()` возвращает массив, ключами которого являются значения массива `array`
 * (которые должны быть целыми числами `(int)` или строками `(string)`),
 * а значениями - количество повторений значений `array`.
 *
 * @param {Array|Object} array Массив подсчитываемых значений
 * @returns {Object} Возвращает ассоциативный массив со значениями `array` в качестве ключей и их количества в качестве значений.
 * @throws {TypePHPJSError}
 */
export default function array_count_values(array) {
    if (!is_array(array)) {
        throw new TypePHPJSError('The "array" parameter must be an array.');
    }

    const result = {};

    for (const key in array) {
        const value = String(array[key]);

        value in result ? result[value]++ : (result[value] = 1);
    }

    return result;
}
