# array_combine

[Документация на php.net](https://www.php.net/manual/ru/function.array-combine.php)

---

[Главная](../../../../../README.md) / [Справочник функций](../../../../funcref.md) /
[Модули для работы с переменными и типами](../../../vartype.md) / [Массивы](../../array.md) /
[Функции для работы с массивами](../func.md) / array_combine

---

`array_combine` — Создаёт новый массив, используя один массив в качестве ключей, а другой для его
значений

### Описание

```ts
array_combine(keys: Array|Object, values: Array|Object): Object
```

Создаёт массив `(array)`, используя значения массива `keys` в качестве ключей и значения массива
`values` в качестве соответствующих значений.

### Список параметров

-   `keys`

    Массив ключей. Некорректные значения для ключей будут преобразованы в строку `(string)`.

-   `values`

    Массив значений

### Возвращаемые значения

Возвращает скомбинированный массив `(array)`.

### Примеры

**Пример #1 Пример использования array_combine()**

```js
const a = ['green', 'red', 'yellow'];
const b = ['avocado', 'apple', 'banana'];
const c = array_combine(a, b);

print_r(c);
```

Результат выполнения приведённого примера:

    Array
    (
        [green] => avocado
        [red] => apple
        [yellow] => banana
    )
