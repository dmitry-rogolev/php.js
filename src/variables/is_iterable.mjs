import Traversable from '../contracts/Traversable.mjs';
import is_array from './is_array.mjs';
import is_object from './is_object.mjs';

/**
 * Проверяет, является ли переданное значение итерируемым.
 *
 * ### Параметры
 *
 * - `value` (any)
 *      Проверяемая переменная.
 *
 * ### Описание
 *
 * Эта функция проверяет, является ли переданное значение массивом или объектом, который реализует интерфейс `Traversable`.
 *
 * ### Возвращаемое значение
 *
 * Возвращает `true`, если переменная является итерируемым объектом (массивом или объектом, реализующим интерфейс `Traversable`). В остальных случаях функция возвращает `false`.
 *
 * ### Примеры использования
 *
 * 1. Массивы:
 *
 *    ```js
 *    is_iterable([1, 2, 3]); // true
 *    is_iterable({ foo: 'bar' }); // true
 *    is_iterable(array({ foo: 'bar' })); // true
 *    ```
 *
 * 2. Объекты, реализующие интерфейс `Traversable`:
 *
 *    ```js
 *    class Collection {
 *        static __implements = [Traversable];
 *    }
 *    const instance = new Collection();
 *    is_iterable(instance); // true
 *    ```
 *
 * 3. Неитерируемые значения:
 *
 *    ```js
 *    is_iterable(42); // false
 *    is_iterable('hello'); // false
 *    ```
 *
 * @param {any} value Проверяемая переменная.
 * @returns {boolean}
 */
export default function is_iterable(value) {
    return is_array(value) || (is_object(value) && value instanceof Traversable);
}
