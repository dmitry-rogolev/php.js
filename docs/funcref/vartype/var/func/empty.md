# empty

[Документация на php.net](https://www.php.net/manual/ru/function.empty.php)

`empty` — Проверяет, пуста ли переменная

### Описание

```ts
empty(variable: any): boolean
```

Проверяет, считается ли переменная пустой. Переменная считается пустой, если при приведении ее
значения к `boolean` функцией `boolval` возвращается `false`.

Функция `empty` - это эквивалент инструкции `!boolval(variable)`.

### Список параметров

-   `variable`

    Проверяемая переменная.

### Возвращаемые значения

Возвращает `true`, если переданная в параметр `variable` переменная содержит пустое значение или
равно нулю, то есть ложно. В остальных случаях возвращает `false`.

### Примеры

**Пример #1 Пример использования empty()**

```js
console.log('false: ', empty(false));
console.log('true: ', empty(true));
console.log('0: ', empty(0));
console.log('-0: ', empty(-0));
console.log('42: ', empty(42));
console.log('0.0: ', empty(0.0));
console.log('4.2: ', empty(4.2));
console.log('"": ', empty(''));
console.log('"string": ', empty('string'));
console.log('"0": ', empty('0'));
console.log('"1": ', empty('1'));
console.log('"false": ', empty('false'));
console.log('"true": ', empty('true'));
console.log('[1, 2]: ', empty([1, 2]));
console.log('{ 0: 1, 1: 2 }: ', empty({ 0: 1, 1: 2 }));
console.log('[]: ', empty([]));
console.log('{}: ', empty({}));
console.log('object stdClass: ', empty(new stdClass()));
console.log(
    'function () {}: ',
    empty(function () {}),
);
console.log('null: ', empty(null));
console.log('Infinity: ', empty(Infinity));
console.log('-Infinity: ', empty(-Infinity));
console.log('undefined: ', empty(undefined));
console.log('NaN: ', empty(NaN));
console.log('class stdClass: ', empty(stdClass));
console.log('Symbol: ', empty(Symbol()));
```

Результат выполнения приведённого примера:

    false:  true
    true:  false
    0:  true
    -0:  true
    42:  false
    0.0:  true
    4.2:  false
    "":  true
    "string":  false
    "0":  true
    "1":  false
    "false":  false
    "true":  false
    [1, 2]:  false
    { 0: 1, 1: 2 }:  false
    []:  true
    {}:  true
    object stdClass:  false
    function () {}:  false
    null:  true
    Infinity:  false
    -Infinity:  false
    undefined:  true
    NaN:  true
    class stdClass:  false
    Symbol:  false
