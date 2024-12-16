# array_intersect_ukey

[Документация на php.net](https://www.php.net/manual/ru/function.array-intersect-ukey.php)

---

[Главная](../../../../../README.md) / [Справочник функций](../../../../funcref.md) /
[Модули для работы с переменными и типами](../../../vartype.md) / [Массивы](../../array.md) /
[Функции для работы с массивами](../func.md) / array_intersect_ukey

---

`array_intersect_ukey` — Вычисляет пересечение массивов, используя callback-функцию для сравнения
ключей

### Описание

```ts
array_intersect_ukey(key_compare_func: Function, original_array: Array|Object, ...arrays: Array|Object): Object;
```

Функция `array_intersect_ukey()` возвращает массив, состоящий из значений массива `original_array`,
ключи которых содержатся во всех аргументах.

### Список параметров

-   `key_compare_func`

    Callback-функция для сравнения ключей.

        (a, b) => bool

-   `original_array`

    Первый массив.

-   `arrays`

    Дополнительные массивы.

### Возвращаемые значения

Возвращает ассоциативный массив, состоящий из значений массива `original_array`, ключи которых
содержатся во всех аргументах.

### Примеры

**Пример #1 Пример использования array_intersect_ukey()**

```js
const array1 = { blue: 1, red: 2, green: 3, purple: 4 };
const array2 = { green: 5, blue: 6, yellow: 7, cyan: 8 };

print_r(array_intersect_ukey((a, b) => a === b, array1, array2));
```

Результат выполнения приведённого примера:

    Array
    (
        [blue] => 1
        [green] => 3
    )
