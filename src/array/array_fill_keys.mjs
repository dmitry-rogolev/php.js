import { TypePHPJSError } from '../exceptions.mjs';
import { is_array } from '../variables.mjs';
import array_combine from './array_combine.mjs';
import array_fill from './array_fill.mjs';
import count from './count.mjs';

/**
 * Создаёт массив и заполняет его значениями с определёнными ключами
 *
 * Создаёт и заполняет массив значением параметра `value`, используя значения массива `keys` в качестве ключей.
 *
 * @param {Array|Object} keys Массив значений, которые будут использованы в качестве ключей.
 * Некорректные ключи массива будут преобразованы в строку `(string)`.
 * @param {any} value Заполняемое значение
 * @returns {Array|Object} Возвращает заполненный массив
 * @throws {TypePHPJSError}
 */
export default function array_fill_keys(keys, value) {
    if (!is_array(keys)) {
        throw new TypePHPJSError('The "keys" parameter must be an array.');
    }

    const values = array_fill(0, count(keys), value);

    return array_combine(keys, values);
}
