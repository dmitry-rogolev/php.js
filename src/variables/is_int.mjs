import is_number from './is_number.mjs';

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
export default function is_int(value) {
    return is_number(value) && value % 1 === 0;
}
