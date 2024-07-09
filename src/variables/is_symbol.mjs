/**
 * Проверяет, является ли переменная типом `symbol`
 *
 * @param {any} value Проверяемая переменная.
 * @returns {boolean} Возвращает `true`, если значение переменной `value` имеет тип `symbol`, иначе `false`.
 */
export default function is_symbol(value) {
    return typeof value === 'symbol';
}
