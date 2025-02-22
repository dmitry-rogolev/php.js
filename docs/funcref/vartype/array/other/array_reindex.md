# array_reindex

> Это дополнительная функция, отсутствующая в PHP.

---

[Главная](../../../../../README.md) / [Справочник функций](../../../../funcref.md) /
[Модули для работы с переменными и типами](../../../vartype.md) / [Массивы](../../array.md) /
[Дополнительные функции для работы с массивами](../other.md) / array_reindex

---

`array_reindex` — Переиндексирует переданный массив.

### Описание

```ts
array_reindex(array: Array|Object): Array|Object;
```

Переиндексирует переданный массив.

### Список параметров

-   `array`

    Исходный массив.

### Возвращаемые значения

Возвращает переиндексированный массив.

### Примеры

**Пример #1 Пример использования array_reindex()**

```js
const array = { foo: 'bar', 2: 'baz', 10: 'ban' };
const result = array_reindex(array);
print_r(result);
```

Результат выполнения приведённого примера:

    Array
    (
        [0] => baz
        [1] => ban
        [foo] => bar
    )
