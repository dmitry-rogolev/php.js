# property_exists

[Главная](../../../../README.md) / [Справочник функций](../../../funcref.md) /
[Модули для работы с переменными и типами](../../vartype.md) /
[Информация о классе и объекте](../class.md) / property_exists

`property_exists` — Проверяет, есть ли у объекта или класса свойство

### Описание

```ts
property_exists(Object|Function object_or_class, String property): boolean;
```

Функция проверяет, существует ли свойство `property` в указанном классе.

### Список параметров

-   `object_or_class`

    Имя класса или объект класса для проверки.

-   `property`

    Имя свойства.

### Возвращаемые значения

Возвращает `true`, если свойство существует, `false`, если не существует.

### Примеры

**Пример #1 Пример использования функции property_exists()**

```js
class myClass {
    mine;
    xpto;

    static testProperty;

    static test() {}
}

var_dump(property_exists(myClass, 'testProperty')); // true
var_dump(property_exists(new myClass(), 'mine')); // true
var_dump(property_exists(myClass, 'xpto')); // false
var_dump(property_exists(myClass, 'bar')); // false
var_dump(property_exists(myClass, 'test')); // false
```

Результат выполнения приведённого примера:

```
bool(true)
bool(true)
bool(false)
bool(false)
bool(false)
```
