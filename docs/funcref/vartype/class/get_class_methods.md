# get_class_methods

[Главная](../../../../README.md) / [Справочник функций](../../../funcref.md) /
[Модули для работы с переменными и типами](../../vartype.md) /
[Информация о классе и объекте](../class.md) / get_class_methods

`get_class_methods` — Возвращает ассоциативный массив методов класса

### Описание

```ts
get_class_methods(Object|Function object_or_class): Object;
```

Функция возвращает ассоциативный массив, содержащий методы класса или объекта в виде пар "имя
метода: функция".

### Список параметров

-   `object_or_class`

    Класс или объект

### Возвращаемые значения

Функция возвращает ассоциативный массив методов, которые объявлены в классе или объекте
`object_or_class`.

### Примеры

**Пример #1 Пример использования функции get_class_methods()**

```js
class my_class {
    my_func_1() {
        return true;
    }

    my_func_2() {
        return true;
    }

    static static_func_1() {
        return true;
    }

    static static_func_2() {
        return true;
    }
}

// Получение методов экземпляра
const instance_methods = get_class_methods(new my_class());
console.log('Instance Methods:');
print_r(instance_methods);

// Получение статических методов
const static_methods = get_class_methods(my_class);
console.log('Static Methods:');
print_r(static_methods);
```

Результат выполнения приведённого примера:

```
Instance Methods:
Array
(
    [my_func_1] => function () {}
    [my_func_2] => function () {}
)

Static Methods:
Array
(
    [static_func_1] => function () {}
    [static_func_2] => function () {}
)
```
