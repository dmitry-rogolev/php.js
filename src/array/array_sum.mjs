import { TypePHPJSError } from '../exceptions.mjs';
import { to_float, is_array } from '../variables.mjs';
import array_reduce from './array_reduce.mjs';

/**
 * Вычисляет сумму значений массива
 *
 * Функция `array_sum()` возвращает сумму значений массива.
 *
 * @param {Array|Object} array Входной массив.
 * @returns {Number} Возвращает сумму значений в виде целого числа или числа с плавающей точкой; `0`, если массив `(array)` пуст.
 * @throws {TypePHPJSError}
 */
export default function array_sum(array) {
    if (!is_array(array)) {
        throw new TypePHPJSError('The "array" parameter must be an array.');
    }

    return array_reduce(array, (carry, item) => (carry += to_float(item)), 0);
}
