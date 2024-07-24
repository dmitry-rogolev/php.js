import { TypePHPJSError } from '../exceptions.mjs';
import { is_array, is_int, is_null, is_string } from '../variables.mjs';
import array_values from './array_values.mjs';

/**
 * Возвращает массив из значений одного столбца входного массива
 *
 * Функция `array_column()` возвращает значения одного столбца массива (`array`),
 * обозначенного ключом `column_key`.
 *
 * Чтобы проиндексировать значения возвращаемого массива значениями столбца `index_key` входного массива,
 * задают необязательный параметр `index_key`.
 *
 * @param {Array|Object} array Многомерный массив или массив объектов, из которого будет извлекаться столбец значений.
 * @param {Number|String|null} column_key Ключ столбца, значения которого нужно вернуть.
 *
 * Разрешено передавать как целочисленный ключ столбца, так и строковое название ключа ассоциативного массива
 * или свойства объекта, значения которого нужно получить.
 * В параметр также разрешено передавать значение `null` для возврата полных массивов или объектов
 * (это будет полезно при одновременной передаче параметра `index_key`, чтобы переиндексировать массив).
 *
 * @param {Number|String|null} index_key Столбец, значения которого будут ключами или индексами возвращаемого массива.
 *
 * Разрешено указывать как целочисленный ключ столбца, так и строковое название ключа.
 *
 * @returns {Array|Object} Возвращает массив из значений одного столбца или свойства объекта входного массива.
 * @throws {TypePHPJSError}
 */
export default function array_column(array, column_key = null, index_key = null) {
    if (!is_array(array)) {
        throw new TypePHPJSError('The "array" parameter must be an array.');
    }

    if (!is_null(column_key) && !is_string(column_key) && !is_int(column_key)) {
        throw new TypePHPJSError('The "column_key" parameter must be an integer or string key.');
    }

    if (!is_null(index_key) && !is_string(index_key) && !is_int(index_key)) {
        throw new TypePHPJSError('The "index_key" parameter must be an integer or string key.');
    }

    if (is_null(column_key) && is_null(index_key)) {
        return array;
    }

    // Если не передано имя для получения ключей, возвращаем список значений.
    if (is_null(index_key)) {
        return array_values(array).map(model => model[column_key]);
    }

    // Иначе возвращаем ассоциативный массив вида {index_key: column_key}
    const result = {};

    for (const model of array) {
        result[model[index_key]] = is_null(column_key) ? model : model[column_key];
    }

    return result;
}
