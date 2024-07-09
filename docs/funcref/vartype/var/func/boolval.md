# boolval

[Документация на php.net](https://www.php.net/manual/ru/function.boolval.php)

`boolval` — Возвращает логическое значение переменной

### Описание

```ts
boolval(value: any): boolean
```

Возвращает логическое значение (`boolean`) параметра `value`.

### Список параметров

-   `value`

    Скалярное значение, которое надо привести к типу `boolean`.

### Возвращаемые значения

Возвращает приведённое к логическому типу (`boolean`) значение параметра
`value`.

### Примеры

**Пример #1 Пример использования boolval()**

```js
console.log('false: ', boolval(false));
console.log('true: ', boolval(true));
console.log('0: ', boolval(0));
console.log('-0: ', boolval(-0));
console.log('42: ', boolval(42));
console.log('0.0: ', boolval(0.0));
console.log('4.2: ', boolval(4.2));
console.log('"": ', boolval(''));
console.log('"string": ', boolval('string'));
console.log('"0": ', boolval('0'));
console.log('"1": ', boolval('1'));
console.log('"false": ', boolval('false'));
console.log('"true": ', boolval('true'));
console.log('[1, 2]: ', boolval([1, 2]));
console.log('{ 0: 1, 1: 2 }: ', boolval({ 0: 1, 1: 2 }));
console.log('[]: ', boolval([]));
console.log('{}: ', boolval({}));
console.log('object stdClass: ', boolval(new stdClass()));
console.log(
    'function () {}: ',
    boolval(function () {}),
);
console.log('null: ', boolval(null));
console.log('Infinity: ', boolval(Infinity));
console.log('-Infinity: ', boolval(-Infinity));
console.log('undefined: ', boolval(undefined));
console.log('NaN: ', boolval(NaN));
console.log('class stdClass: ', boolval(stdClass));
console.log('Symbol: ', boolval(Symbol()));
```

Результат выполнения приведённого примера:

    false: false
    true: true
    0: false
    -0: false
    42: true
    0.0: false
    4.2: true
    "": false
    "string": true
    "0": false
    "1": true
    "false": true
    "true": true
    [1, 2]: true
    { 0: 1, 1: 2 }: true
    []: false
    {}: false
    object stdClass: true
    function () {}: true
    null: false
    Infinity: true
    -Infinity: true
    undefined: false
    NaN: false
    class stdClass: true
