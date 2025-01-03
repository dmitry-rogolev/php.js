[Главная](../../README.md) / [Обработка переменных](../variables.md) / print

[Исходный код](../../src/variables/print.mjs)

# `print`

`print` &mdash; Преобразует значение в строку и выводит его на консоль.

## Сигнатура функции

```ts
function print(value: any, return_result: boolean = false): string | undefined;
```

## Описание

Функция `print` используется для преобразования различных типов данных в строку и вывода их на
консоль. Она обрабатывает массивы, объекты, классы, функции, символы и другие типы данных, возвращая
их строковое представление.

## Параметры

-   `value` (any)

    Значение, которое необходимо преобразовать в строку и вывести на консоль.

-   `return_result` (boolean)

    Если `true`, функция возвращает строковое представление значения переменной. Если `false`,
    функция выводит строковое представление значения переменной на консоль.

## Возвращаемое значение

Функция возвращает:

-   Строковое представление значения переменной, если параметр `return_result` равен `true`. В
    противном случае возвращает `undefined`.

## Примеры использования

### Пример 1: Преобразование строки

```js
print('example');
```

Вывод:

    "example"

### Пример 2: Преобразование числа

```js
print(123);
```

Вывод:

    123

### Пример 3: Преобразование булевых значений

```js
print(true);
```

Вывод:

    true

```js
print(false);
```

Вывод:

    false

### Пример 4: Преобразование null и undefined

```js
print(null);
```

Вывод:

    null

```js
print(undefined);
```

Вывод:

    undefined

### Пример 5: Преобразование массива

```js
const arr = [1, 2, 3];
print(arr);
```

Вывод:

    [
    	0: 1,
    	1: 2,
    	2: 3,
    ]

### Пример 6: Преобразование ассоциативного массива

```js
const obj = { key: 'value' };
print(obj);
```

Вывод:

    {
    	key: "value",
    }

### Пример 7: Преобразование функции

```js
const func = function () {};
print(func);
```

Вывод:

    function func() {}

### Пример 8: Преобразование символа

```js
const symbol = Symbol('example');
print(symbol);
```

Вывод:

    Symbol(example)

### Пример 9: Преобразование класса

```js
class MyClass {
    static test = 'test';
}
print(MyClass);
```

Вывод:

    class MyClass {
    	test = "test";
    }

### Пример 10: Преобразование экземпляра класса

```js
class MyClass {
    test = 'test';
}
const instance = new MyClass();
print(instance);
```

Вывод:

    object MyClass {
    	test = "test";
    }

### Пример 11: Преобразование интерфейса

```js
class MyContract extends Interface {}
print(MyContract);
```

Вывод:

    interface MyContract extends Interface {}
