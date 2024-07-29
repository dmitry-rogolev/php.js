# array_key_first

[Документация на php.net](https://www.php.net/manual/ru/function.array-key-first.php)

---

[Главная](../../../../../README.md) / [Справочник функций](../../../../funcref.md) /
[Модули для работы с переменными и типами](../../../vartype.md) / [Массивы](../../array.md) /
[Функции для работы с массивами](../func.md) / array_key_first

---

`array_key_first` — Получает первый ключ массива

### Описание

```ts
array_key_first(array: Array|Object): String|null;
```

Получить первый ключ заданного массива `array`, не затрагивая внутренний указатель массива.

### Список параметров

-   `array`

    Массив.

### Возвращаемые значения

Возвращает первый ключ массива `array`, если он не пустой; `null` в противном случае.

### Примеры

**Пример #1 Пример использования array_key_first()**

```js
const array = { a: 1, b: 2, c: 3 };
const firstKey = array_key_first(array);
var_dump(firstKey);
```

Результат выполнения приведённого примера:

    string(1) "a"
