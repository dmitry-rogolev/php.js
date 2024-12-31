import Countable from '../spl/contracts/Countable.mjs';
import is_array from './is_array.mjs';

/**
 * Проверяет, счётно ли значение переменной.
 *
 * ### Параметры
 *
 * - `value` (any)
 *      Значение для проверки.
 *
 * ### Описание
 *
 * Функция предназначена для проверки, является ли переданная переменная "счётной".
 *
 * Счётными считаются:
 *
 * 1. **Массивы** (например, `[1, 2, 3]`).
 * 2. **Ассоциативные массивы** — обычные объекты (например, `{foo: 'bar'}`).
 * 3. **Экземпляры класса**, реализующего интерфейс `Countable`.
 *
 * Это полезно при работе с функцией `count`, где необходимо убедиться, что переданное значение поддерживает подсчёт элементов.
 *
 * ### Возвращаемое значение
 *
 * Возвращает `true`, если значение является счётным, иначе `false`.
 *
 * ### Примеры использования
 *
 * ```js
 * // Проверка массивов
 * is_countable([1, 2, 3]); // true
 * is_countable([]);        // true
 *
 * // Проверка ассоциативных массивов
 * is_countable({foo: 'bar'}); // true
 * is_countable({});           // true
 *
 * // Проверка объектов, реализующих интерфейс Countable
 * class Collection {
 *      static __implements = [Countable];
 *
 *      count() {
 *          return 10;
 *      }
 * }
 * const collect = new Collection();
 * is_countable(collect); // true
 *
 * // Несчётные значения
 * is_countable(42);        // false
 * is_countable('string');  // false
 * is_countable(null);      // false
 *
 * // Пользовательские классы без реализации Countable
 * class MyCollection {}
 * const myObject = new MyCollection();
 * is_countable(myObject); // false
 * ```
 *
 * @param {any} value Значение для проверки.
 * @returns {boolean} Возвращает `true`, если значение является счётным, иначе `false`.
 */
export default function is_countable(value) {
    return is_array(value) || value instanceof Countable;
}
