[Главная](../../README.md) / [Обработка переменных](../variables.md) / is_scalar

[Исходный код](../../src/variables/is_scalar.mjs)

# `is_scalar`

`is_scalar` &mdash; Проверяет, является ли значение скалярным.

## Сигнатура функции

```ts
function is_scalar(value: any): boolean;
```

## Параметры

-   `value` (any)

    Значение, которое необходимо проверить на принадлежность к скалярным типам.

## Описание

Функция `is_scalar` предназначена для проверки, является ли переданное значение скалярным.

Скалярные типы включают:

-   `boolean` (логические значения)
-   `number` (числа)
-   `string` (строки)
-   `symbol` (символы)

Функция возвращает `false` для объектов, массивов, функций, `null` и `undefined`.

## Возвращаемое значение

Функция возвращает:

-   `true`, если значение является скалярным.
-   `false` в противном случае.

## Примеры использования

### Пример 1: Проверка скалярных значений

```js
is_scalar(true); // true
is_scalar(42); // true
is_scalar('hello'); // true
is_scalar(Symbol('symbol')); // true
```

### Пример 2: Проверка не скалярных значений

```js
is_scalar(null); // false
is_scalar(undefined); // false
is_scalar({}); // false (объект)
is_scalar([]); // false (массив)
is_scalar(() => {}); // false (функция)
```