import { TypePHPJSError } from '../exceptions.mjs';
import { is_array, is_bool, is_null } from '../variables.mjs';

/**
 * Возвращает все или некоторое подмножество ключей массива
 *
 * Функция `array_keys()` возвращает числовые и строковые ключи массива `array`.
 *
 * Функция возвращает ключи только заданного значения, если определён параметр `filter_value`.
 * В противном случае функция возвращает все ключи массива `array`.
 *
 * @param {Array|Object} array Массив, который содержит возвращаемые ключи.
 * @param {any} filter_value Если задан, функция вернёт только те ключи, которые содержат это значение.
 * @param {boolean} strict Определяет, будет ли функция при поиске применять строгое сравнение (===).
 * @returns {Array} Возвращает массив со всеми ключами массива array.
 * @throws {TypePHPJSError}
 */
export default function array_keys(array, filter_value = null, strict = false) {
    if (!is_array(array)) {
        throw new TypePHPJSError('The "array" parameter must be an array.');
    }

    if (!is_bool(strict)) {
        throw new TypePHPJSError('The "strict" parameter must be of the "boolean" type.');
    }

    if (is_null(filter_value)) {
        return Object.keys(array);
    }

    const keys = [];
    const compare_func = strict ? value => value === filter_value : value => value == filter_value;

    for (const key in array) {
        const value = array[key];

        if (compare_func(value)) {
            keys.push(key);
        }
    }

    return keys;
}
