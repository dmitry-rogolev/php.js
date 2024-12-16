# array_pop

[Документация на php.net](https://www.php.net/manual/ru/function.array-pop.php)

---

[Главная](../../../../../README.md) / [Справочник функций](../../../../funcref.md) /
[Модули для работы с переменными и типами](../../../vartype.md) / [Массивы](../../array.md) /
[Функции для работы с массивами](../func.md) / array_pop

---

`array_pop` — Извлекает последний элемент массива

### Описание

```ts
array_pop(array: Array|Object): any;
```

`array_pop()` извлекает и возвращает значение последнего элемента массива `array`, уменьшая размер
`array` на один элемент.

### Список параметров

-   `array`

    Массив, из которого берётся значение.

### Возвращаемые значения

Возвращает значение последнего элемента массива `array`. Если `array` пуст, будет возвращён `null`.

### Примеры

**Пример #1 Пример использования array_pop()**

```js
const stack = ['orange', 'banana', 'apple', 'raspberry'];
const fruit = array_pop(stack);
print_r(fruit);
print_r(stack);
```

Результат выполнения приведённого примера:

    raspberry

    Array
    (
        [0] => orange
        [1] => banana
        [2] => apple
    )
