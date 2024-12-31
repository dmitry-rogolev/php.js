# v0.0.4

-   Рефакторинг модуля [variables](./docs/variables.md):

    -   [is_array](./docs/variables/is_array.md)
    -   [is_bool](./docs/variables/is_bool.md)
    -   [is_callable](./docs/variables/is_callable.md)
    -   [is_class](./docs/variables/is_class.md)
    -   [is_contract](./docs/variables/is_contract.md)
    -   [is_countable](./docs/variables/is_countable.md)
    -   [is_double](./docs/variables/is_double.md)
    -   [is_float](./docs/variables/is_float.md)
    -   [is_int](./docs/variables/is_int.md)
    -   [is_integer](./docs/variables/is_integer.md)
    -   [is_iterable](./docs/variables/is_iterable.md)
    -   [is_long](./docs/variables/is_long.md)
    -   [is_null](./docs/variables/is_null.md)
    -   [is_number](./docs/variables/is_number.md)
    -   [is_numeric](./docs/variables/is_numeric.md)
    -   [is_object](./docs/variables/is_object.md)
    -   [is_scalar](./docs/variables/is_scalar.md)
    -   [is_string](./docs/variables/is_string.md)
    -   [is_symbol](./docs/variables/is_symbol.md)
    -   [is_undefined](./docs/variables/is_undefined.md)

    Переименовано:

    -   [to_array](./docs/variables/to_array.md) &mdash; `arrval`
    -   [to_bool](./docs/variables/to_bool.md) &mdash; `boolval`
    -   [to_int](./docs/variables/to_int.md) &mdash; `intval`

-   Добавлено в модуль [variables](./docs/variables.md):

    -   [to_boolean](./docs/variables/to_boolean.md)
    -   [to_integer](./docs/variables/to_integer.md)

-   Добавлена функция [array](./docs/array/array.md) в модуль [array](./docs/array.md)

-   Переработана документация

# v0.0.3

-   Добавлен модуль [class](./docs_depricated/funcref/vartype/class.md) со следующими функциями:

    -   [get_class](./docs_depricated/funcref/vartype/class/get_class.md) &mdash; Возвращает класс,
        которому принадлежит объект
    -   [get_class_methods](./docs_depricated/funcref/vartype/class/get_class_methods.md) &mdash;
        Возвращает массив имён методов класса
    -   [get_class_vars](./docs_depricated/funcref/vartype/class/get_class_vars.md) &mdash; Получает
        свойства класса
    -   [get_object_vars](./docs_depricated/funcref/vartype/class/get_object_vars.md) &mdash;
        Возвращает свойства указанного объекта
    -   [get_parent_class](./docs_depricated/funcref/vartype/class/get_parent_class.md) &mdash;
        Получает имя родительского класса для объекта или класса
    -   [is_a](./docs_depricated/funcref/vartype/class/is_a.md) &mdash; Проверяет, принадлежит ли
        объект к типу или подтипу
    -   [is_subclass_of](./docs_depricated/funcref/vartype/class/is_subclass_of.md) &mdash;
        Проверяет, принадлежит ли объект к потомкам класса, или реализует ли объект или родители
        объекта интерфейс
    -   [method_exists](./docs_depricated/funcref/vartype/class/method_exists.md) &mdash; Проверяет,
        существует ли метод в классе
    -   [property_exists](./docs_depricated/funcref/vartype/class/property_exists.md) &mdash;
        Проверяет, есть ли у объекта или класса свойство

# v0.0.2

-   Добавлен модуль [exceptions](./docs_depricated/langref/exceptions.md) со следующими классами:

    -   [PHPJSError](./docs_depricated/langref/exceptions/PHPJSError.md) &mdash; Исключение
        PHPJSError
    -   [TypePHPJSError](./docs_depricated/langref/exceptions/TypePHPJSError.md) &mdash; Исключение
        TypePHPJSError
    -   [ValuePHPJSError](./docs_depricated/langref/exceptions/ValuePHPJSError.md) &mdash;
        Исключение ValuePHPJSError

-   В модуль [contracts](./docs_depricated/langref/interfaces.md) добавлены следующие интерфейсы:

    -   [Throwable](./docs_depricated/langref/interfaces/base/Throwable.md) &mdash; Интерфейс
        Throwable
    -   [Stringable](./docs_depricated/langref/interfaces/base/Stringable.md) &mdash; Интерфейс
        Stringable

-   Выбрасываемые ошибки в модуле [variables](./docs_depricated/funcref/vartype/var.md) заменены на
    внутренние ошибки `php.js`.

-   Добавлен модуль [array/constants](./docs_depricated/funcref/vartype/array/constants.md),
    содержащий в себе перечень констант для модуля `array`.

-   Добавлен модуль [array](./docs_depricated/funcref/vartype/array.md), содержащий следующие
    функции:

    -   [array_change_key_case](./docs_depricated/funcref/vartype/array/func/array_change_key_case.md)
        &mdash; Меняет регистр всех ключей в массиве
    -   [array_chunk](./docs_depricated/funcref/vartype/array/func/array_chunk.md) &mdash; Разбивает
        массив на части
    -   [array_column](./docs_depricated/funcref/vartype/array/func/array_column.md) &mdash;
        Возвращает массив из значений одного столбца входного массива
    -   [array_combine](./docs_depricated/funcref/vartype/array/func/array_combine.md) &mdash;
        Создаёт новый массив, используя один массив в качестве ключей, а другой для его значений
    -   [array_count_values](./docs_depricated/funcref/vartype/array/func/array_count_values.md)
        &mdash; Подсчитывает количество вхождений каждого отдельного значения в массиве
    -   [array_diff](./docs_depricated/funcref/vartype/array/func/array_diff.md) &mdash; Вычисляет
        расхождение массивов
    -   [array_diff_assoc](./docs_depricated/funcref/vartype/array/func/array_diff_assoc.md) &mdash;
        Вычисляет расхождение массивов с дополнительной проверкой индекса
    -   [array_diff_key](./docs_depricated/funcref/vartype/array/func/array_diff_key.md) &mdash;
        Вычисляет расхождение массивов, сравнивая ключи
    -   [array_diff_uassoc](./docs_depricated/funcref/vartype/array/func/array_diff_uassoc.md)
        &mdash; Вычисляет расхождение массивов с дополнительной проверкой индекса через
        пользовательскую callback-функцию
    -   [array_diff_ukey](./docs_depricated/funcref/vartype/array/func/array_diff_ukey.md) &mdash;
        Вычисляет расхождение массивов, используя callback-функцию для сравнения ключей
    -   [array_fill](./docs_depricated/funcref/vartype/array/func/array_fill.md) &mdash; Заполняет
        массив значениями
    -   [array_fill_keys](./docs_depricated/funcref/vartype/aarray/func/array_fill_keys.md) &mdash;
        Создаёт массив и заполняет его значениями с определёнными ключами
    -   [array_filter](./docs_depricated/funcref/vartype/array/func/array_filter.md) &mdash;
        Фильтрует элементы массива через callback-функцию
    -   [array_flip](./docs_depricated/funcref/vartype/array/func/array_flip.md) &mdash; Меняет
        местами ключи с их значениями в массиве
    -   [array_intersect](./docs_depricated/funcref/vartype/array/func/array_intersect.md) &mdash;
        Вычисляет пересечение массивов
    -   [array_intersect_assoc](./docs_depricated/funcref/vartype/array/func/array_intersect_assoc.md)
        &mdash; Вычисляет пересечение массивов с дополнительной проверкой индекса
    -   [array_intersect_key](./docs_depricated/funcref/vartype/array/func/array_intersect_key.md)
        &mdash; Вычисляет пересечение массивов, сравнивая ключи
    -   [array_intersect_uassoc](./docs_depricated/funcref/vartype/array/func/array_intersect_uassoc.md)
        &mdash; Вычисляет пересечение массивов с дополнительной проверкой индекса, сравнивая индексы
        через callback-функцию
    -   [array_intersect_ukey](./docs_depricated/funcref/vartype/array/func/array_intersect_ukey.md)
        &mdash; Вычисляет пересечение массивов, используя callback-функцию для сравнения ключей
    -   [array_is_list](./docs_depricated/funcref/vartype/array/func/array_is_list.md) &mdash;
        Проверяет, является ли данный `array` списком
    -   [array_key_exists](./docs_depricated/funcref/vartype/array/func/array_key_exists.md) &mdash;
        Проверяет, существует ли в массиве заданный ключ или индекс
    -   [array_key_first](./docs_depricated/funcref/vartype/array/func/array_key_first.md) &mdash;
        Получает первый ключ массива
    -   [array_key_last](./docs_depricated/funcref/vartype/array/func/array_key_last.md) &mdash;
        Получает последний ключ массива
    -   [array_keys](./docs_depricated/funcref/vartype/array/func/array_keys.md) &mdash; Возвращает
        все или некоторое подмножество ключей массива
    -   [array_map](./docs_depricated/funcref/vartype/array/func/array_map.md) &mdash; Применяет
        callback-функцию ко всем элементам указанных массивов
    -   [array_merge](./docs_depricated/funcref/vartype/array/func/array_merge.md) &mdash; Сливает
        один или несколько массивов
    -   [array_merge_recursive](./docs_depricated/funcref/vartype/array/func/array_merge_recursive.md)
        &mdash; Рекурсивно сливает один или несколько массивов
    -   [array_multisort](./docs_depricated/funcref/vartype/array/func/array_multisort.md) &mdash;
        Сортирует несколько массивов или многомерные массивы
    -   [array_pad](./docs_depricated/funcref/vartype/array/func/array_pad.md) &mdash; Дополняет
        массив значением до заданной длины
    -   [array_pop](./docs_depricated/funcref/vartype/array/func/array_pop.md) &mdash; Извлекает
        последний элемент массива
    -   [array_product](./docs_depricated/funcref/vartype/array/func/array_product.md) &mdash;
        Вычисляет произведение значений массива
    -   [array_push](./docs_depricated/funcref/vartype/array/func/array_push.md) &mdash; Добавляет
        один или несколько элементов в конец массива
    -   [array_rand](./docs_depricated/funcref/vartype/array/func/array_rand.md) &mdash; Выбирает
        один или несколько случайных ключей из массива
    -   [array_reduce](./docs_depricated/funcref/vartype/array/func/array_reduce.md) &mdash;
        Итеративно уменьшает массив к единственному значению, используя callback-функцию
    -   [array_replace](./docs_depricated/funcref/vartype/array/func/array_replace.md) &mdash;
        Заменяет элементы массива элементами других переданных массивов
    -   [array_replace_recursive](./docs_depricated/funcref/vartype/array/func/array_replace_recursive.md)
        &mdash; Рекурсивно заменяет элементы первого массива элементами переданных массивов
    -   [array_reverse](./docs_depricated/funcref/vartype/array/func/array_reverse.md) &mdash;
        Возвращает массив с элементами в обратном порядке
    -   [array_search](./docs_depricated/funcref/vartype/array/func/array_search.md) &mdash; Ищет
        значение в массиве и в случае успешного поиска возвращает ключ первого найденного элемента
    -   [array_shift](./docs_depricated/funcref/vartype/array/func/array_shift.md) &mdash; Извлекает
        первый элемент массива
    -   [array_slice](./docs_depricated/funcref/vartype/array/func/array_slice.md) &mdash; Выбирает
        срез массива
    -   [array_splice](./docs_depricated/funcref/vartype/array/func/array_splice.md) &mdash; Удаляет
        часть массива и заменяет её чем-нибудь ещё
    -   [array_sum](./docs_depricated/funcref/vartype/array/func/array_sum.md) &mdash; Вычисляет
        сумму значений массива
    -   [array_udiff](./docs_depricated/funcref/vartype/array/func/array_udiff.md) &mdash; Вычисляет
        расхождение массивов, используя для сравнения callback-функцию
    -   [array_udiff_assoc](./docs_depricated/funcref/vartype/array/func/array_udiff_assoc.md)
        &mdash; Вычисляет расхождение в массивах с дополнительной проверкой индексов, используя для
        сравнения значений callback-функцию
    -   [array_udiff_uassoc](./docs_depricated/funcref/vartype/array/func/array_udiff_uassoc.md)
        &mdash; Вычисляет расхождение в массивах с дополнительной проверкой индексов, используя для
        сравнения значений и индексов callback-функцию
    -   [array_uintersect](./docs_depricated/funcref/vartype/array/func/array_uintersect.md) &mdash;
        Вычисляет пересечение массивов, используя для сравнения значений callback-функцию
    -   [array_uintersect_assoc](./docs_depricated/funcref/vartype/array/func/array_uintersect_assoc.md)
        &mdash; Вычисляет пересечение массивов с дополнительной проверкой индексов, используя для
        сравнения значений callback-функцию
    -   [array_uintersect_uassoc](./docs_depricated/funcref/vartype/array/func/array_uintersect_uassoc.md)
        &mdash; Вычисляет пересечение массивов с дополнительной проверкой индекса, используя для
        сравнения индексов и значений отдельные callback-функции
    -   [array_unique](./docs_depricated/funcref/vartype/array/func/array_unique.md) &mdash; Убирает
        повторяющиеся значения из массива
    -   [array_unshift](./docs_depricated/funcref/vartype/array/func/array_unshift.md) &mdash;
        Добавляет один или несколько элементов в начало массива
    -   [array_values](./docs_depricated/funcref/vartype/array/func/array_values.md) &mdash;
        Возвращает все значения массива
    -   [array_walk](./docs_depricated/funcref/vartype/array/func/array_walk.md) &mdash; Применяет
        пользовательскую функцию к каждому элементу массива
    -   [array_walk_recursive](./docs_depricated/funcref/vartype/array/func/array_walk_recursive.md)
        &mdash; Рекурсивно применяет пользовательскую функцию к каждому элементу массива
    -   [arsort](./docs_depricated/funcref/vartype/array/func/arsort.md) &mdash; Сортирует массив в
        порядке убывания, сохраняя ассоциацию индексов
    -   [asort](./docs_depricated/funcref/vartype/array/func/asort.md) &mdash; Сортирует массив в
        порядке возрастания, сохраняя ассоциацию индексов
    -   [count](./docs_depricated/funcref/vartype/array/func/count.md) &mdash; Подсчитывает
        количество элементов в массиве или в объекте `Countable`
    -   [in_array](./docs_depricated/funcref/vartype/array/func/in_array.md) &mdash; Проверяет,
        присутствует ли в массиве значение
    -   [key_exists](./docs_depricated/funcref/vartype/array/func/key_exists.md) &mdash; Псевдоним
        `array_key_exists`
    -   [krsort](./docs_depricated/funcref/vartype/array/func/krsort.md) &mdash; Сортирует массив по
        ключу в порядке убывания
    -   [ksort](./docs_depricated/funcref/vartype/array/func/ksort.md) &mdash; Сортирует массив по
        ключу в порядке возрастания
    -   [natcasesort](./docs_depricated/funcref/vartype/array/func/natcasesort.md) &mdash; Сортирует
        массив алгоритмом естественной сортировки (natural order) без учёта регистра символов
    -   [natsort](./docs_depricated/funcref/vartype/array/func/natsort.md) &mdash; Сортирует массив,
        для чего использует алгоритм «естественной сортировки»
    -   [range](./docs_depricated/funcref/vartype/array/func/range.md) &mdash; Создаёт массив,
        который содержит диапазон элементов
    -   [rsort](./docs_depricated/funcref/vartype/array/func/rsort.md) &mdash; Сортирует массив в
        порядке убывания
    -   [shuffle](./docs_depricated/funcref/vartype/array/func/shuffle.md) &mdash; Перемешивает
        массив
    -   [sizeof](./docs_depricated/funcref/vartype/array/func/sizeof.md) &mdash; Псевдоним `count`
    -   [sort](./docs_depricated/funcref/vartype/array/func/sort.md) &mdash; Сортирует массив по
        возрастанию
    -   [uasort](./docs_depricated/funcref/vartype/array/func/uasort.md) &mdash; Сортирует массив
        пользовательской функцией сравнения, сохраняя ассоциацию индексов
    -   [uksort](./docs_depricated/funcref/vartype/array/func/uksort.md) &mdash; Сортирует массив по
        ключам пользовательской функцией сравнения
    -   [usort](./docs_depricated/funcref/vartype/array/func/usort.md) &mdash; Сортирует массив по
        значениям используя пользовательскую функцию для сравнения элементов
    -   [array_index_max](./docs_depricated/funcref/vartype/array/other/array_index_max.md) &mdash;
        Возвращает наибольший числовой индекс массива.
    -   [array_index_min](./docs_depricated/funcref/vartype/array/other/array_index_min.md) &mdash;
        Возвращает наименьший числовой индекс массива.
    -   [array_reindex](./docs_depricated/funcref/vartype/array/other/array_reindex.md) &mdash;
        Переиндексирует переданный массив.

# v0.0.1

-   Добавлен модуль `variables` со следующими функциями:

    **Функции для работы с переменными**

    -   [boolval](./docs_depricated/funcref/vartype/var/func/boolval.md) &mdash; Возвращает
        логическое значение переменной
    -   [doubleval](./docs_depricated/funcref/vartype/var/func/doubleval.md) &mdash; Псевдоним
        `floatval`
    -   [empty](./docs_depricated/funcref/vartype/var/func/empty.md) &mdash; Проверяет, пуста ли
        переменная
    -   [floatval](./docs_depricated/funcref/vartype/var/func/floatval.md) &mdash; Возвращает
        значение переменной в виде числа с плавающей точкой
    -   [get_debug_type](./docs_depricated/funcref/vartype/var/func/get_debug_type.md) &mdash;
        Возвращает имя типа переменной в виде, подходящем для отладки
    -   [gettype](./docs_depricated/funcref/vartype/var/func/gettype.md) &mdash; Возвращает тип
        переменной
    -   [intval](./docs_depricated/funcref/vartype/var/func/intval.md) &mdash; Возвращает
        целочисленное значение переменной
    -   [is_array](./docs_depricated/funcref/vartype/var/func/is_array.md) &mdash; Определяет,
        представляет ли собой переменная массив
    -   [is_bool](./docs_depricated/funcref/vartype/var/func/is_bool.md) &mdash; Проверяет,
        представляет ли собой переменная логическое значение
    -   [is_callable](./docs_depricated/funcref/vartype/var/func/is_callable.md) &mdash; Проверяет,
        что значение может быть вызвано как функция
    -   [is_countable](./docs_depricated/funcref/vartype/var/func/is_countable.md) &mdash;
        Проверяет, представляет ли собой содержимое переменной счётное значение
    -   [is_double](./docs_depricated/funcref/vartype/var/func/is_double.md) &mdash; Псевдоним
        `is_float`
    -   [is_float](./docs_depricated/funcref/vartype/var/func/is_float.md) &mdash; Проверяет,
        представляет ли собой переменная число с плавающей точкой
    -   [is_int](./docs_depricated/funcref/vartype/var/func/is_int.md) &mdash; Проверяет,
        представляет ли собой переменная целое число
    -   [is_integer](./docs_depricated/funcref/vartype/var/func/is_integer.md) &mdash; Псевдоним
        `is_int`
    -   [is_iterable](./docs_depricated/funcref/vartype/var/func/is_iterable.md) &mdash; Проверяет,
        итерируемо ли содержимое переменной
    -   [is_long](./docs_depricated/funcref/vartype/var/func/is_long.md) &mdash; Псевдоним `is_int`
    -   [is_null](./docs_depricated/funcref/vartype/var/func/is_null.md) &mdash; Проверяет, равно ли
        значение переменной null
    -   [is_numeric](./docs_depricated/funcref/vartype/var/func/is_numeric.md) &mdash; Проверяет,
        содержит ли переменная число или числовую строку
    -   [is_object](./var/func/is_object.md) &mdash; Проверяет, представляет ли собой переменная
        объект
    -   [is_scalar](./docs_depricated/funcref/vartype/var/func/is_scalar.md) &mdash; Проверяет,
        представляет ли собой переменная скаляр
    -   [is_string](./docs_depricated/funcref/vartype/var/func/is_string.md) &mdash; Проверяет,
        представляет ли собой тип переменной строку
    -   [isset](./docs_depricated/funcref/vartype/var/func/isset.md) &mdash; Определяет, была ли
        установлена переменная значением, отличным от `null`
    -   [print_r](./docs_depricated/funcref/vartype/var/func/print_r.md) &mdash; Выводит
        удобочитаемую информацию о переменной
    -   [serialize](./docs_depricated/funcref/vartype/var/func/serialize.md) &mdash; Генерирует
        пригодное для хранения представление переменной
    -   [settype](./docs_depricated/funcref/vartype/var/func/settype.md) &mdash; Задаёт тип
        переменной
    -   [strval](./docs_depricated/funcref/vartype/var/func/strval.md) &mdash; Возвращает строковое
        значение переменной
    -   [unserialize](./docs_depricated/funcref/vartype/var/func/unserialize.md) &mdash; Создаёт
        значение из хранимого представления
    -   [var_dump](./docs_depricated/funcref/vartype/var/func/var_dump.md) &mdash; Выводит
        информацию о переменной
    -   [var_export](./docs_depricated/funcref/vartype/var/func/var_export.md) &mdash; Выводит или
        возвращает интерпретируемое строковое представление переменной

    **Дополнительные функции для работы с переменными**

    -   [arrval](./docs_depricated/funcref/vartype/var/other/arrval.md) &mdash; Приводит значение
        переменной к массиву
    -   [is_class](./docs_depricated/funcref/vartype/var/other/is_class.md) &mdash; Проверяет,
        является ли значение переменной классом
    -   [is_contract](./docs_depricated/funcref/vartype/var/other/is_contract.md) &mdash; Проверяет,
        является ли переданное значение переменной контрактом
    -   [is_number](./docs_depricated/funcref/vartype/var/other/is_number.md) &mdash; Проверяет,
        является ли переданное значение числом
    -   [is_symbol](./docs_depricated/funcref/vartype/var/other/is_symbol.md) &mdash; Проверяет,
        является ли переменная типом `symbol`
    -   [is_undefined](./docs_depricated/funcref/vartype/var/other/is_undefined.md) &mdash;
        Проверяет, имеет ли переменная значение `undefined`
    -   [objval](./docs_depricated/funcref/vartype/var/other/objval.md) &mdash; Приводит значение
        переменной к объекту

-   Добавлен модуль `functions` со следующими функциями:

    -   [get_magic_proxy](./docs_depricated/funcref/vartype/other/get_magic_proxy.md) &mdash;
        Добавляет экземпляру класса возможность работы с магическими методами
    -   [get_property_descriptor](./docs_depricated/funcref/vartype/other/get_property_descriptor.md)
        &mdash; Получает дескриптор свойства, находящегося в цепочке прототипов класса
    -   [implementable](./docs_depricated/funcref/vartype/other/implementable.md) &mdash; Добавляет
        переданному классу возможность реализации интерфейсов
    -   [traitable](./docs_depricated/funcref/vartype/other/traitable.md) &mdash; Добавляет классу
        возможность использования трейтов
    -   [uses](./docs_depricated/funcref/vartype/other/uses.md) &mdash; Проверяет, используется ли
        переданный трейт в переданном классе
    -   [verify_implementation_of_contract](./docs_depricated/funcref/vartype/other/verify_implementation_of_contract.md)
        &mdash; Проверяет реализацию контракта в переданном классе
    -   [verify_implementation_of_contracts](./docs_depricated/funcref/vartype/other/verify_implementation_of_contracts.md)
        &mdash; Проверяет реализацию контрактов в переданном классе

-   Добавлен модуль `classes` со следующими классами:

    **Основные**

    -   [stdClass](./docs_depricated/langref/interfaces/base/stdClass.md) &mdash; Класс stdClass

    **Дополнительные**

    -   [ExtensibleFunction](./docs_depricated/langref/interfaces/other/ExtensibleFunction.md)
        &mdash; Класс ExtensibleFunction

-   Добавлен модуль `contracts` со следующими интерфейсами:

    **Основные**

    -   [Traversable](./docs_depricated/langref/interfaces/base/Traversable.md) &mdash; Интерфейс
        Traversable
    -   [ArrayAccess](./docs_depricated/langref/interfaces/base/ArrayAccess.md) &mdash; Интерфейс
        ArrayAccess

    **Дополнительные**

    -   [Interface](./docs_depricated/langref/interfaces/other/Interface.md) &mdash; Интерфейс
        Interface

-   Добавлен модуль `spl/contracts` со следующими интерфейсами:

    **Основные**

    -   [Countable](./docs_depricated/funcref/other/spl/interfaces/Countable.md) &mdash; Интерфейс
        Countable
