# sort

[Документация на php.net](https://www.php.net/manual/ru/function.sort.php)

---

[Главная](../../../../../README.md) / [Справочник функций](../../../../funcref.md) /
[Модули для работы с переменными и типами](../../../vartype.md) / [Массивы](../../array.md) /
[Функции для работы с массивами](../func.md) / sort

---

`sort` — Сортирует массив по возрастанию

### Описание

```ts
sort(array: Array|Object, flags: number = SORT_REGULAR): true;
```

Сортирует `array` по значению в порядке возрастания.

### Список параметров

-   `array`

    Входной массив.

-   `flags`

    Необязательный второй параметр `flags` изменяет поведение сортировки и может принимать следующие
    значения:

    Флаги типов сортировки:

    -   [SORT_REGULAR](../constants.md#sort_regular-int) — обычное сравнение элементов; подробности
        описаны в разделе операторы сравнения
    -   [SORT_NUMERIC](../constants.md#sort_numeric-int) — числовое сравнение элементов
    -   [SORT_STRING](../constants.md#sort_string-int) — строковое сравнение элементов
    -   [SORT_NATURAL](../constants.md#sort_natural-int) — сравнение элементов как строки, используя
        "естественный порядок", например `natsort()`
    -   [SORT_FLAG_CASE](../constants.md#sort_flag_case-int) — можно объединять (побитовое ИЛИ) с
        [SORT_STRING](../constants.md#sort_string-int) или
        [SORT_NATURAL](../constants.md#sort_natural-int) для сортировки строк без учёта регистра

### Возвращаемые значения

Функция возвращает логическое значение true.

### Примеры

**Пример #1 Пример использования sort()**

```js
const fruits = ['lemon', 'orange', 'banana', 'apple'];
sort(fruits);
print_r(fruits);
```

Результат выполнения приведённого примера:

    Array
    (
        [0] => apple
        [1] => banana
        [2] => lemon
        [3] => orange
    )

**Пример #2 Пример использования sort() с регистронезависимым естественным упорядочением**

```js
const fruits = ['Orange1', 'orange2', 'Orange3', 'orange20'];
sort(fruits, SORT_NATURAL | SORT_FLAG_CASE);
print_r(fruits);
```

Результат выполнения приведённого примера:

    Array
    (
        [0] => Orange1
        [1] => orange2
        [2] => Orange3
        [3] => orange20
    )
