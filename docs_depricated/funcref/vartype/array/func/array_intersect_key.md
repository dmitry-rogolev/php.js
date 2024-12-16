# array_intersect_key

[Документация на php.net](https://www.php.net/manual/ru/function.array-intersect-key.php)

---

[Главная](../../../../../README.md) / [Справочник функций](../../../../funcref.md) /
[Модули для работы с переменными и типами](../../../vartype.md) / [Массивы](../../array.md) /
[Функции для работы с массивами](../func.md) / array_intersect_key

---

`array_intersect_key` — Вычисляет пересечение массивов, сравнивая ключи

### Описание

```ts
array_intersect_key(original_array: Array|Object, ...arrays: Array|Object): Object;
```

Функция `array_intersect_key()` возвращает массив, содержащий все элементы массива `original_array`,
имеющие ключи, содержащиеся во всех других параметрах.

### Список параметров

-   `original_array`

    Первый массив.

-   `arrays`

    Дополнительные массивы.

### Возвращаемые значения

Возвращает ассоциативный массив, содержащий все элементы массива `original_array`, имеющие ключи,
содержащиеся во всех остальных параметрах.

### Примеры

**Пример #1 Пример использования array_intersect_key()**

```js
const array1 = { blue: 1, red: 2, green: 3, purple: 4 };
const array2 = { green: 5, blue: 6, yellow: 7, cyan: 8 };

print_r(array_intersect_key(array1, array2));
```

Результат выполнения приведённого примера:

    Array
    (
        [blue] => 1
        [green] => 3
    )
