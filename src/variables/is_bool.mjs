/**
 * Проверяет, представляет ли собой переменная логическое значение
 *
 * @param {any} value Проверяемая переменная.
 * @returns {boolean} Возвращает `true`, если значение `value` — логическое (`bool`), иначе `false`.
 */
export default function is_bool(value) {
    return typeof value === 'boolean';
}
