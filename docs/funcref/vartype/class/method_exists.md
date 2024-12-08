# method_exists

[Главная](../../../../README.md) / [Справочник функций](../../../funcref.md) /
[Модули для работы с переменными и типами](../../vartype.md) /
[Информация о классе и объекте](../class.md) / method_exists

`method_exists` — Проверяет, существует ли метод в классе

### Описание

```ts
method_exists(Object|Function object_or_class, String method): boolean;
```

Проверяет, существует ли метод класса в указанном объекте `object_or_class`.

### Список параметров

-   `object_or_class`

    Экземпляр объекта или класс.

-   `method`

    Имя метода.

### Возвращаемые значения

Возвращает `true`, если метод `method` определён для указанного объекта `object_or_class`, иначе
`false`.

### Примеры

**Пример #1 Пример использования функции method_exists()**

```js
// Создаём класс Directory
class Directory {
    constructor(path) {
        this.path = path;
    }

    read() {
        return `Reading directory: ${this.path}`;
    }
}

// Создаём экземпляр класса Directory
const directory = new Directory('.');

// Проверяем, существует ли метод 'read' в экземпляре класса Directory
console.log(method_exists(directory, 'read')); // true
```

Результат выполнения приведённого примера:

```
true
```

**Пример #2 Пример статического использования method_exists()**

```js
// Создаём класс Directory
class Directory {
    constructor(path) {
        this.path = path;
    }

    read() {
        return `Reading directory: ${this.path}`;
    }
}

// Проверяем, существует ли метод 'constructor' в экземпляре класса Directory
console.log(method_exists(Directory, 'constructor')); // true
```

Результат выполнения приведённого примера:

```
true
```
