import { TypePHPJSError } from '../exceptions.mjs';
import { is_array } from '../variables.mjs';
import array_combine from './array_combine.mjs';
import array_rand from './array_rand.mjs';
import array_splice from './array_splice.mjs';
import count from './count.mjs';

/**
 * Перемешивает массив
 *
 * Функция перемешивает элементы массива в случайном порядке.
 *
 * @param {Array|Object} array Массив.
 * @returns {true} Функция всегда возвращает `true`.
 * @throws {TypePHPJSError}
 */
export default function shuffle(array) {
    if (!is_array(array)) {
        throw new TypePHPJSError('The "array" parameter must be an array.');
    }

    const rand_keys = array_rand(array, count(array));
    const rand_values = [];

    for (const key of rand_keys) {
        rand_values.push(array[key]);
    }

    if (array instanceof Array) {
        array.splice(0, array.length, ...rand_values);
    } else {
        array_splice(array, 0, count(array));
        Object.assign(array, array_combine(rand_keys, rand_values));
    }

    return true;
}
