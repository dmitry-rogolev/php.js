# get_magic_proxy

> Это дополнительная функция, отсутствующая в `PHP`.

`get_magic_proxy` &mdash; Добавляет экземпляру класса возможность работы с магическими методами

### Описание

```ts
function get_magic_proxy(object: Object): Proxy;
```

Оборачивает экземпляр класса в `Proxy`, перенаправляющий запросы к целевому объекту на магические
методы.

### Список параметров

-   `object`

    Экземпляр класса, который необходимо обернуть в `Proxy`.

### Возвращаемые значения

Возвращает обернутый в `Proxy` экземпляр класса.

### Примеры

**Пример #1 Пример использования**

```js
class PropertyTest {
    _data = {};

    constructor() {
        return get_magic_proxy(this);
    }

    __set(name, value) {
        console.log(`Установка ${name} в ${value}`);

        this._data[name] = value;
    }

    __get(name) {
        console.log(`Получение ${name}`);

        return this._data[name];
    }

    __isset(name) {
        console.log(`Установлено ли "${name}"?`);

        return name in this._data;
    }

    __unset(name) {
        console.log(`Уничтожение ${name}`);

        delete this._data[name];
    }
}

const obj = new PropertyTest();

obj.a = 1;
console.log(obj.a);
var_dump('a' in obj);
delete obj.a;
var_dump('a' in obj);
```

Результат выполнения приведённого примера:

    Установка a в 1
    Получение a
    1
    Установлено ли "a"?
    bool(true)
    Уничтожение a
    Установлено ли "a"?
    bool(false)
