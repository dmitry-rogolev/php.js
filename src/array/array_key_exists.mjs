import { TypePHPJSError } from '../exceptions.mjs';
import { is_array, is_int, is_string } from '../variables.mjs';

/**
 * Проверяет, существует ли в массиве заданный ключ или индекс
 *
 * Функция `array_key_exists()` возвращает `true`, если заданный ключ `(key)` содержится в массиве.
 * В параметр `key` разрешено передавать значение, которое допустимо в качестве индекса массива.
 *
 * @param {Number|String} key Проверяемое значение.
 * @param {Array|Object} array Массив с проверяемыми ключами.
 * @returns {boolean} Возвращает `true` в случае успешного выполнения или `false` в случае возникновения ошибки.
 * @throws {TypePHPJSError}
 */
export default function array_key_exists(key, array) {
    if (!is_int(key) && !is_string(key)) {
        throw new TypePHPJSError('The "key" parameter must be an integer or a string.');
    }

    if (!is_array(array)) {
        throw new TypePHPJSError('The "array" parameter must be an array.');
    }

    return key in array;
}
