[Главная](../../../README.md) / [Обработка переменных](../../variables.md) / [Type](../Type.md) /
isObject

[Исходный код](../../../src/variables/Type.mjs)

# `Type.isObject`

`Type.isObject` &mdash; Проверяет, является ли переданное значение объектом, созданным с
использованием класса.

## Сигнатура метода

```ts
static isObject(value: any): boolean;
```

## Описание

В JavaScript объекты могут быть созданы как с использованием классов, так и с помощью
функций-конструкторов или простых объектов. Для определения, является ли значение объектом,
созданным с использованием класса, функция выполняет несколько проверок:

1. Проверка, что значение является объектом (с использованием `instanceof Object`).
2. Проверка, что у объекта есть конструктор, и что его строковое представление начинается с 'class',
   что характерно для объектов, созданных с использованием классов.

Это позволяет корректно отличить обычные объекты, массивы, примитивы и классовые объекты.

### Примечание

-   Если объект был создан с помощью `class`, то его конструктор будет иметь строковое
    представление, начинающееся с "class".
-   Массивы и обычные объекты, созданные с использованием `Object` или функции-конструктора, будут
    исключены.

## Параметры

-   `value` (any)

    Проверяемая переменная.

## Возвращаемое значение

Возвращает `true`, если значение является объектом, созданным с использованием класса, иначе
возвращает `false`.

## Примеры использования

### Пример 1: Обычные объекты

```js
Type.isObject({}); // false - это обычный объект, не созданный с помощью класса
```

### Пример 2: Массивы

```js
Type.isObject([]); // false - это массив, а не объект, созданный с использованием класса
```

### Пример 3: Объект, созданный с использованием `Date`

```js
Type.isObject(new Date()); // false - объект Date, не являющийся классом, а встроенным объектом
```

### Пример 4: Классы

```js
class MyClass {}
Type.isObject(new MyClass()); // true - это объект, созданный с использованием класса
```

### Пример 5: Примитивы и другие объекты

```js
Type.isObject(null); // false - это не объект
Type.isObject(42); // false - это не объект
Type.isObject(new Map()); // false - объект Map, но не класс
```