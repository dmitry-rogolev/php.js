/**
 * Проверяет, представляет ли собой переменная объект
 *
 * @param {any} value Переменная для проверки.
 * @returns {boolean} Возвращает `true`, если значение `value` — объект, иначе `false`.
 */
export default function is_object(value) {
    return (
        value !== null &&
        value !== undefined &&
        Object.getPrototypeOf(value)?.constructor?.toString()?.substring(0, 5) === 'class'
    );
}
