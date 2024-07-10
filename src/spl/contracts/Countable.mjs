import { Interface } from '../../contracts.mjs';

/**
 * Классы, реализующие интерфейс Countable, могут быть использованы с функцией count().
 *
 * @link https://www.php.net/manual/ru/class.countable.php
 */
class Countable extends Interface {
    /**
     * Количество элементов объекта
     *
     * Этот метод выполняется при использовании `count()` на объекте, реализующем интерфейс `Countable`.
     *
     * @return {Number}
     */
    count() {}
}

export default Countable;
