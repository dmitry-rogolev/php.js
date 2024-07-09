# is_int

[Документация на php.net](https://www.php.net/manual/ru/function.is-int.php)

`is_int` — Проверяет, представляет ли собой переменная целое число

### Описание

```ts
is_int(value: any): boolean
```

Проверяет, принадлежит ли тип переменной целому числу (`int`).

> **Замечание**:<br> Чтобы проверить принадлежность переменной к числу или числовой строке
> (например, при обработке полей ввода формы, которые всегда передаются в виде строки), вызывают
> функцию [is_numeric()](./is_numeric.md).

### Список параметров

-   `value`

    Проверяемая переменная.

### Возвращаемые значения

Возвращает `true`, если значение `value` — целое число (`int`), иначе `false`.

### Примеры

**Пример #1 Пример использования is_int()**

```js
console.log('false:', is_int(false));
console.log('true:', is_int(true));
console.log('0:', is_int(0));
console.log('1:', is_int(1));
console.log('3.14:', is_int(3.14));
console.log('"":', is_int(''));
console.log('"0":', is_int('0'));
console.log('"1":', is_int('1'));
console.log('"3.14":', is_int('3.14'));
console.log('"true":', is_int('true'));
console.log('"false":', is_int('false'));
console.log('[]:', is_int([]));
console.log('{}:', is_int({}));
console.log('object stdClass:', is_int(new stdClass()));
console.log(
    'function () {}:',
    is_int(function () {}),
);
console.log('null:', is_int(null));
console.log('Infinity:', is_int(Infinity));
console.log('-Infinity:', is_int(-Infinity));
console.log('undefined:', is_int(undefined));
console.log('NaN:', is_int(NaN));
console.log('class stdClass:', is_int(stdClass));
console.log('Symbol:', is_int(Symbol()));
```

Результат выполнения приведённого примера:

    false: false
    true: false
    0: true
    1: true
    3.14: false
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
    Infinity: false
    -Infinity: false
    undefined: false
    NaN: false
    class stdClass: false
    Symbol: false
