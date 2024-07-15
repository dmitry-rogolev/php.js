# settype

[Документация на php.net](https://www.php.net/manual/ru/function.settype.php)

---

[Главная](../../../../../README.md) / [Справочник функций](../../../../funcref.md) /
[Модули для работы с переменными и типами](../../../vartype.md) /
[Обработка переменных](../../var.md) / settype

---

`settype` — Задаёт тип переменной

### Описание

```ts
settype(variable: any, type: string): any
```

Функция устанавливает переменной `variable` тип `type`.

### Список параметров

-   `variable`

    Переменная, тип которой требуется преобразовать.

-   `type`

    Допустимые значения параметра `type`:

    -   "boolean" или "bool"
    -   "integer" или "int"
    -   "float" или "double"
    -   "string"
    -   "array"
    -   "object"
    -   "null"
    -   "undefined"
    -   "NaN"

### Возвращаемые значения

Возвращает `true` в случае успешного выполнения или `false`, если возникла
ошибка.

### Примеры

**Пример #1 Пример использования settype() с type = "bool"**

```js
console.log('true:', settype(true, 'bool'));
console.log('true:', settype(true, 'bool'));
console.log('0:', settype(0, 'bool'));
console.log('-0:', settype(-0, 'bool'));
console.log('42:', settype(42, 'bool'));
console.log('0.0:', settype(0.0, 'bool'));
console.log('4.2:', settype(4.2, 'bool'));
console.log('"":', settype('', 'bool'));
console.log('"string":', settype('string', 'bool'));
console.log('"0":', settype('0', 'bool'));
console.log('"1":', settype('1', 'bool'));
console.log('"false":', settype('false', 'bool'));
console.log('"true":', settype('true', 'bool'));
console.log('[1, 2]:', settype([1, 2], 'bool'));
console.log('{ 0: 1, 1: 2 }:', settype({ 0: 1, 1: 2 }, 'bool'));
console.log('[]:', settype([], 'bool'));
console.log('{}:', settype({}, 'bool'));
console.log('object stdClass:', settype(new stdClass(), 'bool'));
console.log(
    'function () {}:',
    settype(function () {}, 'bool'),
);
console.log('null:', settype(null, 'bool'));
console.log('Infinity:', settype(Infinity, 'bool'));
console.log('-Infinity:', settype(-Infinity, 'bool'));
console.log('undefined:', settype(undefined, 'bool'));
console.log('NaN:', settype(NaN, 'bool'));
console.log('stdClass:', settype(stdClass, 'bool'));
console.log('Symbol():', settype(Symbol(), 'bool'));
```

Результат выполнения приведённого примера:

    true: true
    true: true
    0: false
    -0: false
    42: true
    0.0: false
    4.2: true
    "": false
    "string": true
    "0": false
    "1": true
    "false": true
    "true": true
    [1, 2]: true
    { 0: 1, 1: 2 }: true
    []: false
    {}: false
    object stdClass: true
    function () {}: true
    null: false
    Infinity: true
    -Infinity: true
    undefined: false
    NaN: false
    stdClass: true
    Symbol(): true

**Пример #2 Пример использования settype() с type = "int"**

```js
console.log('true:', settype(true, 'int'));
console.log('false:', settype(false, 'int'));
console.log('42:', settype(42, 'int'));
console.log('4.2:', settype(4.2, 'int'));
console.log('1e10:', settype(1e10, 'int'));
console.log('0x1a:', settype(0x1a, 'int'));
console.log('42000000:', settype(42000000, 'int'));
console.log(
    '420000000000000000000000000000000000000000000:',
    settype(420000000000000000000000000000000000000000000, 'int'),
);
console.log('"42":', settype('42', 'int'));
console.log('"+42":', settype('+42', 'int'));
console.log('"-42":', settype('-42', 'int'));
console.log('"042":', settype('042', 'int'));
console.log('"1e10":', settype('1e10', 'int'));
console.log('"0x1A":', settype('0x1A', 'int'));
console.log(
    '"420000000000000000000000000000000000000000000":',
    settype('420000000000000000000000000000000000000000000', 'int'),
);
console.log('"string":', settype('string', 'int'));
console.log('[1, 2]:', settype([1, 2], 'int'));
console.log('{ 0: 1, 1: 2 }:', settype({ 0: 1, 1: 2 }, 'int'));
console.log('[]:', settype([], 'int'));
console.log('{}:', settype({}, 'int'));
console.log('object stdClass():', settype(new stdClass(), 'int'));
console.log(
    'function () {}:',
    settype(function () {}, 'int'),
);
console.log('null:', settype(null, 'int'));
console.log('Infinity:', settype(Infinity, 'int'));
console.log('-Infinity:', settype(-Infinity, 'int'));
console.log('undefined:', settype(undefined, 'int'));
console.log('NaN:', settype(NaN, 'int'));
console.log('stdClass:', settype(stdClass, 'int'));
console.log('Symbol():', settype(Symbol(), 'int'));
```

Результат выполнения приведённого примера:

    true: 1
    false: 0
    42: 42
    4.2: 4
    1e10: 10000000000
    0x1a: 26
    42000000: 42000000
    420000000000000000000000000000000000000000000: 4
    "42": 42
    "+42": 42
    "-42": -42
    "042": 42
    "1e10": 1
    "0x1A": 0
    "420000000000000000000000000000000000000000000": 4.2e+44
    "string": 0
    [1, 2]: 1
    { 0: 1, 1: 2 }: 1
    []: 0
    {}: 0
    object stdClass(): 1
    function () {}: 1
    null: 0
    Infinity: 0
    -Infinity: 0
    undefined: 0
    NaN: 0
    stdClass: 1
    Symbol(): 1

**Пример #3 Пример использования settype() с type = "float"**

```js
console.log('true:', settype(true, 'float'));
console.log('false:', settype(false, 'float'));
console.log('3:', settype(3, 'float'));
console.log('3.14:', settype(3.14, 'float'));
console.log('"3":', settype('3', 'float'));
console.log('"3.14":', settype('3.14', 'float'));
console.log('"3,14":', settype('3,14', 'float'));
console.log('"314e-2":', settype('314e-2', 'float'));
console.log('"0.0314E+2":', settype('0.0314E+2', 'float'));
console.log('"122.34343The":', settype('122.34343The', 'float'));
console.log('"The122.34343":', settype('The122.34343', 'float'));
console.log('"string":', settype('string', 'float'));
console.log('[1, 2]:', settype([1, 2], 'float'));
console.log('{ 0: 1, 1: 2 }:', settype({ 0: 1, 1: 2 }, 'float'));
console.log('[]:', settype([], 'float'));
console.log('{}:', settype({}, 'float'));
console.log('new stdClass():', settype(new stdClass(), 'float'));
console.log(
    'function () {}:',
    settype(function () {}, 'float'),
);
console.log('null:', settype(null, 'float'));
console.log('Infinity:', settype(Infinity, 'float'));
console.log('-Infinity:', settype(-Infinity, 'float'));
console.log('undefined:', settype(undefined, 'float'));
console.log('NaN:', settype(NaN, 'float'));
console.log('stdClass:', settype(stdClass, 'float'));
console.log('Symbol():', settype(Symbol(), 'float'));
```

Результат выполнения приведённого примера:

    true: 1
    false: 0
    3: 3
    3.14: 3.14
    "3": 3
    "3.14": 3.14
    "3,14": 3
    "314e-2": 3.14
    "0.0314E+2": 3.14
    "122.34343The": 122.34343
    "The122.34343": 0
    "string": 0
    [1, 2]: 1
    { 0: 1, 1: 2 }: 1
    []: 0
    {}: 0
    new stdClass(): 1
    function () {}: 1
    null: 0
    Infinity: Infinity
    -Infinity: -Infinity
    undefined: 0
    NaN: 0
    stdClass: 1
    Symbol(): 1

**Пример #4 Пример использования settype() с type = "string"**

```js
console.log('true:', settype(true, 'string'));
console.log('false:', settype(false, 'string'));
console.log('0:', settype(0, 'string'));
console.log('1:', settype(1, 'string'));
console.log('3.14:', settype(3.14, 'string'));
console.log('"string":', settype('string', 'string'));
console.log('[]:', settype([], 'string'));
console.log('{}:', settype({}, 'string'));
console.log('new stdClass():', settype(new stdClass(), 'string'));
class StrValTest {
    toString() {
        return StrValTest.name;
    }
}
console.log('new StrValTest():', settype(new StrValTest(), 'string'));
try {
    settype(function () {}, 'string');
} catch (e) {
    console.log(e);
}
console.log('null:', settype(null, 'string'));
console.log('Infinity:', settype(Infinity, 'string'));
console.log('-Infinity:', settype(-Infinity, 'string'));
console.log('undefined:', settype(undefined, 'string'));
console.log('NaN:', settype(NaN, 'string'));
try {
    settype(stdClass, 'string');
} catch (e) {
    console.log(e);
}
try {
    settype(Symbol(), 'string');
} catch (e) {
    console.log(e);
}
```

Результат выполнения приведённого примера:

    true: 1
    false: <empty string>
    0: 0
    1: 1
    3.14: 3.14
    "string": string
    []: Array
    {}: Array
    new stdClass(): [object stdClass]
    new StrValTest(): StrValTest
    TypeError: Function could not be converted to string.
    null: <empty string>
    Infinity: Infinity
    -Infinity: -Infinity
    undefined: <empty string>
    NaN: NaN
    TypeError: Class could not be converted to string.
    TypeError: Symbol could not be converted to string.

**Пример #5 Пример использования settype() с type = "array"**

```js
console.log('true:', settype(true, 'array'));
console.log('false:', settype(false, 'array'));
console.log('0:', settype(0, 'array'));
console.log('1:', settype(1, 'array'));
console.log('3.14:', settype(3.14, 'array'));
console.log('"":', settype('', 'array'));
console.log('"string":', settype('string', 'array'));
console.log('[]:', settype([], 'array'));
console.log('{}:', settype({}, 'array'));
console.log('[1, 2]:', settype([1, 2], 'array'));
console.log('{ 0: 1, 1: 2 }:', settype({ 0: 1, 1: 2 }, 'array'));
console.log('new stdClass():', settype(new stdClass(), 'array'));
class Test {
    a = 'a';
}
console.log('new Test():', settype(new Test(), 'array'));
console.log(
    'function () {}:',
    settype(function () {}, 'array'),
);
console.log('null:', settype(null, 'array'));
console.log('Infinity:', settype(Infinity, 'array'));
console.log('-Infinity:', settype(-Infinity, 'array'));
console.log('undefined:', settype(undefined, 'array'));
console.log('NaN:', settype(NaN, 'array'));
console.log('stdClass:', settype(stdClass, 'array'));
console.log('Symbol():', settype(Symbol(), 'array'));
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

**Пример #6 Пример использования settype() с type = "object"**

```js
console.log('true:', settype(true, 'object'));
console.log('false:', settype(false, 'object'));
console.log('0:', settype(0, 'object'));
console.log('1:', settype(1, 'object'));
console.log('3.14:', settype(3.14, 'object'));
console.log('"":', settype('', 'object'));
console.log('"string":', settype('string', 'object'));
console.log('[]:', settype([], 'object'));
console.log('{}:', settype({}, 'object'));
console.log('["foo", "bar"]:', settype(['foo', 'bar'], 'object'));
console.log(
    '{ 0: "foo", 1: "bar" }:',
    settype({ 0: 'foo', 1: 'bar' }, 'object'),
);
console.log('new stdClass():', settype(new stdClass(), 'object'));
class Test {
    a = 'a';
}
console.log('new Test():', settype(new Test(), 'object'));
console.log(
    'function () {}:',
    settype(function () {}, 'object'),
);
console.log('null:', settype(null, 'object'));
console.log('Infinity:', settype(Infinity, 'object'));
console.log('-Infinity:', settype(-Infinity, 'object'));
console.log('undefined:', settype(undefined, 'object'));
console.log('NaN:', settype(NaN, 'object'));
console.log('stdClass:', settype(stdClass, 'object'));
console.log('Test:', settype(Test, 'object'));
console.log('Symbol():', settype(Symbol(), 'object'));
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
    ["foo", "bar"]: Object { 0: "foo", 1: "bar" }
    { 0: "foo", 1: "bar" }: Object { 0: "foo", 1: "bar" }
    new stdClass(): Object {  }
    new Test(): Object { a: "a" }
    function () {}: Object { function: () }
    null: Object {  }
    Infinity: Object { scalar: Infinity }
    -Infinity: Object { scalar: -Infinity }
    undefined: Object {  }
    NaN: Object { scalar: NaN }
    stdClass: Object {  }
    Test: Object { a: "a" }
    Symbol(): Object { symbol: Symbol() }

**Пример #7 Пример использования settype() с type = "null"**

```js
console.log('"string"', settype('string', 'null'));
```

Результат выполнения приведённого примера:

"string" null

**Пример #8 Пример использования settype() с type = "undefined"**

```js
console.log('"string"', settype('string', 'undefined'));
```

Результат выполнения приведённого примера:

"string" undefined

**Пример #9 Пример использования settype() с type = "NaN"**

```js
console.log('"string"', settype('string', 'NaN'));
```

Результат выполнения приведённого примера:

"string" NaN
