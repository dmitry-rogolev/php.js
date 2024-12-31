[Главная](../../README.md) / [Обработка переменных](../variables.md) / empty

[Исходный код](../../src/variables/empty.mjs)

# `empty`

`empty` &mdash; Проверяет, является ли переменная пустой.

## Сигнатура функции

```ts
function empty(variable: any): boolean;
```

## Описание

Функция `empty` используется для проверки, является ли переменная пустой. Пустыми считаются значения
`null`, `undefined`, пустая строка, `0`, `false`, пустой массив и пустой объект (ассоциативный
массив).

## Параметры

-   `variable` (any)

    Переменная, которую необходимо проверить на пустоту.

## Возвращаемое значение

Функция возвращает:

-   `true`, если переменная пустая, и `false` в противном случае.

## Примеры использования

### Пример 1: Проверка пустых значений

```js
const result1 = empty(null);
// Результат: true

const result2 = empty(undefined);
// Результат: true

const result3 = empty('');
// Результат: true

const result4 = empty(0);
// Результат: true

const result5 = empty(false);
// Результат: true

const result6 = empty([]);
// Результат: true

const result7 = empty({});
// Результат: true
```

### Пример 2: Проверка непустых значений

```js
const result1 = empty('example');
// Результат: false

const result2 = empty(123);
// Результат: false

const result3 = empty(true);
// Результат: false

const result4 = empty([1, 2, 3]);
// Результат: false

const result5 = empty({ key: 'value' });
// Результат: false
```
