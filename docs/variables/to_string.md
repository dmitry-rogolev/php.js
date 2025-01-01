[Главная](../../README.md) / [Обработка переменных](../variables.md) / to_string

[Исходный код](../../src/variables/to_string.mjs)

# `to_string`

`to_string` &mdash; Преобразует значение в строку.

## Сигнатура функции

```ts
function to_string(value: any): string;
```

## Описание

Функция `to_string` используется для преобразования различных типов данных в строку. Она
обрабатывает массивы, объекты, классы, функции, символы и другие типы данных, возвращая их строковое
представление.

## Параметры

-   `value` (any)

    Значение, которое необходимо преобразовать в строку.

## Возвращаемое значение

Функция возвращает:

-   Строку, соответствующую переданному значению.

## Примеры использования

### Пример 1: Преобразование строки

```js
const result = to_string('example');
// Результат: 'example'
```

### Пример 2: Преобразование числа

```js
const result = to_string(123);
// Результат: '123'
```

### Пример 3: Преобразование булевых значений

```js
const result1 = to_string(true);
// Результат: 'true'

const result2 = to_string(false);
// Результат: 'false'
```

### Пример 4: Преобразование null и undefined

```js
const result1 = to_string(null);
// Результат: 'null'

const result2 = to_string(undefined);
// Результат: 'undefined'
```

### Пример 5: Преобразование массива

```js
const arr = [1, 2, 3];
const result = to_string(arr);
// Результат: '[\n    1,\n    2,\n    3,\n]'
```

### Пример 6: Преобразование ассоциативного массива

```js
const obj = { key: 'value' };
const result = to_string(obj);
// Результат: '{\n    key: 'value',\n}'
```

### Пример 7: Преобразование функции

```js
const func = function () {};
const result = to_string(func);
// Результат: 'function func() {}'
```

### Пример 8: Преобразование символа

```js
const symbol = Symbol('example');
const result = to_string(symbol);
// Результат: 'Symbol(example)'
```

### Пример 9: Преобразование BigInt

```js
const bigInt = BigInt(123);
const result = to_string(bigInt);
// Результат: '123'
```

### Пример 10: Преобразование класса

```js
class MyClass {
    static test = 'test';
}
const result = to_string(MyClass);
// Результат: 'class MyClass {}'
```

### Пример 11: Преобразование экземпляра класса

```js
class MyClass {}
const instance = new MyClass();
const result = to_string(instance);
// Результат: 'object MyClass'
```

### Пример 12: Преобразование интерфейса

```js
class MyContract extends Interface {}
const result = to_string(MyContract);
// Результат: 'interface MyContract {}'
```
