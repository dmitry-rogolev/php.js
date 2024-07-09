import is_bool from './is_bool.mjs';
import is_number from './is_number.mjs';
import is_string from './is_string.mjs';

/**
 * Проверяет, представляет ли собой переменная скаляр
 *
 * Скалярные переменные — это переменные,
 * содержащие `int`, `float`, `string` и `bool`.
 * Типы `array`, `object`, `null` — не скалярные.
 *
 * @param {any} value Переменная для проверки.
 * @returns {boolean} Возвращает `true`, если значение `value` — скаляр, иначе `false`.
 */
export default function is_scalar(value) {
    return is_number(value) || is_string(value) || is_bool(value);
}
