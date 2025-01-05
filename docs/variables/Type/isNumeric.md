[Главная](../../../README.md) / [Обработка переменных](../../variables.md) / [Type](../Type.md) /
isNumeric

[Исходный код](../../../src/variables/Type.mjs)

# `Type.isNumeric`

`Type.isNumeric` &mdash; Проверяет, является ли значение числом или числовой строкой.

## Сигнатура метода

```ts
static isNumeric(value: any): boolean;
```

## Описание

Функция `is_numeric` предназначена для проверки, является ли переданное значение числом или числовой
строкой.

Она проверяет:

1. **Тип значения**: Убеждается, что `value` имеет тип `number` или `string`.
2. **Конечность числа**: Проверяет, что значение не является `Infinity` или `NaN` с помощью
   `Number.isFinite(value)`.
3. **Числовая строка**: Проверяет, что строка может быть преобразована в конечное число.

## Параметры

-   `value` (any)

    Проверяемая переменная.

## Возвращаемое значение

Возвращает `true`, если значение является числом или числовой строкой, иначе `false`.

## Примеры использования

### Пример 1: Проверка числовых значений

```js
Type.isNumeric(42); // true
Type.isNumeric(3.14); // true
Type.isNumeric(-0.99); // true
```

### Пример 2: Проверка числовых строк

```js
Type.isNumeric('42'); // true
Type.isNumeric('3.14'); // true
Type.isNumeric('-0.99'); // true
```

### Пример 3: Проверка специальных числовых значений

```js
Type.isNumeric(NaN); // false
Type.isNumeric(Infinity); // false
Type.isNumeric(-Infinity); // false
```

### Пример 4: Проверка значений других типов

```js
Type.isNumeric(true); // false (логическое значение)
Type.isNumeric(null); // false
Type.isNumeric(undefined); // false
Type.isNumeric({}); // false (объект)
Type.isNumeric([]); // false (массив)
```
