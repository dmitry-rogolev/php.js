import { TypePHPJSError, ValuePHPJSError } from '../exceptions.mjs';
import { is_array } from '../variables.mjs';
import array_values from './array_values.mjs';

/**
 * Создаёт новый массив, используя один массив в качестве ключей, а другой для его значений
 *
 * Создаёт массив `(array)`, используя значения массива `keys` в качестве ключей
 * и значения массива `values` в качестве соответствующих значений.
 *
 * @param {Array|Object} keys Массив ключей. Некорректные значения для ключей будут преобразованы в строку `(string)`.
 * @param {Array|Object} values Массив значений
 * @returns {Object} Возвращает скомбинированный массив `(array)`.
 * @throws {TypePHPJSError|ValuePHPJSError}
 */
export default function array_combine(keys, values) {
    if (!is_array(keys)) {
        throw new TypePHPJSError('The "keys" parameter must be an array.');
    }

    if (!is_array(values)) {
        throw new TypePHPJSError('The "values" parameter must be an array.');
    }

    const k = array_values(keys);
    const v = array_values(values);

    if (k.length !== v.length) {
        throw new ValuePHPJSError('The number of elements in "keys" and "values" does not match.');
    }

    const result = {};

    for (let i = 0; i < v.length; i++) {
        result[k[i]] = v[i];
    }

    return result;
}
