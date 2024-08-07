# array_diff

[Документация на php.net](https://www.php.net/manual/ru/function.array-diff.php)

---

[Главная](../../../../../README.md) / [Справочник функций](../../../../funcref.md) /
[Модули для работы с переменными и типами](../../../vartype.md) / [Массивы](../../array.md) /
[Функции для работы с массивами](../func.md) / array_diff

---

`array_diff` — Вычисляет расхождение массивов

### Описание

```ts
array_diff(original_array: Array|Object, ...arrays: Array|Object): Array|Object;
```

Сравнивает массив, переданный в параметр `array`, с одним или несколькими другими массивами и
возвращает значения из массива `array`, которые отсутствуют во всех других массивах.

### Список параметров

-   `original_array`

    Первый массив.

-   `arrays`

    Массивы для сравнения.

### Возвращаемые значения

Возвращает массив `(array)`, содержащий элементы аргумента `array`, которых нет ни в одном другом
аргументе.

### Примеры

**Пример #1 Пример использования array_diff()**

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

const result = array_diff(a, b);
print_r(result);
```

Результат выполнения приведённого примера:

    Array
    (
        [0] => cr Object
            (
                [_priv_member] => 23
            )

        [0.5] => cr Object
            (
                [_priv_member] => 12
            )

    )
