import { TypePHPJSError } from '../exceptions.mjs';
import { to_float, is_array } from '../variables.mjs';
import array_reduce from './array_reduce.mjs';

/**
 * Вычисляет произведение значений массива
 *
 * Функция `array_product()` возвращает произведение значений массива.
 *
 * @param {Array|Object} array Массив.
 * @returns {Number} Возвращает произведение в виде целого числа или числа с плавающей точкой.
 * @throws {TypePHPJSError}
 */
export default function array_product(array) {
    if (!is_array(array)) {
        throw new TypePHPJSError('The "array" parameter must be an array.');
    }

    return array_reduce(array, (carry, item) => (carry *= isNaN(item) ? 1 : to_float(item)), 1);
}
