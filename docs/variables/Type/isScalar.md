[Главная](../../../README.md) / [Обработка переменных](../../variables.md) / [Type](../Type.md) /
isScalar

[Исходный код](../../../src/variables/Type.mjs)

# `Type.isScalar`

`Type.isScalar` &mdash; Проверяет, является ли значение скалярным.

## Сигнатура метода

```ts
static isScalar(value: any): boolean;
```

## Описание

Скалярные переменные — это переменные, содержащие `int`, `float`, `string`, `bool` и `symbol`. Типы
`array`, `object`, `null`, `undefined` — не скалярные.

## Параметры

-   `value` (any)

    Проверяемая переменная.

## Возвращаемое значение

Возвращает `true`, если значение является скалярным, иначе `false`.

## Примеры использования

### Пример 1: Проверка скалярных значений

```js
Type.isScalar(true); // true
Type.isScalar(42); // true
Type.isScalar('hello'); // true
Type.isScalar(Symbol('symbol')); // true
```

### Пример 2: Проверка не скалярных значений

```js
Type.isScalar(null); // false
Type.isScalar(undefined); // false
Type.isScalar({}); // false (объект)
Type.isScalar([]); // false (массив)
Type.isScalar(() => {}); // false (функция)
```
