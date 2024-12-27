[Главная](../../README.md) / [Обработка переменных](../variables.md) / is_iterable

[Исходный код](../../src/variables/is_iterable.mjs)

# is_iterable

`is_iterable` &mdash; Проверяет, является ли переданное значение итерируемым.

## Параметры

-   `value` (any)

    Проверяемая переменная.

## Описание

Эта функция проверяет, является ли переданное значение массивом или объектом, который реализует
интерфейс `Traversable`.

## Возвращаемое значение

Возвращает `true`, если переменная является итерируемым объектом (массивом, ассоциативным массивом
или объектом, реализующим интерфейс `Traversable`). В остальных случаях функция возвращает `false`.

## Примеры использования

### Массивы

```javascript
is_iterable([1, 2, 3]); // true
```

### Ассоциативные массивы

```javascript
is_iterable({ foo: 'bar' }); // true
is_iterable(array({ foo: 'bar' })); // true
```

### Объекты, реализующие интерфейс `Traversable`

```javascript
class Collection {
    static __implements = [Traversable];
}
const instance = new Collection();
is_iterable(instance); // true
```

### Неитерируемые значения

```javascript
is_iterable(42); // false
is_iterable('hello'); // false
is_iterable(null); // false
is_iterable(undefined); // false
```
