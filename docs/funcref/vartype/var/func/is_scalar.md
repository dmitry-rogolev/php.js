# is_scalar

[Документация на php.net](https://www.php.net/manual/ru/function.is-scalar.php)

`is_scalar` — Проверяет, представляет ли собой переменная скаляр

### Описание

```ts
is_scalar(value: any): boolean
```

Проверяет, представляет ли собой переменная скаляр.

Скалярные переменные — это переменные, содержащие `int`, `float`, `string` и `bool`. Типы `array`,
`object`, `null` — не скалярные.

### Список параметров

-   `value`

    Проверяемая переменная.

### Возвращаемые значения

Возвращает `true`, если значение `value` — скаляр, иначе `false`.

### Примеры

**Пример #1 Пример использования is_scalar()**

```js
console.log('false:', is_scalar(false));
console.log('true:', is_scalar(true));
console.log('0:', is_scalar(0));
console.log('1:', is_scalar(1));
console.log('3.14:', is_scalar(3.14));
console.log('"":', is_scalar(''));
console.log('"0":', is_scalar('0'));
console.log('"1":', is_scalar('1'));
console.log('"3.14":', is_scalar('3.14'));
console.log('"true":', is_scalar('true'));
console.log('"false":', is_scalar('false'));
console.log('[]:', is_scalar([]));
console.log('{}:', is_scalar({}));
console.log('object stdClass:', is_scalar(new stdClass()));
console.log(
    'function () {}:',
    is_scalar(function () {}),
);
console.log('null:', is_scalar(null));
console.log('Infinity:', is_scalar(Infinity));
console.log('-Infinity:', is_scalar(-Infinity));
console.log('undefined:', is_scalar(undefined));
console.log('NaN:', is_scalar(NaN));
console.log('class stdClass:', is_scalar(stdClass));
console.log('Symbol:', is_scalar(Symbol()));
```

Результат выполнения приведённого примера:

    false: true
    true: true
    0: true
    1: true
    3.14: true
    "": true
    "0": true
    "1": true
    "3.14": true
    "true": true
    "false": true
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
