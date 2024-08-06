import { COUNT_NORMAL } from './constants.mjs';
import count from './count.mjs';

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
export default function sizeof(value, mode = COUNT_NORMAL) {
    return count(value, mode);
}
