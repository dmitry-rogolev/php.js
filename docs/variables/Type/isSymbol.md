[Главная](../../../README.md) / [Обработка переменных](../../variables.md) / [Type](../Type.md) /
isSymbol

[Исходный код](../../../src/variables/Type.mjs)

# `Type.isSymbol`

`Type.isSymbol` &mdash; Проверяет, является ли значение символом.

## Сигнатура метода

```ts
static isSymbol(value: any): boolean;
```

## Описание

Функция `is_symbol` предназначена для проверки, является ли переданное значение символом.

Она проверяет:

1. Что значение имеет тип `symbol`.

Функция возвращает `false` для всех значений, не принадлежащих типу `symbol`.

## Параметры

-   `value` (any)

    Проверяемая переменная.

## Возвращаемое значение

Возвращает `true`, если значение является символом, иначе `false`.

## Примеры использования

### Пример 1: Проверка символов

```js
Type.isSymbol(Symbol('symbol')); // true
Type.isSymbol(Symbol.iterator); // true
```

### Пример 2: Проверка значений других типов

```js
Type.isSymbol('hello'); // false (строка)
Type.isSymbol(42); // false (число)
Type.isSymbol(true); // false (логическое значение)
Type.isSymbol(null); // false
Type.isSymbol(undefined); // false
Type.isSymbol({}); // false (объект)
Type.isSymbol([]); // false (массив)
Type.isSymbol(() => {}); // false (функция)
```
