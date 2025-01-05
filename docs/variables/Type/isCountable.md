[Главная](../../../README.md) / [Обработка переменных](../../variables.md) / Type / isCountable

[Исходный код](../../../src/variables/Type.mjs)

# `Type.isCountable`

`Type.isCountable` &mdash; Проверяет, счётно ли значение переменной.

## Сигнатура функции

```ts
static isCountable(value: any): boolean;
```

## Параметры

-   `value` (any)

    Значение, которое нужно проверить на счётность. Это может быть массив, ассоциативный массив
    (объект) или экземпляр класса, реализующего интерфейс `Countable`.

## Описание

Метод `Type.isCountable` предназначен для проверки, можно ли переданное значение считать "счётным".

Счётными значениями считаются:

1. **Массивы** (например, `[1, 2, 3]`).
2. **Ассоциативные массивы** (например, `{ foo: 'bar' }`).
3. **Экземпляры классов**, которые реализуют интерфейс `Countable`.

Использование метода полезно, например, при вызове `count()`, чтобы проверить, можно ли подсчитать
элементы переданного значения.

## Возвращаемое значение

Метод возвращает `true`, если значение является счётным, и `false` в противном случае.

## Примеры использования

### Пример 1: Проверка массивов

```js
Type.isCountable([1, 2, 3]); // true
Type.isCountable([]); // true
```

### Пример 2: Проверка ассоциативных массивов

```js
Type.isCountable({ foo: 'bar' }); // true
```

### Пример 3: Проверка объектов, реализующих интерфейс `Countable`

```js
class Collection {
    static __implements = [Countable];

    count() {
        return 10;
    }
}
const collect = new Collection();
Type.isCountable(collect); // true
```

### Пример 4: Несчётные значения

```js
Type.isCountable(42); // false
Type.isCountable('string'); // false
Type.isCountable(null); // false
Type.isCountable(undefined); // false
```

### Пример 5: Пользовательский класс без реализации `Countable`

```js
class MyCollection {}
const myObject = new MyCollection();
Type.isCountable(myObject); // false
```
