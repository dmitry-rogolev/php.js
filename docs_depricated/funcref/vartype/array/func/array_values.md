# array_values

[Документация на php.net](https://www.php.net/manual/ru/function.array-values.php)

---

[Главная](../../../../../README.md) / [Справочник функций](../../../../funcref.md) /
[Модули для работы с переменными и типами](../../../vartype.md) / [Массивы](../../array.md) /
[Функции для работы с массивами](../func.md) / array_values

---

`array_values` — Возвращает все значения массива

### Описание

```ts
array_values(array: Array|Object): Array
```

Функция `array_values()` возвращает индексный массив со всеми значениями массива `array`.

### Список параметров

-   `array`

    Массив.

### Возвращаемые значения

Возвращает индексный массив значений.

### Примеры

**Пример #1 Пример использования array_values()**

```js
const array = { size: 'XL', color: 'gold' };
print_r(array_values(array));
```

Результат выполнения приведённого примера:

    Array
    (
        [0] => XL
        [1] => gold
    )
