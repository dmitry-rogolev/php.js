[Главная](../../../README.md) / [Обработка переменных](../../variables.md) / [Type](../Type.md) /
isNumber

[Исходный код](../../../src/variables/Type.mjs)

# `Type.isNumber`

`Type.isNumber` &mdash; Проверяет, является ли значение числом.

## Сигнатура метода

```ts
static isNumber(value: any): boolean;
```

## Описание

Функция `is_number` предназначена для проверки, является ли переданное значение числом.

Она проверяет:

1. **Тип значения**: Убеждается, что `value` имеет тип `number`.
2. **Конечность числа**: Проверяет, что значение не является `Infinity` или `NaN` с помощью
   `Number.isFinite(value)`.

## Параметры

-   `value` (any)

    Проверяемая переменная.

## Возвращаемое значение

Возвращает `true`, если значение является числом, иначе `false`.

## Примеры использования

### Пример 1: Проверка числовых значений

```js
Type.isNumber(42); // true
Type.isNumber(3.14); // true
Type.isNumber(-0.99); // true
```

### Пример 2: Проверка специальных числовых значений

```js
Type.isNumber(NaN); // false
Type.isNumber(Infinity); // false
Type.isNumber(-Infinity); // false
```

### Пример 3: Проверка значений других типов

```js
Type.isNumber('42'); // false (строка)
Type.isNumber(true); // false (логическое значение)
Type.isNumber(null); // false
Type.isNumber(undefined); // false
Type.isNumber({}); // false (объект)
Type.isNumber([]); // false (массив)
```
