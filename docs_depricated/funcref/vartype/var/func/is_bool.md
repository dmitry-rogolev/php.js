# is_bool

[Документация на php.net](https://www.php.net/manual/ru/function.is-bool.php)

---

[Главная](../../../../../README.md) / [Справочник функций](../../../../funcref.md) /
[Модули для работы с переменными и типами](../../../vartype.md) /
[Обработка переменных](../../var.md) / is_bool

---

`is_bool` — Проверяет, представляет ли собой переменная логическое значение

### Описание

```ts
is_bool(value: any): boolean
```

Проверяет, представляет ли собой переменная логическое значение.

### Список параметров

-   `value`

    Проверяемая переменная.

### Возвращаемые значения

Возвращает `true`, если значение `value` — логическое (`bool`), иначе `false`.

### Примеры

**Пример #1 Пример использования is_bool()**

```js
console.log('false:', is_bool(false));
console.log('true:', is_bool(true));
console.log('0:', is_bool(0));
console.log('1:', is_bool(1));
console.log('3.14:', is_bool(3.14));
console.log('"":', is_bool(''));
console.log('"0":', is_bool('0'));
console.log('"1":', is_bool('1'));
console.log('"true":', is_bool('true'));
console.log('"false":', is_bool('false'));
console.log('[]:', is_bool([]));
console.log('{}:', is_bool({}));
console.log('object stdClass:', is_bool(new stdClass()));
console.log(
    'function () {}:',
    is_bool(function () {}),
);
console.log('null:', is_bool(null));
console.log('Infinity:', is_bool(Infinity));
console.log('-Infinity:', is_bool(-Infinity));
console.log('undefined:', is_bool(undefined));
console.log('NaN:', is_bool(NaN));
console.log('class stdClass:', is_bool(stdClass));
console.log('Symbol:', is_bool(Symbol()));
```

Результат выполнения приведённого примера:

    false: true
    true: true
    0: false
    1: false
    3.14: false
    "": false
    "0": false
    "1": false
    "true": false
    "false": false
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
