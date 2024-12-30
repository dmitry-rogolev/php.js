/**
 * Проверяет, является ли значение числом.
 *
 * ### Параметры
 *
 * - `value` (any)
 *      Проверяемая переменная.
 *
 * ### Описание
 *
 * Функция `is_number` предназначена для проверки, является ли переданное значение числом.
 *
 * Она проверяет:
 *
 * 1. **Тип значения**: Убеждается, что `value` имеет тип `number`.
 * 2. **Конечность числа**: Проверяет, что значение не является `Infinity` или `NaN` с помощью `Number.isFinite(value)`.
 *
 * ### Возвращаемое значение
 *
 * Возвращает `true`, если значение является числом, иначе `false`.
 *
 * ### Примеры использования
 *
 * ```js
 * // Пример 1: Проверка числовых значений
 * is_number(42); // true
 * is_number(3.14); // true
 * is_number(-0.99); // true
 *
 * // Пример 2: Проверка специальных числовых значений
 * is_number(NaN); // false
 * is_number(Infinity); // false
 * is_number(-Infinity); // false
 *
 * // Пример 3: Проверка значений других типов
 * is_number('42'); // false (строка)
 * is_number(true); // false (логическое значение)
 * is_number(null); // false
 * is_number(undefined); // false
 * is_number({}); // false (объект)
 * is_number([]); // false (массив)
 * ```
 *
 * @param {any} value Проверяемая переменная.
 * @returns {boolean} Возвращает `true`, если значение является числом, иначе `false`.
 */
export default function is_number(value) {
    return typeof value === 'number' && Number.isFinite(value);
}
