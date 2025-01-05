[Главная](../../../README.md) / [Обработка переменных](../../variables.md) /
[Convert](../Convert.md) / toArray

[Исходный код](../../../src/variables/Convert.mjs)

# `Convert.toArray`

`Convert.toArray` &mdash; Преобразует значение в массив.

## Сигнатура метода

```ts
static toArray(value: any): Array|Object
```

## Описание

Метод `toArray` используется для преобразования различных типов данных в массив. Если значение уже
является массивом (тип `Array` или ассоциативный массив), возвращается оно же. Объекты (экземпляры
классов) преобразуются в массив с одним элементом.

## Параметры

-   `value` (any): Значение, которое необходимо преобразовать.

## Возвращаемое значение

Возвращает массив, содержащий переданное значение. Если значение уже является массивом, возвращается
оно же.

## Примеры использования

### Пример 1: Преобразование строки в массив

```js
const result = Convert.toArray('example');
// Результат: ["example"]
```

### Пример 2: Преобразование числа в массив

```js
const result = Convert.toArray(123);
// Результат: [123]
```

### Пример 3: Преобразование массива (без изменений)

```js
const result = Convert.toArray([1, 2, 3]);
// Результат: [1, 2, 3]
```

### Пример 4: Преобразование объекта в массив

```js
const result = Convert.toArray({ key: 'value' });
// Результат: { key: "value" }

const proto = Object.getPrototypeOf(result);
// Результат: null

for (const [key, value] of result) {
    console.log(key, value);
}
// Результат: 'key', 'value'
```

### Пример 5: Преобразование экземпляра класса в массив

```js
class MyClass {}

const instance = new MyClass();
const result = Convert.toArray(instance);
// Результат: [instance]
```

### Пример 6: Преобразование null

```js
const result = Convert.toArray(null);
// Результат: []
```

### Пример 7: Преобразование undefined

```js
const result = Convert.toArray(undefined);
// Результат: []
```
