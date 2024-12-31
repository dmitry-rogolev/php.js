[Главная](../../README.md) / [Обработка переменных](../variables.md) / is_string

[Исходный код](../../src/variables/is_string.mjs)

# `is_string`

`is_string` &mdash; Проверяет, является ли значение строкой.

## Сигнатура функции

```ts
function is_string(value: any): boolean;
```

## Параметры

-   `value` (any)

    Значение, которое необходимо проверить на принадлежность к строкам.

## Описание

Функция `is_string` предназначена для проверки, является ли переданное значение строкой.

Она проверяет:

1. Что значение имеет тип `string`.

Функция возвращает `false` для всех значений, не принадлежащих типу `string`.

## Возвращаемое значение

Функция возвращает:

-   `true`, если значение является строкой.
-   `false` в противном случае.

## Примеры использования

### Пример 1: Проверка строковых значений

```js
is_string('hello'); // true
is_string(''); // true
is_string(`template string`); // true
```

### Пример 2: Проверка значений других типов

```js
is_string(42); // false (число)
is_string(true); // false (логическое значение)
is_string(null); // false
is_string(undefined); // false
is_string({}); // false (объект)
is_string([]); // false (массив)
is_string(() => {}); // false (функция)
```