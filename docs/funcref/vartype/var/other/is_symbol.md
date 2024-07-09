# is_symbol

> Это дополнительная функция, специфичная для `JavaScript`.

Проверяет, является ли переменная типом `symbol`

### Описание

```ts
is_symbol(value: any): boolean
```

Проверяет, имеет ли значение переданной переменной тип `symbol`.

### Список параметров

-   `value`

    Проверяемая переменная.

### Возвращаемые значения

Возвращает `true`, если значение переменной `value` имеет тип `symbol`, иначе
`false`.

### Примеры

**Пример #1 Пример использования is_symbol()**

```js
console.log('true:', is_symbol(true));
console.log('false:', is_symbol(false));
console.log('0:', is_symbol(0));
console.log('1:', is_symbol(1));
console.log('3.14:', is_symbol(3.14));
console.log('"":', is_symbol(''));
console.log('"string":', is_symbol('string'));
console.log('[]:', is_symbol([]));
console.log('{}:', is_symbol({}));
console.log('[1, 2]:', is_symbol([1, 2]));
console.log('{ 0: 1, 1: 2 }:', is_symbol({ 0: 1, 1: 2 }));
console.log('new stdClass():', is_symbol(new stdClass()));
console.log(
    'function () {}:',
    is_symbol(function () {}),
);
console.log('null:', is_symbol(null));
console.log('Infinity:', is_symbol(Infinity));
console.log('-Infinity:', is_symbol(-Infinity));
console.log('undefined:', is_symbol(undefined));
console.log('NaN:', is_symbol(NaN));
console.log('stdClass:', is_symbol(stdClass));
console.log('Symbol():', is_symbol(Symbol()));
```

Результат выполнения приведённого примера:

    true: false
    false: false
    0: false
    1: false
    3.14: false
    "": false
    "string": false
    []: false
    {}: false
    [1, 2]: false
    { 0: 1, 1: 2 }: false
    new stdClass(): false
    function () {}: false
    null: false
    Infinity: false
    -Infinity: false
    undefined: false
    NaN: false
    stdClass: false
    Symbol(): true
