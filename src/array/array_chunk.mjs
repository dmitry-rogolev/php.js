import { TypePHPJSError, ValuePHPJSError } from '../exceptions.mjs';
import { is_array, is_bool, is_int } from '../variables.mjs';
import array_combine from './array_combine.mjs';
import array_keys from './array_keys.mjs';
import array_values from './array_values.mjs';

/**
 * Разбивает массив на части
 *
 * Разбивает массив на массивы с заданным в параметре `length` количеством элементов.
 * Количество элементов в последней части будет равняться или окажется меньше заданной длины (`length`).
 *
 * @param {Array|Object} array Массив, который нужно разбить.
 * @param {Number} length Размер каждой части.
 * @param {Boolean} preserve_keys Если установлено значение `true`, ключи оригинального массива будут сохранены.
 * По умолчанию — `false`, что переиндексирует части числовыми ключами.
 * @returns {Array} Возвращает многомерный индексный массив (индексация начинается с нуля),
 * в котором каждый элемент первого уровня содержит `length` элементов.
 * @throws {TypePHPJSError|ValuePHPJSError}
 */
export default function array_chunk(array, length, preserve_keys = false) {
    if (!is_array(array)) {
        throw new TypePHPJSError('The "array" parameter must be an array.');
    }

    if (!is_int(length)) {
        throw new TypePHPJSError('The "length" parameter must be an integer.');
    }

    if (!is_bool(preserve_keys)) {
        throw new TypePHPJSError('The "preserve_keys" parameter must be a boolean.');
    }

    if (length < 1) {
        throw new ValuePHPJSError('The "length" parameter must be greater than zero.');
    }

    const keys = array_keys(array);
    const values = array_values(array);

    const result = [];

    while (values.length > 0) {
        const segmentKeys = keys.splice(0, length);
        const segmentValues = values.splice(0, length);

        result.push(preserve_keys ? array_combine(segmentKeys, segmentValues) : segmentValues);
    }

    return result;
}
