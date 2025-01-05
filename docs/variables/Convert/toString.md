[Главная](../../../README.md) / [Обработка переменных](../../variables.md) /
[Convert](../Convert.md) / toString

[Исходный код](../../../src/variables/Convert.mjs)

# `Convert.toString`

`Convert.toString` &mdash; Преобразует значение в строку.

## Сигнатура метода

```ts
static toString(value: any): string
```

## Описание

Метод `toString` используется для преобразования различных типов данных в строку. Он обрабатывает
массивы, объекты, классы, функции, символы и другие типы данных, возвращая их строковое
представление.

## Параметры

-   `value` (any): Значение, которое необходимо преобразовать.

## Возвращаемое значение

Возвращает строку, соответствующую переданному значению.

## Примеры использования

### Пример 1: Преобразование строки

```js
const result = Convert.toString('example');
// Результат: 'example'
```

### Пример 2: Преобразование числа

```js
const result = Convert.toString(123);
// Результат: '123'
```

### Пример 3: Преобразование булевых значений

```js
const result1 = Convert.toString(true);
// Результат: 'true'

const result2 = Convert.toString(false);
// Результат: 'false'
```

### Пример 4: Преобразование null и undefined

```js
const result1 = Convert.toString(null);
// Результат: 'null'

const result2 = Convert.toString(undefined);
// Результат: 'undefined'
```

### Пример 5: Преобразование массива

```js
const arr = [1, 2, 3];
const result = Convert.toString(arr);
// Результат: '[\n    1,\n    2,\n    3,\n]'
```

### Пример 6: Преобразование объекта

```js
const obj = { key: 'value' };
const result = Convert.toString(obj);
// Результат: '{\n    key: 'value',\n}'
```

### Пример 7: Преобразование функции

```js
const func = function () {};
const result = Convert.toString(func);
// Результат: 'function func() {}'
```

### Пример 8: Преобразование символа

```js
const symbol = Symbol('example');
const result = Convert.toString(symbol);
// Результат: 'Symbol(example)'
```

### Пример 9: Преобразование BigInt

```js
const bigInt = BigInt(123);
const result = Convert.toString(bigInt);
// Результат: '123'
```

### Пример 10: Преобразование класса

```js
class MyClass {
    static test = 'test';
}
const result = Convert.toString(MyClass);
// Результат: 'class MyClass {}'
```

### Пример 11: Преобразование экземпляра класса

```js
class MyClass {}
const instance = new MyClass();
const result = Convert.toString(instance);
// Результат: 'object MyClass'
```

### Пример 12: Преобразование интерфейса

```js
class MyContract extends Interface {}
const result = Convert.toString(MyContract);
// Результат: 'interface MyContract {}'
```
