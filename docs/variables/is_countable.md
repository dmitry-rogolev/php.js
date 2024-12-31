[Главная](../../README.md) / [Обработка переменных](../variables.md) / is_countable

[Исходный код](../../src/variables/is_countable.mjs)

# `is_countable`

`is_countable` &mdash; Проверяет, счётно ли значение переменной.

## Сигнатура функции

```ts
function is_countable(value: any): boolean;
```

## Параметры

-   `value` (any)

    Значение, которое нужно проверить на счётность. Это может быть массив, ассоциативный массив
    (объект) или экземпляр класса, реализующего интерфейс `Countable`.

## Описание

Функция `is_countable` предназначена для проверки, можно ли переданное значение считать "счётным".

Счётными значениями считаются:

1. **Массивы** (например, `[1, 2, 3]`).
2. **Ассоциативные массивы** (например, `{ foo: 'bar' }`).
3. **Экземпляры классов**, которые реализуют интерфейс `Countable`.

Использование функции полезно, например, при вызове `count()`, чтобы проверить, можно ли подсчитать
элементы переданного значения.

## Возвращаемое значение

Функция возвращает `true`, если значение является счётным, и `false` в противном случае.

## Примеры использования

### Пример 1: Проверка массивов

```js
is_countable([1, 2, 3]); // true
is_countable([]); // true
```

### Пример 2: Проверка ассоциативных массивов

```js
is_countable({ foo: 'bar' }); // true
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
is_countable(collect); // true
```

### Пример 4: Несчётные значения

```js
is_countable(42); // false
is_countable('string'); // false
is_countable(null); // false
is_countable(undefined); // false
```

### Пример 5: Пользовательский класс без реализации `Countable`

```js
class MyCollection {}
const myObject = new MyCollection();
is_countable(myObject); // false
```
