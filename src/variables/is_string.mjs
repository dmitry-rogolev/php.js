/**
 * Проверяет, является ли значение строкой.
 *
 * ### Параметры
 *
 * - `value` (any)
 *      Проверяемая переменная.
 *
 * ### Описание
 *
 * Функция `is_string` предназначена для проверки, является ли переданное значение строкой.
 *
 * Она проверяет:
 *
 * 1. Что значение имеет тип `string`.
 *
 * Функция возвращает `false` для всех значений, не принадлежащих типу `string`.
 *
 * ### Возвращаемое значение
 *
 * Возвращает `true`, если значение является строкой, иначе `false`.
 *
 * ### Примеры использования
 *
 * ```js
 * // Пример 1: Проверка строковых значений
 * is_string('hello'); // true
 * is_string(''); // true
 * is_string(`template string`); // true
 *
 * // Пример 2: Проверка значений других типов
 * is_string(42); // false (число)
 * is_string(true); // false (логическое значение)
 * is_string(null); // false
 * is_string(undefined); // false
 * is_string({}); // false (объект)
 * is_string([]); // false (массив)
 * is_string(() => {}); // false (функция)
 * ```
 *
 * @param {any} value Проверяемая переменная.
 * @returns {boolean} Возвращает `true`, если значение является строкой, иначе `false`.
 */
export default function is_string(value) {
    return typeof value === 'string';
}
