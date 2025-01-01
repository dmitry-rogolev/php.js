import { to_string } from '../variables.mjs';
import array_uintersect_uassoc from './array_uintersect_uassoc.mjs';

/**
 * Вычисляет пересечение массивов с дополнительной проверкой индекса, сравнивая индексы через callback-функцию
 *
 * Функция `array_intersect_uassoc()` возвращает массив, состоящий из значений массива `original_array`,
 * которые содержатся во всех переданных аргументах.
 * Обратите внимание, что, в отличие от функции `array_intersect()`, сравниваются ключи.
 *
 * @param {Function} key_compare_func `(a, b) => bool` Функция сравнения.
 * @param {Array|Object} original_array Основной проверяемый массив.
 * @param {Array|Object} arrays Массивы, с которыми идёт сравнение.
 * @returns {Object} Возвращает элементы массива `original_array`, чьи значения содержатся во всех переданных аргументах.
 * @throws {TypePHPJSError}
 */
export default function array_intersect_uassoc(key_compare_func, original_array, ...arrays) {
    return array_uintersect_uassoc(
        (a, b) => to_string(a) === to_string(b),
        key_compare_func,
        original_array,
        ...arrays,
    );
}
