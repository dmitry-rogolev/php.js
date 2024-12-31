/**
 * Проверяет, является ли значение символом.
 *
 * ### Параметры
 *
 * - `value` (any)
 *      Проверяемая переменная.
 *
 * ### Описание
 *
 * Функция `is_symbol` предназначена для проверки, является ли переданное значение символом.
 *
 * Она проверяет:
 *
 * 1. Что значение имеет тип `symbol`.
 *
 * Функция возвращает `false` для всех значений, не принадлежащих типу `symbol`.
 *
 * ### Возвращаемое значение
 *
 * Возвращает `true`, если значение является символом, иначе `false`.
 *
 * ### Примеры использования
 *
 * ```js
 * // Пример 1: Проверка символов
 * is_symbol(Symbol('symbol')); // true
 * is_symbol(Symbol.iterator); // true
 *
 * // Пример 2: Проверка значений других типов
 * is_symbol('hello'); // false (строка)
 * is_symbol(42); // false (число)
 * is_symbol(true); // false (логическое значение)
 * is_symbol(null); // false
 * is_symbol(undefined); // false
 * is_symbol({}); // false (объект)
 * is_symbol([]); // false (массив)
 * is_symbol(() => {}); // false (функция)
 * ```
 *
 * @param {any} value Проверяемая переменная.
 * @returns {boolean} Возвращает `true`, если значение является символом, иначе `false`.
 */
export default function is_symbol(value) {
    return typeof value === 'symbol';
}
