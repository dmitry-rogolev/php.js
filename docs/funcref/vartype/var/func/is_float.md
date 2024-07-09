# is_float

[Документация на php.net](https://www.php.net/manual/ru/function.is-float.php)

`is_float` — Проверяет, представляет ли собой переменная число с плавающей
точкой

### Описание

```ts
is_float(value: any): boolean
```

Проверяет, представляет ли собой переменная число с плавающей точкой.

> **Замечание**:<br> Чтобы проверить принадлежность переменной к числу или
> числовой строке (например, при обработке полей ввода формы, которые всегда
> передаются в виде строки), вызывают функцию [is_numeric()](./is_numeric.md).

### Список параметров

-   `value`

    Проверяемая переменная.

### Возвращаемые значения

Возвращает `true`, если значение `value` — число с плавающей точкой (`float`),
иначе `false`.

### Примеры

**Пример #1 Пример использования**

```js
console.log('false:', is_float(false));
console.log('true:', is_float(true));
console.log('0:', is_float(0));
console.log('1:', is_float(1));
console.log('3.14:', is_float(3.14));
console.log('"":', is_float(''));
console.log('"0":', is_float('0'));
console.log('"1":', is_float('1'));
console.log('"3.14":', is_float('3.14'));
console.log('"true":', is_float('true'));
console.log('"false":', is_float('false'));
console.log('[]:', is_float([]));
console.log('{}:', is_float({}));
console.log('object stdClass:', is_float(new stdClass()));
console.log(
    'function () {}:',
    is_float(function () {}),
);
console.log('null:', is_float(null));
console.log('Infinity:', is_float(Infinity));
console.log('-Infinity:', is_float(-Infinity));
console.log('undefined:', is_float(undefined));
console.log('NaN:', is_float(NaN));
console.log('class stdClass:', is_float(stdClass));
console.log('Symbol:', is_float(Symbol()));
```

Результат выполнения приведённого примера:

    false: false
    true: false
    0: false
    1: false
    3.14: true
    "": false
    "0": false
    "1": false
    "3.14": false
    "true": false
    "false": false
    []: false
    {}: false
    object stdClass: false
    function () {}: false
    null: false
    Infinity: true
    -Infinity: true
    undefined: false
    NaN: false
    class stdClass: false
    Symbol: false
