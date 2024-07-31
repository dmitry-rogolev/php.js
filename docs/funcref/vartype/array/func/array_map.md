# array_map

[Документация на php.net](https://www.php.net/manual/ru/function.array-map.php)

---

[Главная](../../../../../README.md) / [Справочник функций](../../../../funcref.md) /
[Модули для работы с переменными и типами](../../../vartype.md) / [Массивы](../../array.md) /
[Функции для работы с массивами](../func.md) / array_map

---

`array_map` — Применяет callback-функцию ко всем элементам указанных массивов

### Описание

```ts
array_map(callback: Function|null, array: Array|Object, ...arrays: Array|Object): Array|Object;
```

Функция `array_map()` возвращает массив `(array)`, содержащий результаты применения callback-функции
к соответствующему элементу `array` (и `arrays`, если указано больше массивов), используемого в
качестве аргумента callback-функции.

### Список параметров

-   `callback`

    `callable`, применяемая к каждому элементу в каждом массиве.

    `null` может быть передан в качестве значения `callback` для выполнения `zip` операции с
    несколькими массивами. Если указан только `array`, `array_map()` вернёт входной массив.

-   `array`

    Массив, к которому применяется callback-функция.

-   `arrays`

    Дополнительные массивы для обработки callback-функцией.

### Возвращаемые значения

Возвращает массив, содержащий результаты применения callback-функции к соответствующему элементу
`array` (и `arrays`, если указано больше массивов), используемого в качестве аргумента для
callback-функции.

Возвращённый массив сохранит ключи аргумента массива тогда и только тогда, когда будет передан ровно
один массив. Если передано более одного массива, возвращённый массив будет иметь последовательные
целочисленные ключи.

### Примеры

**Пример #1 Пример использования array_map()**

```js
function cube(n) {
    return n * n * n;
}

const a = [1, 2, 3, 4, 5];
const b = array_map(cube, a);
print_r(b);
```

Результат выполнения приведённого примера:

    Array
    (
        [0] => 1
        [1] => 8
        [2] => 27
        [3] => 64
        [4] => 125
    )

**Пример #2 Пример использования array_map(): обработка нескольких массивов**

```js
function show_Spanish(n, m) {
    return `Число ${n} по-испански - ${m}`;
}

function map_Spanish(n, m) {
    return { [n]: m };
}

const a = [1, 2, 3, 4, 5];
const b = ['uno', 'dos', 'tres', 'cuatro', 'cinco'];

const c = array_map(show_Spanish, a, b);
print_r(c);

const d = array_map(map_Spanish, a, b);
print_r(d);
```

Результат выполнения приведённого примера:

    Array
    (
        [0] => Число 1 по-испански - uno
        [1] => Число 2 по-испански - dos
        [2] => Число 3 по-испански - tres
        [3] => Число 4 по-испански - cuatro
        [4] => Число 5 по-испански - cinco
    )

    Array
    (
        [0] => Array
            (
                [1] => uno
            )

        [1] => Array
            (
                [2] => dos
            )

        [2] => Array
            (
                [3] => tres
            )

        [3] => Array
            (
                [4] => cuatro
            )

        [4] => Array
            (
                [5] => cinco
            )

    )

**Пример #3 Выполнение zip операции с массивами**

```js
const a = [1, 2, 3, 4, 5];
const b = ['one', 'two', 'three', 'four', 'five'];
const c = ['uno', 'dos', 'tres', 'cuatro', 'cinco'];

const d = array_map(null, a, b, c);
print_r(d);
```

Результат выполнения приведённого примера:

    Array
    (
        [0] => Array
            (
                [0] => 1
                [1] => one
                [2] => uno
            )

        [1] => Array
            (
                [0] => 2
                [1] => two
                [2] => dos
            )

        [2] => Array
            (
                [0] => 3
                [1] => three
                [2] => tres
            )

        [3] => Array
            (
                [0] => 4
                [1] => four
                [2] => cuatro
            )

        [4] => Array
            (
                [0] => 5
                [1] => five
                [2] => cinco
            )

    )

**Пример #4 null callback только с array**

```js
const array = [1, 2, 3];
var_dump(array_map(null, array));
```

Результат выполнения приведённого примера:

    array(3) {
        [0]=>
        int(1)
        [1]=>
        int(2)
        [2]=>
        int(3)
    }

**Пример #5 Использование array_map() со строковыми ключами**

```js
const arr = { stringkey: 'value' };
function cb1(a) {
    return [a];
}
function cb2(a, b) {
    return [a, b];
}
var_dump(array_map(cb1, arr));
var_dump(array_map(cb2, arr, arr));
var_dump(array_map(null, arr));
var_dump(array_map(null, arr, arr));
```

Результат выполнения приведённого примера:

    array(1) {
        ["stringkey"]=>
        array(1) {
            [0]=>
            string(5) "value"
        }
    }

    array(1) {
        [0]=>
        array(2) {
            [0]=>
            string(5) "value"
            [1]=>
            string(5) "value"
        }
    }

    array(1) {
        ["stringkey"]=>
        string(5) "value"
    }

    array(1) {
        [0]=>
        array(2) {
            [0]=>
            string(5) "value"
            [1]=>
            string(5) "value"
        }
    }

**Пример #6 array_map() - ассоциативные массивы**

```js
const arr = {
    v1: 'Первый выпуск',
    v2: 'Второй выпуск',
    v3: 'Третий выпуск',
};

const callback = (k, v) => `${k} - это ${v}`;

const result = array_map(callback, array_keys(arr), array_values(arr));

var_dump(result);
```

Результат выполнения приведённого примера:

    array(3) {
        [0]=>
        string(22) "v1 - это Первый выпуск"
        [1]=>
        string(22) "v2 - это Второй выпуск"
        [2]=>
        string(22) "v3 - это Третий выпуск"
    }
