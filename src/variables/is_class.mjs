/**
 * Проверяет, является ли значение переменной классом
 *
 * Классом считаются только конструкции вида:
 *
 * ```js
 * class stdClass {}
 * is_class(stdClass); // true
 * ```
 *
 * Конструкторы функций не являются классами,
 * с точки зрения этой функции.
 *
 * ```js
 * function Foo() {}
 * is_class(Foo); // false
 * ```
 *
 * @param {any} value Проверяемая переменная.
 * @returns {boolean} Возвращает `true`, если значение
 * переменной `value` является классом, иначе `false`.
 */
export default function is_class(value) {
    return (
        typeof value === 'function' &&
        value?.prototype?.constructor?.toString()?.substring(0, 5) === 'class'
    );
}
