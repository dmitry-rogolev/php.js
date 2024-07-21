# v0.0.2

-   Добавлен модуль `exceptions` со следующими классами:

    -   [PHPJSError](./docs/langref/exceptions/PHPJSError.md) &mdash; Исключение PHPJSError
    -   [TypePHPJSError](./docs/langref/exceptions/TypePHPJSError.md) &mdash; Исключение
        TypePHPJSError
    -   [ValuePHPJSError](./docs/langref/exceptions/ValuePHPJSError.md) &mdash; Исключение
        ValuePHPJSError

-   В модуль `contracts` добавлены следующие интерфейсы:

    -   [Throwable](./docs/langref/interfaces/base/Throwable.md) &mdash; Интерфейс Throwable
    -   [Stringable](./docs/langref/interfaces/base/Stringable.md) &mdash; Интерфейс Stringable

-   Выбрасываемые ошибки в модуле `variables` заменены на внутренние ошибки `php.js`.

# v0.0.1

-   Добавлен модуль `variables` со следующими функциями:

    **Функции для работы с переменными**

    -   [boolval](./docs/funcref/vartype/var/func/boolval.md) &mdash; Возвращает логическое значение
        переменной
    -   [doubleval](./docs/funcref/vartype/var/func/doubleval.md) &mdash; Псевдоним `floatval`
    -   [empty](./docs/funcref/vartype/var/func/empty.md) &mdash; Проверяет, пуста ли переменная
    -   [floatval](./docs/funcref/vartype/var/func/floatval.md) &mdash; Возвращает значение
        переменной в виде числа с плавающей точкой
    -   [get_debug_type](./docs/funcref/vartype/var/func/get_debug_type.md) &mdash; Возвращает имя
        типа переменной в виде, подходящем для отладки
    -   [gettype](./docs/funcref/vartype/var/func/gettype.md) &mdash; Возвращает тип переменной
    -   [intval](./docs/funcref/vartype/var/func/intval.md) &mdash; Возвращает целочисленное
        значение переменной
    -   [is_array](./docs/funcref/vartype/var/func/is_array.md) &mdash; Определяет, представляет ли
        собой переменная массив
    -   [is_bool](./docs/funcref/vartype/var/func/is_bool.md) &mdash; Проверяет, представляет ли
        собой переменная логическое значение
    -   [is_callable](./docs/funcref/vartype/var/func/is_callable.md) &mdash; Проверяет, что
        значение может быть вызвано как функция
    -   [is_countable](./docs/funcref/vartype/var/func/is_countable.md) &mdash; Проверяет,
        представляет ли собой содержимое переменной счётное значение
    -   [is_double](./docs/funcref/vartype/var/func/is_double.md) &mdash; Псевдоним `is_float`
    -   [is_float](./docs/funcref/vartype/var/func/is_float.md) &mdash; Проверяет, представляет ли
        собой переменная число с плавающей точкой
    -   [is_int](./docs/funcref/vartype/var/func/is_int.md) &mdash; Проверяет, представляет ли собой
        переменная целое число
    -   [is_integer](./docs/funcref/vartype/var/func/is_integer.md) &mdash; Псевдоним `is_int`
    -   [is_iterable](./docs/funcref/vartype/var/func/is_iterable.md) &mdash; Проверяет, итерируемо
        ли содержимое переменной
    -   [is_long](./docs/funcref/vartype/var/func/is_long.md) &mdash; Псевдоним `is_int`
    -   [is_null](./docs/funcref/vartype/var/func/is_null.md) &mdash; Проверяет, равно ли значение
        переменной null
    -   [is_numeric](./docs/funcref/vartype/var/func/is_numeric.md) &mdash; Проверяет, содержит ли
        переменная число или числовую строку
    -   [is_object](./var/func/is_object.md) &mdash; Проверяет, представляет ли собой переменная
        объект
    -   [is_scalar](./docs/funcref/vartype/var/func/is_scalar.md) &mdash; Проверяет, представляет ли
        собой переменная скаляр
    -   [is_string](./docs/funcref/vartype/var/func/is_string.md) &mdash; Проверяет, представляет ли
        собой тип переменной строку
    -   [isset](./docs/funcref/vartype/var/func/isset.md) &mdash; Определяет, была ли установлена
        переменная значением, отличным от `null`
    -   [print_r](./docs/funcref/vartype/var/func/print_r.md) &mdash; Выводит удобочитаемую
        информацию о переменной
    -   [serialize](./docs/funcref/vartype/var/func/serialize.md) &mdash; Генерирует пригодное для
        хранения представление переменной
    -   [settype](./docs/funcref/vartype/var/func/settype.md) &mdash; Задаёт тип переменной
    -   [strval](./docs/funcref/vartype/var/func/strval.md) &mdash; Возвращает строковое значение
        переменной
    -   [unserialize](./docs/funcref/vartype/var/func/unserialize.md) &mdash; Создаёт значение из
        хранимого представления
    -   [var_dump](./docs/funcref/vartype/var/func/var_dump.md) &mdash; Выводит информацию о
        переменной
    -   [var_export](./docs/funcref/vartype/var/func/var_export.md) &mdash; Выводит или возвращает
        интерпретируемое строковое представление переменной

    **Дополнительные функции для работы с переменными**

    -   [arrval](./docs/funcref/vartype/var/other/arrval.md) &mdash; Приводит значение переменной к
        массиву
    -   [is_class](./docs/funcref/vartype/var/other/is_class.md) &mdash; Проверяет, является ли
        значение переменной классом
    -   [is_contract](./docs/funcref/vartype/var/other/is_contract.md) &mdash; Проверяет, является
        ли переданное значение переменной контрактом
    -   [is_number](./docs/funcref/vartype/var/other/is_number.md) &mdash; Проверяет, является ли
        переданное значение числом
    -   [is_symbol](./docs/funcref/vartype/var/other/is_symbol.md) &mdash; Проверяет, является ли
        переменная типом `symbol`
    -   [is_undefined](./docs/funcref/vartype/var/other/is_undefined.md) &mdash; Проверяет, имеет ли
        переменная значение `undefined`
    -   [objval](./docs/funcref/vartype/var/other/objval.md) &mdash; Приводит значение переменной к
        объекту

-   Добавлен модуль `functions` со следующими функциями:

    -   [get_magic_proxy](./docs/funcref/vartype/other/get_magic_proxy.md) &mdash; Добавляет
        экземпляру класса возможность работы с магическими методами
    -   [get_property_descriptor](./docs/funcref/vartype/other/get_property_descriptor.md) &mdash;
        Получает дескриптор свойства, находящегося в цепочке прототипов класса
    -   [implementable](./docs/funcref/vartype/other/implementable.md) &mdash; Добавляет переданному
        классу возможность реализации интерфейсов
    -   [traitable](./docs/funcref/vartype/other/traitable.md) &mdash; Добавляет классу возможность
        использования трейтов
    -   [uses](./docs/funcref/vartype/other/uses.md) &mdash; Проверяет, используется ли переданный
        трейт в переданном классе
    -   [verify_implementation_of_contract](./docs/funcref/vartype/other/verify_implementation_of_contract.md)
        &mdash; Проверяет реализацию контракта в переданном классе
    -   [verify_implementation_of_contracts](./docs/funcref/vartype/other/verify_implementation_of_contracts.md)
        &mdash; Проверяет реализацию контрактов в переданном классе

-   Добавлен модуль `classes` со следующими классами:

    **Основные**

    -   [stdClass](./docs/langref/interfaces/base/stdClass.md) &mdash; Класс stdClass

    **Дополнительные**

    -   [ExtensibleFunction](./docs/langref/interfaces/other/ExtensibleFunction.md) &mdash; Класс
        ExtensibleFunction

-   Добавлен модуль `contracts` со следующими интерфейсами:

    **Основные**

    -   [Traversable](./docs/langref/interfaces/base/Traversable.md) &mdash; Интерфейс Traversable
    -   [ArrayAccess](./docs/langref/interfaces/base/ArrayAccess.md) &mdash; Интерфейс ArrayAccess

    **Дополнительные**

    -   [Interface](./docs/langref/interfaces/other/Interface.md) &mdash; Интерфейс Interface

-   Добавлен модуль `spl/contracts` со следующими интерфейсами:

    **Основные**

    -   [Countable](./docs/funcref/other/spl/interfaces/Countable.md) &mdash; Интерфейс Countable
