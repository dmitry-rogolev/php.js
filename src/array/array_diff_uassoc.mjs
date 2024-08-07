import { strval } from '../variables.mjs';
import array_udiff_uassoc from './array_udiff_uassoc.mjs';

/**
 * Вычисляет расхождение массивов с дополнительной проверкой индекса через пользовательскую callback-функцию
 *
 * Сравнивает значения массива `original_array` cо значениями массивов `arrays` и возвращает разницу.
 * В этой функции, в отличие от функции `array_diff()`, ключи массива также участвуют в сравнении.
 *
 * В отличие от функции `array_diff_assoc()`, в этой функции ключи сравнивает пользовательская callback-функция, а не встроенная.
 *
 * @param {Function} key_compare_func `(a, b) => bool` Функция сравнения должна возвращать `true`,
 * если ключи совпадают, и `false`, если не совпадают.
 * @param {Array|Object} original_array Исходный массив
 * @param {Array|Object} arrays Массивы для сравнения
 * @returns {Object} Возвращает массив `(array)`, содержащий все элементы массива `original_array`,
 * которых нет в других сравниваемых массивах.
 * @throws {TypePHPJSError}
 */
export default function array_diff_uassoc(key_compare_func, original_array, ...arrays) {
    return array_udiff_uassoc(
        (a, b) => strval(a) === strval(b),
        key_compare_func,
        original_array,
        ...arrays,
    );
}
