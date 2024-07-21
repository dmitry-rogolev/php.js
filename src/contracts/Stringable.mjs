import Interface from './Interface.mjs';

/**
 * Интерфейс `Stringable` обозначает класс, который реализует метод `__toString()`.
 */
class Stringable extends Interface {
    /**
     * Позволяет классу решать, как он должен реагировать при преобразовании в строку.
     *
     * @returns {string}
     */
    __toString() {}
}

export default Stringable;
