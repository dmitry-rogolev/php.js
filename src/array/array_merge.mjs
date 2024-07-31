import { TypePHPJSError } from '../exceptions.mjs';
import { empty, is_array, is_numeric } from '../variables.mjs';
import array_is_list from './array_is_list.mjs';
import array_values from './array_values.mjs';

/**
 * Сливает один или несколько массивов
 *
 * Функция сливает элементы одного или нескольких массивов так,
 * что значения одного добавляются в конец предыдущего.
 * Функция возвращает результирующий массив.
 *
 * Если входные массивы содержат одинаковые строковые ключи,
 * то каждое следующее значение ключа перезапишет предыдущее.
 * Однако, если массивы содержат одинаковые числовые ключи,
 * следующее значение не перезапишет исходное, а будет добавлено в конец массива.
 *
 * Функция перенумерует в результирующем массиве значения входных массивов
 * с числовыми ключами возрастающими ключами, начиная с нуля.
 *
 * @param {Array|Object} arrays Список массивов для слияния.
 * @returns {Array|Object} Функция возвращает результирующий массив. Без аргументов функция возвращает пустой массив `(array)`.
 * @throws {TypePHPJSError}
 */
export default function array_merge(...arrays) {
    if (!arrays.every(array => is_array(array))) {
        throw new TypePHPJSError('The "arrays" parameter must be an array.');
    }

    if (empty(arrays)) {
        return [];
    }

    const result = {};
    let index = 0;

    for (const array of arrays) {
        for (const key in array) {
            const value = array[key];

            if (is_numeric(key)) {
                result[index] = value;
                index++;
            } else {
                result[key] = value;
            }
        }
    }

    return array_is_list(result) ? array_values(result) : result;
}
