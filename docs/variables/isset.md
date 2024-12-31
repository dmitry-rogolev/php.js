[Главная](../../README.md) / [Обработка переменных](../variables.md) / isset

[Исходный код](../../src/variables/isset.mjs)

# `isset`

`isset` &mdash; Проверяет, определены ли переменные.

## Сигнатура функции

```ts
function isset(...variables: any[]): boolean;
```

## Описание

Функция `isset` используется для проверки, определены ли переменные. Она возвращает `true`, если все
переменные определены, и `false` в противном случае.

## Параметры

-   `...variables` (any[])

    Переменные, которые необходимо проверить на определенность.

## Возвращаемое значение

Функция возвращает:

-   `true`, если все переменные определены, и `false` в противном случае.

## Примеры использования

### Пример 1: Проверка определенных значений

```js
const result1 = isset('example');
// Результат: true

const result2 = isset(123);
// Результат: true

const result3 = isset(true);
// Результат: true

const result4 = isset([1, 2, 3]);
// Результат: true

const result5 = isset({ key: 'value' });
// Результат: true
```

### Пример 2: Проверка значений null и undefined

```js
const result1 = isset(null);
// Результат: false

const result2 = isset(undefined);
// Результат: false
```

### Пример 3: Проверка нескольких значений

```js
const result1 = isset('example', null);
// Результат: false

const result2 = isset(123, undefined);
// Результат: false

const result3 = isset(true, 'example', 123);
// Результат: true
```
