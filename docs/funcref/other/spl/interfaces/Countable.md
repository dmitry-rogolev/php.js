# Интерфейс Countable

[Документация на php.net](https://www.php.net/manual/ru/class.countable.php)

---

[Главная](../../../../../README.md) / [Справочник функций](../../../../funcref.md) /
[Другие базовые модули](../../../other.md) / [Стандартная библиотека PHP (SPL)](../../spl.md) /
[Интерфейсы](../interfaces.md) / Интерфейс Countable

---

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
