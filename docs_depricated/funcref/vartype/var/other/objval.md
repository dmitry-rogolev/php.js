# objval

[Главная](../../../../../README.md) / [Справочник функций](../../../../funcref.md) /
[Модули для работы с переменными и типами](../../../vartype.md) /
[Обработка переменных](../../var.md) / objval

---

> Это дополнительная функция.<br>В `PHP` используется конструкция `(object) $var`.

Приводит значение переменной к объекту

### Описание

```ts
objval(value: any): Object
```

Приводит значение переменной к типу (`object`)

### Список параметров

-   `value`

    Переменная, значение которой необходимо привести к типу (`object`).

### Возвращаемые значения

Возвращает приведенное к типу (`object`) значение переменной `value`.

### Примеры

**Пример #1 Пример использования objval()**

```js
console.log('true:', objval(true));
console.log('false:', objval(false));
console.log('0:', objval(0));
console.log('1:', objval(1));
console.log('3.14:', objval(3.14));
console.log('"":', objval(''));
console.log('"string":', objval('string'));
console.log('[]:', objval([]));
console.log('{}:', objval({}));
console.log('[1, 2]:', objval([1, 2]));
console.log('{ 0: 1, 1: 2 }:', objval({ 0: 1, 1: 2 }));
console.log('new stdClass():', objval(new stdClass()));
class Test {
    a = 'a';
}
console.log('new Test:', objval(new Test()));
console.log(
    'function () {}:',
    objval(function () {}),
);
console.log('null:', objval(null));
console.log('Infinity:', objval(Infinity));
console.log('-Infinity:', objval(-Infinity));
console.log('undefined:', objval(undefined));
console.log('NaN:', objval(NaN));
console.log('stdClass:', objval(stdClass));
console.log('Test:', objval(Test));
console.log('Symbol():', objval(Symbol()));
```

Результат выполнения приведённого примера:

    true: Object { scalar: true }
    false: Object { scalar: false }
    0: Object { scalar: 0 }
    1: Object { scalar: 1 }
    3.14: Object { scalar: 3.14 }
    "": Object { scalar: "" }
    "string": Object { scalar: "string" }
    []: Object {  }
    {}: Object {  }
    [1, 2]: Object { 0: 1, 1: 2 }
    { 0: 1, 1: 2 }: Object { 0: 1, 1: 2 }
    new stdClass(): Object {  }
    new Test: Object { a: "a" }
    function () {}: Object { function: function () }
    null: Object {  }
    Infinity: Object { scalar: Infinity }
    -Infinity: Object { scalar: -Infinity }
    undefined: Object {  }
    NaN: Object { scalar: NaN }
    stdClass: Object {  }
    Test: Object { a: "a" }
    Symbol(): Object { symbol: Symbol() }
