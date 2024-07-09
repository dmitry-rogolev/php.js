/**
 * Проверяет, представляет ли собой тип переменной строку
 *
 * @param {any} value Переменная для проверки.
 * @returns {boolean} Возвращает `true`, если значение `value` — строка, иначе `false`.
 */
export default function is_string(value) {
    return typeof value === 'string';
}
