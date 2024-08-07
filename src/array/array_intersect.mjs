import { strval } from '../variables.mjs';
import array_uintersect from './array_uintersect.mjs';

/**
 * Вычисляет пересечение массивов
 *
 * Функция `array_intersect()` возвращает массив, содержащий все значения массива `original_array`,
 * которые содержатся во всех аргументах. Обратите внимание, что ключи сохраняются.
 *
 * @param {Array|Object} original_array Исходный массив
 * @param {Array|Object} arrays Массивы для сравнения
 * @returns {Object}  Возвращает массив, содержащий все значения параметра `original_array`,
 * которые существуют во всех переданных аргументах.
 * @throws {TypePHPJSError}
 */
export default function array_intersect(original_array, ...arrays) {
    return array_uintersect((a, b) => strval(a) === strval(b), original_array, ...arrays);
}
