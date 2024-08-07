import array_intersect_ukey from './array_intersect_ukey.mjs';

/**
 * Вычисляет пересечение массивов, сравнивая ключи
 *
 * Функция `array_intersect_key()` возвращает массив, содержащий все элементы массива `original_array`,
 * имеющие ключи, содержащиеся во всех других параметрах.
 *
 * @param {Array|Object} original_array Исходный массив
 * @param {Array|Object} arrays Массивы для сравнения
 * @returns {Object} Возвращает массив `(array)`, содержащий все элементы `original_array` с ключами,
 * которых нет во всех последующих массивах.
 * @throws {TypePHPJSError}
 */
export default function array_intersect_key(original_array, ...arrays) {
    return array_intersect_ukey((a, b) => a === b, original_array, ...arrays);
}
