# is_contract

> Это дополнительная функция, отсутствующая в `PHP`.

`is_contract` — Проверяет, является ли переданное значение переменной контрактом

### Описание

```ts
is_contract(value: any): boolean
```

Проверяет, является ли переданное значение классом и имеется ли в цепочке
прототипов этого класса класс `Interface`.

### Список параметров

-   `value`

    Проверяемое значение.

### Возвращаемые значения

Возвращает `true`, если переданное значение является контрактом, иначе `false`.

### Примеры

**Пример #1 Пример использования**

```js
class Contract extends Interface {}

console.log('Interface:', is_contract(Interface));
console.log('Contract', is_contract(Contract));
console.log('stdClass:', is_contract(stdClass));
console.log('object:', is_contract(new Contract()));
console.log('string:', is_contract('it is not a contract'));
```

Результат выполнения приведённого примера:

    Interface: true
    Contract true
    stdClass: false
    object: false
    string: false
