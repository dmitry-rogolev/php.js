[Главная](../../../README.md) / [Обработка переменных](../../variables.md) /
[Convert](../Convert.md) / toBool

[Исходный код](../../../src/variables/Convert.mjs)

# `Convert.toBool`

`Convert.toBool` &mdash; Преобразует значение в логическое значение.

## Сигнатура метода

```ts
static toBool(value: any): boolean
```

## Описание

Метод `toBool` используется для преобразования различных типов данных в логическое значение. Если
значение является пустым массивом, метод возвращает `false`.

## Параметры

-   `value` (any): Значение, которое необходимо преобразовать.

## Возвращаемое значение

Возвращает логическое значение, соответствующее переданному значению.

## Примеры использования

### Пример 1: Преобразование пустого массива в `false`

```js
const result = Convert.toBool([]);
// Результат: false
```

### Пример 2: Преобразование пустого ассоциативного массива в `false`

```js
const result = Convert.toBool({});
// Результат: false
```

### Пример 3: Преобразование непустого массива в `true`

```js
const result = Convert.toBool([1, 2, 3]);
// Результат: true
```

### Пример 4: Преобразование других значений

```js
const result1 = Convert.toBool('example');
// Результат: true

const result2 = Convert.toBool(123);
// Результат: true

const result3 = Convert.toBool(null);
// Результат: false

const result4 = Convert.toBool(undefined);
// Результат: false
```
