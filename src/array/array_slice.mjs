import { TypePHPJSError } from '../exceptions.mjs';
import { is_array, is_bool, is_int, is_null } from '../variables.mjs';
import array_combine from './array_combine.mjs';
import array_reindex from './array_reindex.mjs';
import count from './count.mjs';

/**
 * Выбирает срез массива
 *
 * `array_slice()` возвращает последовательность элементов массива `array`,
 * определённую параметрами `offset` и `length`.
 *
 * @param {Array|Object} array Входной массив.
 * @param {Number} offset Если параметр `offset` неотрицательный,
 * последовательность начнётся на указанном расстоянии от начала `array`.
 *
 * Если `offset` отрицательный, последовательность начнётся с конца `array`.
 *
 * Замечание:
 *
 * Обратите внимание, что параметр `offset` обозначает положение в массиве, а не ключ.
 *
 * @param {Number|null} length `[null]` Если в эту функцию передан положительный параметр `length`,
 * последовательность будет включать количество элементов меньшее или равное `length`.
 *
 * Если количество элементов массива меньше чем параметр `length`,
 * то только доступные элементы массива будут присутствовать.
 *
 * Если в эту функцию передан отрицательный параметр `length`,
 * последовательность остановится на указанном расстоянии от конца массива.
 *
 * Если он опущен, последовательность будет содержать все элементы с `offset` до конца массива `array`.
 *
 * @param {boolean} preserve_keys `[false]`
 *
 * Замечание:
 *
 * Обратите внимание, что по умолчанию `array_slice()` сбрасывает ключи массива.
 * Вы можете переопределить это поведение, установив параметр `preserve_keys` в `true`.
 * Строковые ключи сохраняются, независимо от значения этого параметра.
 *
 * @returns {Array|Object} Возвращает срез. Если смещение больше длины массива, то будет возвращён пустой массив.
 * @throws {TypePHPJSError}
 */
export default function array_slice(array, offset, length = null, preserve_keys = false) {
    if (!is_array(array)) {
        throw new TypePHPJSError('The "array" parameter must be an array.');
    }

    if (!is_int(offset)) {
        throw new TypePHPJSError('The "offset" parameter must be an integer.');
    }

    if (!is_int(length) && !is_null(length)) {
        throw new TypePHPJSError('The "offset" parameter must be an integer.');
    }

    if (!is_bool(preserve_keys)) {
        throw new TypePHPJSError('The "preserve_keys" parameter must be a boolean.');
    }

    let end;

    if (!is_null(length)) {
        if (length === 0) {
            return array instanceof Array ? [] : {};
        }

        end = length > 0 ? offset + length : count(array) + length;
    }

    if (array instanceof Array && !preserve_keys) {
        return Object.values(array).slice(offset, end);
    }

    const result = array_combine(
        Object.keys(array).slice(offset, end),
        Object.values(array).slice(offset, end),
    );

    if (!preserve_keys) {
        return array_reindex(result);
    }

    return result;
}
