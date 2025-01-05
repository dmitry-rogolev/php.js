[Главная](../../../README.md) / [Обработка переменных](../../variables.md) /
[Convert](../Convert.md) / toInteger

[Исходный код](../../../src/variables/Convert.mjs)

# `Convert.toInteger`

`Convert.toInteger` &mdash; Преобразует значение в целое число.

## Сигнатура метода

```ts
static toInteger(value: any, base: number = 10): number
```

## Описание

Метод `toInteger` является синонимом метода `toInt` и используется для преобразования различных
типов данных в целое число. Если значение не является числом или строкой, метод возвращает `1` для
истинных значений и `0` для ложных значений.

## Параметры

-   `value` (any): Значение, которое необходимо преобразовать.
-   `base` (number): Основание системы счисления для преобразования строки в число. По умолчанию
    `10`.

## Возвращаемое значение

Возвращает целое число, соответствующее переданному значению.

## Примеры использования

### Пример 1: Преобразование строки в целое число

```js
const result = Convert.toInteger('123');
// Результат: 123
```

### Пример 2: Преобразование числа с плавающей точкой в целое число

```js
const result = Convert.toInteger(123.45);
// Результат: 123
```

### Пример 3: Преобразование булевых значений

```js
const result1 = Convert.toInteger(true);
// Результат: 1

const result2 = Convert.toInteger(false);
// Результат: 0
```

### Пример 4: Преобразование других значений

```js
const result1 = Convert.toInteger(null);
// Результат: 0

const result2 = Convert.toInteger(undefined);
// Результат: 0

const result3 = Convert.toInteger('example');
// Результат: 0
```

### Пример 5: Преобразование строки с основанием системы счисления

```js
const result1 = Convert.toInteger('10', 2);
// Результат: 2

const result2 = Convert.toInteger('A', 16);
// Результат: 10

const result3 = Convert.toInteger('7', 8);
// Результат: 7
```
