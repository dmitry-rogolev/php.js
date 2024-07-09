# serialize

[Документация на php.net](https://www.php.net/manual/ru/function.serialize.php)

Генерирует пригодное для хранения представление переменной

### Описание

```ts
serialize(value: any): string
```

Генерирует пригодное для хранения представление переменной.

Это полезно для хранения или передачи значений между скриптами без потери их типа и структуры.

Для превращения сериализованной строки обратно в значение, используйте функцию
[unserialize()](./unserialize.md).

### Список параметров

-   `value`

    Значение, которое необходимо сериализовать. `serialize()` обрабатывает все типы, кроме функций,
    классов и символов.

    При сериализации объекта вызываются методы
    [\_\_serialize()](./../magic.md#__serialize-и-__unserialize) или
    [\_\_sleep()](./../magic.md#__sleep-и-__wakeup) перед сериализацией. Это делается для того,
    чтобы позволить объекту в последний момент произвести очистку и тому подобные операции перед
    сериализацией. Аналогично, когда объект восстанавливается функцией
    [unserialize()](./unserialize.md), вызывается метод
    [\_\_unserialize()](./../magic.md#__serialize-и-__unserialize) или
    [\_\_wakeup()](./../magic.md#__sleep-и-__wakeup).

### Возвращаемые значения

Возвращает строку, содержащую потоковое представление переменной `value`, которая может быть
сохранена где угодно.

### Примеры

**Пример #1 Пример использования serialize()**

```js
console.log('true:', serialize(true));
console.log('false:', serialize(false));
console.log('0:', serialize(0));
console.log('1:', serialize(1));
console.log('-1:', serialize(-1));
console.log('3.14:', serialize(3.14));
console.log('"":', serialize(''));
console.log('"string":', serialize('string'));
console.log('[10, 20, 30]:', serialize([10, 20, 30]));
console.log('{ foo: "bar", baz: ["bax"] }:', serialize({ foo: 'bar', baz: ['bax'] }));
console.log('new stdClass():', serialize(new stdClass()));
class Test {
    a = 'test';
    #b = 'private';

    test() {
        return true;
    }
}
console.log('new Test():', serialize(new Test()));
class SerializeTest {
    a = 'test';
    b = 'b';

    test() {
        return true;
    }

    __serialize() {
        return {
            a: 'a',
        };
    }
}
console.log('new SerializeTest():', serialize(new SerializeTest()));
class SleepTest {
    a = 'test';
    b = 'b';

    test() {
        return true;
    }

    __sleep() {
        return ['a'];
    }
}
console.log('new SleepTest():', serialize(new SleepTest()));
try {
    serialize(function () {});
} catch (e) {
    console.log('function () {}:', e);
}
console.log('null:', serialize(null));
console.log('Infinity:', serialize(Infinity));
console.log('-Infinity:', serialize(-Infinity));
console.log('undefined:', serialize(undefined));
console.log('NaN:', serialize(NaN));
try {
    serialize(stdClass);
} catch (e) {
    console.log('stdClass:', e);
}
try {
    serialize(Symbol());
} catch (e) {
    console.log('Symbol():', e);
}
```

Результат выполнения приведённого примера:

    true: b:1;
    false: b:0;
    0: i:0;
    1: i:1;
    -1: i:-1;
    3.14: d:3.14;
    "": s:0:"";
    "string": s:6:"string";
    [10, 20, 30]: a:3:{i:0;i:10;i:1;i:20;i:2;i:30;}
    { foo: "bar", baz: ["bax"] }: a:2:{s:3:"foo";s:3:"bar";s:3:"baz";a:1:{i:0;s:3:"bax";}}
    new stdClass(): O:8:"stdClass":0:{}
    new Test(): O:4:"Test":1:{s:1:"a";s:4:"test";}
    new SerializableTest(): O:16:"SerializableTest":1:{s:1:"a";s:1:"a";}
    new SleepTest(): O:9:"SleepTest":1:{s:1:"a";s:4:"test";}
    function () {}: TypeError: Serialization of function is not allowed
    null: N;
    Infinity: d:Infinity;
    -Infinity: d:-Infinity;
    undefined: u;
    NaN: NaN;
    stdClass: TypeError: Serialization of class is not allowed
    Symbol(): TypeError: Serialization of symbol is not allowed
