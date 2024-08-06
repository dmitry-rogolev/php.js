import { TypePHPJSError } from '../exceptions.mjs';
import { is_array } from '../variables.mjs';
import array_splice from './array_splice.mjs';
import count from './count.mjs';

/**
 * Добавляет один или несколько элементов в начало массива
 *
 * `array_unshift()` добавляет переданные в качестве аргументов элементы в начало массива `array`.
 * Обратите внимание, что список элементов добавляется целиком, то есть порядок элементов сохраняется.
 * Все числовые ключи будут изменены таким образом, что нумерация массива будет начинаться с нуля,
 * в то время как строковые ключи останутся прежними.
 *
 * @param {Array|Object} array Входной массив.
 * @param {...any} values Значения для добавления.
 * @returns {Number} Возвращает новое количество элементов в array.
 * @throws {TypePHPJSError}
 */
export default function array_unshift(array, ...values) {
    if (!is_array(array)) {
        throw new TypePHPJSError('The "array" parameter must be an array.');
    }

    array_splice(array, 0, 0, values);

    return count(array);
}
