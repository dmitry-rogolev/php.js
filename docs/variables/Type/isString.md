[Главная](../../../README.md) / [Обработка переменных](../../variables.md) / [Type](../Type.md) /
isString

[Исходный код](../../../src/variables/Type.mjs)

# `Type.isString`

`Type.isString` &mdash; Проверяет, является ли значение строкой.

## Сигнатура метода

```ts
static isString(value: any): boolean;
```

## Описание

Функция `is_string` предназначена для проверки, является ли переданное значение строкой.

Она проверяет:

1. Что значение имеет тип `string`.

Функция возвращает `false` для всех значений, не принадлежащих типу `string`.

## Параметры

-   `value` (any)

    Проверяемая переменная.

## Возвращаемое значение

Возвращает `true`, если значение является строкой, иначе `false`.

## Примеры использования

### Пример 1: Проверка строковых значений

```js
Type.isString('hello'); // true
Type.isString(''); // true
Type.isString(`template string`); // true
```

### Пример 2: Проверка значений других типов

```js
Type.isString(42); // false (число)
Type.isString(true); // false (логическое значение)
Type.isString(null); // false
Type.isString(undefined); // false
Type.isString({}); // false (объект)
Type.isString([]); // false (массив)
Type.isString(() => {}); // false (функция)
```
