# array_keys

[Документация на php.net](https://www.php.net/manual/ru/function.array-keys.php)

---

[Главная](../../../../../README.md) / [Справочник функций](../../../../funcref.md) /
[Модули для работы с переменными и типами](../../../vartype.md) / [Массивы](../../array.md) /
[Функции для работы с массивами](../func.md) / array_keys

---

`array_keys` — Возвращает все или некоторое подмножество ключей массива

### Описание

```ts
array_keys(array: Array|Object, filter_value: any = null, strict: boolean = false): Array
```

Функция `array_keys()` возвращает числовые и строковые ключи массива `array`.

Функция возвращает ключи только заданного значения, если определён параметр `filter_value`. В
противном случае функция возвращает все ключи массива `array`.

### Список параметров

-   `array`

    Массив, который содержит возвращаемые ключи.

-   `filter_value`

    Если задан, функция вернёт только те ключи, которые содержат это значение.

-   `strict`

    Определяет, будет ли функция при поиске применять строгое сравнение `(===)`.

### Возвращаемые значения

Возвращает массив со всеми ключами массива array.

### Примеры

**Пример #1 Пример использования array_keys()**

```js
let array = { 0: 100, color: 'red' };
print_r(array_keys(array));

array = ['blue', 'red', 'green', 'blue', 'blue'];
print_r(array_keys(array, 'blue'));

array = {
    color: ['blue', 'red', 'green'],
    size: ['small', 'medium', 'large'],
};
print_r(array_keys(array));
```

Результат выполнения приведённого примера:

    Array
    (
        [0] => 0
        [1] => color
    )

    Array
    (
        [0] => 0
        [1] => 3
        [2] => 4
    )

    Array
    (
        [0] => color
        [1] => size
    )
