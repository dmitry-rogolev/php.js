import is_bool from './is_bool.mjs';
import is_number from './is_number.mjs';
import is_string from './is_string.mjs';
import is_symbol from './is_symbol.mjs';

/**
 * Проверяет, является ли значение скалярным.
 *
 * ### Параметры
 *
 * - `value` (any)
 *      Проверяемая переменная.
 *
 * ### Описание
 *
 * Скалярные переменные — это переменные, содержащие `int`, `float`, `string`, `bool` и `symbol`.
 * Типы `array`, `object`, `null`, `undefined` — не скалярные.
 *
 * ### Возвращаемое значение
 *
 * Возвращает `true`, если значение является скалярным, иначе `false`.
 *
 * ### Примеры использования
 *
 * ```js
 * // Пример 1: Проверка скалярных значений
 * is_scalar(true); // true
 * is_scalar(42); // true
 * is_scalar('hello'); // true
 * is_scalar(Symbol('symbol')); // true
 *
 * // Пример 2: Проверка не скалярных значений
 * is_scalar(null); // false
 * is_scalar(undefined); // false
 * is_scalar({}); // false (объект)
 * is_scalar([]); // false (массив)
 * is_scalar(() => {}); // false (функция)
 * ```
 *
 * @param {any} value Проверяемая переменная.
 * @returns {boolean} Возвращает `true`, если значение является скалярным, иначе `false`.
 */
export default function is_scalar(value) {
    return is_bool(value) || is_number(value) || is_string(value) || is_symbol(value);
}
