import Countable from '../spl/contracts/Countable.mjs';
import is_array from './is_array.mjs';
import is_object from './is_object.mjs';

/**
 * Проверяет, представляет ли собой содержимое переменной счётное значение
 *
 * Проверяет, представляет ли собой содержимое переменной массив (`array`)
 * или объект, который реализует интерфейс `Countable`.
 *
 * @param {any} value Значение для проверки.
 * @returns {boolean} Возвращает `true`, если значение `value` счётное, иначе `false`.
 */
export default function is_countable(value) {
    return is_array(value) || (is_object(value) && value instanceof Countable);
}
