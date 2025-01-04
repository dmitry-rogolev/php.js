[Главная](../../README.md) / [Обработка переменных](../variables.md) / print_type

[Исходный код](../../src/variables/print_type.mjs)

# `print_type`

`print_type` &mdash; Преобразует значение в строку с указанием типа и выводит его на консоль.

## Сигнатура функции

```ts
function print_type(value: any, return_result: boolean = false): string | undefined;
```

## Описание

Функция `print_type` используется для преобразования различных типов данных в строку с указанием
типа и вывода их на консоль. Она обрабатывает массивы, объекты, классы, функции, символы и другие
типы данных, возвращая их строковое представление с указанием типа.

## Параметры

-   `value` (any)

    Значение, которое необходимо преобразовать в строку с указанием типа и вывести на консоль.

-   `return_result` (boolean)

    Если `true`, функция возвращает строковое представление значения переменной. Если `false`,
    функция выводит строковое представление значения переменной на консоль.

## Возвращаемое значение

Функция возвращает:

-   Строковое представление значения переменной с указанием типа, если параметр `return_result`
    равен `true`. В противном случае возвращает `undefined`.

## Примеры использования

### Пример 1: Преобразование строки

```js
print_type('example');
```

Вывод:

```txt
string(7) "example"
```

### Пример 2: Преобразование числа

```js
print_type(123);
```

Вывод:

```txt
int(123)
```

```js
print_type(123.45);
```

Вывод:

```txt
float(123.45)
```

### Пример 3: Преобразование булевых значений

```js
print_type(true);
```

Вывод:

```txt
bool(true)
```

```js
print_type(false);
```

Вывод:

```txt
bool(false)
```

### Пример 4: Преобразование null и undefined

```js
print_type(null);
```

Вывод:

```txt
null
```

```js
print_type(undefined);
```

Вывод:

```txt
undefined
```

### Пример 5: Преобразование массива

```js
const arr = [1, 2, 3];
print_type(arr);
```

Вывод:

```txt
array(3) [
    0: int(1),
    1: array(1) [
        0: int(2),
    ],
    2: int(3),
]
```

### Пример 6: Преобразование ассоциативного массива

```js
const obj = { key: 'value' };
print_type(obj);
```

Вывод:

```txt
array(1) {
    key: string(5) "value",
}
```

### Пример 7: Преобразование функции

```js
const func = function () {};
print_type(func);
```

Вывод:

```txt
function func() {}
```

### Пример 8: Преобразование символа

```js
const symbol = Symbol('example');
print_type(symbol);
```

Вывод:

```txt
Symbol(example)
```

### Пример 9: Преобразование класса

```js
class MyClass {
    static test = 'test';
}
print_type(MyClass);
```

Вывод:

```txt
class MyClass {
    test = string(4) "test";
}
```

### Пример 10: Преобразование экземпляра класса

```js
class MyClass {
    test = 'test';
}
const instance = new MyClass();
print_type(instance);
```

Вывод:

```txt
object(MyClass) (1) {
    test: string(4) "test",
}
```

### Пример 11: Преобразование интерфейса

```js
class MyContract extends Interface {}
print_type(MyContract);
```

Вывод:

```txt
interface MyContract extends Interface {}
```
