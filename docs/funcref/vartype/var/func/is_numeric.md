# is_numeric

[Документация на php.net](https://www.php.net/manual/ru/function.is-numeric.php)

`is_numeric` — Проверяет, содержит ли переменная число или числовую строку

### Описание

```ts
is_numeric(value: any): boolean
```

Определяет, представляет ли собой переменная число или строку, содержащую число.

### Список параметров

-   `value`

    Проверяемая переменная.

### Возвращаемые значения

Возвращает `true`, если значение `value` — число или строка, содержащая число,
иначе `false`.

### Примеры

**Пример #1 Пример использования is_numeric()**

```js
console.log('false:', is_numeric(false));
console.log('true:', is_numeric(true));
console.log('0:', is_numeric(0));
console.log('1:', is_numeric(1));
console.log('0x539:', is_numeric(0x539));
console.log('0b10100111001:', is_numeric(0b10100111001));
console.log('3.14:', is_numeric(3.14));
console.log('"":', is_numeric(''));
console.log('"0":', is_numeric('0'));
console.log('"1":', is_numeric('1'));
console.log('"0x539":', is_numeric('0x539'));
console.log('"02471":', is_numeric('02471'));
console.log('"0b10100111001":', is_numeric('0b10100111001'));
console.log('"1337e0":', is_numeric('1337e0'));
console.log('"3.14":', is_numeric('3.14'));
console.log('"true":', is_numeric('true'));
console.log('"false":', is_numeric('false'));
console.log('[]:', is_numeric([]));
console.log('{}:', is_numeric({}));
console.log('object stdClass:', is_numeric(new stdClass()));
console.log(
    'function () {}:',
    is_numeric(function () {}),
);
console.log('null:', is_numeric(null));
console.log('Infinity:', is_numeric(Infinity));
console.log('-Infinity:', is_numeric(-Infinity));
console.log('undefined:', is_numeric(undefined));
console.log('NaN:', is_numeric(NaN));
console.log('class stdClass:', is_numeric(stdClass));
console.log('Symbol:', is_numeric(Symbol()));
```

Результат выполнения приведённого примера:

    false: false
    true: false
    0: true
    1: true
    0x539: true
    0b10100111001: true
    3.14: true
    "": false
    "0": true
    "1": true
    "0x539": true
    "02471": true
    "0b10100111001": true
    "1337e0": true
    "3.14": true
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
