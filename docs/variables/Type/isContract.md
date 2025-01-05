[Главная](../../../README.md) / [Обработка переменных](../../variables.md) / [Type](../Type.md) /
isContract

[Исходный код](../../../src/variables/Type.mjs)

# `Type.isContract`

`Type.isContract` &mdash; Проверяет, является ли переданный класс контрактом, основанным на классе
`Interface`.

## Сигнатура метода

```ts
static isContract(value: any): boolean;
```

## Описание

Функция определяет, расширяет ли переданный класс - класс `Interface` или его наследников. Она
анализирует цепочку прототипов переданного класса, чтобы определить, есть ли в ней `Interface`.

Класс должен быть создан с использованием синтаксиса ES6 (`class`) и расширять класс `Interface`
напрямую или через другой подкласс.

## Параметры

-   `value` (any)

    Проверяемое значение.

## Возвращаемое значение

Возвращает `true`, если переданный класс расширяет `Interface`, иначе `false`.

## Примеры использования

### Пример 1: Интерфейс и классы

```js
class MyContract extends Interface {}
class AnotherClass {}

console.log(Type.isContract(MyContract)); // true
console.log(Type.isContract(AnotherClass)); // false
```

### Пример 2: Пример с наследованием интерфейсов

```js
class ExtendedInterface extends Interface {}

class MyContract extends ExtendedInterface {}

console.log(Type.isContract(MyContract)); // true
console.log(Type.isContract(Interface)); // false
```

### Пример 3: Проверка некорректных значений

```js
console.log(Type.isContract(null)); // false
console.log(Type.isContract(undefined)); // false
console.log(Type.isContract(42)); // false
console.log(Type.isContract({})); // false
console.log(Type.isContract(function Foo() {})); // false
```
