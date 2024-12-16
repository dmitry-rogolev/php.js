# count

[Документация на php.net](https://www.php.net/manual/ru/function.count.php)

---

[Главная](../../../../../README.md) / [Справочник функций](../../../../funcref.md) /
[Модули для работы с переменными и типами](../../../vartype.md) / [Массивы](../../array.md) /
[Функции для работы с массивами](../func.md) / count

---

`count` — Подсчитывает количество элементов в массиве или в объекте
[Countable](../../../../funcref/other/spl/interfaces/Countable.md)

### Описание

```ts
count(value: Array|Object|Countable, mode: number = COUNT_NORMAL): number
```

Функция подсчитывает количество элементов в массиве, если в функцию передали массив. Функция
возвращает значение, которое вернул метод `Countable.count()`, если в функцию передали объект,
который реализует интерфейс `Countable`.

### Список параметров

-   `value`

    Массив или объект, который реализует интерфейс `Countable`.

-   `mode`

    Функция `count()` будет рекурсивно подсчитывать элементы массива, если для необязательного
    параметра `mode` установили значение `COUNT_RECURSIVE` (или 1). Это, в частности, полезно для
    подсчёта элементов многомерных массивов.

### Возвращаемые значения

Функция возвращает количество элементов в параметре `value`.

### Примеры

**Пример #1 Пример использования count()**

```js
var_dump(count([1, 2, 3]));

const array = [];
array[0] = 1;
array[5] = 2;
array[10] = 3;

var_dump(count(array));
```

Результат выполнения приведённого примера:

    int(3)
    int(3)

**Пример #2 Пример рекурсивного использования функции count()**

```js
const array = {
    fruits: ['orange', 'banana', 'apple'],
    veggie: ['carrot', 'collard', 'pea'],
};

// рекурсивный подсчёт
var_dump(count(array, COUNT_RECURSIVE));

// обычный подсчёт
var_dump(count(array));
```

Результат выполнения приведённого примера:

    int(8)
    int(2)

**Пример #3 Объект, который реализует интерфейс Countable**

```js
class Test extends stdClass {
    static __implements = [Countable];

    count() {
        return 10;
    }
}

const obj = new Test();
var_dump(count(obj));
```

Результат выполнения приведённого примера:

    int(10)
