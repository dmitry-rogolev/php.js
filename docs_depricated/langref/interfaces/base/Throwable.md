# Интерфейс Throwable

[Документация на php.net](https://www.php.net/manual/ru/class.throwable.php)

## Введение

`Throwable` является родительским интерфейсом для всех объектов, выбрасывающихся
с помощью выражения `throw`.

## Обзор интерфейсов

```js
class Throwable extends Stringable {
    /**
     * Возвращает сообщение ошибки данного выброшенного объекта.
     *
     * @returns {string}
     */
    getMessage() {}

    /**
     * Возвращает код ошибки выброшенного объекта, к которому применена функция.
     *
     * @returns {number}
     */
    getCode() {}

    /**
     * Возвращает имя файла, в котором данный объект был выброшен.
     *
     * @returns {string}
     */
    getFile() {}

    /**
     * Возвращает номер строки, в которой данный объект был выброшен.
     *
     * @returns {number}
     */
    getLine() {}

    /**
     * Возвращает трассировку стека в виде массива.
     *
     * @returns {Array}
     */
    getTrace() {}

    /**
     * Возвращает результаты трассировки стека в виде строки.
     *
     * @returns {string}
     */
    getTraceAsString() {}

    /**
     * Возвращает любой предыдущий `Throwable`.
     *
     * @returns {Throwable}
     */
    getPrevious() {}
}
```
