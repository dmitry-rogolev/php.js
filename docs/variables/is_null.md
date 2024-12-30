[Главная](../../README.md) / [Обработка переменных](../variables.md) / is_null

[Исходный код](../../src/variables/is_null.mjs)

# `is_null`

`is_null` &mdash; Проверяет, является ли значение `null`.

## Сигнатура функции

```ts
is_null(value: any): boolean
```

## Параметры

-   `value` (any)

    Значение, которое необходимо проверить на принадлежность к `null`.

## Описание

Функция `is_null` предназначена для проверки, является ли переданное значение `null`.

## Возвращаемое значение

Функция возвращает:

-   `true`, если значение является `null`.
-   `false` в противном случае.

## Примеры использования

### Пример 1: Проверка значения `null`

```js
is_null(null); // true
```

### Пример 2: Проверка значений, не являющихся `null`

```js
is_null(undefined); // false
is_null(0); // false
is_null(''); // false
is_null(false); // false
is_null({}); // false
is_null([]); // false
```
