/**
 * Проверяет, является ли значение `undefined`.
 *
 * ### Параметры
 *
 * - `value` (any)
 *      Проверяемая переменная.
 *
 * ### Описание
 *
 * Функция `is_undefined` предназначена для проверки, является ли переданное значение `undefined`.
 *
 * Она проверяет:
 *
 * 1. Что значение имеет тип `undefined`.
 *
 * Функция возвращает `false` для всех значений, не принадлежащих типу `undefined`.
 *
 * ### Возвращаемое значение
 *
 * Возвращает `true`, если значение является `undefined`, иначе `false`.
 *
 * ### Примеры использования
 *
 * ```js
 * // Пример 1: Проверка значения `undefined`
 * is_undefined(undefined); // true
 *
 * // Пример 2: Проверка значений других типов
 * is_undefined('hello'); // false (строка)
 * is_undefined(42); // false (число)
 * is_undefined(true); // false (логическое значение)
 * is_undefined(null); // false
 * is_undefined({}); // false (объект)
 * is_undefined([]); // false (массив)
 * is_undefined(() => {}); // false (функция)
 * ```
 *
 * @param {any} value Проверяемая переменная.
 * @returns {boolean} Возвращает `true`, если значение является `undefined`, иначе `false`.
 */
export default function is_undefined(value) {
    return typeof value === 'undefined';
}
