[Главная](../../../README.md) / [Обработка переменных](../../variables.md) / [Type](../Type.md) /
isUndefined

[Исходный код](../../../src/variables/Type.mjs)

# `Type.isUndefined`

`Type.isUndefined` &mdash; Проверяет, является ли значение `undefined`.

## Сигнатура метода

```ts
static isUndefined(value: any): boolean;
```

## Описание

Функция `is_undefined` предназначена для проверки, является ли переданное значение `undefined`.

Она проверяет:

1. Что значение имеет тип `undefined`.

Функция возвращает `false` для всех значений, не принадлежащих типу `undefined`.

## Параметры

-   `value` (any)

    Проверяемая переменная.

## Возвращаемое значение

Возвращает `true`, если значение является `undefined`, иначе `false`.

## Примеры использования

### Пример 1: Проверка значения `undefined`

```js
Type.isUndefined(undefined); // true
```

### Пример 2: Проверка значений других типов

```js
Type.isUndefined('hello'); // false (строка)
Type.isUndefined(42); // false (число)
Type.isUndefined(true); // false (логическое значение)
Type.isUndefined(null); // false
Type.isUndefined({}); // false (объект)
Type.isUndefined([]); // false (массив)
Type.isUndefined(() => {}); // false (функция)
```
