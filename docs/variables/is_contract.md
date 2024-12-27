[Главная](../../README.md) / [Обработка переменных](../variables.md) / is_contract

[Исходный код](../../src/variables/is_contract.mjs)

# is_contract

`is_contract` &mdash; Проверяет, является ли переданный класс контрактом, основанным на классе
`Interface`.

## Сигнатура функции

```ts
function is_contract(value: any): boolean;
```

## Параметры

-   `value` {any}

    Проверяемое значение. Ожидается, что это класс, который может наследовать интерфейс `Interface`.

## Описание

Функция определяет, расширяет ли переданный класс - класс `Interface` или его наследников. или его
производные. Она анализирует цепочку прототипов переданного класса, чтобы определить, есть ли в ней
`Interface`.

Класс должен быть создан с использованием синтаксиса ES6 (`class`) и наследовать интерфейс
`Interface` напрямую или через другой подкласс.

## Возвращаемое значение

Возвращает `true`, если переданный класс расширяет `Interface`, иначе `false`.

## Примеры использования

### Проверка классов

```js
class MyContract extends Interface {}
class AnotherClass {}

console.log(is_contract(MyContract)); // true
console.log(is_contract(AnotherClass)); // false
```

### Наследование интерфейсов

```js
class ExtendedInterface extends Interface {}

class MyContract extends ExtendedInterface {}

console.log(is_contract(MyContract)); // true
console.log(is_contract(Interface)); // false
```

### Проверка некорректных значений

```js
console.log(is_contract(null)); // false
console.log(is_contract(undefined)); // false
console.log(is_contract(42)); // false
console.log(is_contract({})); // false
console.log(is_contract(function Foo() {})); // false
```
