/**
 * Проверяет, является ли переданная переменная классом.
 *
 * ### Параметры
 *
 * - `value`
 *
 *      Проверяемая переменная.
 *
 * ### Описание
 *
 * В JavaScript классы являются функциями, но с уникальным поведением.
 *
 * Для определения класса функция проверяет:
 *
 * 1. Что переданная переменная является функцией.
 * 2. Что строковое представление функции начинается с `class `.
 *
 * #### Примечание
 *
 * Конструкторы функций, созданные с помощью `function`, не будут распознаны как классы.
 *
 * Для примера:
 *
 * ```js
 * function Foo() {}
 * is_class(Foo); // Возвращает: false
 * ```
 *
 * В отличие от классов, которые выглядят так:
 *
 * ```js
 * class MyClass {}
 * is_class(MyClass); // Возвращает: true
 * ```
 *
 * ### Возвращаемое значение
 *
 * Возвращает `true`, если значение является классом, иначе `false`.
 *
 * ### Примеры использования
 *
 * 1. Классы:
 *
 * ```js
 * class MyClass {}
 * is_class(MyClass); // true
 * ```
 *
 * 2. Функции-конструкторы:
 *
 * ```js
 * function MyFunction() {}
 * is_class(MyFunction); // false
 * ```
 *
 * 3. Объекты и примитивы:
 *
 * ```js
 * is_class({}); // false
 * is_class([]); // false
 * is_class(null); // false
 * is_class(42); // false
 * ```
 *
 * @param {any} value Проверяемая переменная.
 * @returns {boolean}
 */
export default function is_class(value) {
    return typeof value === 'function' && value.toString().startsWith('class ');
}
