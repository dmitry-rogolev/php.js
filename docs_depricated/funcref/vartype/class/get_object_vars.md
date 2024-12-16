# get_object_vars

[Главная](../../../../README.md) / [Справочник функций](../../../funcref.md) /
[Модули для работы с переменными и типами](../../vartype.md) /
[Информация о классе и объекте](../class.md) / get_object_vars

`get_object_vars` — Возвращает свойства указанного объекта

### Описание

```ts
get_object_vars(Object object): Object;
```

Возвращает видимые нестатические свойства указанного объекта `object`.

### Список параметров

-   `object`

    Экземпляр объекта

### Возвращаемые значения

Возвращает ассоциативный массив нестатических свойств объекта `object`.

### Примеры

**Пример #1 Пример использования функции get_object_vars()**

```js
class MyClass {
    constructor() {
        this.mine = 'test';
        this.value = 42;
    }

    method() {
        console.log('This is a method');
    }
}

const test = new MyClass();

var_dump(get_object_vars(test));
```

Результат выполнения приведённого примера:

```
array(2) {
	["mine"]=>
	string(4) "test"
	["value"]=>
	int(42)
}
```
