# Модули для работы с переменными и типами

[Документация на php.net](https://www.php.net/manual/ru/refs.basic.vartype.php)

---

[Главная](../../README.md) / [Справочник функций](../funcref.md) / Модули для работы с переменными и
типами

---

-   [Массивы](./vartype/array.md)

-   [Внутренние функции](./vartype/other.md)

    -   [get_magic_proxy](./vartype/other/get_magic_proxy.md) &mdash; Добавляет экземпляру класса
        возможность работы с магическими методами
    -   [get_property_descriptor](./vartype/other/get_property_descriptor.md) &mdash; Получает
        дескриптор свойства, находящегося в цепочке прототипов класса
    -   [implementable](./vartype/other/implementable.md) &mdash; Добавляет переданному классу
        возможность реализации интерфейсов
    -   [traitable](./vartype/other/traitable.md) &mdash; Добавляет классу возможность использования
        трейтов
    -   [uses](./vartype/other/uses.md) &mdash; Проверяет, используется ли переданный трейт в
        переданном классе
    -   [verify_implementation_of_contract](./vartype/other/verify_implementation_of_contract.md)
        &mdash; Проверяет реализацию контракта в переданном классе
    -   [verify_implementation_of_contracts](./vartype/other/verify_implementation_of_contracts.md)
        &mdash; Проверяет реализацию контрактов в переданном классе

-   [Обработка переменных](./vartype/var.md)

    **Функции для работы с переменными**

    -   [boolval](./vartype/var/func/boolval.md) &mdash; Возвращает логическое значение переменной
    -   [doubleval](./vartype/var/func/doubleval.md) &mdash; Псевдоним `floatval`
    -   [empty](./vartype/var/func/empty.md) &mdash; Проверяет, пуста ли переменная
    -   [floatval](./vartype/var/func/floatval.md) &mdash; Возвращает значение переменной в виде
        числа с плавающей точкой
    -   [get_debug_type](./vartype/var/func/get_debug_type.md) &mdash; Возвращает имя типа
        переменной в виде, подходящем для отладки
    -   [gettype](./vartype/var/func/gettype.md) &mdash; Возвращает тип переменной
    -   [intval](./vartype/var/func/intval.md) &mdash; Возвращает целочисленное значение переменной
    -   [is_array](./vartype/var/func/is_array.md) &mdash; Определяет, представляет ли собой
        переменная массив
    -   [is_bool](./vartype/var/func/is_bool.md) &mdash; Проверяет, представляет ли собой переменная
        логическое значение
    -   [is_callable](./vartype/var/func/is_callable.md) &mdash; Проверяет, что значение может быть
        вызвано как функция
    -   [is_countable](./vartype/var/func/is_countable.md) &mdash; Проверяет, представляет ли собой
        содержимое переменной счётное значение
    -   [is_double](./vartype/var/func/is_double.md) &mdash; Псевдоним `is_float`
    -   [is_float](./vartype/var/func/is_float.md) &mdash; Проверяет, представляет ли собой
        переменная число с плавающей точкой
    -   [is_int](./vartype/var/func/is_int.md) &mdash; Проверяет, представляет ли собой переменная
        целое число
    -   [is_integer](./vartype/var/func/is_integer.md) &mdash; Псевдоним `is_int`
    -   [is_iterable](./vartype/var/func/is_iterable.md) &mdash; Проверяет, итерируемо ли содержимое
        переменной
    -   [is_long](./vartype/var/func/is_long.md) &mdash; Псевдоним `is_int`
    -   [is_null](./vartype/var/func/is_null.md) &mdash; Проверяет, равно ли значение переменной
        null
    -   [is_numeric](./vartype/var/func/is_numeric.md) &mdash; Проверяет, содержит ли переменная
        число или числовую строку
    -   [is_object](./vartype/var/func/is_object.md) &mdash; Проверяет, представляет ли собой
        переменная объект
    -   [is_scalar](./vartype/var/func/is_scalar.md) &mdash; Проверяет, представляет ли собой
        переменная скаляр
    -   [is_string](./vartype/var/func/is_string.md) &mdash; Проверяет, представляет ли собой тип
        переменной строку
    -   [isset](./vartype/var/func/isset.md) &mdash; Определяет, была ли установлена переменная
        значением, отличным от `null`
    -   [print_r](./vartype/var/func/print_r.md) &mdash; Выводит удобочитаемую информацию о
        переменной
    -   [serialize](./vartype/var/func/serialize.md) &mdash; Генерирует пригодное для хранения
        представление переменной
    -   [settype](./vartype/var/func/settype.md) &mdash; Задаёт тип переменной
    -   [strval](./vartype/var/func/strval.md) &mdash; Возвращает строковое значение переменной
    -   [unserialize](./vartype/var/func/unserialize.md) &mdash; Создаёт значение из хранимого
        представления
    -   [var_dump](./vartype/var/func/var_dump.md) &mdash; Выводит информацию о переменной
    -   [var_export](./vartype/var/func/var_export.md) &mdash; Выводит или возвращает
        интерпретируемое строковое представление переменной

    **Дополнительные функции для работы с переменными**

    -   [arrval](./vartype/var/other/arrval.md) &mdash; Приводит значение переменной к массиву
    -   [is_class](./vartype/var/other/is_class.md) &mdash; Проверяет, является ли значение
        переменной классом
    -   [is_contract](./vartype/var/other/is_contract.md) &mdash; Проверяет, является ли переданное
        значение переменной контрактом
    -   [is_number](./vartype/var/other/is_number.md) &mdash; Проверяет, является ли переданное
        значение числом
    -   [is_symbol](./vartype/var/other/is_symbol.md) &mdash; Проверяет, является ли переменная
        типом `symbol`
    -   [is_undefined](./vartype/var/other/is_undefined.md) &mdash; Проверяет, имеет ли переменная
        значение `undefined`
    -   [objval](./vartype/var/other/objval.md) &mdash; Приводит значение переменной к объекту
