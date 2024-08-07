# array_diff_assoc

[Документация на php.net](https://www.php.net/manual/ru/function.array-diff-assoc.php)

---

[Главная](../../../../../README.md) / [Справочник функций](../../../../funcref.md) /
[Модули для работы с переменными и типами](../../../vartype.md) / [Массивы](../../array.md) /
[Функции для работы с массивами](../func.md) / array_diff_assoc

---

`array_diff_assoc` — Вычисляет расхождение массивов с дополнительной проверкой индекса

### Описание

```ts
array_diff_assoc(original_array: Array|Object, ...arrays: Array|Object): Array|Object;
```

Сравнивает значения массива `array` со значениями массивов `arrays` и возвращает разницу. В этой
функции, в отличие от функции [array_diff()](./array_diff.md), ключи массива также участвуют в
сравнении.

### Список параметров

-   `original_array`

    Первый массив.

-   `arrays`

    Массивы для сравнения.

### Возвращаемые значения

Возвращает массив `(array)`, содержащий элементы аргумента `array`, которых нет ни в одном другом
аргументе.

### Примеры

**Пример #1 Пример использования array_udiff_uassoc()**

```js
class cr {
    _priv_member;

    constructor(val) {
        this._priv_member = val;
    }

    toString() {
        return String(this._priv_member);
    }
}

const a = { 0.1: new cr(9), 0.5: new cr(12), 0: new cr(23), 1: new cr(4), 2: new cr(-15) };
const b = { 0.2: new cr(9), 0.5: new cr(22), 0: new cr(3), 1: new cr(4), 2: new cr(-15) };

const result = array_diff_assoc(a, b);
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