import { TypePHPJSError } from '../exceptions.mjs';
import { empty, is_array, is_int } from '../variables.mjs';
import array_fill from './array_fill.mjs';
import array_merge from './array_merge.mjs';
import count from './count.mjs';

/**
 * Дополняет массив значением до заданной длины
 *
 * Функция `array_pad()` возвращает копию массива `array`, который дополняет элементами со значением `value`
 * до заданного в параметре `length` размера.
 * Если параметр `length` положителен, то функция дополняет массив справа, если отрицателен — слева.
 * Если абсолютное значение параметра `length` меньше или равно размеру массива `array`, функция не дополняет массив.
 *
 * @param {Array|Object} array Исходный массив, который функция дополнит значениями.
 * @param {Number} length Новый размер массива.
 * @param {any} value Значение для дополнения, если длина массива `array` меньше значения параметра `length`.
 * @returns {Array|Object} Функция возвращает копию массива `array`, который дополняет
 * до заданного в параметре `length` размера значением `value`.
 * Если параметр `length` положителен, то функция дополняет массив справа, если отрицателен — слева.
 * Если абсолютное значение параметра `length` меньше или равно размеру массива `array`,
 * функция не выполняет операций.
 * @throws {TypePHPJSError}
 */
export default function array_pad(array, length, value) {
    if (!is_array(array)) {
        throw new TypePHPJSError('The "array" parameter must be an array.');
    }

    if (!is_int(length)) {
        throw new TypePHPJSError('The "length" parameter must be an integer.');
    }

    if (empty(array) || count(array) >= Math.abs(length)) {
        return array;
    }

    const pad = array_fill(0, Math.abs(length) - count(array), value);

    return length > 0 ? array_merge(array, pad) : array_merge(pad, array);
}
