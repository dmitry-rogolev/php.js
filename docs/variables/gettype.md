[Главная](../../README.md) / [Обработка переменных](../variables.md) / gettype

[Исходный код](../../src/variables/gettype.mjs)

# `gettype`

`gettype` &mdash; Определяет тип переменной.

## Сигнатура функции

```ts
function gettype(value: any): string;
```

## Описание

Функция `gettype` используется для определения типа переменной. Она возвращает строку,
представляющую тип переменной.

## Параметры

-   `value` (any)

    Переменная, тип которой необходимо определить.

## Возвращаемое значение

Функция возвращает:

-   Строку, представляющую тип переменной.

## Примеры использования

### Пример 1: Определение типа переменной

```js
const result1 = gettype(null);
// Результат: 'null'

const result2 = gettype(NaN);
// Результат: 'NaN'

const result3 = gettype(123);
// Результат: 'integer'

const result4 = gettype(123.45);
// Результат: 'double'

const result5 = gettype('example');
// Результат: 'string'

const result6 = gettype(true);
// Результат: 'boolean'

const result7 = gettype(undefined);
// Результат: 'undefined'

const result8 = gettype([1, 2, 3]);
// Результат: 'array'

const result9 = gettype({ key: 'value' });
// Результат: 'array'

class MyClass {}
const result10 = gettype(MyClass);
// Результат: 'class'

const result11 = gettype(new MyClass());
// Результат: 'object'
```
