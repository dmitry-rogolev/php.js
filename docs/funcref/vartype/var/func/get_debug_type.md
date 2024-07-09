# get_debug_type

[Документация на php.net](https://www.php.net/manual/ru/function.get-debug-type.php)

`get_debug_type` — Возвращает имя типа переменной в виде, подходящем для отладки

### Описание

```ts
get_debug_type(value: any): string
```

Возвращает преобразованное имя переменной `value`. Функция преобразует объекты в
имя их класса, а скалярные значения - в общепринятое имя их типа, которое бы
использовалось в объявлении типов.

Функция отличается от [gettype()](./gettype.md) тем, что возвращает имена типов,
которые больше соответствуют фактическому использованию, а не те, которые
присутствуют по историческим причинам.

### Список параметров

-   `value`

    Переменная, у которой проверяется тип.

### Возвращаемые значения

Возможные значения для возвращаемой строки:

| Тип + Состояние                      | Возвращаемое значение       |
| ------------------------------------ | --------------------------- |
| null                                 | "null"                      |
| undefined                            | "undefined"                 |
| NaN                                  | "NaN"                       |
| Логические значения (true или false) | "bool"                      |
| Целые числа                          | "int"                       |
| Числа с плавающей точкой             | "float"                     |
| Строки                               | "string"                    |
| Массивы                              | "array"                     |
| Функции                              | "function"                  |
| Объекты именованных классов          | Имя класса, например, "Foo" |
| Объекты анонимных классов            | "class@anonymous"           |
| Классы                               | "class"                     |
| Символы                              | "symbol"                    |

### Примеры

**Пример #1 Пример использования get_debug_type()**

```js
console.log('true:', get_debug_type(true));
console.log('false:', get_debug_type(false));
console.log('0:', get_debug_type(0));
console.log('1:', get_debug_type(1));
console.log('3.14:', get_debug_type(3.14));
console.log('"":', get_debug_type(''));
console.log('"string":', get_debug_type('string'));
console.log('[]:', get_debug_type([]));
console.log('{}:', get_debug_type({}));
console.log('[1, 2]:', get_debug_type([1, 2]));
console.log('{ 0: 1, 1: 2 }:', get_debug_type({ 0: 1, 1: 2 }));
console.log('new stdClass():', get_debug_type(new stdClass()));
console.log('new (class {})()', get_debug_type(new (class {})()));
console.log(
    'function () {}:',
    get_debug_type(function () {}),
);
console.log('null:', get_debug_type(null));
console.log('Infinity:', get_debug_type(Infinity));
console.log('-Infinity:', get_debug_type(-Infinity));
console.log('undefined:', get_debug_type(undefined));
console.log('NaN:', get_debug_type(NaN));
console.log('stdClass:', get_debug_type(stdClass));
console.log('class {}:', get_debug_type(class {}));
console.log('Symbol():', get_debug_type(Symbol()));
```

Результат выполнения приведённого примера:

    true: bool
    false: bool
    0: int
    1: int
    3.14: float
    "": string
    "string": string
    []: array
    {}: array
    [1, 2]: array
    { 0: 1, 1: 2 }: array
    new stdClass(): stdClass
    new (class {})() class@anonymous
    function () {}: function
    null: null
    Infinity: float
    -Infinity: float
    undefined: undefined
    NaN: NaN
    stdClass: class
    class {}: class
    Symbol(): symbol
