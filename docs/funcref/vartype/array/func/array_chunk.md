# array_chunk

[Документация на php.net](https://www.php.net/manual/ru/function.array-chunk.php)

---

[Главная](../../../../../README.md) / [Справочник функций](../../../../funcref.md) /
[Модули для работы с переменными и типами](../../../vartype.md) / [Массивы](../../array.md) /
[Функции для работы с массивами](../func.md) / array_chunk

---

`array_chunk` — Разбивает массив на части

### Описание

```ts
array_chunk(array: Array|Object, length: number, preserve_keys: boolean = false)
```

Разбивает массив на массивы с заданным в параметре `length` количеством элементов. Количество
элементов в последней части будет равняться или окажется меньше заданной длины `(length)`.

### Список параметров

-   `array`

    Массив, который нужно разбить.

-   `length`

    Размер каждой части.

-   `preserve_keys`

    Если установлено значение `true`, ключи оригинального массива будут сохранены. По умолчанию —
    `false`, что переиндексирует части числовыми ключами.

### Возвращаемые значения

Возвращает многомерный индексный массив (индексация начинается с нуля), в котором каждый элемент
первого уровня содержит `length` элементов.

### Ошибки

Если параметр `length` меньше `1`, будет выброшено исключение
[ValuePHPJSError](./../../../../langref/exceptions/ValuePHPJSError.md).

### Примеры

**Пример #1 Пример использования array_chunk()**

```js
const input_array = ['a', 'b', 'c', 'd', 'e'];
print_r(array_chunk(input_array, 2));
print_r(array_chunk(input_array, 2, true));
```

Результат выполнения приведённого примера:

    Array
    (
        [0] => Array
            (
                [0] => a
                [1] => b
            )

        [1] => Array
            (
                [0] => c
                [1] => d
            )

        [2] => Array
            (
                [0] => e
            )

    )

    Array
    (
        [0] => Array
            (
                [0] => a
                [1] => b
            )

        [1] => Array
            (
                [2] => c
                [3] => d
            )

        [2] => Array
            (
                [4] => e
            )

    )
