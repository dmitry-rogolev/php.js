# array_intersect

[Документация на php.net](https://www.php.net/manual/ru/function.array-intersect.php)

---

[Главная](../../../../../README.md) / [Справочник функций](../../../../funcref.md) /
[Модули для работы с переменными и типами](../../../vartype.md) / [Массивы](../../array.md) /
[Функции для работы с массивами](../func.md) / array_intersect

---

`array_intersect` — Вычисляет пересечение массивов

### Описание

```ts
array_intersect(original_array: Array|Object, ...arrays: Array|Object): Object;
```

Функция `array_intersect()` возвращает массив, содержащий все значения массива `array`, которые
содержатся во всех аргументах. Обратите внимание, что ключи сохраняются.

### Список параметров

-   `original_array`

    Основной проверяемый массив

-   `arrays`

    Массивы, с которыми идёт сравнение значений

### Возвращаемые значения

Возвращает массив, содержащий все значения параметра `original_array`, которые существуют во всех
переданных аргументах.

### Примеры

**Пример #1 Пример использования array_intersect()**

```js
const array1 = { a: 'green', 0: 'red', 1: 'blue' };
const array2 = { b: 'green', 0: 'yellow', 1: 'red' };

print_r(array_intersect(array1, array2));
```

Результат выполнения приведённого примера:

    Array
    (
        [0] => red
        [a] => green
    )
