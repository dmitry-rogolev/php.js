[Главная](../../../README.md) / [Обработка переменных](../../variables.md) / [Type](../Type.md) /
isFloat

[Исходный код](../../../src/variables/Type.mjs)

# `Type.isFloat`

`Type.isFloat` &mdash; Проверяет, является ли значение числом с плавающей точкой.

## Сигнатура метода

```ts
static isFloat(value: any): boolean;
```

## Описание

Функция `is_float` проверяет, является ли переданное значение числом с дробной частью, которое
отличается от целого числа.

Она работает следующим образом:

1. Проверяет, что значение имеет тип `number`.
2. Исключает значения `NaN`, которые также относятся к типу `number`, но не считаются числовыми
   значениями.
3. Проверяет, что у числа есть дробная часть, проверяя остаток от деления на `1`
   (`value % 1 !== 0`).

Значения, которые не являются числами или числа без дробной части, не считаются числами с плавающей
точкой.

## Параметры

-   `value` (any)

    Значение для проверки.

## Возвращаемое значение

Возвращает `true`, если значение является числом с плавающей точкой, иначе `false`.

## Примеры использования

### Пример 1: Числа с плавающей точкой

```js
Type.isFloat(3.14); // true
Type.isFloat(-0.5); // true
Type.isFloat(0.1 + 0.2); // true
```

### Пример 2: Целые числа

```js
Type.isFloat(0); // false
Type.isFloat(42); // false
Type.isFloat(-100); // false
```

### Пример 3: Нечисловые значения

```js
Type.isFloat('3.14'); // false
Type.isFloat(NaN); // false
Type.isFloat(null); // false
Type.isFloat(undefined); // false
Type.isFloat(true); // false
Type.isFloat({}); // false
Type.isFloat([]); // false
```

### Пример 4: Специальные значения

```js
Type.isFloat(Infinity); // false
Type.isFloat(-Infinity); // false
```
