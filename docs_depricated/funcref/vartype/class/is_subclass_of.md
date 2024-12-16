# is_subclass_of

[Главная](../../../../README.md) / [Справочник функций](../../../funcref.md) /
[Модули для работы с переменными и типами](../../vartype.md) /
[Информация о классе и объекте](../class.md) / is_subclass_of

`is_subclass_of` — Проверяет, принадлежит ли объект к потомкам класса, или реализует ли объект или
родители объекта интерфейс

### Описание

```ts
is_subclass_of(Object object_or_class, Object classobject): boolean;
```

Функция проверяет, принадлежит ли объект или класс `object_or_class` к потомкам класса
`classobject`, или реализует ли объект или класс, или родители объекта или класса, интерфейс.

### Список параметров

-   `object_or_class`

    Класс или объект.

-   `classobject`

    Класс.

### Возвращаемые значения

Функция возвращает `true`, если объект или класс `object_or_class` принадлежит к потомкам класса
`classobject`, или если объект или класс, или предок объекта или класса, реализует интерфейс, иначе
`false`.

### Примеры

**Пример #1 Пример использования функции is_subclass_of()**

```js
// Базовый класс
class WidgetFactory {
    constructor() {
        this.oink = 'moo';
    }
}

// Наследник
class WidgetFactoryChild extends WidgetFactory {
    constructor() {
        super();
        this.oink = 'oink';
    }
}

// Создаём объекты
const WF = new WidgetFactory();
const WFC = new WidgetFactoryChild();

// Проверяем, является ли объект WFC подтипом класса WidgetFactory
if (is_subclass_of(WFC, WidgetFactory)) {
    console.log('Да, объект WFC наследует класс WidgetFactory');
} else {
    console.log('Нет, объект WFC не наследует класс WidgetFactory');
}

if (is_subclass_of(WF, WidgetFactory)) {
    console.log('Да, объект WF наследует класс WidgetFactory');
} else {
    console.log('Нет, объект WF не наследует класс WidgetFactory');
}

if (is_subclass_of(WidgetFactoryChild, WidgetFactory)) {
    console.log('Да, класс WidgetFactoryChild наследует класс WidgetFactory');
} else {
    console.log('Нет, класс WidgetFactoryChild не наследует класс WidgetFactory');
}
```

Результат выполнения приведённого примера:

```
Да, объект WFC наследует класс WidgetFactory
Да, объект WF наследует класс WidgetFactory
Да, класс WidgetFactoryChild наследует класс WidgetFactory
```

**Пример #2 Пример использования функции is_subclass_of() с интерфейсами**

```js
// Определяем интерфейс через прототип
class MyInterface {
    MyFunction() {
        throw new Error('Метод MyFunction должен быть реализован в подклассе!');
    }
}

// Определяем реализацию интерфейса классом
class MyClass extends MyInterface {
    MyFunction() {
        return 'Класс MyClass реализует интерфейс MyInterface!';
    }
}

// Создаём объект
const myObject = new MyClass();

// Проверяем экземпляр объекта класса
if (is_subclass_of(myObject, MyInterface)) {
    console.log('Да, тип экземпляра объекта myObject наследует тип интерфейса MyInterface');
} else {
    console.log('Нет, тип экземпляра объекта myObject не наследует тип интерфейса MyInterface');
}

// Проверяем строку — имя класса
if (is_subclass_of(MyClass, MyInterface)) {
    console.log('Да, класс-тип MyClass наследует класс-тип MyInterface');
} else {
    console.log('Нет, класс-тип MyClass не наследует класс-тип MyInterface');
}
```

Результат выполнения приведённого примера:

```
Да, тип экземпляра объекта myObject наследует тип интерфейса MyInterface
Да, класс-тип MyClass наследует класс-тип MyInterface
```
