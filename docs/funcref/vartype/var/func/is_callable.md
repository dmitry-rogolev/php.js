# is_callable

[Документация на php.net](https://www.php.net/manual/ru/function.is-callable.php)

`is_callable` — Проверяет, что значение может быть вызвано как функция

### Описание

```ts
is_callable(value: any): boolean
```

Проверяет, что значение является функцией.

### Список параметров

-   `value`

    Значение для проверки

### Возвращаемые значения

Возвращает `true`, если `value` может быть вызвана, или `false` в противном
случае.

### Примеры

**Пример #1 Пример использования is_callable()**

```js
console.log('false:', is_callable(false));
console.log('true:', is_callable(true));
console.log('0:', is_callable(0));
console.log('1:', is_callable(1));
console.log('3.14:', is_callable(3.14));
console.log('"":', is_callable(''));
console.log('"0":', is_callable('0'));
console.log('"1":', is_callable('1'));
console.log('"true":', is_callable('true'));
console.log('"false":', is_callable('false'));
console.log('[]:', is_callable([]));
console.log('{}:', is_callable({}));
console.log('object stdClass:', is_callable(new stdClass()));
console.log(
    'function () {}:',
    is_callable(function () {}),
);
console.log(
    '() => {}:',
    is_callable(() => {}),
);
console.log('null:', is_callable(null));
console.log('Infinity:', is_callable(Infinity));
console.log('-Infinity:', is_callable(-Infinity));
console.log('undefined:', is_callable(undefined));
console.log('NaN:', is_callable(NaN));
console.log('class stdClass:', is_callable(stdClass));
console.log('Symbol:', is_callable(Symbol()));
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
    "true": false
    "false": false
    []: false
    {}: false
    object stdClass: false
    function () {}: true
    () => {}: true
    null: false
    Infinity: false
    -Infinity: false
    undefined: false
    NaN: false
    class stdClass: false
    Symbol: false
