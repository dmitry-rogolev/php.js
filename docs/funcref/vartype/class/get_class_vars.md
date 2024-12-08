# get_class_vars

[Главная](../../../../README.md) / [Справочник функций](../../../funcref.md) /
[Модули для работы с переменными и типами](../../vartype.md) /
[Информация о классе и объекте](../class.md) / get_class_vars

`get_class_vars` — Получает свойства класса

### Описание

```ts
get_class_vars(Object object): Object;
```

Функция возвращает свойства заданного класса.

### Список параметров

-   `object`

    Класс.

### Возвращаемые значения

Функция возвращает ассоциативный массив свойств класса со значениями.

### Примеры

**Пример #1 Пример использования функции get_class_vars()**

```js
class MyClass {
    static var1;
    static var2 = 'xyz';
    var3 = 100;
    var4;
}

const class_vars = get_class_vars(MyClass);

for (const name in class_vars) {
    const value = class_vars[name];

    console.log(`${name}: ${var_export(value, true)}`);
}
```

Результат выполнения приведённого примера:

```
var1: undefined
var2: 'xyz'
```
