# Предопределённые константы

[Документация на php.net](https://www.php.net/manual/ru/array.constants.php)

---

[Главная](../../../../README.md) / [Справочник функций](../../../funcref.md) /
[Модули для работы с переменными и типами](../../vartype.md) / [Массивы](../array.md) /
Предопределённые константы

---

#### `CASE_LOWER` `(int)`

`CASE_LOWER` используется с `array_change_key_case()` для конвертации ключей массива в нижний
регистр. Это действие по умолчанию для `array_change_key_case()`.

#### `CASE_UPPER` `(int)`

`CASE_UPPER` используется c `array_change_key_case()` для конвертации ключей массива в верхний
регистр.

Флаги, изменяющие порядок сортировки:

#### `SORT_ASC` `(int)`

`SORT_ASC` используется с `array_multisort()` для сортировки в порядке возрастания.

#### `SORT_DESC` `(int)`

`SORT_DESC` используется с `array_multisort()` для сортировки в порядке убывания.

Флаги сортировки, используемые различными функциями:

#### `SORT_REGULAR` `(int)`

`SORT_REGULAR` используется для обычного сравнения элементов массива.

#### `SORT_NUMERIC` `(int)`

`SORT_NUMERIC` используется для сравнения элементов как цифр.

#### `SORT_STRING` `(int)`

`SORT_STRING` используется для сравнения элементов как строк.

#### `SORT_LOCALE_STRING` `(int)`

`SORT_LOCALE_STRING` используется для сравнения элементов как строк на базе текущей локали.

#### `SORT_NATURAL` `(int)`

`SORT_NATURAL` используется для сравнения элементов как строк, используя естественное
упорядочивание, такое как `natsort()`.

#### `SORT_FLAG_CASE` `(int)`

`SORT_FLAG_CASE` может быть объединена (побитовое ИЛИ) с `SORT_STRING` или `SORT_NATURAL` для
регистронезависимой сортировки строк.

Опции фильтрации:

#### `ARRAY_FILTER_USE_KEY` `(int)`

`ARRAY_FILTER_USE_KEY` используется в `array_filter()` для передачи каждого ключа в виде первого
аргумента в заданную функцию.

#### `ARRAY_FILTER_USE_BOTH` `(int)`

`ARRAY_FILTER_USE_BOTH` используется в `array_filter()` для передачи и значения и ключа в заданную
функцию.

#### `COUNT_NORMAL` `(int)`

#### `COUNT_RECURSIVE` `(int)`

#### `EXTR_OVERWRITE` `(int)`

#### `EXTR_SKIP` `(int)`

#### `EXTR_PREFIX_SAME` `(int)`

#### `EXTR_PREFIX_ALL` `(int)`

#### `EXTR_PREFIX_INVALID` `(int)`

#### `EXTR_PREFIX_IF_EXISTS` `(int)`

#### `EXTR_IF_EXISTS` `(int)`

#### `EXTR_REFS` `(int)`
