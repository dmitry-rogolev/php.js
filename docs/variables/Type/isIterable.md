[Главная](../../../README.md) / [Обработка переменных](../../variables.md) / [Type](../Type.md) /
isIterable

[Исходный код](../../../src/variables/Type.mjs)

# `Type.isIterable`

`Type.isIterable` &mdash; Проверяет, является ли переданное значение итерируемым.

## Сигнатура метода

```ts
static isIterable(value: any): boolean;
```

## Описание

Эта функция проверяет, является ли переданное значение массивом или объектом, который реализует
интерфейс `Traversable`.

## Параметры

-   `value` (any)

    Проверяемая переменная.

## Возвращаемое значение

Возвращает `true`, если переменная является итерируемым объектом (массивом или объектом, реализующим
интерфейс `Traversable`). В остальных случаях функция возвращает `false`.

## Примеры использования

### Пример 1: Массивы

```js
Type.isIterable([1, 2, 3]); // true
Type.isIterable({ foo: 'bar' }); // true
Type.isIterable(array({ foo: 'bar' })); // true
```

### Пример 2: Объекты, реализующие интерфейс `Traversable`

```js
class Collection {
    static __implements = [Traversable];
}
const instance = new Collection();
Type.isIterable(instance); // true
```

### Пример 3: Неитерируемые значения

```js
Type.isIterable(42); // false
Type.isIterable('hello'); // false
```
