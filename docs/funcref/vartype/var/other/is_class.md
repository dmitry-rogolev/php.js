# is_class

> Это дополнительная функция, специфичная для `Javascript`.

Проверяет, является ли значение переменной классом

### Описание

```ts
is_class(value: any): boolean
```

Проверяет, является ли значение переменной классом.

Классом считаются только конструкции вида:

```js
class stdClass {}

is_class(stdClass); // true
```

Конструкторы функций не являются классами, с точки зрения этой функции.

```js
function Foo() {}

is_class(Foo); // false
```

### Список параметров

-   `value`

    Проверяемая переменная.

### Возвращаемые значения

Возвращает `true`, если значение переменной `value` является классом, иначе `false`.

### Примеры

**Пример #1 Пример использования is_class()**

```js
console.log('true:', is_class(true));
console.log('false:', is_class(false));
console.log('0:', is_class(0));
console.log('1:', is_class(1));
console.log('3.14:', is_class(3.14));
console.log('"":', is_class(''));
console.log('"string":', is_class('string'));
console.log('[]:', is_class([]));
console.log('{}:', is_class({}));
console.log('[1, 2]:', is_class([1, 2]));
console.log('{ 0: 1, 1: 2 }:', is_class({ 0: 1, 1: 2 }));
console.log('new stdClass():', is_class(new stdClass()));
console.log(
    'function () {}:',
    is_class(function () {}),
);
console.log('null:', is_class(null));
console.log('Infinity:', is_class(Infinity));
console.log('-Infinity:', is_class(-Infinity));
console.log('undefined:', is_class(undefined));
console.log('NaN:', is_class(NaN));
function Foo() {}
console.log('Foo:', is_class(Foo));
console.log('stdClass:', is_class(stdClass));
console.log('Symbol():', is_class(Symbol()));
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
    Foo: false
    stdClass: true
    Symbol(): false
