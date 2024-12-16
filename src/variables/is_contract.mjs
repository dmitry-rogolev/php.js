import { Interface } from '../contracts.mjs';

/**
 * Проверяет, является ли переданный класс контрактом, основанным на интерфейсе `Interface`.
 *
 * ### Параметры
 *
 * - `value` {any} - Проверяемое значение.
 *
 * ### Описание
 *
 * Функция определяет, реализует ли переданный класс интерфейс `Interface` или его наследников.
 * Для этого анализируется цепочка прототипов конструктора `value`.
 *
 * ### Возвращаемое значение
 *
 * - Возвращает `true`, если класс наследует `Interface`, иначе `false`.
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
 * @param {any} value - Проверяемое значение.
 * @returns {boolean} Возвращает `true`, если класс является контрактом, основанным на интерфейсе `Interface`.
 */
export default function is_contract(value) {
    // Проверяем, является ли `value` функцией и выглядит ли оно как класс
    if (typeof value !== 'function' || !value.toString().startsWith('class ')) {
        return false;
    }

    // Начинаем проверку цепочки прототипов
    let proto = value;

    // Переходим по цепочке прототипов до тех пор, пока не найдем `Interface` или `null`
    while ((proto = Object.getPrototypeOf(proto))) {
        // Если `proto` является интерфейсом, возвращаем true
        if (proto === Interface) {
            return true;
        }
    }

    // Если интерфейс не найден, возвращаем false
    return false;
}
