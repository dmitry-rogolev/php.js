# is_null

[Документация на php.net](https://www.php.net/manual/ru/function.is-null.php)

---

[Главная](../../../../../README.md) / [Справочник функций](../../../../funcref.md) /
[Модули для работы с переменными и типами](../../../vartype.md) /
[Обработка переменных](../../var.md) / is_null

---

`is_null` — Проверяет, равно ли значение переменной `null`

### Описание

```ts
is_null(value: any): boolean
```

Проверяет, равно ли значение переменной `null`.

### Список параметров

-   `value`

    Проверяемая переменная.

### Возвращаемые значения

Возвращает `true`, если значение `value` — `null`, иначе `false`.

### Примеры

**Пример #1 Пример использования is_null()**

```js
console.log('false:', is_null(false));
console.log('true:', is_null(true));
console.log('0:', is_null(0));
console.log('1:', is_null(1));
console.log('3.14:', is_null(3.14));
console.log('"":', is_null(''));
console.log('"0":', is_null('0'));
console.log('"1":', is_null('1'));
console.log('"3.14":', is_null('3.14'));
console.log('"true":', is_null('true'));
console.log('"false":', is_null('false'));
console.log('[]:', is_null([]));
console.log('{}:', is_null({}));
console.log('object stdClass:', is_null(new stdClass()));
console.log(
    'function () {}:',
    is_null(function () {}),
);
console.log('null:', is_null(null));
console.log('Infinity:', is_null(Infinity));
console.log('-Infinity:', is_null(-Infinity));
console.log('undefined:', is_null(undefined));
console.log('NaN:', is_null(NaN));
console.log('class stdClass:', is_null(stdClass));
console.log('Symbol:', is_null(Symbol()));
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
    []: false
    {}: false
    object stdClass: false
    function () {}: false
    null: true
    Infinity: false
    -Infinity: false
    undefined: false
    NaN: false
    class stdClass: false
    Symbol: false
