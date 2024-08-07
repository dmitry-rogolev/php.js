import { strval } from '../variables.mjs';
import array_udiff_uassoc from './array_udiff_uassoc.mjs';

/**
 * Вычисляет расхождение в массивах с дополнительной проверкой индексов,
 * используя для сравнения значений callback-функцию
 *
 * Вычисляет расхождение массивов с дополнительной проверкой индексов,
 * используя для сравнения значений callback-функцию.
 *
 * @param {Function} value_compare_func `(a, b) => bool` Функция сравнения.
 * @param {Array|Object} original_array Первый массив.
 * @param  {...Array|Object} arrays Массивы для сравнения.
 * @returns {Array|Object} Функция `array_udiff_assoc()` возвращает массив `(array)`,
 * содержащий элементы аргумента `original_array`, которых нет ни в одном другом аргументе.
 * Обратите внимание, что в отличие от функций `array_diff()` и `array_udiff()`
 * при сравнении значений также сравниваются и ключи.
 * Значения массива сравнивает заданная пользователем callback-функция.
 * В этой части поведение функции отличается от поведения функции `array_diff_assoc()`,
 * которая для сравнения работает со встроенной функцией.
 * @throws {TypePHPJSError}
 */
export default function array_udiff_assoc(value_compare_func, original_array, ...arrays) {
    return array_udiff_uassoc(
        value_compare_func,
        (a, b) => strval(a) === strval(b),
        original_array,
        ...arrays,
    );
}
