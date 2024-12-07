# is_a

[Главная](../../../../README.md) / [Справочник функций](../../../funcref.md) /
[Модули для работы с переменными и типами](../../vartype.md) /
[Информация о классе и объекте](../class.md) / is_a

`is_a` — Проверяет, принадлежит ли объект к типу или подтипу

### Описание

```ts
is_a(Object object_or_class, Object classobject): boolean;
```

Функция определяет, принадлежит ли объект или класс `object_or_class` непосредственно к типу объекта
`classobject`, или тип объекта `classobject` — супертип объекта или класса, который проверяют.

### Список параметров

-   `object_or_class`

    Имя класса или экземпляр объекта.

-   `class`

    Имя класса или интерфейса.

### Возвращаемые значения

Функция возвращает `true`, если объект `object_or_class` принадлежит к типу объекта `classobject`,
или тип объекта `classobject`— супертип объекта, который проверяют, иначе`false`.

### Примеры

**Пример #1 Пример использования функции is_a()**

```js
class WidgetFactory {
    oink = 'moo';
}

const WF = new WidgetFactory();

if (is_a(WF, WidgetFactory)) {
    console.log('Да, WF всё ещё WidgetFactory');
}
```

Результат выполнения приведённого примера:

```
Да, WF всё ещё WidgetFactory
```

**Пример #2 Использование оператора instanceof**

```js
if (WF instanceof WidgetFactory) {
    console.log('Да, WF — WidgetFactory');
}
```
