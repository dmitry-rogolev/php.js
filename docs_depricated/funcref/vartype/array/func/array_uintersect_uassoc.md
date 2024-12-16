# array_uintersect_uassoc

[Документация на php.net](https://www.php.net/manual/ru/function.array-uintersect-uassoc.php)

---

[Главная](../../../../../README.md) / [Справочник функций](../../../../funcref.md) /
[Модули для работы с переменными и типами](../../../vartype.md) / [Массивы](../../array.md) /
[Функции для работы с массивами](../func.md) / array_uintersect_uassoc

---

`array_uintersect_uassoc` — Вычисляет пересечение массивов с дополнительной проверкой индекса,
используя для сравнения индексов и значений отдельные callback-функции

### Описание

```ts
array_uintersect_uassoc(value_compare_func: Function, key_compare_func: Function, original_array: Array|Object, ...arrays: Array|Object): Object;
```

Вычисляет пересечение массивов с дополнительной проверкой индекса, используя для сравнения ключей и
значений отдельные callback-функции. То есть значения сравниваются одной callback-функцией, а
индексы — другой.

### Список параметров

-   `value_compare_func`

    Функция сравнения должна возвращать целое, которое меньше, равно или больше нуля, если первый
    аргумент является соответственно меньшим, равным или большим, чем второй.

          (a, b) => bool

-   `key_compare_func`

    Callback-функция для сравнения ключей.

          (a, b) => bool

-   `original_array`

    Первый массив.

-   `arrays`

    Дополнительные массивы.

### Возвращаемые значения

Возвращает массив `(array)`, содержащий все элементы аргумента `original_array`, которые есть в
каждом другом аргументе.

### Примеры

**Пример #1 Пример использования array_uintersect_uassoc()**

```js
const array1 = { a: 'green', b: 'brown', c: 'blue', 0: 'red' };
const array2 = { a: 'GREEN', B: 'brown', 0: 'yellow', 1: 'red' };

print_r(
    array_uintersect_uassoc(
        (a, b) => String(a).toLowerCase() === String(b).toLowerCase(),
        (a, b) => String(a).toLowerCase() === String(b).toLowerCase(),
        array1,
        array2,
    ),
);
```

Результат выполнения приведённого примера:

    Array
    (
        [a] => green
        [b] => brown
    )
