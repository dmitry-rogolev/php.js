# is_array

[Документация на php.net](https://www.php.net/manual/ru/function.is-array.php)

---

[Главная](../../../../../README.md) / [Справочник функций](../../../../funcref.md) /
[Модули для работы с переменными и типами](../../../vartype.md) /
[Обработка переменных](../../var.md) / is_array

---

`is_array` — Определяет, представляет ли собой переменная массив

### Описание

```ts
is_array(value: any): boolean
```

Определяет, представляет ли собой переменная массив.

### Список параметров

-   `value`

    Проверяемая переменная.

### Возвращаемые значения

Возвращает `true`, если переменная `value` — массив (`array`), иначе `false`.

### Примеры

**Пример #1 Пример использования is_array()**

```js
console.log('false:', is_array(false));
console.log('true:', is_array(true));
console.log('3:', is_array(3));
console.log('3.14:', is_array(3.14));
console.log('"string":', is_array('string'));
console.log('[1, 2]:', is_array([1, 2]));
console.log('{ 0: 1, 1: 2 }:', is_array({ 0: 1, 1: 2 }));
console.log('{ foo: "bar" }:', is_array({ foo: 'bar' }));
console.log('Math:', is_array(Math));
console.log('object stdClass:', is_array(new stdClass()));
console.log(
    'function () {}:',
    is_array(function () {}),
);
console.log('null:', is_array(null));
console.log('undefined:', is_array(undefined));
console.log('NaN:', is_array(NaN));
console.log('class stdClass:', is_array(stdClass));
console.log('Symbol:', is_array(Symbol()));
```

Результат выполнения приведённого примера:

    false: false
    true: false
    3: false
    3.14: false
    "string": false
    [1, 2]: true
    { 0: 1, 1: 2 }: true
    { foo: "bar" }: true
    Math: true
    object stdClass: false
    function () {}: false
    null: false
    undefined: false
    NaN: false
    class stdClass: false
    Symbol: false
