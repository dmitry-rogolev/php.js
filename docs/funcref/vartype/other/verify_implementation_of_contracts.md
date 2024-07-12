# verify_implementation_of_contracts

> Это дополнительная функция, отсутствующая в `PHP`.

`verify_implementation_of_contracts` — Проверяет реализацию контрактов в
переданном классе

### Описание

```ts
function verify_implementation_of_contracts(class_object: Object): void;
```

Проверяет реализацию контрактов в переданном классе, перечисленных в статичном
свойстве `__implements`. В случае отсутствия хотя бы одного метода, выбрасывает
исключение `Error`.

### Список параметров

-   `class_object`

    Класс, требующий проверки реализации контракта.

### Возвращаемые значения

Данная функция ничего не возвращает.

### Примеры

**Пример #1 Пример использования**

```js
class ContractA extends Interface {
    static staticAMethod() {}
    dynamicAMethod() {}
}

class ContractB extends Interface {
    static staticBMethod() {}
    dynamicBMethod() {}
}

class A extends stdClass {
    static __implements = [ContractA];

    static staticAMethod() {}
}

class B extends A {
    static __implements = [ContractB];

    static staticBMethod() {}
    dynamicAMethod() {}
    dynamicBMethod() {}
}

class NotImplemented extends stdClass {
    static __implements = [ContractA, ContractB];

    static staticAMethod() {}
    static staticBMethod() {}
    dynamicBMethod() {}
}

try {
    verify_implementation_of_contracts(B);
    console.log('Проверка реализации контрактов в классе "B" пройдена.');
} catch (e) {
    console.error(e);
}

try {
    verify_implementation_of_contracts(NotImplemented);
    console.log(
        'Проверка реализации контрактов в классе "NotImplemented" пройдена.',
    );
} catch (e) {
    console.error(e);
}
```

Результат выполнения приведённого примера:

    Проверка реализации контрактов в классе "B" пройдена.

    Error: The "dynamicAMethod" method of the "ContractA" contract in the
    "NotImplemented" class is not implemented.
