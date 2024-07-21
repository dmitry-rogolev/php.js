# Интерфейс Stringable

## Введение

Интерфейс `Stringable` обозначает класс, реализующий метод `__toString`.

## Обзор интерфейсов

```js
class Stringable extends Interface {
    /**
     * Позволяет классу решать, как он должен реагировать при преобразовании в строку.
     *
     * @returns {string}
     */
    __toString() {}
}
```
