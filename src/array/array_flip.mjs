import { TypePHPJSError } from '../exceptions.mjs';
import { is_array } from '../variables.mjs';
import array_combine from './array_combine.mjs';
import array_keys from './array_keys.mjs';
import array_values from './array_values.mjs';

/**
 * Меняет местами ключи с их значениями в массиве
 *
 * Функция `array_flip()` возвращает массив `(array)` наоборот, то есть ключи массива `array` становятся значениями,
 * а значения массива `array` становятся ключами.
 *
 * Если значение встречается несколько раз, для обработки будет использоваться последний встреченный ключ,
 * а все остальные будут потеряны.
 *
 * @param {Array|Object} array Массив переворачиваемых пар ключ/значение.
 * @returns {Object} Возвращает перевёрнутый массив.
 * @throws {TypePHPJSError}
 */
export default function array_flip(array) {
    if (!is_array(array)) {
        throw new TypePHPJSError('The "array" parameter must be an array.');
    }

    return array_combine(array_values(array), array_keys(array));
}
