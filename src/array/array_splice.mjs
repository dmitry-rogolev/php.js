import { TypePHPJSError } from '../exceptions.mjs';
import { to_array, empty, is_array, is_int, is_null, is_numeric } from '../variables.mjs';
import array_push from './array_push.mjs';
import array_reindex from './array_reindex.mjs';
import array_values from './array_values.mjs';
import count from './count.mjs';

/**
 * Удаляет часть массива и заменяет её чем-нибудь ещё
 *
 * Удаляет `length` элементов, расположенных на расстоянии `offset` из массива array,
 * и заменяет их элементами массива `replacement`, если он передан в качестве параметра.
 *
 * > **Замечание:**
 * >
 * > Обратите внимание, что числовые ключи в массиве array не сохраняются.
 *
 * > **Замечание:**
 * >
 * > Если параметр `replacement` не является массивом, он будет преобразован к нему.
 *
 * @param {Array|Object} array Входной массив.
 * @param {Number} offset Если параметр `offset` положительный, будут удалены элементы,
 * находящиеся на расстоянии `offset` от начала `array`.
 *
 * Если `offset` отрицательный, будут удалены элементы,
 * находящиеся на расстоянии `offset` от конца `array`.
 * @param {Number|null} length `[null]` Если параметр `length` опущен, будут удалены все элементы
 * начиная с позиции `offset` и до конца массива.
 *
 * Если `length` указан и он положителен, то будет удалено именно столько элементов.
 *
 * Если параметр `length` отрицателен, то конец удаляемой части элементов
 * будет отстоять на это количество от конца массива.
 *
 * Если `length` задан как `0`, ничего удалено не будет.
 * @param {any} replacement `[]`
 *
 * Если передан массив `replacement` в качестве аргумента,
 * тогда удалённые элементы будут заменены элементами этого массива.
 *
 * Если параметры `offset` и `length` таковы, что из исходного массива не будет ничего удалено,
 * тогда элементы массива `replacement` будут вставлены на позицию `offset`.
 *
 * > **Замечание:**
 * >
 * > Обратите внимание, что ключи массива `replacement` не сохраняются.
 *
 * @returns {Array|Object} Возвращает массив, содержащий удалённые элементы.
 * @throws {TypePHPJSError}
 */
export default function array_splice(array, offset, length = null, replacement = []) {
    if (!is_array(array)) {
        throw new TypePHPJSError('The "array" parameter must be an array.');
    }

    if (!is_int(offset)) {
        throw new TypePHPJSError('The "offset" parameter must be an integer.');
    }

    if (!is_int(length) && !is_null(length)) {
        throw new TypePHPJSError('The "offset" parameter must be an integer.');
    }

    replacement = is_array(replacement) ? array_values(replacement) : to_array(replacement);

    if (empty(replacement) && !is_null(length) && length === 0) {
        return array instanceof Array ? [] : {};
    }

    if (offset < 0) {
        offset = count(array) + offset;
    }

    if (array instanceof Array) {
        if (is_null(length)) {
            length = count(array);
        } else if (length < 0) {
            length = count(array) + length - offset;
        }

        return array.splice(offset, length, ...replacement);
    }

    let end = count(array);

    if (!is_null(length)) {
        if (length > 0) {
            end = offset + length;
        } else if (length < 0) {
            end = count(array) + length;
        } else {
            end = offset;
        }
    }

    // Удаленные пары ключ-значение исходного массива.
    const result = {};

    // Временный массив.
    // Нужен для того, чтобы элементы исходного массива имели ожидаемые позиции.
    const tmp = {};

    // Текущая позиция в исходном массиве.
    let index = 0;

    //
    // Исходный массив рассматривается как список пар ключ-значение,
    // где ключами являются не индексы, а позиция пары в массиве.
    //
    // Например, список будет иметь вид:
    //
    //  0  1  2 - это не индексы, а позиция в массиве.
    // [1, 2, 3]
    //
    // или
    //
    // -3 -2 -1 - позиция в массиве c обратной стороны.
    // [1, 2, 3]
    //
    // Ассоциативный массив:
    //
    //      0            1           2       -  позиция в массиве.
    // { foo: 'bar', baz: 'bax', ban: 'bam' }
    //
    for (const key in array) {
        const value = array[key];

        // Если текущая позиция совпадает с начальной позицией для удаления
        // и если переданы элементы для вставки, добавляем их в конец временного массива.
        if (index === offset && !empty(replacement)) {
            array_push(tmp, ...replacement);
        }

        // Если текущая позиция входит в диапазон элементов для удаления,
        // записывает пару ключ-значение в результирующий массив.
        // Иначе записываем пару ключ-значение во временный массив.
        if (index >= offset && index < end) {
            result[key] = value;
        } else {
            is_numeric(key) ? array_push(tmp, value) : (tmp[key] = value);
        }

        index++;
    }

    // Очищаем исходный массив.
    for (const key in array) {
        delete array[key];
    }

    // Копируем все свойства из временного массива в исходный.
    for (const key in tmp) {
        const value = tmp[key];

        array[key] = value;
    }

    array_reindex(array);

    return array_reindex(result);
}
