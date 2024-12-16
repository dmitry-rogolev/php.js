# array_push

[Документация на php.net](https://www.php.net/manual/ru/function.array-push.php)

---

[Главная](../../../../../README.md) / [Справочник функций](../../../../funcref.md) /
[Модули для работы с переменными и типами](../../../vartype.md) / [Массивы](../../array.md) /
[Функции для работы с массивами](../func.md) / array_push

---

`array_push` — Добавляет один или несколько элементов в конец массива

### Описание

```ts
array_push(array: Array|Object, ...values: any): number;
```

`array_push()` использует `array` как стек и добавляет переданные значения в конец массива `array`.
Длина `array` увеличивается на количество переданных значений.

### Список параметров

-   `array`

    Входной массив.

-   `values`

    Значения, добавляемые в конец массива `array`.

### Возвращаемые значения

Возвращает новое количество элементов в массиве.

### Примеры

**Пример #1 Пример использования array_push()**

```js
const stack = ['orange', 'banana'];
array_push(stack, 'apple', 'raspberry');
print_r(stack);
```

Результат выполнения приведённого примера:

    Array
    (
        [0] => orange
        [1] => banana
        [2] => apple
        [3] => raspberry
    )
