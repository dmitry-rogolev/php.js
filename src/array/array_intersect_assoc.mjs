import array_intersect_uassoc from './array_intersect_uassoc.mjs';

/**
 * Вычисляет пересечение массивов с дополнительной проверкой индекса
 *
 * Функция `array_intersect_assoc()` возвращает массив, содержащий все значения массива `original_array`,
 * которые содержатся во всех переданных аргументах.
 * Обратите внимание, что сравниваются ключи, в отличие от функции `array_intersect()`.
 *
 * @param {Array|Object} original_array Основной проверяемый массив.
 * @param {Array|Object} arrays Массивы, с которыми идёт сравнение.
 * @returns {Object} Возвращает ассоциативный массив, содержащий все элементы массива `original_array`,
 * которые существуют во всех переданных аргументах.
 * @throws {TypePHPJSError}
 */
export default function array_intersect_assoc(original_array, ...arrays) {
    return array_intersect_uassoc((a, b) => a === b, original_array, ...arrays);
}
