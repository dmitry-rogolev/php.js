import { TypePHPJSError } from '../exceptions.mjs';
import { is_array, is_callable } from '../variables.mjs';

/**
 * Рекурсивно применяет пользовательскую функцию к каждому элементу массива
 *
 * Применяет пользовательскую функцию `callback` к каждому элементу массива `array`.
 * Функция обрабатывает каждый элемент многомерного массива.
 *
 * @param {Array|Object} array Входной массив.
 * @param {Function} callback `(value, key) => void`
 * @param {any} arg `[null]` Если указан необязательный параметр `arg`,
 * то он будет передан третьим параметром функции `callback`.
 * @returns {boolean} Возвращает `true`.
 * @throws {TypePHPJSError}
 */
export default function array_walk_recursive(array, callback, arg = null) {
    if (!is_array(array)) {
        throw new TypePHPJSError('The "array" parameter must be an array.');
    }

    if (!is_callable(callback)) {
        throw new TypePHPJSError('The "callback" parameter must be a function.');
    }

    for (const key in array) {
        const value = array[key];

        if (is_array(value)) {
            array_walk_recursive(value, callback, arg);
        } else {
            callback(value, key, arg);
        }
    }

    return true;
}
