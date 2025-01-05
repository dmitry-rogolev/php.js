[Главная](../../../README.md) / [Обработка переменных](../../variables.md) / [Type](../Type.md) /
isNull

[Исходный код](../../../src/variables/Type.mjs)

# `Type.isNull`

`Type.isNull` &mdash; Проверяет, является ли значение `null`.

## Сигнатура метода

```ts
static isNull(value: any): boolean;
```

## Описание

Функция `is_null` предназначена для проверки, является ли переданное значение `null`.

## Параметры

-   `value` (any)

    Проверяемая переменная.

## Возвращаемое значение

Возвращает `true`, если значение является `null`, иначе `false`.

## Примеры использования

### Пример 1: Проверка значения `null`

```js
Type.isNull(null); // true
```

### Пример 2: Проверка значений, не являющихся `null`

```js
Type.isNull(undefined); // false
Type.isNull(0); // false
Type.isNull(''); // false
Type.isNull(false); // false
Type.isNull({}); // false
Type.isNull([]); // false
```
