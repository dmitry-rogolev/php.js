# array_product

[Документация на php.net](https://www.php.net/manual/ru/function.array-product.php)

---

[Главная](../../../../../README.md) / [Справочник функций](../../../../funcref.md) /
[Модули для работы с переменными и типами](../../../vartype.md) / [Массивы](../../array.md) /
[Функции для работы с массивами](../func.md) / array_product

---

`array_product` — Вычисляет произведение значений массива

### Описание

```ts
array_product(array: Array|Object): Number;
```

Функция `array_product()` возвращает произведение значений массива.

### Список параметров

-   `array`

    Массив.

### Возвращаемые значения

Возвращает произведение в виде целого числа или числа с плавающей точкой.

### Примеры

**Пример #1 Пример использования array_product()**

```js
const a = [2, 4, 6, 8];
print_r(array_product(a));
print_r(array_product([]));
```

Результат выполнения приведённого примера:

    384
    1
