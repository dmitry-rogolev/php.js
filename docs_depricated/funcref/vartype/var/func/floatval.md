# floatval

[Документация на php.net](https://www.php.net/manual/ru/function.floatval.php)

---

[Главная](../../../../../README.md) / [Справочник функций](../../../../funcref.md) /
[Модули для работы с переменными и типами](../../../vartype.md) /
[Обработка переменных](../../var.md) / floatval

---

`floatval` — Возвращает значение переменной в виде числа с плавающей точкой

### Описание

```ts
floatval(value: any): number
```

Возвращает значение переменной `value` в виде числа с плавающей точкой (`float`).

### Список параметров

-   value

    Может быть любого типа. Типы отличные от `Number` и `String` приводятся к логическому значению,
    а затем к числу.

### Возвращаемые значения

Значение заданной переменной в виде числа с плавающей точкой.

### Примеры

**Пример #1 Пример использования**

```js
console.log('false: ', floatval(false));
console.log('true: ', floatval(true));
console.log('3: ', floatval(3));
console.log('3.14: ', floatval(3.14));
console.log('"3": ', floatval('3'));
console.log('"3.14": ', floatval('3.14'));
console.log('"3,14": ', floatval('3,14'));
console.log('"314e-2": ', floatval('314e-2'));
console.log('"0.0314E+2": ', floatval('0.0314E+2'));
console.log('"122.34343The": ', floatval('122.34343The'));
console.log('"The122.34343": ', floatval('The122.34343'));
console.log('"test": ', floatval('test'));
console.log('[]: ', floatval([]));
console.log('{}: ', floatval({}));
console.log('[3, 2, 1]: ', floatval([3, 2, 1]));
console.log('{ 0: 3, 1: 2, 2: 1 }: ', floatval({ 0: 3, 1: 2, 2: 1 }));
console.log('object stdClass: ', floatval(new stdClass()));
console.log(
    'function () {}: ',
    floatval(function () {}),
);
console.log('null: ', floatval(null));
console.log('Infinity: ', floatval(Infinity));
console.log('-Infinity: ', floatval(-Infinity));
console.log('undefined: ', floatval(undefined));
console.log('NaN: ', floatval(NaN));
console.log('class stdClass: ', floatval(stdClass));
console.log('Symbol: ', floatval(Symbol()));
```

Результат выполнения приведённого примера:

    false:  0
    true:  1
    3:  3
    3.14:  3.14
    "3":  3
    "3.14":  3.14
    "3,14":  3
    "314e-2":  3.14
    "0.0314E+2":  3.14
    "122.34343The":  122.34343
    "The122.34343":  0
    "test":  0
    []:  0
    {}:  0
    [3, 2, 1]:  1
    { 0: 3, 1: 2, 2: 1 }:  1
    object stdClass:  1
    function () {}:  1
    null:  0
    Infinity:  Infinity
    -Infinity:  -Infinity
    undefined:  0
    NaN:  0
    class stdClass:  1
    Symbol:  1
