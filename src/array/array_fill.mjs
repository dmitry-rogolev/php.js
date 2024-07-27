import { TypePHPJSError, ValuePHPJSError } from '../exceptions.mjs';
import { is_int } from '../variables.mjs';

/**
 * Заполняет массив значениями
 *
 * Заполняет массив заданным в параметре `count` количеством записей значения `value`, начиная индексацию с ключа `start_index`
 *
 * @param {Number} start_index Первый индекс возвращаемого массива.
 * @param {Number} count Количество добавляемых элементов.
 * @param {any} value Значение для заполнения.
 * @returns {Object} Возвращает заполненный массив.
 * @throws {TypePHPJSError|ValuePHPJSError}
 */
export default function array_fill(start_index, count, value) {
    if (!is_int(start_index)) {
        throw new TypePHPJSError('The "start_index" parameter must be an integer.');
    }

    if (!is_int(count)) {
        throw new TypePHPJSError('The "count" parameter must be an integer.');
    }

    if (count < 0) {
        throw new ValuePHPJSError('The "count" parameter must be equal to or greater than zero.');
    }

    const result = start_index === 0 ? [] : {};

    for (let index = start_index; index < start_index + count; index++) {
        result[index] = value;
    }

    return result;
}
