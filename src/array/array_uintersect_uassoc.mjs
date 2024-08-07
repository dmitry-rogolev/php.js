import { TypePHPJSError } from '../exceptions.mjs';
import { is_array, is_callable } from '../variables.mjs';

/**
 * Вычисляет пересечение массивов с дополнительной проверкой индекса,
 * используя для сравнения индексов и значений отдельные callback-функции
 *
 * Вычисляет пересечение массивов с дополнительной проверкой индекса,
 * используя для сравнения ключей и значений отдельные callback-функции.
 * То есть значения сравниваются одной callback-функцией, а индексы — другой.
 *
 * @param {Function} value_compare_func `(a, b) => bool` Функция сравнения значений.
 * @param {Function} key_compare_func `(a, b) => bool` Функция сравнения ключей.
 * @param {Array|Object} original_array Первый массив.
 * @param  {...Array|Object} arrays Дополнительные массивы.
 * @returns {Object} Возвращает массив `(array)`, содержащий все элементы аргумента `original_array`,
 * которые есть в каждом другом аргументе.
 * @throws {TypePHPJSError}
 */
export default function array_uintersect_uassoc(
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
    for (const original_key in original_array) {
        const original_value = original_array[original_key];

        // Каждую пару ключ-значение из исходного массива мы сравниваем с парами из массивов для сравнения.
        // Если совпадение найдено, записываем ее в результат.
        for (const array of arrays) {
            for (const key in array) {
                const value = array[key];

                if (
                    key_compare_func(original_key, key) &&
                    value_compare_func(original_value, value)
                ) {
                    result[original_key] = original_value;
                }
            }
        }
    }

    return result;
}
