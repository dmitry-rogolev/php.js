/**
 * Проверяет, является ли значение числом или числовой строкой.
 *
 * ### Параметры
 *
 * - `value` (any)
 *      Проверяемая переменная.
 *
 * ### Описание
 *
 * Функция `is_numeric` предназначена для проверки, является ли переданное значение числом или числовой строкой.
 *
 * Она проверяет:
 *
 * 1. **Тип значения**: Убеждается, что `value` имеет тип `number` или `string`.
 * 2. **Конечность числа**: Проверяет, что значение не является `Infinity` или `NaN` с помощью `Number.isFinite(value)`.
 * 3. **Числовая строка**: Проверяет, что строка может быть преобразована в конечное число.
 *
 * ### Возвращаемое значение
 *
 * Возвращает `true`, если значение является числом или числовой строкой, иначе `false`.
 *
 * ### Примеры использования
 *
 * ```js
 * // Пример 1: Проверка числовых значений
 * is_numeric(42); // true
 * is_numeric(3.14); // true
 * is_numeric(-0.99); // true
 *
 * // Пример 2: Проверка числовых строк
 * is_numeric('42'); // true
 * is_numeric('3.14'); // true
 * is_numeric('-0.99'); // true
 *
 * // Пример 3: Проверка специальных числовых значений
 * is_numeric(NaN); // false
 * is_numeric(Infinity); // false
 * is_numeric(-Infinity); // false
 *
 * // Пример 4: Проверка значений других типов
 * is_numeric(true); // false (логическое значение)
 * is_numeric(null); // false
 * is_numeric(undefined); // false
 * is_numeric({}); // false (объект)
 * is_numeric([]); // false (массив)
 * ```
 *
 * @param {any} value Проверяемая переменная.
 * @returns {boolean} Возвращает `true`, если значение является числом или числовой строкой, иначе `false`.
 */
export default function is_numeric(value) {
    if (typeof value === 'number') {
        return Number.isFinite(value);
    }

    if (typeof value === 'string') {
        return !isNaN(parseFloat(value)) && isFinite(value);
    }

    return false;
}
