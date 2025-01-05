[Главная](../../../README.md) / [Обработка переменных](../../variables.md) /
[Convert](../Convert.md) / toObject

[Исходный код](../../../src/variables/Convert.mjs)

# `Convert.toObject`

`Convert.toObject` &mdash; Преобразует значение в объект.

## Сигнатура метода

```ts
static toObject(value: any): object
```

## Описание

Метод `toObject` используется для преобразования различных типов данных в объект. Если значение уже
является объектом, оно возвращается без изменений. Если значение является классом, возвращается
новый экземпляр этого класса. Если значение является массивом, элементы массива копируются в новый
объект. Для других значений создается объект с полем `value`, содержащим это значение.

## Параметры

-   `value` (any): Значение, которое необходимо преобразовать.

## Возвращаемое значение

Возвращает объект, соответствующий переданному значению.

## Примеры использования

### Пример 1: Преобразование объекта

```js
class MyClass {}
const obj = new MyClass();
const result = Convert.toObject(obj);
// Результат: obj
```

### Пример 2: Преобразование класса

```js
class MyClass {}
const result = Convert.toObject(MyClass);
// Результат: экземпляр MyClass
```

### Пример 3: Преобразование null и undefined

```js
const result1 = Convert.toObject(null);
// Результат: экземпляр stdClass

const result2 = Convert.toObject(undefined);
// Результат: экземпляр stdClass
```

### Пример 4: Преобразование массива

```js
const arr = [1, 2, 3];
const result = Convert.toObject(arr);
// Результат: объект с элементами массива
```

### Пример 5: Преобразование других значений

```js
const result = Convert.toObject('example');
// Результат: объект с полем value, содержащим 'example'
```
