import { TypePHPJSError } from '../exceptions.mjs';
import { is_array, is_bool } from '../variables.mjs';
import array_combine from './array_combine.mjs';
import array_is_list from './array_is_list.mjs';

/**
 * Возвращает массив с элементами в обратном порядке
 *
 * Принимает массив `array` и возвращает новый массив, содержащий элементы исходного массива в обратном порядке.
 *
 * @param {Array|Object} array Входной массив.
 * @param {boolean} preserve_keys [false] Если установлено в `true`, то числовые ключи будут сохранены.
 * Нечисловые ключи не подвержены этой опции и всегда сохраняются.
 * @returns {Array|Object} Возвращает массив с элементами в обратном порядке.
 * @throws {TypePHPJSError}
 */
export default function array_reverse(array, preserve_keys = false) {
    if (!is_array(array)) {
        throw new TypePHPJSError('The "array" parameter must be an array.');
    }

    if (!is_bool(preserve_keys)) {
        throw new TypePHPJSError('The "preserve_keys" parameter must be a boolean.');
    }

    const keys = Object.keys(array).reverse();
    const values = Object.values(array).reverse();

    return preserve_keys || !array_is_list(array) ? array_combine(keys, values) : values;
}
