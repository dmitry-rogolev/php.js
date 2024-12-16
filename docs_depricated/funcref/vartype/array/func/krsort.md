# krsort

[Документация на php.net](https://www.php.net/manual/ru/function.krsort.php)

---

[Главная](../../../../../README.md) / [Справочник функций](../../../../funcref.md) /
[Модули для работы с переменными и типами](../../../vartype.md) / [Массивы](../../array.md) /
[Функции для работы с массивами](../func.md) / krsort

---

`krsort` — Сортирует массив по ключу в порядке убывания

### Описание

```ts
krsort(array: Array|Object, flags: number = SORT_REGULAR): true;
```

Функция сортирует массив array по ключу в порядке убывания.

> **Замечание:**
>
> Функция сохраняет первоначальный порядок элементов, если при сравнении значения двух элементов
> равны.

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

Функция возвращает логическое значение `true`.

### Примеры

**Пример #1 Пример использования krsort()**

```js
const fruits = { d: 'lemon', a: 'orange', b: 'banana', c: 'apple' };
krsort(fruits);
print_r(fruits);
```

Результат выполнения приведённого примера:

    Array
    (
        [d] => lemon
        [c] => apple
        [b] => banana
        [a] => orange
    )
