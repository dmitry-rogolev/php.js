# is_countable

[Документация на php.net](https://www.php.net/manual/ru/function.is-countable.php)

---

[Главная](../../../../../README.md) / [Справочник функций](../../../../funcref.md) /
[Модули для работы с переменными и типами](../../../vartype.md) /
[Обработка переменных](../../var.md) / is_countable

---

`is_countable` — Проверяет, представляет ли собой содержимое переменной счётное значение

### Описание

```ts
is_countable(value: any): boolean
```

Проверяет, представляет ли собой содержимое переменной массив (`array`) или объект, который
реализует интерфейс [Countable](../spl/contracts/countable.md).

### Список параметров

-   `value`

    Значение для проверки.

### Возвращаемые значения

Возвращает `true`, если значение `value` счётное, иначе `false`.

### Примеры

**Пример #1 Пример использования is_countable()**

```js
console.log('false:', is_countable(false));
console.log('true:', is_countable(true));
console.log('0:', is_countable(0));
console.log('1:', is_countable(1));
console.log('3.14:', is_countable(3.14));
console.log('"":', is_countable(''));
console.log('"0":', is_countable('0'));
console.log('"1":', is_countable('1'));
console.log('"true":', is_countable('true'));
console.log('"false":', is_countable('false'));
console.log('[]:', is_countable([]));
console.log('{}:', is_countable({}));
class ArrayObject extends Countable {}
console.log('ArrayObject:', is_countable(new ArrayObject()));
console.log('object stdClass:', is_countable(new stdClass()));
console.log(
    'function () {}:',
    is_countable(function () {}),
);
console.log(
    '() => {}:',
    is_countable(() => {}),
);
console.log('null:', is_countable(null));
console.log('Infinity:', is_countable(Infinity));
console.log('-Infinity:', is_countable(-Infinity));
console.log('undefined:', is_countable(undefined));
console.log('NaN:', is_countable(NaN));
console.log('class stdClass:', is_countable(stdClass));
console.log('Symbol:', is_countable(Symbol()));
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
    "true": false
    "false": false
    []: true
    {}: true
    ArrayObject: true
    object stdClass: false
    function () {}: false
    () => {}: false
    null: false
    Infinity: false
    -Infinity: false
    undefined: false
    NaN: false
    class stdClass: false
    Symbol: false
