[Главная](../../README.md) / [Обработка переменных](../variables.md) / is_symbol

[Исходный код](../../src/variables/is_symbol.mjs)

# `is_symbol`

`is_symbol` &mdash; Проверяет, является ли значение символом.

## Сигнатура функции

```ts
function is_symbol(value: any): boolean;
```

## Параметры

-   `value` (any)

    Значение, которое необходимо проверить на принадлежность к символам.

## Описание

Функция `is_symbol` предназначена для проверки, является ли переданное значение символом.

Она проверяет:

1. Что значение имеет тип `symbol`.

Функция возвращает `false` для всех значений, не принадлежащих типу `symbol`.

## Возвращаемое значение

Функция возвращает:

-   `true`, если значение является символом.
-   `false` в противном случае.

## Примеры использования

### Пример 1: Проверка символов

```js
is_symbol(Symbol('symbol')); // true
is_symbol(Symbol.iterator); // true
```

### Пример 2: Проверка значений других типов

```js
is_symbol('hello'); // false (строка)
is_symbol(42); // false (число)
is_symbol(true); // false (логическое значение)
is_symbol(null); // false
is_symbol(undefined); // false
is_symbol({}); // false (объект)
is_symbol([]); // false (массив)
is_symbol(() => {}); // false (функция)
```
