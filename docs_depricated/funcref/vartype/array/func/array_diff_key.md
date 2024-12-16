# array_diff_key

[Документация на php.net](https://www.php.net/manual/ru/function.array-diff-key.php)

---

[Главная](../../../../../README.md) / [Справочник функций](../../../../funcref.md) /
[Модули для работы с переменными и типами](../../../vartype.md) / [Массивы](../../array.md) /
[Функции для работы с массивами](../func.md) / array_diff_key

---

`array_diff_key` — Вычисляет расхождение массивов, сравнивая ключи

### Описание

```ts
array_diff_key(original_array: Array|Object, ...arrays: Array|Object): Array|Object;
```

Сравнивает ключи `array` с ключами `arrays` и возвращает разницу. Эта функция схожа с
[array_diff()](./array_diff.md) за исключением того, что сравниваются ключи, а не значения.

### Список параметров

-   `original_array`

    Первый массив.

-   `arrays`

    Массивы для сравнения.

### Возвращаемые значения

Возвращает массив `(array)`, содержащий все элементы `array` с ключами, которых нет во всех
последующих массивах.

### Примеры

**Пример #1 Пример использования array_diff_key()**

```js
class cr {
    _priv_member;

    constructor(val) {
        this._priv_member = val;
    }
}

const a = { 0.1: new cr(9), 0.5: new cr(12), 0: new cr(23), 1: new cr(4), 2: new cr(-15) };
const b = { 0.2: new cr(9), 0.5: new cr(22), 0: new cr(3), 1: new cr(4), 2: new cr(-15) };

const result = array_diff_key(a, b);
print_r(result);
```

Результат выполнения приведённого примера:

    Array
    (
        [0.1] => cr Object
            (
                [_priv_member] => 9
            )

    )
