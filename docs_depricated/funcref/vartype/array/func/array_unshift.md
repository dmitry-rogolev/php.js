# array_unshift

[Документация на php.net](https://www.php.net/manual/ru/function.array-unshift.php)

---

[Главная](../../../../../README.md) / [Справочник функций](../../../../funcref.md) /
[Модули для работы с переменными и типами](../../../vartype.md) / [Массивы](../../array.md) /
[Функции для работы с массивами](../func.md) / array_unshift

---

`array_unshift` — Добавляет один или несколько элементов в начало массива

### Описание

```ts
array_unshift(array: Array|Object, ...values: any): number;
```

`array_unshift()` добавляет переданные в качестве аргументов элементы в начало массива `array`.
Обратите внимание, что список элементов добавляется целиком, то есть порядок элементов сохраняется.
Все числовые ключи будут изменены таким образом, что нумерация массива будет начинаться с нуля, в то
время как строковые ключи останутся прежними.

> **Замечание:**
>
> Функция сбрасывает внутренний указатель массива на первый элемент.

### Список параметров

-   `array`

    Входной массив.

-   `values`

    Значения для добавления.

### Возвращаемые значения

Возвращает новое количество элементов в `array`.

### Примеры

**Пример #1 Пример использования array_unshift()**

```js
const queue = ['orange', 'banana'];

array_unshift(queue, 'apple', 'raspberry');
var_dump(queue);
```

Результат выполнения приведённого примера:

    array(4) {
        [0]=>
        string(5) "apple"
        [1]=>
        string(9) "raspberry"
        [2]=>
        string(6) "orange"
        [3]=>
        string(6) "banana"
    }

**Пример #2 Пример использования с ассоциативными массивами**

Если один ассоциативный массив добавляется к другому ассоциативному массиву, то добавляемый массив
продолжает числовой индекс первого массива.

```js
const foods = {
    apples: {
        McIntosh: 'red',
        'Granny Smith': 'green',
    },
    oranges: {
        Navel: 'orange',
        Valencia: 'orange',
    },
};

const vegetables = {
    lettuce: {
        Iceberg: 'green',
        Butterhead: 'green',
    },
    carrots: {
        'Deep Purple Hybrid': 'purple',
        Imperator: 'orange',
    },
    cucumber: {
        Kirby: 'green',
        Gherkin: 'green',
    },
};

array_unshift(foods, vegetables);
var_dump(foods);
```

Результат выполнения приведённого примера:

    array(3) {
        [0]=>
        array(3) {
            ["lettuce"]=>
            array(2) {
                ["Iceberg"]=>
                string(5) "green"
                ["Butterhead"]=>
                string(5) "green"
            }
            ["carrots"]=>
            array(2) {
                ["Deep Purple Hybrid"]=>
                string(6) "purple"
                ["Imperator"]=>
                string(6) "orange"
            }
            ["cucumber"]=>
            array(2) {
                ["Kirby"]=>
                string(5) "green"
                ["Gherkin"]=>
                string(5) "green"
            }
        }
        ["apples"]=>
        array(2) {
            ["McIntosh"]=>
            string(3) "red"
            ["Granny Smith"]=>
            string(5) "green"
        }
        ["oranges"]=>
        array(2) {
            ["Navel"]=>
            string(6) "orange"
            ["Valencia"]=>
            string(6) "orange"
        }
    }
