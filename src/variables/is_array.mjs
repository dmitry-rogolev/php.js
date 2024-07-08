/**
 * Определяет, представляет ли собой переменная массив
 *
 * @param {any} value Проверяемая переменная.
 * @returns {boolean} Возвращает `true`, если переменная `value` — массив (`array`), иначе `false`.
 */
export default function is_array(value) {
    if (
        value &&
        (Array.isArray(value) ||
            Object.getPrototypeOf(value)?.constructor?.toString()?.substring(0, 15) ===
                'function Object')
    ) {
        return true;
    }

    return false;
}
