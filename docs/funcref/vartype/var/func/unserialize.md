# unserialize

[Документация на php.net](https://www.php.net/manual/ru/function.unserialize.php)

`unserialize` — Создаёт значение из хранимого представления

### Описание

```ts
unserialize(
    value: string,
    options: Object = { allowed_classes: true, max_depth: 4096 },
): any
```

Функция `unserialize()` принимает одну сериализованную переменную и конвертирует
её обратно в значение.

### Список параметров

-   `data`

    Сериализованная строка.

    Если переменная, требующая десериализации, — объект, то после успешного
    восстановления объекта функция автоматически попытается вызвать методы
    `unserialize()` или [\_\_wakeup()](./../magic.md#__sleep-и-__wakeup) (если
    они определены).

-   `options`

    Любые опции в виде ассоциативного массива, которые разрешено передавать в
    функцию `unserialize()`.

    **Корректные опции**

    | Имя             | Тип | Описание                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
    | --------------- | --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | allowed_classes | any | Либо массив имён классов, которые должны быть приняты, `false` для указания не принимать никаких классов, либо `true`, чтобы принимать все разрешенные классы. Если эта опция задана и функция `unserialize()` обнаружит объект неприемлемого класса, то он не будет принят, а вместо этого инстанцируется как объект класса [stdClass](./../classes/stdClass.md). Если опция не задана, будет считаться, что ей задано значение `true`: функция попытается инстанцировать объекты любого класса. |
    | max_depth       | int | Максимальная глубина структур, разрешённая при десериализации и предназначенная для предотвращения переполнения стека. По умолчанию ограничение глубины составляет `4096` и отключается установкой опции `max_depth` значения `0`.                                                                                                                                                                                                                                                                |

    **Разрешенные классы:**

    -   [stdClass](./../classes/stdClass.md)

### Возвращаемые значения

Возвращает преобразованное значение, которое принимает один из типов `bool`,
`int`, `float`, `string`, `array` или `object`.

### Примеры

**Пример #1 Пример использования unserialize()**

```js
console.log('b:1;', unserialize('b:1;'));
console.log('b:0;', unserialize('b:0;'));
console.log('i:0;', unserialize('i:0;'));
console.log('i:1;', unserialize('i:1;'));
console.log('i:-1;', unserialize('i:-1;'));
console.log('d:3.14;', unserialize('d:3.14;'));
console.log('d:0.0000;', unserialize('d:0.0000;'));
console.log('d:0;', unserialize('d:0;'));
console.log('s:6:"string";', unserialize('s:6:"string";'));
console.log('s:3:"string";', unserialize('s:3:"string";'));
console.log('s:0:"";', unserialize('s:0:"";'));
console.log('a:0:{}', unserialize('a:0:{}'));
console.log(
    'a:1:{i:0;i:10;i:1;i:20;i:2;i:30;}',
    unserialize('a:1:{i:0;i:10;i:1;i:20;i:2;i:30;}'),
);
console.log(
    'a:3:{i:0;i:10;i:1;i:20;i:2;i:30;}',
    unserialize('a:3:{i:0;i:10;i:1;i:20;i:2;i:30;}'),
);
console.log(
    'a:3:{i:-1;i:10;i:-2;i:20;i:-3;i:30;}',
    unserialize('a:3:{i:-1;i:10;i:-2;i:20;i:-3;i:30;}'),
);
console.log(
    'a:2:{s:3:"foo";s:3:"bar";s:3:"baz";a:1:{i:0;s:3:"bax";}}',
    unserialize('a:2:{s:3:"foo";s:3:"bar";s:3:"baz";a:1:{i:0;s:3:"bax";}}'),
);
class Test {
    a = 'test';
    b = new stdClass();

    test() {
        return true;
    }
}
console.log(
    'a:12:{i:0;b:1;i:1;b:0;i:2;i:3;i:3;d:3.14;i:4;s:0:"";i:5;s:6:"string";i:6;a:3:{i:0;i:1;i:1;i:2;i:2;i:3;}i:7;a:1:{s:3:"foo";a:1:{s:3:"bar";a:1:{i:0;s:3:"baz";}}}i:8;O:4:"Test":2:{s:1:"a";s:4:"test";s:1:"b";O:8:"stdClass":0:{}}i:9;N;i:10;d:Infinity;i:11;d:-Infinity;}',
    { allowed_classes: [Test] },
    unserialize(
        'a:12:{i:0;b:1;i:1;b:0;i:2;i:3;i:3;d:3.14;i:4;s:0:"";i:5;s:6:"string";i:6;a:3:{i:0;i:1;i:1;i:2;i:2;i:3;}i:7;a:1:{s:3:"foo";a:1:{s:3:"bar";a:1:{i:0;s:3:"baz";}}}i:8;O:4:"Test":2:{s:1:"a";s:4:"test";s:1:"b";O:8:"stdClass":0:{}}i:9;N;i:10;d:Infinity;i:11;d:-Infinity;}',
        { allowed_classes: [Test] },
    ),
);
console.log(
    'a:2:{s:3:"foo";a:1:{s:3:"bar";a:1:{s:3:"baz";a:1:{i:0;s:3:"bax";}}}s:3:"bav";a:1:{s:3:"bar";a:1:{s:3:"baz";a:1:{i:0;s:3:"bax";}}}}',
    { max_depth: 2 },
    unserialize(
        'a:2:{s:3:"foo";a:1:{s:3:"bar";a:1:{s:3:"baz";a:1:{i:0;s:3:"bax";}}}s:3:"bav";a:1:{s:3:"bar";a:1:{s:3:"baz";a:1:{i:0;s:3:"bax";}}}}',
        { max_depth: 2 },
    ),
);
console.log(
    'a:2:{s:3:"foo";a:1:{s:3:"bar";a:1:{s:3:"baz";a:1:{i:0;s:3:"bax";}}}s:3:"bav";a:1:{s:3:"bar";a:1:{s:3:"baz";a:1:{i:0;s:3:"bax";}}}}',
    { max_depth: 0 },
    unserialize(
        'a:2:{s:3:"foo";a:1:{s:3:"bar";a:1:{s:3:"baz";a:1:{i:0;s:3:"bax";}}}s:3:"bav";a:1:{s:3:"bar";a:1:{s:3:"baz";a:1:{i:0;s:3:"bax";}}}}',
        { max_depth: 0 },
    ),
);
console.log('O:8:"stdClass":0:{}', unserialize('O:8:"stdClass":0:{}'));
console.log(
    'O:4:"Test":1:{s:1:"a";s:4:"test";}',
    {
        allowed_classes: [Test],
    },
    unserialize('O:4:"Test":1:{s:1:"a";s:4:"test";}', {
        allowed_classes: [Test],
    }),
);
class UnserializableTest extends Serializable {
    a = 'test';
    b = 'b';

    test() {
        return true;
    }

    unserialize(data) {
        this.a = data['a'];
        this.b = 'test';
    }
}
console.log(
    'O:18:"UnserializableTest":1:{s:1:"a";s:1:"a";}',
    {
        allowed_classes: [UnserializableTest],
    },
    unserialize('O:18:"UnserializableTest":1:{s:1:"a";s:1:"a";}', {
        allowed_classes: [UnserializableTest],
    }),
);
class WakeUpTest {
    a = 'a';
    b = 'b';

    test() {
        return true;
    }

    __wakeup() {
        this.b = 'test';
    }
}
console.log(
    'O:10:"WakeUpTest":1:{s:1:"a";s:4:"test";}',
    {
        allowed_classes: [WakeUpTest],
    },
    unserialize('O:10:"WakeUpTest":1:{s:1:"a";s:4:"test";}', {
        allowed_classes: [WakeUpTest],
    }),
);
class MaxDepthTest {
    obj = null;

    constructor(depth) {
        if (depth) {
            this.obj = new MaxDepthTest(depth - 1);
        }
    }
}
console.log(
    'O:12:"MaxDepthTest":1:{s:3:"obj";O:12:"MaxDepthTest":1:{s:3:"obj";O:12:"MaxDepthTest":1:{s:3:"obj";O:12:"MaxDepthTest":1:{s:3:"obj";O:12:"MaxDepthTest":1:{s:3:"obj";O:12:"MaxDepthTest":1:{s:3:"obj";N;}}}}}}',
    { allowed_classes: [MaxDepthTest], max_depth: 2 },
    unserialize(
        'O:12:"MaxDepthTest":1:{s:3:"obj";O:12:"MaxDepthTest":1:{s:3:"obj";O:12:"MaxDepthTest":1:{s:3:"obj";O:12:"MaxDepthTest":1:{s:3:"obj";O:12:"MaxDepthTest":1:{s:3:"obj";O:12:"MaxDepthTest":1:{s:3:"obj";N;}}}}}}',
        { allowed_classes: [MaxDepthTest], max_depth: 2 },
    ),
);
console.log('N;', unserialize('N;'));
console.log('d:Infinity;', unserialize('d:Infinity;'));
console.log('d:-Infinity;', unserialize('d:-Infinity;'));
console.log('u;', unserialize('u;'));
console.log('NaN;', unserialize('NaN;'));
```

Результат выполнения приведённого примера:

    b:1; true

    b:0; false

    i:0; 0

    i:1; 1

    i:-1; -1

    d:3.14; 3.14

    d:0.0000; 0

    d:0; 0

    s:6:"string"; string

    s:3:"string"; false

    s:0:""; <empty string>

    a:0:{} Array []

    a:1:{i:0;i:10;i:1;i:20;i:2;i:30;} false

    a:3:{i:0;i:10;i:1;i:20;i:2;i:30;} Array(3) [ 10, 20, 30 ]

    a:3:{i:-1;i:10;i:-2;i:20;i:-3;i:30;} Object { "-1": 10, "-2": 20, "-3": 30 }

    a:2:{s:3:"foo";s:3:"bar";s:3:"baz";a:1:{i:0;s:3:"bax";}} Object { foo: "bar", baz: (1) […] }

    a:12:{i:0;b:1;i:1;b:0;i:2;i:3;i:3;d:3.14;i:4;s:0:"";i:5;s:6:"string";i:6;a:3:{i:0;i:1;i:1;i:2;i:2;i:3;}i:7;a:1:{s:3:"foo";a:1:{s:3:"bar";a:1:{i:0;s:3:"baz";}}}i:8;O:4:"Test":2:{s:1:"a";s:4:"test";s:1:"b";O:8:"stdClass":0:{}}i:9;N;i:10;d:Infinity;i:11;d:-Infinity;} Object { allowed_classes: (1) […] } Array(12) [ true, false, 3, 3.14, "", "string", (3) […], {…}, {…}, null, … ]

    a:2:{s:3:"foo";a:1:{s:3:"bar";a:1:{s:3:"baz";a:1:{i:0;s:3:"bax";}}}s:3:"bav";a:1:{s:3:"bar";a:1:{s:3:"baz";a:1:{i:0;s:3:"bax";}}}} Object { max_depth: 2 } Object { foo: {…}, bav: {…} }

    a:2:{s:3:"foo";a:1:{s:3:"bar";a:1:{s:3:"baz";a:1:{i:0;s:3:"bax";}}}s:3:"bav";a:1:{s:3:"bar";a:1:{s:3:"baz";a:1:{i:0;s:3:"bax";}}}} Object { max_depth: 0 } Object { foo: {…}, bav: {…} }

    O:8:"stdClass":0:{} Object {  }

    O:4:"Test":1:{s:1:"a";s:4:"test";} Object { allowed_classes: (1) […] } Object { a: "test", b: {} }

    O:18:"UnserializableTest":1:{s:1:"a";s:1:"a";} Object { allowed_classes: (1) […] } Object { a: "a", b: "test" }

    O:10:"WakeUpTest":1:{s:1:"a";s:4:"test";} Object { allowed_classes: (1) […] } Object { a: "test", b: "test" }

    O:12:"MaxDepthTest":1:{s:3:"obj";O:12:"MaxDepthTest":1:{s:3:"obj";O:12:"MaxDepthTest":1:{s:3:"obj";O:12:"MaxDepthTest":1:{s:3:"obj";O:12:"MaxDepthTest":1:{s:3:"obj";O:12:"MaxDepthTest":1:{s:3:"obj";N;}}}}}} Object { allowed_classes: (1) […], max_depth: 2 } Object { obj: {…} }

    N; null

    d:Infinity; Infinity

    d:-Infinity; -Infinity

    u; undefined

    NaN; NaN
