# arrval

[Главная](../../../../../README.md) / [Справочник функций](../../../../funcref.md) /
[Модули для работы с переменными и типами](../../../vartype.md) /
[Обработка переменных](../../var.md) / arrval

---

> Это дополнительная функция. <br>В `PHP` используется конструкция: `(array) $var`.

Приводит значение переменной к массиву

### Описание

```ts
arrval(value: any): Array|Object
```

Приводит значение переменной к массиву (array).

### Список параметров

-   `value`

    Переменная, значение которой необходимо привести к массиву.

### Возвращаемые значения

Возвращает приведенное к (`array`) значение переменной `value`.

### Примеры

**Пример #1 Пример использования arrval()**

```js
console.log('true:', arrval(true));
console.log('false:', arrval(false));
console.log('0:', arrval(0));
console.log('1:', arrval(1));
console.log('3.14:', arrval(3.14));
console.log('"":', arrval(''));
console.log('"string":', arrval('string'));
console.log('[]:', arrval([]));
console.log('{}:', arrval({}));
console.log('[1, 2]:', arrval([1, 2]));
console.log('{ 0: 1, 1: 2 }:', arrval({ 0: 1, 1: 2 }));
console.log('new stdClass():', arrval(new stdClass()));
class Test {
    a = 'a';
}
console.log('new Test():', arrval(new Test()));
console.log(
    'function () {}:',
    arrval(function () {}),
);
console.log('null:', arrval(null));
console.log('Infinity:', arrval(Infinity));
console.log('-Infinity:', arrval(-Infinity));
console.log('undefined:', arrval(undefined));
console.log('NaN:', arrval(NaN));
console.log('stdClass:', arrval(stdClass));
console.log('Symbol():', arrval(Symbol()));
```

Результат выполнения приведённого примера:

    true: Array [ true ]
    false: Array [ false ]
    0: Array [ 0 ]
    1: Array [ 1 ]
    3.14: Array [ 3.14 ]
    "": Array [ "" ]
    "string": Array [ "string" ]
    []: Array []
    {}: Object {  }
    [1, 2]: Array [ 1, 2 ]
    { 0: 1, 1: 2 }: Object { 0: 1, 1: 2 }
    new stdClass(): Object {  }
    new Test(): Object { a: "a" }
    function () {}: Array [ function () ]
    null: Array []
    Infinity: Array [ Infinity ]
    -Infinity: Array [ -Infinity ]
    undefined: Array []
    NaN: Array [ NaN ]
    stdClass: Array [ class stdClass ]
    Symbol(): Array [ Symbol() ]
