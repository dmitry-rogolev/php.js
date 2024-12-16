# var_dump

[Документация на php.net](https://www.php.net/manual/ru/function.var-dump.php)

---

[Главная](../../../../../README.md) / [Справочник функций](../../../../funcref.md) /
[Модули для работы с переменными и типами](../../../vartype.md) /
[Обработка переменных](../../var.md) / var_dump

---

`var_dump` — Выводит информацию о переменной

### Описание

```ts
var_dump(value: any, ...values: any): void
```

Функция отображает структурированную информацию об одном или нескольких
выражениях, включая их тип и значение. Массивы и объекты анализируются
рекурсивно, значениям задаются отступы, чтобы показать структуру.

Все общедоступные, закрытые и защищённые свойства объекта будут возвращены в
выводе, кроме объектов, в которых реализован метод `debugInfo()`.

### Список параметров

-   `value`

    Выражение, которое нужно вывести.

-   `values`

    Следующие выражения для вывода.

### Возвращаемые значения

Функция не возвращает значения после выполнения.

### Примеры

**Пример #1 Пример использования var_dump()**

```js
var_dump(true);
var_dump(false);
var_dump(3);
var_dump(3.14);
var_dump('string');
var_dump('');
var_dump([]);
var_dump({});
var_dump([1, 2, 3]);
var_dump({ foo: ['bar'] });
var_dump(new stdClass());
class Test {
    a = new stdClass();
    b = 'test';

    test() {
        return true;
    }
}
var_dump(new Test());
class DebugInfoTest {
    test = 'debug';

    debugInfo() {
        return {
            debug: 'info',
        };
    }
}
var_dump(new DebugInfoTest());
var_dump(function () {});
var_dump(null);
var_dump(Infinity);
var_dump(-Infinity);
var_dump(true, 3, 3.14);
var_dump(undefined);
var_dump(NaN);
var_dump(stdClass);
var_dump(Symbol());
```

Результат выполнения приведённого примера:

    bool(true)

    bool(false)

    int(3)

    float(3.14)

    string(6) "string"

    string(0) ""

    array(0) {
    }

    array(0) {
    }

    array(3) {
      [0]=>
      int(1)
      [1]=>
      int(2)
      [2]=>
      int(3)
    }

    array(1) {
      ["foo"]=>
      array(1) {
    	[0]=>
    	string(3) "bar"
      }
    }

    object(stdClass)#1 (0) {
    }

    object(Test)#1 (2) {
      ["a"]=>
      object(stdClass)#2 (0) {
      }
      ["b"]=>
      string(4) "test"
    }

    object(DebugInfoTest)#1 (1) {
      ["debug"]=>
      string(4) "info"
    }

    function () {}

    NULL

    float(Infinity)

    float(-Infinity)

    bool(true)
    int(3)
    float(3.14)

    undefined

    NaN

    class stdClass {}

    Symbol
