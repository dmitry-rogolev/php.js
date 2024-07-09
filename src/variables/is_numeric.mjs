/**
 * Проверяет, содержит ли переменная число или числовую строку
 *
 * @param {any} value Переменная для проверки.
 * @returns {boolean} Возвращает `true`, если значение `value` — число или строка,
 * содержащая число, иначе `false`.
 */
export default function is_numeric(value) {
    return (
        (typeof value === 'number' || typeof value === 'string') && value !== '' && !isNaN(value)
    );
}
