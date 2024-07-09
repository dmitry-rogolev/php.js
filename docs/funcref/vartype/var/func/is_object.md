# is_object

[Документация на php.net](https://www.php.net/manual/ru/function.is-object.php)

`is_object` — Проверяет, представляет ли собой переменная объект

### Описание

```ts
is_object(value: any): boolean
```

Проверяет, представляет ли собой переменная объект.

### Список параметров

-   `value`

    Проверяемая переменная.

### Возвращаемые значения

Возвращает `true`, если значение `value` — объект, иначе `false`.

### Примеры

**Пример #1 Пример использования is_object()**

```js
console.log('false:', is_object(false));
console.log('true:', is_object(true));
console.log('0:', is_object(0));
console.log('1:', is_object(1));
console.log('3.14:', is_object(3.14));
console.log('"":', is_object(''));
console.log('"0":', is_object('0'));
console.log('"1":', is_object('1'));
console.log('"3.14":', is_object('3.14'));
console.log('"true":', is_object('true'));
console.log('"false":', is_object('false'));
console.log('[]:', is_object([]));
console.log('{}:', is_object({}));
console.log('object stdClass:', is_object(new stdClass()));
console.log(
    'function () {}:',
    is_object(function () {}),
);
console.log('null:', is_object(null));
console.log('Infinity:', is_object(Infinity));
console.log('-Infinity:', is_object(-Infinity));
console.log('undefined:', is_object(undefined));
console.log('NaN:', is_object(NaN));
console.log('class stdClass:', is_object(stdClass));
console.log('Symbol:', is_object(Symbol()));
```

Результат выполнения приведённого примера:

    false: false
    true: false
    0: false
    1: false
    3.14: false
    "": false
    "0": false
    "1": false
    "3.14": false
    "true": false
    "false": false
    []: false
    {}: false
    object stdClass: true
    function () {}: false
    null: false
    Infinity: false
    -Infinity: false
    undefined: false
    NaN: false
    class stdClass: false
    Symbol: false
