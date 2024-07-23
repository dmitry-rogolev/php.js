import { TypePHPJSError } from '../exceptions.mjs';
import intval from '../variables/intval.mjs';
import is_array from '../variables/is_array.mjs';
import is_numeric from '../variables/is_numeric.mjs';

/**
 * Проверяет, является ли данный array списком
 *
 * Определяет, является ли данный array списком.
 * Массив (array) считается списком,
 * если его ключи состоят из последовательных чисел от 0 до count($array) - 1.
 *
 * @param {Array|Object} array Массив (array) для проверки.
 * @returns {boolean} Возвращает true, если array является списком, в противном случае возвращает false.
 * @throws {TypePHPJSError}
 */
export default function array_is_list(array) {
    if (!is_array(array)) {
        throw new TypePHPJSError('The "array" parameter must be an array.');
    }

    if (array instanceof Array) {
        return true;
    }

    let index = 0;

    for (const key in array) {
        if (!is_numeric(key) || intval(key) !== index) {
            return false;
        }

        index++;
    }

    return true;
}
