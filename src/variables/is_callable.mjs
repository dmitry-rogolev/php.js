import is_class from './is_class.mjs';
import is_object from './is_object.mjs';

/**
 * Проверяет, что значение может быть вызвано как функция
 *
 * @param {any} value Значение для проверки
 * @returns {boolean} Возвращает `true`, если `value` может быть вызвана, или `false` в противном случае.
 */
export default function is_callable(value) {
    return typeof value === 'function' && !is_class(value) && !is_object(value);
}
