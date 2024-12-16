# array_uintersect

[Документация на php.net](https://www.php.net/manual/ru/function.array-uintersect.php)

---

[Главная](../../../../../README.md) / [Справочник функций](../../../../funcref.md) /
[Модули для работы с переменными и типами](../../../vartype.md) / [Массивы](../../array.md) /
[Функции для работы с массивами](../func.md) / array_uintersect

---

`array_uintersect` — Вычисляет пересечение массивов, используя для сравнения значений
callback-функцию

### Описание

```ts
array_uintersect(value_compare_func: Function, original_array: Array|Object, ...arrays: Array|Object): Object;
```

Вычисляет пересечение массивов, используя для сравнения значений callback-функцию.

### Список параметров

-   `value_compare_func`

    Функция сравнения должна возвращать целое, которое меньше, равно или больше нуля, если первый
    аргумент является соответственно меньшим, равным или большим, чем второй.

          (a, b) => bool

-   `original_array`

    Первый массив.

-   `arrays`

    Дополнительные массивы.

### Возвращаемые значения

Возвращает массив `(array)`, содержащий все элементы аргумента `original_array`, которые есть в
каждом другом аргументе.

### Примеры

**Пример #1 Пример использования array_uintersect()**

```js
const array1 = { a: 'green', b: 'brown', c: 'blue', 0: 'red' };
const array2 = { a: 'GREEN', B: 'brown', 0: 'yellow', 1: 'red' };

print_r(
    array_uintersect((a, b) => String(a).toLowerCase() === String(b).toLowerCase(), array1, array2),
);
```

Результат выполнения приведённого примера:

    Array
    (
        [0] => red
        [a] => green
        [b] => brown
    )
