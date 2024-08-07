# array_intersect_assoc

[Документация на php.net](https://www.php.net/manual/ru/function.array-intersect-assoc.php)

---

[Главная](../../../../../README.md) / [Справочник функций](../../../../funcref.md) /
[Модули для работы с переменными и типами](../../../vartype.md) / [Массивы](../../array.md) /
[Функции для работы с массивами](../func.md) / array_intersect_assoc

---

`array_intersect_assoc` — Вычисляет пересечение массивов с дополнительной проверкой индекса

### Описание

```ts
array_intersect_assoc(original_array: Array|Object, ...arrays: Array|Object): Object;
```

Функция `array_intersect_assoc()` возвращает массив, который содержит те значения массива array,
которые содержатся в каждом аргументе. Обратите внимание, эта функция, в отличие от функции
[array_intersect()](./array_intersect.md), также сравнивает и ключи.

### Список параметров

-   `original_array`

    Первый массив.

-   `arrays`

    Дополнительные массивы.

### Возвращаемые значения

Функция возвращает ассоциативный массив, который содержит те значения массива `original_array`,
которые содержатся в каждом аргументе.

### Примеры

**Пример #1 Пример использования array_intersect_assoc()**

```js
const array1 = { a: 'green', b: 'brown', c: 'blue', 0: 'red' };
const array2 = { a: 'green', b: 'yellow', 0: 'blue', 1: 'red' };

print_r(array_intersect_assoc(array1, array2));
```

Результат выполнения приведённого примера:

    Array
    (
        [a] => green
    )
