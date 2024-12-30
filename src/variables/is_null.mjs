/**
 * Проверяет, является ли значение `null`.
 *
 * ### Параметры
 *
 * - `value` (any)
 *      Проверяемая переменная.
 *
 * ### Описание
 *
 * Функция `is_null` предназначена для проверки, является ли переданное значение `null`.
 *
 * ### Возвращаемое значение
 *
 * Возвращает `true`, если значение является `null`, иначе `false`.
 *
 * ### Примеры использования
 *
 * ```js
 * // Пример 1: Проверка значения `null`
 * is_null(null); // true
 *
 * // Пример 2: Проверка значений, не являющихся `null`
 * is_null(undefined); // false
 * is_null(0); // false
 * is_null(''); // false
 * is_null(false); // false
 * is_null({}); // false
 * is_null([]); // false
 * ```
 *
 * @param {any} value Проверяемая переменная.
 * @returns {boolean} Возвращает `true`, если значение является `null`, иначе `false`.
 */
export default function is_null(value) {
    return value === null;
}
