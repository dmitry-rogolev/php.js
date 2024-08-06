import { TypePHPJSError } from '../exceptions.mjs';
import is_array from '../variables/is_array.mjs';
import is_callable from '../variables/is_callable.mjs';

/**
 * Применяет заданную пользователем функцию к каждому элементу массива
 *
 * Применяет пользовательскую функцию `callback` к каждому элементу массива `array`.
 *
 * @param {Array|Object} array Входной массив.
 * @param {Function} callback `(value, key) => void`
 *
 * Потенциально изменены могут быть только значения массива `array`;
 * структура самого массива не может быть изменена, то есть нельзя добавить,
 * удалить или поменять порядок элементов.
 * Если callback-функция не соответствует этому требованию,
 * поведение данной функции станет неопределённым и непредсказуемым.
 *
 * @param {any} arg `[null]` Если указан необязательный параметр `arg`,
 * он будет передан в качестве третьего параметра в callback-функцию `callback`.
 * @returns {boolean} Возвращает `true`
 * @throws {TypePHPJSError}
 */
export default function array_walk(array, callback, arg = null) {
    if (!is_array(array)) {
        throw new TypePHPJSError('The "array" parameter must be an array.');
    }

    if (!is_callable(callback)) {
        throw new TypePHPJSError('The "callback" parameter must be a function.');
    }

    for (const key in array) {
        const value = array[key];

        callback(value, key, arg);
    }

    return true;
}
