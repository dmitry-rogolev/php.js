# array_reverse

[Документация на php.net](https://www.php.net/manual/ru/function.array-reverse.php)

---

[Главная](../../../../../README.md) / [Справочник функций](../../../../funcref.md) /
[Модули для работы с переменными и типами](../../../vartype.md) / [Массивы](../../array.md) /
[Функции для работы с массивами](../func.md) / array_reverse

---

`array_reverse` — Возвращает массив с элементами в обратном порядке

### Описание

```ts
array_reverse(array: Array|Object, preserve_keys: boolean = false): Array|Object
```

Принимает массив `array` и возвращает новый массив, содержащий элементы исходного массива в обратном
порядке.

### Список параметров

-   `array`

    Входной массив.

-   `preserve_keys`

    Если установлено в `true`, то числовые ключи будут сохранены. Нечисловые ключи не подвержены
    этой опции и всегда сохраняются.

### Возвращаемые значения

Возвращает массив с элементами в обратном порядке.

### Примеры

**Пример #1 Пример использования array_reverse()**

```js
const input = ['js', 4.0, ['green', 'red']];
const reversed = array_reverse(input);
const preserved = array_reverse(input, true);

print_r(input);
print_r(reversed);
print_r(preserved);
```

Результат выполнения приведённого примера:

    Array
    (
        [0] => js
        [1] => 4
        [2] => Array
            (
                [0] => green
                [1] => red
            )
    )

    Array
    (
        [0] => Array
            (
                [0] => green
                [1] => red
            )

        [1] => 4
        [2] => js
    )

    Array
    (
        [0] => js
        [1] => 4
        [2] => Array
            (
                [0] => green
                [1] => red
            )
    )
