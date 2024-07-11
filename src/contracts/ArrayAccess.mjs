import Interface from './Interface.mjs';

/**
 * Интерфейс разрешает обращаться к объектам как к массивам.
 */
class ArrayAccess extends Interface {
    /**
     * Определяет, существует или нет данное смещение (ключ).
     *
     * @param {any} offset Смещение (ключ) для проверки.
     * @returns {boolean} Функция возвращает `true` в случае успешного выполнения или `false`, если возникла ошибка.
     */
    offsetExists(offset) {}

    /**
     * Возвращает заданное смещение (ключ).
     *
     * @param {any} offset Смещение (ключ) для возврата.
     * @returns {any} Может возвращать значение любого типа.
     */
    offsetGet(offset) {}

    /**
     * Присваивает значение указанному смещению (ключу).
     *
     * @param {any} offset Смещение (ключ), которому будет присваиваться значение.
     * @param {any} value Значение для присвоения.
     * @returns {void} Функция не возвращает значения после выполнения.
     */
    offsetSet(offset, value) {}

    /**
     * Удаляет смещение (ключ).
     *
     * @param {any} offset Смещение (ключ) для удаления.
     * @returns {void} Функция не возвращает значения после выполнения.
     */
    offsetUnset(offset) {}
}

export default ArrayAccess;
