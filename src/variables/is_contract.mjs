import { Interface } from '../contracts.mjs';
import is_class from './is_class.mjs';

/**
 * Проверяет, является ли переданный класс контрактом, основанным на классе `Interface`.
 *
 * ### Параметры
 *
 * - `value` {any} - Проверяемое значение.
 *
 * ### Описание
 *
 * Функция определяет, расширяет ли переданный класс - класс `Interface` или его наследников.
 * Она анализирует цепочку прототипов переданного класса, чтобы определить,
 * есть ли в ней `Interface`.
 *
 * Класс должен быть создан с использованием синтаксиса ES6 (`class`)
 * и расширять класс `Interface` напрямую или через другой подкласс.
 *
 * ### Возвращаемое значение
 *
 * Возвращает `true`, если переданный класс расширяет `Interface`, иначе `false`.
 *
 * ### Примеры использования
 *
 * #### Интерфейс и классы
 *
 * ```js
 * class MyContract extends Interface {}
 * class AnotherClass {}
 *
 * console.log(is_contract(MyContract)); // true
 * console.log(is_contract(AnotherClass)); // false
 * ```
 *
 * #### Пример с наследованием интерфейсов
 *
 * ```js
 * class ExtendedInterface extends Interface {}
 *
 * class MyContract extends ExtendedInterface {}
 *
 * console.log(is_contract(MyContract)); // true
 * console.log(is_contract(Interface)); // false
 * ```
 *
 * ### Проверка некорректных значений
 *
 * ```js
 * console.log(is_contract(null)); // false
 * console.log(is_contract(undefined)); // false
 * console.log(is_contract(42)); // false
 * console.log(is_contract({})); // false
 * console.log(is_contract(function Foo() {})); // false
 * ```
 *
 * @param {any} value - Проверяемое значение.
 * @returns {boolean} Возвращает `true`, если класс является контрактом, основанным на интерфейсе `Interface`.
 */
export default function is_contract(value) {
    // Контракт должен быть классом
    if (!is_class(value)) {
        return false;
    }

    let proto = value;

    // Ищем в цепочке прототипов переданного класса класс `Interface`.
    // При этом, сам класс Interface не считается контрактом.
    while ((proto = Object.getPrototypeOf(proto))) {
        if (proto === Interface) {
            return true;
        }
    }

    return false;
}
