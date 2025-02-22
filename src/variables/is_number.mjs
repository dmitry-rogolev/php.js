/**
 * Проверяет, является ли переданное значение числом
 *
 * Проверяет, является ли переданное значение целым числом или числом с плавающей запятой.
 *
 * > **Замечание**:
 *
 * > Для значения `NaN` функция возвращает `false`.
 *
 * @param {any} value Переменная, значение которой требует проверки.
 * @returns {boolean} Возвращает `true`, если переданное значение является числом
 * и не является значением `NaN`, иначе `false`.
 */
export default function is_number(value) {
    return typeof value === 'number' && !Number.isNaN(value);
}
