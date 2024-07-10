# is_iterable

[Документация на php.net](https://www.php.net/manual/ru/function.is-iterable.php)

`is_iterable` — Проверяет, итерируемо ли содержимое переменной

### Описание

```ts
is_iterable(value: any): boolean
```

Проверяет, соответствует ли содержимое переменной псевдотипу `iterable`, то есть — это либо массив
(`array`), либо объект, который реализует интерфейс [Traversable](../contracts/Traversable.md).

### Список параметров

-   `value`

    Переменная для проверки.

### Возвращаемые значения

Возвращает `true`, если значение `value` итерируемо, иначе `false`.

### Примеры

**Пример #1 Пример использования is_iterable()**

```js
console.log('false:', is_iterable(false));
console.log('true:', is_iterable(true));
console.log('0:', is_iterable(0));
console.log('1:', is_iterable(1));
console.log('3.14:', is_iterable(3.14));
console.log('"":', is_iterable(''));
console.log('"0":', is_iterable('0'));
console.log('"1":', is_iterable('1'));
console.log('"3.14":', is_iterable('3.14'));
console.log('"true":', is_iterable('true'));
console.log('"false":', is_iterable('false'));
console.log('[]:', is_iterable([]));
console.log('{}:', is_iterable({}));
console.log('object stdClass:', is_iterable(new stdClass()));
class ArrayObject extends Traversable {}
console.log('ArrayObject', is_iterable(new ArrayObject()));
console.log(
    'function () {}:',
    is_iterable(function () {}),
);
console.log('null:', is_iterable(null));
console.log('Infinity:', is_iterable(Infinity));
console.log('-Infinity:', is_iterable(-Infinity));
console.log('undefined:', is_iterable(undefined));
console.log('NaN:', is_iterable(NaN));
console.log('class stdClass:', is_iterable(stdClass));
console.log('Symbol:', is_iterable(Symbol()));
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
    []: true
    {}: true
    object stdClass: false
    ArrayObject true
    function () {}: false
    null: false
    Infinity: false
    -Infinity: false
    undefined: false
    NaN: false
    class stdClass: false
    Symbol: false
