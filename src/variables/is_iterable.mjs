import Traversable from '../contracts/Traversable.mjs';
import is_array from './is_array.mjs';
import is_object from './is_object.mjs';

/**
 * Проверяет, итерируемо ли содержимое переменной
 *
 * Проверяет, соответствует ли содержимое переменной псевдотипу `iterable`,
 * то есть — это либо массив (`array`), либо объект, который реализует интерфейс
 * `Traversable`.
 *
 * @param {any} value Переменная для проверки.
 * @returns {boolean} Возвращает `true`, если значение `value` итерируемо, иначе `false`.
 */
export default function is_iterable(value) {
    return is_array(value) || (is_object(value) && value instanceof Traversable);
}
