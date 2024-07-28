# array_reduce

[Документация на php.net](https://www.php.net/manual/ru/function.array-reduce.php)

---

[Главная](../../../../../README.md) / [Справочник функций](../../../../funcref.md) /
[Модули для работы с переменными и типами](../../../vartype.md) / [Массивы](../../array.md) /
[Функции для работы с массивами](../func.md) / array_reduce

---

`array_reduce` — Итеративно уменьшает массив к единственному значению, используя callback-функцию

### Описание

```ts
array_reduce(array: Array|Object, callback: Function, initial: any = null);
```

`array_reduce()` итеративно применяет callback-функцию `callback` к элементам массива `array` и,
таким образом, сводит массив к единственному значению.

### Список параметров

-   `array`

    Входной массив.

-   `callback`

    `callback(mixed $carry, mixed $item): mixed`

    -   `carry`

        Содержит результирующее значение с предыдущей итерации; в случае же первой итерации содержит
        значение параметра `initial`.

    -   `item`

        Содержит значение текущей итерации.

-   `initial`

    Если передан необязательный параметр `initial`, то он будет использован в начале процесса, или в
    качестве окончательного результата в случае пустого массива.

### Возвращаемые значения

Возвращает получившееся значение.

Если массив пуст и не передан параметр `initial`, `array_reduce()` вернёт `null`.

### Примеры

**Пример #1 Пример использования array_reduce()**

```js
function sum(carry, item) {
    carry += item;
    return carry;
}

function product(carry, item) {
    carry *= item;
    return carry;
}

const a = [1, 2, 3, 4, 5];
const x = [];

var_dump(array_reduce(a, sum));
var_dump(array_reduce(a, product, 10));
var_dump(array_reduce(x, sum, 'Нет данных'));
```

Результат выполнения приведённого примера:

    int(15)
    int(1200)
    string(10) "Нет данных"
