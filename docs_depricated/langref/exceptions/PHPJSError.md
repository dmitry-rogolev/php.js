# Исключение PHPJSError

[Документация на php.net](https://www.php.net/manual/ru/class.error.php)

---

[Главная](../../../README.md) / [Справочник языка](../../langref.md) /
[Предопределённые исключения](../exceptions.md) / Исключение PHPJSError

---

### Введение

Класс `PHPJSError` — базовый класс для всех внутренних ошибок php.js.

### Обзор класса

```js
class PHPJSError extends stdClass {
    static __implements = [Throwable];

    constructor(message = '', code = 0, previous = null) {}

    /**
     * Возвращает сообщение об ошибке.
     *
     * @returns {string}
     */
    getMessage() {}

    /**
     * Возвращает предыдущий объект Throwable (третий параметр конструктора PHPJSError::__construct()).
     *
     * @returns {?Throwable}
     */
    getPrevious() {}

    /**
     * Возвращает код ошибки.
     *
     * @returns {number}
     */
    getCode() {}

    /**
     * Получить имя файла, в котором произошла ошибка.
     *
     * @returns {string}
     */
    getFile() {}

    /**
     * Получить номер строки, в которой произошла ошибка.
     *
     * @returns {number}
     */
    getLine() {}

    /**
     * Возвращает трассировку стека.
     *
     * @returns {Array}
     */
    getTrace() {}

    /**
     * Возвращает трассировку стека в виде строки.
     *
     * @returns {string}
     */
    getTraceAsString() {}

    /**
     * Позволяет классу решать, как он должен реагировать при преобразовании в строку.
     *
     * @returns {string}
     */
    __toString() {}
}
```
