[Главная](../../../README.md) / [Обработка переменных](../../variables.md) /
[Convert](../Convert.md) / toDouble

[Исходный код](../../../src/variables/Convert.mjs)

# `Convert.toDouble`

`Convert.toDouble` &mdash; Преобразует значение в число с плавающей точкой.

## Сигнатура метода

```ts
static toDouble(value: any): number
```

## Описание

Метод `toDouble` используется для преобразования различных типов данных в число с плавающей точкой.
Он является оберткой над методом `toFloat`.

## Параметры

-   `value` (any): Значение, которое необходимо преобразовать.

## Возвращаемое значение

Возвращает число с плавающей точкой, соответствующее переданному значению.

## Примеры использования

### Пример 1: Преобразование строки в число с плавающей точкой

```js
const result = Convert.toDouble('123.45');
// Результат: 123.45
```

### Пример 2: Преобразование целого числа в число с плавающей точкой

```js
const result = Convert.toDouble(123);
// Результат: 123.0
```

### Пример 3: Преобразование булевых значений

```js
const result1 = Convert.toDouble(true);
// Результат: 1.0

const result2 = Convert.toDouble(false);
// Результат: 0.0
```

### Пример 4: Преобразование других значений

```js
const result1 = Convert.toDouble(null);
// Результат: 0.0

const result2 = Convert.toDouble(undefined);
// Результат: 0.0

const result3 = Convert.toDouble('example');
// Результат: 0.0
```
