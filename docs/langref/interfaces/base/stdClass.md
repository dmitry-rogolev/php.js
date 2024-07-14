# stdClass

[Документация на php.net](https://www.php.net/manual/ru/class.stdclass.php)

## Введение

Пустой класс общего назначения.

Некоторые функции создают экземпляры этого класса, например,
[objval](../../../funcref/vartype/var/other/objval.md).

## Обзор классов

```js
class stdClass {}
```

У класса нет методов или свойств по умолчанию.

## Примеры

**Пример #1 Создание в результате преобразования в объект**

```js
const obj = objval({ foo: 'bar' });
var_dump(obj);
```

Результат выполнения приведённого примера:

    object(stdClass)#1 (1) {
    	["foo"]=>
    	string(3) "bar"
    }
