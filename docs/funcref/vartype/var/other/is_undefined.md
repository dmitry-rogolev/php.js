# is_undefined

[Главная](../../../../../README.md) / [Справочник функций](../../../../funcref.md) /
[Модули для работы с переменными и типами](../../../vartype.md) /
[Обработка переменных](../../var.md) / is_undefined

---

> Это дополнительная функция, специфичная для `JavaScript`.

Проверяет, имеет ли переменная значение `undefined`

### Описание

```ts
is_undefined(value: any): boolean
```

Проверяет, имеет ли переданная переменная значение `undefined`.

### Список параметров

-   `value`

    Проверяемая переменная.

### Возвращаемые значения

Возвращает `true`, если переменная `value` имеет значение `undefined`, иначе `false`.

### Примеры

**Пример #1 Пример использования is_undefined()**

```js
console.log('true:', is_undefined(true));
console.log('false:', is_undefined(false));
console.log('0:', is_undefined(0));
console.log('1:', is_undefined(1));
console.log('3.14:', is_undefined(3.14));
console.log('"":', is_undefined(''));
console.log('"string":', is_undefined('string'));
console.log('[]:', is_undefined([]));
console.log('{}:', is_undefined({}));
console.log('[1, 2]:', is_undefined([1, 2]));
console.log('{ 0: 1, 1: 2 }:', is_undefined({ 0: 1, 1: 2 }));
console.log('new stdClass():', is_undefined(new stdClass()));
console.log(
    'function () {}:',
    is_undefined(function () {}),
);
console.log('null:', is_undefined(null));
console.log('Infinity:', is_undefined(Infinity));
console.log('-Infinity:', is_undefined(-Infinity));
console.log('undefined:', is_undefined(undefined));
console.log('NaN:', is_undefined(NaN));
console.log('stdClass:', is_undefined(stdClass));
console.log('Symbol():', is_undefined(Symbol()));
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
    undefined: true
    NaN: false
    stdClass: false
    Symbol(): false
