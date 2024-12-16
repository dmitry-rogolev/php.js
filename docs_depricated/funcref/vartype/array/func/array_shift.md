# array_shift

[Документация на php.net](https://www.php.net/manual/ru/function.array-shift.php)

---

[Главная](../../../../../README.md) / [Справочник функций](../../../../funcref.md) /
[Модули для работы с переменными и типами](../../../vartype.md) / [Массивы](../../array.md) /
[Функции для работы с массивами](../func.md) / array_shift

---

`array_shift` — Извлекает первый элемент массива

### Описание

```ts
array_shift(array: Array|Object): any
```

`array_shift()` извлекает первое значение массива `array` и возвращает его, сокращая размер `array`
на один элемент. Все числовые ключи будут изменены таким образом, что нумерация массива начнётся с
нуля, в то время как строковые ключи останутся прежними.

### Список параметров

-   `array`

    Входной массив.

### Возвращаемые значения

Возвращает извлекаемое значение или `null`, если array пуст или не является массивом.

### Примеры

**Пример #1 Пример использования array_shift()**

```js
const stack = ['orange', 'banana', 'apple', 'raspberry'];
const fruit = array_shift(stack);
print_r(stack);
print_r(fruit);
```

Результат выполнения приведённого примера:

    Array
    (
        [0] => banana
        [1] => apple
        [2] => raspberry
    )

    orange
