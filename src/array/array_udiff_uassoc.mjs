import { TypePHPJSError } from '../exceptions.mjs';
import { is_array, is_callable } from '../variables.mjs';

/**
 * Вычисляет расхождение в массивах с дополнительной проверкой индексов,
 * используя для сравнения значений и индексов callback-функцию
 *
 * Вычисляет расхождение в массивах с дополнительной проверкой индексов,
 * используя для сравнения значений и индексов callback-функцию.
 *
 * Обратите внимание, что в отличие от функций `array_diff()` и `array_udiff()`
 * при сравнении значений также сравниваются и ключи.
 *
 * @param {Function} value_compare_func `(a, b) => bool` Функция сравнения значений.
 * @param {Function} key_compare_func `(a, b) => bool` Функция сравнения ключей.
 * @param {Array|Object} original_array Первый массив.
 * @param  {...Array|Object} arrays Массивы для сравнения.
 * @returns {Array|Object} Возвращает массив `(array)`, содержащий элементы аргумента `original_array`,
 * которых нет ни в одном другом аргументе.
 * @throws {TypePHPJSError}
 */
export default function array_udiff_uassoc(
    value_compare_func,
    key_compare_func,
    original_array,
    ...arrays
) {
    if (!is_callable(value_compare_func)) {
        throw new TypePHPJSError('The "value_compare_func" parameter must be a function.');
    }

    if (!is_callable(key_compare_func)) {
        throw new TypePHPJSError('The "key_compare_func" parameter must be a function.');
    }

    if (!is_array(original_array)) {
        throw new TypePHPJSError('The "original_array" parameter must be an array.');
    }

    if (!arrays.every(array => is_array(array))) {
        throw new TypePHPJSError('The "arrays" parameter must be an array.');
    }

    const result = {};

    // Перебираем исходный массив
    original: for (const original_key in original_array) {
        const original_value = original_array[original_key];

        // Каждую пару ключ-значение из исходного массива мы сравниваем с парами из исходных массивов.
        // Если совпадение найдено, переходим к следующей паре ключ-значение из исходного массива.
        for (const array of arrays) {
            for (const key in array) {
                const value = array[key];

                if (
                    key_compare_func(original_key, key) &&
                    value_compare_func(original_value, value)
                ) {
                    continue original;
                }
            }
        }

        // Если совпадений не найдено, записываем пару ключ-значение из исходного массива в расхождение.
        result[original_key] = original_value;
    }

    return result;
}
