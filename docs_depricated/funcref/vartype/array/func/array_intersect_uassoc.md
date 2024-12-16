# array_intersect_uassoc

[Документация на php.net](https://www.php.net/manual/ru/function.array-intersect-uassoc.php)

---

[Главная](../../../../../README.md) / [Справочник функций](../../../../funcref.md) /
[Модули для работы с переменными и типами](../../../vartype.md) / [Массивы](../../array.md) /
[Функции для работы с массивами](../func.md) / array_intersect_uassoc

---

`array_intersect_uassoc` — Вычисляет пересечение массивов с дополнительной проверкой индекса,
сравнивая индексы через callback-функцию

### Описание

```ts
array_intersect_uassoc(key_compare_func: Function, original_array: Array|Object, ...arrays: Array|Object): Object;
```

Функция `array_intersect_uassoc()` возвращает массив, состоящий из значений массива array, которые
содержатся во всех переданных аргументах. Обратите внимание, что, в отличие от функции
[array_intersect()](./array_intersect.md), сравниваются ключи.

### Список параметров

-   `key_compare_func`

    Callback-функция для сравнения ключей.

          (a, b) => bool

-   `original_array`

    Первый массив.

-   `arrays`

    Дополнительные массивы.

### Возвращаемые значения

Возвращает элементы массива `original_array`, чьи значения содержатся во всех переданных аргументах.

### Примеры

**Пример #1 Пример использования array_intersect_uassoc()**

```js
const array1 = { a: 'green', b: 'brown', c: 'blue', 0: 'red' };
const array2 = { a: 'GREEN', B: 'brown', 0: 'yellow', 1: 'red' };

print_r(
    array_intersect_uassoc(
        (a, b) => String(a).toLowerCase() === String(b).toLowerCase(),
        array1,
        array2,
    ),
);
```

Результат выполнения приведённого примера:

    Array
    (
        [b] => brown
    )
