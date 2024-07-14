# var_export

[Документация на php.net](https://www.php.net/manual/ru/function.var-export.php)

`var_export` — Выводит или возвращает интерпретируемое строковое представление
переменной

### Описание

```ts
var_export(value: any, return_result: boolean = false): ?string
```

`var_export()` возвращает структурированную информацию о данной переменной.
Функция аналогична [var_dump()](./var_dump.md) за одним исключением:
возвращаемое представление является полноценным JavaScript-кодом.

### Список параметров

-   `value`

    Переменная, которую необходимо экспортировать.

-   `return_result`

    Если передано и значение равно `true`, `var_export()` вернёт представление
    переменной вместо его вывода.

### Возвращаемые значения

Возвращает представление переменной, если параметр `return_result` передан и
равен `true`. В противном случае функция возвращает `null`.

### Примеры

**Пример #1 Пример использования var_export()**

```js
var_export(true);
var_export(false);
var_export(3);
var_export(3.14);
var_export('string');
var_export('');
var_export([]);
var_export({});
var_export([1, 2, 3]);
var_export({ foo: ['bar'] });
var_export(new stdClass());
class Test {
    a = new stdClass();
    b = 'test';

    test() {
        return true;
    }
}
var_export(new Test());
var_export(function () {
    return true;
});
var_export(null);
var_export(Infinity);
var_export(-Infinity);
console.log(var_export(3.14, true));
var_export(undefined);
var_export(NaN);
var_export(stdClass);
var_export(Symbol());
```

Результат выполнения приведённого примера:

    true

    false

    3

    3.14

    'string'

    ''

    []

    {}

    [
    	1,
    	2,
    	3,
    ]

    {
    	'foo': [
    		'bar',
    	],
    }

    {}

    {
    	'a': {},
    	'b': 'test',
    }

    function () {}

    null

    Infinity

    -Infinity

    3.14

    undefined

    NaN

    class stdClass
    {

    }

    Symbol()
