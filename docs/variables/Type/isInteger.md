[Главная](../../../README.md) / [Обработка переменных](../../variables.md) / [Type](../Type.md) /
isInteger

[Исходный код](../../../src/variables/Type.mjs)

# `Type.isInteger`

`Type.isInteger` &mdash; Проверяет, является ли значение целым числом.

## Сигнатура метода

```ts
static isInteger(value: any): boolean;
```

## Описание

Функция `is_int` определяет, является ли переданное значение целым числом.

Она выполняет следующие проверки:

1. **Тип значения**: Убеждается, что `value` имеет тип `number`.
2. **Конечность числа**: Проверяет, что значение не является `Infinity` или `NaN` с помощью
   `Number.isFinite(value)`.
3. **Целочисленность**: Убедится, что остаток от деления числа на 1 равен нулю (`value % 1 === 0`).

Если значение соответствует всем этим условиям, оно считается целым числом.

## Параметры

-   `value` (any)

    Проверяемая переменная.

## Возвращаемое значение

Возвращает `true`, если значение является целым числом, иначе `false`.

## Примеры использования

### Пример 1: Проверка целых чисел

```js
Type.isInteger(42); // true
Type.isInteger(0); // true
Type.isInteger(-123); // true
```

### Пример 2: Проверка дробных чисел

```js
Type.isInteger(3.14); // false
Type.isInteger(-0.001); // false
```

### Пример 3: Некорректные типы данных

```js
Type.isInteger('42'); // false (строка)
Type.isInteger(true); // false (логическое значение)
Type.isInteger(null); // false (null)
Type.isInteger(undefined); // false (undefined)
```

### Пример 4: Бесконечные и некорректные числовые значения

```js
Type.isInteger(Infinity); // false (бесконечность)
Type.isInteger(-Infinity); // false (отрицательная бесконечность)
Type.isInteger(NaN); // false (не число)
```
