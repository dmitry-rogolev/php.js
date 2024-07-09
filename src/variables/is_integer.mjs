import is_int from './is_int.mjs';

/**
 * Проверяет, представляет ли собой переменная целое число
 *
 * > **Замечание**:
 *
 * > Чтобы проверить принадлежность переменной к числу или
 * > числовой строке (например, при обработке полей ввода формы, которые всегда
 * > передаются в виде строки), вызывают функцию `is_numeric()`.
 *
 * @param {any} value Проверяемая переменная.
 * @returns {boolean} Возвращает `true`, если значение `value` — целое число (`int`), иначе `false`.
 */
export default function is_integer(value) {
    return is_int(value);
}