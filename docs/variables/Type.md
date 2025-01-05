[Главная](../../README.md) / [Обработка переменных](../variables.md) / Type

[Исходный код](../../src/variables/Type.mjs)

# `Type`

`Type` &mdash; Класс, предоставляющий статические методы для проверки типов данных.

## Описание

Класс `Type` содержит набор статических методов, которые позволяют проверять типы данных в
JavaScript. Эти методы могут быть использованы для проверки, является ли значение массивом,
логическим значением, функцией, классом, контрактом, числом с плавающей точкой, целым числом,
итерируемым объектом, объектом, скалярным значением, строкой, символом или `undefined`.

## Методы

-   [isArray](./Type/isArray.md) &mdash; Проверяет, является ли значение массивом или ассоциативным
    массивом.
-   [isBool](./Type/isBool.md) &mdash; Проверяет, является ли значение логическим (`boolean`).
-   [isBoolean](./Type/isBoolean.md) &mdash; Проверяет, является ли значение логическим (`boolean`).
-   [isCallable](./Type/isCallable.md) &mdash; Проверяет, может ли значение быть вызвано как
    функция.
-   [isClass](./Type/isClass.md) &mdash; Проверяет, является ли значение классом.
-   [isContract](./Type/isContract.md) &mdash; Проверяет, является ли значение контрактом,
    основанным на классе `Interface`.
-   [isCountable](./Type/isCountable.md) &mdash; Проверяет, является ли значение счётным.
-   [isDouble](./Type/isDouble.md) &mdash; Проверяет, является ли значение числом с плавающей
    точкой.
-   [isFloat](./Type/isFloat.md) &mdash; Проверяет, является ли значение числом с плавающей точкой.
-   [isInt](./Type/isInt.md) &mdash; Проверяет, является ли значение целым числом.
-   [isInteger](./Type/isInteger.md) &mdash; Проверяет, является ли значение целым числом.
-   [isIterable](./Type/isIterable.md) &mdash; Проверяет, является ли значение итерируемым.
-   [isLong](./Type/isLong.md) &mdash; Проверяет, является ли значение целым числом.
-   [isNull](./Type/isNull.md) &mdash; Проверяет, является ли значение `null`.
-   [isNumber](./Type/isNumber.md) &mdash; Проверяет, является ли значение числом.
-   [isNumeric](./Type/isNumeric.md) &mdash; Проверяет, является ли значение числом или числовой
    строкой.
-   [isObject](./Type/isObject.md) &mdash; Проверяет, является ли значение объектом, созданным с
    использованием класса.
-   [isScalar](./Type/isScalar.md) &mdash; Проверяет, является ли значение скалярным.
-   [isString](./Type/isString.md) &mdash; Проверяет, является ли значение строкой.
-   [isSymbol](./Type/isSymbol.md) &mdash; Проверяет, является ли значение символом.
-   [isUndefined](./Type/isUndefined.md) &mdash; Проверяет, является ли значение `undefined`.

## Примеры использования

### Пример 1: Проверка массива

```js
Type.isArray([1, 2, 3]); // true
```

### Пример 2: Проверка логического значения

```js
Type.isBool(true); // true
```

### Пример 3: Проверка функции

```js
Type.isCallable(() => {}); // true
```

### Пример 4: Проверка класса

```js
Type.isClass(class {}); // true
```

### Пример 5: Проверка контракта

```js
Type.isContract(class extends Interface {}); // true
```

### Пример 6: Проверка счётного значения

```js
Type.isCountable([1, 2, 3]); // true
```

### Пример 7: Проверка числа с плавающей точкой

```js
Type.isDouble(3.14); // true
```

### Пример 8: Проверка целого числа

```js
Type.isInt(42); // true
```

### Пример 9: Проверка итерируемого объекта

```js
Type.isIterable([]); // true
```

### Пример 10: Проверка значения `null`

```js
Type.isNull(null); // true
```

### Пример 11: Проверка числа

```js
Type.isNumber(42); // true
```

### Пример 12: Проверка числовой строки

```js
Type.isNumeric('42'); // true
```

### Пример 13: Проверка объекта

```js
Type.isObject({}); // true
```

### Пример 14: Проверка скалярного значения

```js
Type.isScalar(42); // true
```

### Пример 15: Проверка строки

```js
Type.isString('hello'); // true
```

### Пример 16: Проверка символа

```js
Type.isSymbol(Symbol('symbol')); // true
```

### Пример 17: Проверка значения `undefined`

```js
Type.isUndefined(undefined); // true
```
