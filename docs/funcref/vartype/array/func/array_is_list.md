# array_is_list

[Документация на php.net](https://www.php.net/manual/ru/function.array-is-list.php)

---

[Главная](../../../../../README.md) / [Справочник функций](../../../../funcref.md) /
[Модули для работы с переменными и типами](../../../vartype.md) / [Массивы](../../array.md) /
[Функции для работы с массивами](../func.md) / array_is_list

---

`array_is_list` — Проверяет, является ли данный array списком

## Описание

```ts
array_is_list(array: Array|Object): boolean;
```

Определяет, является ли данный array списком. Массив `(array)` считается списком, если его ключи
состоят из последовательных чисел от `0` до `count($array)-1`.

## Список параметров

-   `array`

    Массив `(array)` для проверки.

## Возвращаемые значения

Возвращает `true`, если `array` является списком, в противном случае возвращает `false`.

## Примеры

**Пример #1 Пример использования array_is_list()**

```js
console.log('[]: ', array_is_list([]));
console.log('{}: ', array_is_list({}));
console.log("['apple', 2, 3]: ", array_is_list(['apple', 2, 3]));
console.log("{ 0: 'apple', 1: 'orange' }: ", array_is_list({ 0: 'apple', 1: 'orange' }));
console.log("{ 1: 'apple', 2: 'orange' }: ", array_is_list({ 1: 'apple', 2: 'orange' }));
console.log("{ 0: 'apple', foo: 'bar' }: ", array_is_list({ 0: 'apple', foo: 'bar' }));
console.log("{ 0: 'apple', 2: 'bar' }: ", array_is_list({ 0: 'apple', 2: 'bar' }));
```

Результат выполнения примера:

    []:  true
    {}:  true
    ['apple', 2, 3]:  true
    { 0: 'apple', 1: 'orange' }:  true
    { 1: 'apple', 2: 'orange' }:  false
    { 0: 'apple', foo: 'bar' }:  false
    { 0: 'apple', 2: 'bar' }:  false

## Примечания

> **Замечание:**
>
> Функция возвращает `true` для пустых массивов.
