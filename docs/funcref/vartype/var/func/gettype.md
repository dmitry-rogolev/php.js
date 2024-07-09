# gettype

[Документация на php.net](https://www.php.net/manual/ru/function.gettype.php)

`gettype` — Возвращает тип переменной

### Описание

```ts
gettype(value: any): string
```

Возвращает тип переменной `value`. Для проверки типа переменной используйте
функции `is_*`.

### Список параметров

-   value

    Проверяемая переменная.

### Возвращаемые значения

Возможными значениями возвращаемой строки являются:

-   undefined
-   NULL
-   NaN
-   boolean
-   integer
-   double
-   string
-   array
-   class
-   object
-   function

### Примеры

**Пример #1 Пример использования gettype()**

```js
console.log('true: ', gettype(true));
console.log('3: ', gettype(3));
console.log('3.14: ', gettype(3.14));
console.log('"string": ', gettype('string'));
console.log('[]: ', gettype([]));
console.log('{}: ', gettype({}));
console.log('object stdClass: ', gettype(new stdClass()));
console.log(
    'function () {}: ',
    gettype(function () {}),
);
console.log('null: ', gettype(null));
console.log('Infinity: ', gettype(Infinity));
console.log('undefined: ', gettype(undefined));
console.log('NaN: ', gettype(NaN));
console.log('class stdClass: ', gettype(stdClass));
console.log('Symbol(): ', gettype(Symbol()));
```

Результат выполнения приведённого примера:

    true:  boolean
    3:  integer
    3.14:  double
    "string":  string
    []:  array
    {}:  array
    object stdClass:  object
    function () {}:  function
    null:  NULL
    Infinity:  double
    undefined:  undefined
    NaN:  NaN
    class stdClass:  class
    Symbol():  symbol
