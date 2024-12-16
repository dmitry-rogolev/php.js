# get_parent_class

[Главная](../../../../README.md) / [Справочник функций](../../../funcref.md) /
[Модули для работы с переменными и типами](../../vartype.md) /
[Информация о классе и объекте](../class.md) / get_parent_class

`get_parent_class` — Получает родительский класс для объекта или класса

### Описание

```ts
get_parent_class(Object object_or_class, Object classobject): boolean;
```

Функция получает родительский класс для объекта или класса.

### Список параметров

-   `object_or_class`

    Тестируемый объект или класс.

### Возвращаемые значения

Функция возвращает родительский класс для объекта или класса `object_or_class`.

Функция вернёт значение `false`, если у объекта нет родителя или класс не существует.

### Примеры

**Пример #1 Пример использования функции get_parent_class()**

```js
class Foo {}
class Bar extends Foo {}

var_dump(get_parent_class(new Bar()));
var_dump(get_parent_class(Bar));
var_dump(get_parent_class(Foo));
```

Результат выполнения приведённого примера:

```
class Bar {}
class Foo {}
bool(false)
```
