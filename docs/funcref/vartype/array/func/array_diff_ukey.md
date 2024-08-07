# array_diff_ukey

[Документация на php.net](https://www.php.net/manual/ru/function.array-diff-ukey.php)

---

[Главная](../../../../../README.md) / [Справочник функций](../../../../funcref.md) /
[Модули для работы с переменными и типами](../../../vartype.md) / [Массивы](../../array.md) /
[Функции для работы с массивами](../func.md) / array_diff_ukey

---

`array_diff_ukey` — Вычисляет расхождение массивов, используя callback-функцию для сравнения ключей

### Описание

```ts
array_diff_ukey(key_compare_func: Function, original_array: Array|Object, ...arrays: Array|Object): Array|Object;
```

Сравнивает ключи `array` с ключами `arrays` и возвращает разницу. Эта функция похожа на
[array_diff()](./array_diff.md) за исключением того, что сравниваются ключи, а не значения.

В отличие от функции `array_diff_key()` для сравнения ключей используется функция, предоставляемая
пользователем, а не встроенная функция.

### Список параметров

-   `key_compare_func`

    Функция сравнения должна возвращать `true`, если переданные ключи равны.

        (a, b) => bool

-   `original_array`

    Первый массив.

-   `arrays`

    Массивы для сравнения.

### Возвращаемые значения

Возвращает массив `(array)`, содержащий все элементы `array`, отсутствующие в каком-либо из всех
остальных массивов.

### Примеры

**Пример #1 Пример использования array_diff_ukey()**

```js
class cr {
    _priv_member;

    constructor(val) {
        this._priv_member = val;
    }

    static comp_func_key(a, b) {
        return a === b;
    }
}

const a = { 0.1: new cr(9), 0.5: new cr(12), 0: new cr(23), 1: new cr(4), 2: new cr(-15) };
const b = { 0.2: new cr(9), 0.5: new cr(22), 0: new cr(3), 1: new cr(4), 2: new cr(-15) };

const result = array_diff_ukey(cr.comp_func_key, a, b);
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
