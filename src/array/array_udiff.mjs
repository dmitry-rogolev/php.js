import array_udiff_uassoc from './array_udiff_uassoc.mjs';

/**
 * Вычисляет расхождение массивов, используя для сравнения callback-функцию
 *
 * Вычисляет расхождение массивов, используя для сравнения данных callback-функцию.
 * Поведение этой функции отличается от поведения функции array_diff(),
 * которая сравнивает данные через внутреннюю функцию.
 *
 * @param {Function} value_compare_func (a, b) => bool Функция сравнения значений.
 * @param {Array|Object} original_array Первый массив.
 * @param  {...Array|Object} arrays Массивы для сравнения.
 * @returns {Array|Object} Возвращает массив (array), содержащий элементы аргумента original_array,
 * которых нет ни в одном другом аргументе.
 * @throws {TypePHPJSError}
 */
export default function array_udiff(value_compare_func, original_array, ...arrays) {
    return array_udiff_uassoc(value_compare_func, () => true, original_array, ...arrays);
}
