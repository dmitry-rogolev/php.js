# is_string

[Документация на php.net](https://www.php.net/manual/ru/function.is-string.php)

---

[Главная](../../../../../README.md) / [Справочник функций](../../../../funcref.md) /
[Модули для работы с переменными и типами](../../../vartype.md) /
[Обработка переменных](../../var.md) / is_string

---

`is_string` — Проверяет, представляет ли собой тип переменной строку

### Описание

```ts
is_string(value: any): boolean
```

Проверяет, представляет ли собой тип переменной строку.

### Список параметров

-   `value`

    Проверяемая переменная.

### Возвращаемые значения

Возвращает `true`, если значение `value` — строка, иначе `false`.

### Примеры

**Пример #1 Пример использования is_string()**

```js
console.log('false:', is_string(false));
console.log('true:', is_string(true));
console.log('0:', is_string(0));
console.log('1:', is_string(1));
console.log('3.14:', is_string(3.14));
console.log('"":', is_string(''));
console.log('"0":', is_string('0'));
console.log('"1":', is_string('1'));
console.log('"3.14":', is_string('3.14'));
console.log('"true":', is_string('true'));
console.log('"false":', is_string('false'));
console.log('[]:', is_string([]));
console.log('{}:', is_string({}));
console.log('object stdClass:', is_string(new stdClass()));
console.log(
    'function () {}:',
    is_string(function () {}),
);
console.log('null:', is_string(null));
console.log('Infinity:', is_string(Infinity));
console.log('-Infinity:', is_string(-Infinity));
console.log('undefined:', is_string(undefined));
console.log('NaN:', is_string(NaN));
console.log('class stdClass:', is_string(stdClass));
console.log('Symbol:', is_string(Symbol()));
```

Результат выполнения приведённого примера:

    false: false
    true: false
    0: false
    1: false
    3.14: false
    "": true
    "0": true
    "1": true
    "3.14": true
    "true": true
    "false": true
    []: false
    {}: false
    object stdClass: false
    function () {}: false
    null: false
    Infinity: false
    -Infinity: false
    undefined: false
    NaN: false
    class stdClass: false
    Symbol: false
