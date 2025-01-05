[Главная](../../../README.md) / [Обработка переменных](../../variables.md) / [Type](../Type.md) /
isClass

[Исходный код](../../../src/variables/Type.mjs)

# `Type.isClass`

`Type.isClass` &mdash; Проверяет, является ли переданная переменная классом.

## Сигнатура метода

```ts
static isClass(value: any): boolean;
```

## Описание

В JavaScript классы являются функциями, но с уникальным поведением.

Для определения класса функция проверяет:

1. Что переданная переменная является функцией.
2. Что строковое представление функции начинается с `class `.

### Примечание

Конструкторы функций, созданные с помощью `function`, не будут распознаны как классы.

Для примера:

```js
function Foo() {}
Type.isClass(Foo); // Возвращает: false
```

В отличие от классов, которые выглядят так:

```js
class MyClass {}
Type.isClass(MyClass); // Возвращает: true
```

## Параметры

-   `value` (any)

    Проверяемая переменная.

## Возвращаемое значение

Возвращает `true`, если значение является классом, иначе `false`.

## Примеры использования

### Пример 1: Классы

```js
class MyClass {}
Type.isClass(MyClass); // true
```

### Пример 2: Функции-конструкторы

```js
function MyFunction() {}
Type.isClass(MyFunction); // false
```

### Пример 3: Объекты и примитивы

```js
Type.isClass({}); // false
Type.isClass([]); // false
Type.isClass(null); // false
Type.isClass(42); // false
```
