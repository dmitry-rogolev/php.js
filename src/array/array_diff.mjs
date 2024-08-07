import { strval } from '../variables.mjs';
import array_udiff from './array_udiff.mjs';

/**
 * Вычисляет расхождение массивов
 *
 * Сравнивает массив, переданный в параметр `original_array`, с одним или несколькими другими массивами
 * и возвращает значения из массива `original_array`, которые отсутствуют во всех других массивах.
 *
 * @param {Array|Object} original_array Исходный массив
 * @param {Array|Object} arrays Массивы для сравнения
 * @returns {Object}  Возвращает массив `(array)`, содержащий те элементы массива `original_array`,
 * которых нет в любом другом массиве. Ключи в массиве `array` сохраняются.
 * @throws {TypePHPJSError}
 */
export default function array_diff(original_array, ...arrays) {
    return array_udiff((a, b) => strval(a) === strval(b), original_array, ...arrays);
}
