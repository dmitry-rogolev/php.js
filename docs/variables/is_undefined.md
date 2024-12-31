[Главная](../../README.md) / [Обработка переменных](../variables.md) / is_undefined

[Исходный код](../../src/variables/is_undefined.mjs)

# `is_undefined`

`is_undefined` &mdash; Проверяет, является ли значение `undefined`.

## Сигнатура функции

```ts
function is_undefined(value: any): boolean;
```

## Параметры

-   `value` (any)

    Значение, которое необходимо проверить на принадлежность к `undefined`.

## Описание

Функция `is_undefined` предназначена для проверки, является ли переданное значение `undefined`.

Она проверяет:

1. Что значение имеет тип `undefined`.

Функция возвращает `false` для всех значений, не принадлежащих типу `undefined`.

## Возвращаемое значение

Функция возвращает:

-   `true`, если значение является `undefined`.
-   `false` в противном случае.

## Примеры использования

### Пример 1: Проверка значения `undefined`

```js
is_undefined(undefined); // true
```

### Пример 2: Проверка значений других типов

```js
is_undefined('hello'); // false (строка)
is_undefined(42); // false (число)
is_undefined(true); // false (логическое значение)
is_undefined(null); // false
is_undefined({}); // false (объект)
is_undefined([]); // false (массив)
is_undefined(() => {}); // false (функция)
```
