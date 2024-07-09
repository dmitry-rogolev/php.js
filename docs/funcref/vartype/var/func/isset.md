# isset

[Документация на php.net](https://www.php.net/manual/ru/function.isset.php)

`isset` — Определяет, была ли установлена переменная значением, отличным от
`null` и `undefined`.

### Описание

```ts
isset(variable: any): boolean
```

Определяет, была ли установлена переменная значением, отличным от `null` и
`undefined`.

Если были переданы несколько параметров, то конструкция `isset()` вернёт `true`
только тогда, когда все параметры определены. Проверка выполняется слева направо
и заканчивается, как только будет встречена неопределённая переменная.

### Список параметров

-   `variable`

    Проверяемая переменная.

-   `variables`

    Следующие переменные.

### Возвращаемые значения

Возвращает `true`, если переданная в параметр `variable` переменная определена и
её значение отличается от `null` и `undefined`. В остальных случаях возвращает
`false`.

### Примеры

**Пример #1 Пример использования isset()**

```js
console.log('false:', isset(false));
console.log('true:', isset(true));
console.log('0:', isset(0));
console.log('1:', isset(1));
console.log('3.14:', isset(3.14));
console.log('"":', isset(''));
console.log('"0":', isset('0'));
console.log('"1":', isset('1'));
console.log('"3.14":', isset('3.14'));
console.log('"true":', isset('true'));
console.log('"false":', isset('false'));
console.log('[]:', isset([]));
console.log('{}:', isset({}));
console.log('object stdClass:', isset(new stdClass()));
console.log(
    'function () {}:',
    isset(function () {}),
);
console.log('null:', isset(null));
console.log('Infinity:', isset(Infinity));
console.log('-Infinity:', isset(-Infinity));
console.log('1, null:', isset(1, null));
console.log('1, undefined:', isset(1, undefined));
console.log('1, false:', isset(1, false));
console.log('undefined:', isset(undefined));
console.log('NaN:', isset(NaN));
console.log('class stdClass:', isset(stdClass));
console.log('Symbol:', isset(Symbol()));
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
    []: true
    {}: true
    object stdClass: true
    function () {}: true
    null: false
    Infinity: true
    -Infinity: true
    1, null: false
    1, undefined: false
    1, false: true
    undefined: false
    NaN: true
    class stdClass: true
    Symbol: true
