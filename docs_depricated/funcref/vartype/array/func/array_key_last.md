# array_key_last

[Документация на php.net](https://www.php.net/manual/ru/function.array-key-last.php)

---

[Главная](../../../../../README.md) / [Справочник функций](../../../../funcref.md) /
[Модули для работы с переменными и типами](../../../vartype.md) / [Массивы](../../array.md) /
[Функции для работы с массивами](../func.md) / array_key_last

---

`array_key_last` — Получает последний ключ массива

### Описание

```ts
array_key_last(array: Array|Object): String|null;
```

Получить последний ключ заданного массива `array`.

### Список параметров

-   `array`

    Массив.

### Возвращаемые значения

Возвращает последний ключ массива `array`, если он не пустой; `null` в противном случае.

### Примеры

**Пример #1 Пример использования array_key_last()**

```js
const array = { a: 1, b: 2, c: 3 };
const lastKey = array_key_last(array);
var_dump(lastKey);
```

Результат выполнения приведённого примера:

    string(1) "c"
