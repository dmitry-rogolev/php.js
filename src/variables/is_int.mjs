/**
 * Проверяет, является ли значение целым числом.
 *
 * ### Параметры
 *
 * - `value` (any)
 *      Значение, которое нужно проверить.
 *
 * ### Описание
 *
 * Функция `is_int` определяет, является ли переданное значение целым числом.
 *
 * Она выполняет следующие проверки:
 *
 * 1. **Тип значения**: Убеждается, что `value` имеет тип `number`.
 * 2. **Конечность числа**: Проверяет, что значение не является `Infinity` или `NaN` с помощью `Number.isFinite(value)`.
 * 3. **Целочисленность**: Убедится, что остаток от деления числа на 1 равен нулю (`value % 1 === 0`).
 *
 * Если значение соответствует всем этим условиям, оно считается целым числом.
 *
 * ### Возвращаемое значение
 *
 * Возвращает `true`, если значение является целым числом, иначе `false`.
 *
 * ### Примеры использования
 *
 * ```js
 * // Проверка целых чисел
 * is_int(42);       // true
 * is_int(0);        // true
 * is_int(-123);     // true
 *
 * // Проверка дробных чисел
 * is_int(3.14);     // false
 * is_int(-0.001);   // false
 *
 * // Некорректные типы данных
 * is_int('42');     // false (строка)
 * is_int(true);     // false (логическое значение)
 * is_int(null);     // false (null)
 * is_int(undefined);// false (undefined)
 *
 * // Бесконечные и некорректные числовые значения
 * is_int(Infinity); // false (бесконечность)
 * is_int(-Infinity);// false (отрицательная бесконечность)
 * is_int(NaN);      // false (не число)
 * ```
 *
 * @param {any} value Значение для проверки.
 * @returns {boolean} Возвращает `true`, если значение является целым числом, иначе `false`.
 */
export default function is_int(value) {
    return typeof value === 'number' && Number.isFinite(value) && value % 1 === 0;
}
