import { TypePHPJSError } from '../exceptions.mjs';
import { is_array } from '../variables.mjs';
import array_keys from './array_keys.mjs';

/**
 * Получает первый ключ массива
 *
 * @param {Array|Object} array Массив
 * @returns {String|null} Возвращает первый ключ массива `array`, если он не пустой; `null` в противном случае.
 * @throws {TypePHPJSError}
 */
export default function array_key_first(array) {
    if (!is_array(array)) {
        throw new TypePHPJSError('The "array" parameter must be an array.');
    }

    return array_keys(array)[0] ?? null;
}
