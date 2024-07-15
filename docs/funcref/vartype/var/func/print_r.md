# print_r

[Документация на php.net](https://www.php.net/manual/ru/function.print-r.php)

---

[Главная](../../../../../README.md) / [Справочник функций](../../../../funcref.md) /
[Модули для работы с переменными и типами](../../../vartype.md) /
[Обработка переменных](../../var.md) / print_r

---

`print_r` — Выводит удобочитаемую информацию о переменной

### Описание

```ts
print_r(value: any, return_result: boolean = false): string|boolean
```

Функция `print_r()` выводит информацию о переменной в удобочитаемом виде.

### Список параметров

-   `value`

    Выражение для вывода на экран.

-   `return_result`

    Если нужно перехватить вывод функции `print_r()`, необходимо задать параметр `return_result`.
    Если для этого параметра установлено значение `true`, то функция `print_r()` вернёт информацию,
    а не выведет её.

### Возвращаемые значения

Если в функцию передана строка `(string)`, целое число `(int)` или число с плавающей точкой
`(float)`, будет напечатано само значение. Если передан массив `(array)`, значения будут напечатаны
в формате, показывающем ключи и элементы массива. Аналогичный формат вывода будет применён для
объектов.

Если параметр `return_result` установлен в `true`, функция вернёт строку `(string)`. В противном
случае возвращаемое значение будет равно `true`.

### Примеры

**Пример #1 Пример использования print_r()**

```js
print_r(true);
print_r(false);
print_r(3);
print_r(3.14);
print_r('string');
print_r('');
print_r([]);
print_r([1, 2, 3]);
print_r({ foo: ['bar'] });
print_r(new stdClass());
class Test {
    a = new stdClass();

    test() {
        return true;
    }
}
print_r(new Test());
print_r(function () {
    return true;
});
print_r(null);
print_r(Infinity);
print_r(-Infinity);
print_r(undefined);
print_r(NaN);
print_r(stdClass);
print_r(Symbol());
```

Результат выполнения приведённого примера:

    1
    <empty string>
    3
    3.14
    string
    <empty string>
    Array
    (
    )
    Array
    (
    	[0] => 1
    	[1] => 2
    	[2] => 3
    )
    Array
    (
    	[foo] => Array
    		(
    			[0] => bar
    		)

    )
    stdClass Object
    (
    )
    Test Object
    (
    	[a] => stdClass Object
    		(
    		)

    )
    function () {}
    <empty string>
    Infinity
    -Infinity
    <empty string>
    NaN
    class stdClass
    Symbol
