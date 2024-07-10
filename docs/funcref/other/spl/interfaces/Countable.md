# Интерфейс Countable

[Документация на php.net](https://www.php.net/manual/ru/class.countable.php)

### Введение

Классы, которые реализуют интерфейс `Countable`, можно использовать с функцией `count()`.

### Обзор интерфейса

```js
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
```
