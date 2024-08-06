# array_sum

[Документация на php.net](https://www.php.net/manual/ru/function.array-sum.php)

---

[Главная](../../../../../README.md) / [Справочник функций](../../../../funcref.md) /
[Модули для работы с переменными и типами](../../../vartype.md) / [Массивы](../../array.md) /
[Функции для работы с массивами](../func.md) / array_sum

---

`array_sum` — Вычисляет сумму значений массива

### Описание

```ts
array_sum(array: Array|Object): Number
```

Функция `array_sum()` возвращает сумму значений массива.

### Список параметров

-   `array`

    Входной массив.

### Возвращаемые значения

Возвращает сумму значений в виде целого числа или числа с плавающей точкой; `0`, если массив
`(array)` пуст.

### Примеры

**Пример #1 Пример использования array_sum()**

```js
const a = [2, 4, 6, 8];
print_r(array_sum(a));

const b = { a: 1.2, b: 2.3, c: 3.4 };
print_r(array_sum(b));
```

Результат выполнения приведённого примера:

    20

    6.9