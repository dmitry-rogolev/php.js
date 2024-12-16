# array_udiff_assoc

[Документация на php.net](https://www.php.net/manual/ru/function.array-udiff-assoc.php)

---

[Главная](../../../../../README.md) / [Справочник функций](../../../../funcref.md) /
[Модули для работы с переменными и типами](../../../vartype.md) / [Массивы](../../array.md) /
[Функции для работы с массивами](../func.md) / array_udiff_assoc

---

`array_udiff_assoc` — Вычисляет расхождение в массивах с дополнительной проверкой индексов,
используя для сравнения значений callback-функцию

### Описание

```ts
array_udiff_assoc(value_compare_func: Function, original_array: Array|Object, ...arrays: Array|Object): Array|Object;
```

Вычисляет расхождение массивов с дополнительной проверкой индексов, используя для сравнения значений
callback-функцию.

### Список параметров

-   `value_compare_func`

    Функция сравнения должна возвращать `true`, если переданные значения равны.

        (a, b) => bool

-   `original_array`

    Первый массив.

-   `arrays`

    Массивы для сравнения.

### Возвращаемые значения

Возвращает массив `(array)`, содержащий элементы аргумента `array`, которых нет ни в одном другом
аргументе.

### Примеры

**Пример #1 Пример использования array_udiff_assoc()**

```js
class cr {
    _priv_member;

    constructor(val) {
        this._priv_member = val;
    }

    static comp_func_cr(a, b) {
        return a._priv_member === b._priv_member;
    }
}

const a = { 0.1: new cr(9), 0.5: new cr(12), 0: new cr(23), 1: new cr(4), 2: new cr(-15) };
const b = { 0.2: new cr(9), 0.5: new cr(22), 0: new cr(3), 1: new cr(4), 2: new cr(-15) };

const result = array_udiff_assoc(cr.comp_func_cr, a, b);
print_r(result);
```

Результат выполнения приведённого примера:

    Array
    (
        [0] => cr Object
            (
                [_priv_member] => 23
            )

        [0.1] => cr Object
            (
                [_priv_member] => 9
            )

        [0.5] => cr Object
            (
                [_priv_member] => 12
            )

    )
