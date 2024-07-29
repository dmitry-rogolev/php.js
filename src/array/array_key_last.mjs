import { TypePHPJSError } from '../exceptions.mjs';
import { is_array } from '../variables.mjs';
import array_keys from './array_keys.mjs';

/**
 * Получает последний ключ массива
 *
 * @param {Array|Object} array Массив
 * @returns {String|null} Возвращает последний ключ массива `array`, если он не пустой; `null` в противном случае.
 * @throws {TypePHPJSError}
 */
export default function array_key_last(array) {
    if (!is_array(array)) {
        throw new TypePHPJSError('The "array" parameter must be an array.');
    }

    const keys = array_keys(array);

    return keys[keys.length - 1] ?? null;
}
