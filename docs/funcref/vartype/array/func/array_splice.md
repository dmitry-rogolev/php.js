# array_splice

[Документация на php.net](https://www.php.net/manual/ru/function.array-splice.php)

---

[Главная](../../../../../README.md) / [Справочник функций](../../../../funcref.md) /
[Модули для работы с переменными и типами](../../../vartype.md) / [Массивы](../../array.md) /
[Функции для работы с массивами](../func.md) / array_splice

---

`array_splice` — Удаляет часть массива и заменяет её чем-нибудь ещё

### Описание

```ts
array_splice(array: Array|Object, offset: Number, length: Number|null = null, replacement: any = []): Array|Object;
```

Удаляет `length` элементов, расположенных на расстоянии `offset` из массива `array`, и заменяет их
элементами массива `replacement`, если он передан в качестве параметра.

> **Замечание:**
>
> Обратите внимание, что числовые ключи в массиве array не сохраняются.

> **Замечание:**
>
> Если параметр `replacement` не является массивом, он будет преобразован к нему с помощью функции
> [arrval](../../var/other/arrval.md). Это может привести к неожиданным результатам при
> использовании объекта или `null` в качестве `replacement`.

### Список параметров

-   `array`

    Входной массив.

-   `offset`

    Если параметр `offset` положительный, будут удалены элементы, находящиеся на расстоянии `offset`
    от начала `array`.

    Если `offset` отрицательный, будут удалены элементы, находящиеся на расстоянии `offset` от конца
    `array`.

-   `length`

    Если параметр `length` опущен, будут удалены все элементы начиная с позиции `offset` и до конца
    массива.

    Если `length` указан и он положителен, то будет удалено именно столько элементов.

    Если параметр `length` отрицателен, то конец удаляемой части элементов будет отстоять на это
    количество от конца массива.

    Если `length` задан как `0`, ничего удалено не будет.

    > **Подсказка**
    >
    > Совет: для того, чтобы удалить все элементы массива, начиная с позиции `offset` до конца
    > массива, в то время как указан параметр replacement, используйте `count(input)` в качестве
    > параметра `length`.

-   `replacement`

    Если передан массив `replacement` в качестве аргумента, тогда удалённые элементы будут заменены
    элементами этого массива.

    Если параметры `offset` и `length` таковы, что из исходного массива не будет ничего удалено,
    тогда элементы массива `replacement` будут вставлены на позицию `offset`.

    > **Замечание:**
    >
    > Обратите внимание, что ключи массива `replacement` не сохраняются.

### Возвращаемые значения

Возвращает массив, содержащий удалённые элементы.

### Примеры

**Пример #1 Пример использования array_splice()**

```js
let input = ['red', 'green', 'blue', 'yellow'];
array_splice(input, 2);
var_dump(input);

input = ['red', 'green', 'blue', 'yellow'];
array_splice(input, 1, -1);
var_dump(input);

input = ['red', 'green', 'blue', 'yellow'];
array_splice(input, 1, count(input), 'orange');
var_dump(input);

input = ['red', 'green', 'blue', 'yellow'];
array_splice(input, -1, 1, ['black', 'maroon']);
var_dump(input);
```

Результат выполнения приведённого примера:

    array(2) {
        [0]=>
        string(3) "red"
        [1]=>
        string(5) "green"
    }

    array(2) {
        [0]=>
        string(3) "red"
        [1]=>
        string(6) "yellow"
    }

    array(2) {
        [0]=>
        string(3) "red"
        [1]=>
        string(6) "orange"
    }

    array(5) {
        [0]=>
        string(3) "red"
        [1]=>
        string(5) "green"
        [2]=>
        string(4) "blue"
        [3]=>
        string(5) "black"
        [4]=>
        string(6) "maroon"
    }
