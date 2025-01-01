import { to_string } from '../variables.mjs';
import array_uintersect_uassoc from './array_uintersect_uassoc.mjs';

/**
 * Вычисляет пересечение массивов с дополнительной проверкой индексов,
 * используя для сравнения значений callback-функцию
 *
 * Вычисляет пересечение массивов с дополнительной проверкой индексов,
 * используя для сравнения значений callback-функцию.
 *
 * Обратите внимание, что в отличие от функции `array_uintersect()` также сравниваются и ключи.
 * Значения сравнивает callback-функция.
 *
 * @param {Function} value_compare_func `(a, b) => bool` Функция сравнения значений.
 * @param {Array|Object} original_array Первый массив.
 * @param  {...Array|Object} arrays Массивы для сравнения.
 * @returns {Object} Возвращает массив `(array)`, содержащий элементы аргумента `original_array`,
 * которые есть в каждом другом аргументе.
 * @throws {TypePHPJSError}
 */
export default function array_uintersect_assoc(value_compare_func, original_array, ...arrays) {
    return array_uintersect_uassoc(
        value_compare_func,
        (a, b) => to_string(a) === to_string(b),
        original_array,
        ...arrays,
    );
}
