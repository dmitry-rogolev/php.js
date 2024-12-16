# verify_implementation_of_contract

[Главная](../../../../README.md) / [Справочник функций](../../../funcref.md) /
[Модули для работы с переменными и типами](../../vartype.md) / [Внутренние функции](../other.md) /
verify_implementation_of_contract

---

> Это дополнительная функция, отсутствующая в `PHP`.

`verify_implementation_of_contract` — Проверяет реализацию контракта в переданном классе

### Описание

```ts
function verify_implementation_of_contract(class_object: Object, contract: Interface): void;
```

Перебирает все прототипы класса и проверяет реализацию всех методов переданного интерфейса. В случае
отсутствия хотя бы одного метода, выбрасывает исключение `Error`.

### Список параметров

-   `class_object`

    Класс, требующий проверки реализации контракта.

-   `contract`

    Контракт, реализуемый в классе.

### Возвращаемые значения

Данная функция ничего не возвращает.

### Примеры

**Пример #1 Пример использования**

```js
class Contract extends Interface {
    static staticMethod() {}
    dynamicMethod() {}
}

class A extends stdClass {
    static staticMethod() {}
}

class B extends A {
    dynamicMethod() {}
}

class NotImplemented extends stdClass {
    static staticMethod() {}
}

try {
    verify_implementation_of_contract(B, Contract);
    console.log('Класс "B" реализует контракт "Contract".');
} catch (e) {
    console.error(e);
}

try {
    verify_implementation_of_contract(NotImplemented, Contract);
    console.log('Класс "NotImplemented" реализует контракт "Contract".');
} catch (e) {
    console.error(e);
}
```

Результат выполнения приведённого примера:

    Класс "B" реализует контракт "Contract".

    Error: The "dynamicMethod" method of the "Contract" contract in the "NotImplemented" class is not implemented.
