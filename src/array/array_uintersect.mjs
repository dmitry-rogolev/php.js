import array_uintersect_uassoc from './array_uintersect_uassoc.mjs';

/**
 * Вычисляет пересечение массивов, используя для сравнения значений callback-функцию
 *
 * Вычисляет пересечение массивов, используя для сравнения значений callback-функцию.
 *
 * @param {Function} value_compare_func `(a, b) => bool` Функция сравнения значений.
 * @param {Array|Object} original_array Первый массив.
 * @param  {...Array|Object} arrays Массивы для сравнения.
 * @returns {Object} Возвращает массив `(array)`, содержащий элементы аргумента `original_array`,
 * которые есть в каждом другом аргументе.
 * @throws {TypePHPJSError}
 */
export default function array_uintersect(value_compare_func, original_array, ...arrays) {
    return array_uintersect_uassoc(value_compare_func, () => true, original_array, ...arrays);
}
