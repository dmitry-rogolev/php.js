[Главная](../README.md) / Обработка переменных

# Обработка переменных

## Функции для работы с переменными

-   [empty](./variables/empty.md) &mdash; Проверяет, является ли переменная пустой.
-   [gettype](./variables/gettype.md) &mdash; Определяет тип переменной.
-   [is_array](./variables/is_array.md) &mdash; проверяет, является ли переданная переменная
    массивом или ассоциативным массивом (объектом с ключами и значениями).
-   [is_bool](./variables/is_bool.md) &mdash; Проверяет, является ли переданное значение логическим
    типом (`boolean`).
-   [is_callable](./variables/is_callable.md) &mdash; Проверяет, что значение может быть вызвано как
    функция, исключая классы.
-   [is_class](./variables/is_class.md) &mdash; Проверяет, является ли переданная переменная
    классом.
-   [is_contract](./variables/is_contract.md) &mdash; Проверяет, является ли переданный класс
    контрактом, основанным на интерфейсе `Interface`.
-   [is_countable](./variables/is_countable.md) &mdash; Проверяет, счётно ли значение переменной.
-   [is_double](./variables/is_double.md) &mdash; Проверяет, является ли значение числом с плавающей
    точкой (аналогично `is_float`).
-   [is_float](./variables/is_float.md) &mdash; Проверяет, является ли значение числом с плавающей
    точкой.
-   [is_int](./variables/is_int.md) &mdash; Проверяет, является ли значение целым числом.
-   [is_integer](./variables/is_integer.md) &mdash; Проверяет, является ли значение целым числом.
-   [is_iterable](./variables/is_iterable.md) &mdash; Проверяет, является ли переданное значение
    итерируемым.
-   [is_long](./variables/is_long.md) &mdash; Проверяет, является ли значение целым числом.
-   [is_null](./variables/is_null.md) &mdash; Проверяет, является ли значение `null`.
-   [is_number](./variables/is_number.md) &mdash; Проверяет, является ли значение числом.
-   [is_numeric](./variables/is_numeric.md) &mdash; Проверяет, является ли значение числом или
    числовой строкой.
-   [is_object](./variables/is_object.md) &mdash; Проверяет, является ли переданная переменная
    объектом, созданным с использованием класса.
-   [is_scalar](./variables/is_scalar.md) &mdash; Проверяет, является ли значение скалярным.
-   [is_string](./variables/is_string.md) &mdash; Проверяет, является ли значение строкой.
-   [is_symbol](./variables/is_symbol.md) &mdash; Проверяет, является ли значение символом.
-   [is_undefined](./variables/is_undefined.md) &mdash; Проверяет, является ли значение `undefined`.
-   [isset](./variables/isset.md) &mdash; Проверяет, определены ли переменные.
-   [print_type](./variables/print_type.md) &mdash; Преобразует значение в строку с указанием типа и
    выводит его на консоль.
-   [print](./variables/print.md) &mdash; Преобразует значение в строку и выводит его на консоль.
-   [settype](./variables/settype.md) &mdash; Преобразует значение в указанный тип.
-   [to_array](./variables/to_array.md) &mdash; Преобразует значение в массив.
-   [to_bool](./variables/to_bool.md) &mdash; Преобразует значение в логическое значение.
-   [to_boolean](./variables/to_boolean.md) &mdash; Синоним функции `to_bool`.
-   [to_double](./variables/to_double.md) &mdash; Преобразует значение в число с плавающей точкой.
-   [to_float](./variables/to_float.md) &mdash; Преобразует значение в число с плавающей точкой.
-   [to_int](./variables/to_int.md) &mdash; Преобразует значение в целое число.
-   [to_integer](./variables/to_integer.md) &mdash; Синоним функции `to_int`.
-   [to_object](./variables/to_object.md) &mdash; Преобразует значение в объект.
-   [to_string](./variables/to_string.md) &mdash; Преобразует значение в строку.

## Классы для работы с переменными

-   [Convert](./variables/Convert.md) &mdash; Класс для преобразования значений в различные типы
    данных.

    **Статичные методы:**

    -   [toArray](./variables/Convert/toArray.md) &mdash; Преобразует значение в массив.
    -   [toBool](./variables/Convert/toBool.md) &mdash; Преобразует значение в логическое значение.
    -   [toBoolean](./variables/Convert/toBoolean.md) &mdash; Преобразует значение в логическое
        значение.
    -   [toDouble](./variables/Convert/toDouble.md) &mdash; Преобразует значение в число с плавающей
        точкой.
    -   [toFloat](./variables/Convert/toFloat.md) &mdash; Преобразует значение в число с плавающей
        точкой.
    -   [toInt](./variables/Convert/toInt.md) &mdash; Преобразует значение в целое число.
    -   [toInteger](./variables/Convert/toInteger.md) &mdash; Преобразует значение в целое число.
    -   [toObject](./variables/Convert/toObject.md) &mdash; Преобразует значение в объект.
    -   [toString](./variables/Convert/toString.md) &mdash; Преобразует значение в строку.

-   [Type](./variables/Type.md) &mdash; Класс для проверки типов данных.

    **Статичные методы:**

    -   [isArray](./variables/Type/isArray.md) &mdash; Проверяет, является ли значение массивом или
        ассоциативным массивом.
    -   [isBool](./variables/Type/isBool.md) &mdash; Проверяет, является ли значение логическим
        (`boolean`).
    -   [isBoolean](./variables/Type/isBoolean.md) &mdash; Проверяет, является ли значение
        логическим (`boolean`).
    -   [isCallable](./variables/Type/isCallable.md) &mdash; Проверяет, может ли значение быть
        вызвано как функция.
    -   [isClass](./variables/Type/isClass.md) &mdash; Проверяет, является ли значение классом.
    -   [isContract](./variables/Type/isContract.md) &mdash; Проверяет, является ли значение
        контрактом, основанным на классе `Interface`.
    -   [isCountable](./variables/Type/isCountable.md) &mdash; Проверяет, является ли значение
        счётным.
    -   [isDouble](./variables/Type/isDouble.md) &mdash; Проверяет, является ли значение числом с
        плавающей точкой.
    -   [isFloat](./variables/Type/isFloat.md) &mdash; Проверяет, является ли значение числом с
        плавающей точкой.
    -   [isInt](./variables/Type/isInt.md) &mdash; Проверяет, является ли значение целым числом.
    -   [isInteger](./variables/Type/isInteger.md) &mdash; Проверяет, является ли значение целым
        числом.
    -   [isIterable](./variables/Type/isIterable.md) &mdash; Проверяет, является ли значение
        итерируемым.
    -   [isLong](./variables/Type/isLong.md) &mdash; Проверяет, является ли значение целым числом.
    -   [isNull](./variables/Type/isNull.md) &mdash; Проверяет, является ли значение `null`.
    -   [isNumber](./variables/Type/isNumber.md) &mdash; Проверяет, является ли значение числом.
    -   [isNumeric](./variables/Type/isNumeric.md) &mdash; Проверяет, является ли значение числом
        или числовой строкой.
    -   [isObject](./variables/Type/isObject.md) &mdash; Проверяет, является ли значение объектом,
        созданным с использованием класса.
    -   [isScalar](./variables/Type/isScalar.md) &mdash; Проверяет, является ли значение скалярным.
    -   [isString](./variables/Type/isString.md) &mdash; Проверяет, является ли значение строкой.
    -   [isSymbol](./variables/Type/isSymbol.md) &mdash; Проверяет, является ли значение символом.
    -   [isUndefined](./variables/Type/isUndefined.md) &mdash; Проверяет, является ли значение
        `undefined`.
