[Главная](../../../README.md) / [Обработка переменных](../../variables.md) / [Type](../Type.md) /
isBoolean

[Исходный код](../../../src/variables/Type.mjs)

# `Type.isBoolean`

`Type.isBoolean` &mdash; Проверяет, является ли переданное значение логическим типом (`boolean`).

## Сигнатура метода

```ts
static isBoolean(value: any): boolean;
```

## Описание

В JavaScript логическое значение может быть только двумя состояниями: `true` или `false`. Функция
проверяет тип переданного значения с использованием оператора `typeof`. Если значение является
примитивом типа `boolean`, функция возвращает `true`. Для всех других типов (включая объекты,
строки, числа, `null`, `undefined` и другие) функция вернёт `false`.

### Примечание

-   Функция возвращает `false` для объектов типа `Boolean`, созданных с помощью конструктора
    `new Boolean()`.
-   Возвращает `false` для массивов, объектов и других типов данных, отличных от `boolean`.

## Параметры

-   `value` (any)

    Проверяемая переменная.

## Возвращаемое значение

Возвращает `true`, если значение `value` является логическим (`boolean`), иначе `false`.

## Примеры использования

### Пример 1: Проверка логических значений

```js
Type.isBoolean(true); // Возвращает: true
Type.isBoolean(false); // Возвращает: true
```

### Пример 2: Проверка значений других типов

```js
Type.isBoolean(0); // Возвращает: false
Type.isBoolean('true'); // Возвращает: false
Type.isBoolean(null); // Возвращает: false
Type.isBoolean([]); // Возвращает: false
Type.isBoolean({}); // Возвращает: false
Type.isBoolean(new Boolean(true)); // Возвращает: false
```
