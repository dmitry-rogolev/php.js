# Массивы

[Документация на php.net](https://www.php.net/manual/ru/book.array.php)

---

[Главная](../../../README.md) / [Справочник функций](../../funcref.md) /
[Модули для работы с переменными и типами](../vartype.md) / Массивы

---

-   [Предопределённые константы](./array/constants.md)
-   [Функции для работы с массивами](./array/func.md)

    -   [array_change_key_case](./array/func/array_change_key_case.md) &mdash; Меняет регистр всех
        ключей в массиве
    -   [array_chunk](./array/func/array_chunk.md) &mdash; Разбивает массив на части
    -   [array_column](./array/func/array_column.md) &mdash; Возвращает массив из значений одного
        столбца входного массива
    -   [array_combine](./array/func/array_combine.md) &mdash; Создаёт новый массив, используя один
        массив в качестве ключей, а другой для его значений
    -   [array_count_values](./array/func/array_count_values.md) &mdash; Подсчитывает количество
        вхождений каждого отдельного значения в массиве
    -   [array_fill](./array/func/array_fill.md) &mdash; Заполняет массив значениями
    -   [array_fill_keys](./array/func/array_fill_keys.md) &mdash; Создаёт массив и заполняет его
        значениями с определёнными ключами
    -   [array_filter](./array/func/array_filter.md) &mdash; Фильтрует элементы массива через
        callback-функцию
    -   [array_flip](./array/func/array_flip.md) &mdash; Меняет местами ключи с их значениями в
        массиве
    -   [array_is_list](./array/func/array_is_list.md) &mdash; Проверяет, является ли данный `array`
        списком
    -   [array_key_exists](./array/func/array_key_exists.md) &mdash; Проверяет, существует ли в
        массиве заданный ключ или индекс
    -   [array_key_first](./array/func/array_key_first.md) &mdash; Получает первый ключ массива
    -   [array_key_last](./array/func/array_key_last.md) &mdash; Получает последний ключ массива
    -   [array_keys](./array/func/array_keys.md) &mdash; Возвращает все или некоторое подмножество
        ключей массива
    -   [array_map](./array/func/array_map.md) &mdash; Применяет callback-функцию ко всем элементам
        указанных массивов
    -   [array_merge](./array/func/array_merge.md) &mdash; Сливает один или несколько массивов
    -   [array_merge_recursive](./array/func/array_merge_recursive.md) &mdash; Рекурсивно сливает
        один или несколько массивов
    -   [array_pad](./array/func/array_pad.md) &mdash; Дополняет массив значением до заданной длины
    -   [array_pop](./array/func/array_pop.md) &mdash; Извлекает последний элемент массива
    -   [array_product](./array/func/array_product.md) &mdash; Вычисляет произведение значений
        массива
    -   [array_push](./array/func/array_push.md) &mdash; Добавляет один или несколько элементов в
        конец массива
    -   [array_rand](./array/func/array_rand.md) &mdash; Выбирает один или несколько случайных
        ключей из массива
    -   [array_reduce](./array/func/array_reduce.md) &mdash; Итеративно уменьшает массив к
        единственному значению, используя callback-функцию
    -   [array_replace](./array/func/array_replace.md) &mdash; Заменяет элементы массива элементами
        других переданных массивов
    -   [array_replace_recursive](./array/func/array_replace_recursive.md) &mdash; Рекурсивно
        заменяет элементы первого массива элементами переданных массивов
    -   [array_reverse](./array/func/array_reverse.md) &mdash; Возвращает массив с элементами в
        обратном порядке
    -   [array_search](./array/func/array_search.md) &mdash; Ищет значение в массиве и в случае
        успешного поиска возвращает ключ первого найденного элемента
    -   [array_shift](./array/func/array_shift.md) &mdash; Извлекает первый элемент массива
    -   [array_slice](./array/func/array_slice.md) &mdash; Выбирает срез массива
    -   [array_splice](./array/func/array_splice.md) &mdash; Удаляет часть массива и заменяет её
        чем-нибудь ещё
    -   [array_sum](./array/func/array_sum.md) &mdash; Вычисляет сумму значений массива
    -   [array_udiff_assoc](./array/func/array_udiff_assoc.md) &mdash; Вычисляет расхождение в
        массивах с дополнительной проверкой индексов, используя для сравнения значений
        callback-функцию
    -   [array_udiff_uassoc](./array/func/array_udiff_uassoc.md) &mdash; Вычисляет расхождение в
        массивах с дополнительной проверкой индексов, используя для сравнения значений и индексов
        callback-функцию
    -   [array_unique](./array/func/array_unique.md) &mdash; Убирает повторяющиеся значения из
        массива
    -   [array_unshift](./array/func/array_unshift.md) &mdash; Добавляет один или несколько
        элементов в начало массива
    -   [array_values](./array/func/array_values.md) &mdash; Возвращает все значения массива
    -   [array_walk](./array/func/array_walk.md) &mdash; Применяет пользовательскую функцию к
        каждому элементу массива
    -   [array_walk_recursive](./array/func/array_walk_recursive.md) &mdash; Рекурсивно применяет
        пользовательскую функцию к каждому элементу массива
    -   [count](./array/func/count.md) &mdash; Подсчитывает количество элементов в массиве или в
        объекте `Countable`
    -   [in_array](./array/func/in_array.md) &mdash; Проверяет, присутствует ли в массиве значение
    -   [key_exists](./array/func/key_exists.md) &mdash; Псевдоним `array_key_exists`
    -   [range](./array/func/range.md) &mdash; Создаёт массив, который содержит диапазон элементов
    -   [shuffle](./array/func/shuffle.md) &mdash; Перемешивает массив
    -   [sizeof](./array/func/sizeof.md) &mdash; Псевдоним `count`

-   [Дополнительные функции для работы с массивами](./array/other.md)

    -   [array_index_max](./array/other/array_index_max.md) &mdash; Возвращает наибольший числовой
        индекс массива.
    -   [array_index_min](./array/other/array_index_min.md) &mdash; Возвращает наименьший числовой
        индекс массива.
    -   [array_reindex](./array/other/array_reindex.md) &mdash; Переиндексирует переданный массив.
