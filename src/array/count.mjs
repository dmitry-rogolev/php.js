import { TypePHPJSError, ValuePHPJSError } from '../exceptions.mjs';
import { Countable } from '../spl/contracts.mjs';
import { is_array, is_int } from '../variables.mjs';
import array_reduce from './array_reduce.mjs';
import array_values from './array_values.mjs';
import { COUNT_NORMAL, COUNT_RECURSIVE } from './constants.mjs';

/**
 * Подсчитывает элементы в массиве или в объекте `Countable`
 *
 * Подсчитывает элементы в массиве, если передан массив.
 * Если передан объект, который реализует интерфейс `Countable`,
 * функция возвращает значение, которое вернул метод `Countable.count()`.
 *
 * @param {Array|Object|Countable} value Массив или объект, который реализует интерфейс `Countable`.
 * @param {number} mode Если для необязательного параметра mode установлено значение `COUNT_RECURSIVE`,
 * функция `count()` будет рекурсивно подсчитывать элементы массива.
 * Это в частности полезно для подсчёта элементов многомерных массивов.
 *
 * Возможные значения:
 *
 * - `COUNT_NORMAL`
 * - `COUNT_RECURSIVE`
 *
 * @returns {Number} Возвращает количество элементов в параметре `value`.
 * @throws {TypePHPJSError|ValuePHPJSError}
 */
export default function count(value, mode = COUNT_NORMAL) {
    if (!is_array(value) && !(value instanceof Countable)) {
        throw new TypePHPJSError('The "value" parameter must be an array or an object.');
    }

    if (!is_int(mode)) {
        throw new TypePHPJSError('The "mode" parameter must be a integer.');
    }

    if (mode !== COUNT_NORMAL && mode !== COUNT_RECURSIVE) {
        throw new ValuePHPJSError(
            'The "mode" parameter must be one of the following constants: COUNT_NORMAL, COUNT_RECURSIVE.',
        );
    }

    if (value instanceof Countable) {
        return value.count();
    }

    if (mode === COUNT_NORMAL) {
        return array_values(value).length;
    }

    return array_reduce(value, (carry, item) => (carry += is_array(item) ? count(item) + 1 : 1), 0);
}
