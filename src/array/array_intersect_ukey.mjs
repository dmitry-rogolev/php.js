import array_uintersect_uassoc from './array_uintersect_uassoc.mjs';

/**
 * Вычисляет пересечение массивов, используя callback-функцию для сравнения ключей
 *
 * Функция `array_intersect_ukey()` возвращает массив, состоящий из значений массива `original_array`,
 * ключи которых содержатся во всех аргументах.
 *
 * @param {Function} key_compare_func `(a, b) => bool` Функция сравнения должна возвращать `true`,
 * если ключи совпадают, и `false`, если не совпадают.
 * @param {Array|Object} original_array Исходный массив
 * @param {Array|Object} arrays Массивы для сравнения
 * @returns {Object} Возвращает ассоциативный массив, состоящий из значений массива `original_array`, ключи которых содержатся во всех аргументах.
 * @throws {TypeError}
 */
export default function array_intersect_ukey(key_compare_func, original_array, ...arrays) {
    return array_uintersect_uassoc(() => true, key_compare_func, original_array, ...arrays);
}
