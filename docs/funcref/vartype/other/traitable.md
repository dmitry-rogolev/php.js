# traitable

> Это дополнительная функция, отсутствующая в `PHP`.

`traitable` — Добавляет классу возможность использования трейтов

### Описание

```ts
function traitable(class_object: Object): void;
```

Добавляет классу статичный метод `use`, добавляющий данному классу статичное
поле `__traits`, хранящее в себе перечень используемых трейтов, а также копирует
все динамические и статические свойства и методы трейтов в прототип класса и в
сам класс соответственно.

### Список параметров

-   `class_object`

    Класс, которому необходимо добавить возможность использования трейтов.

### Возвращаемые значения

Данная функция ничего не возвращает.

### Примеры

**Пример #1 Пример использования**

```js
class Test {}

traitable(Test);

class TraitA {
    static staticAProperty = 'staticAProperty';
    dynamicAProperty = 'dynamicAProperty';

    static staticAMethod() {
        return 'staticAMethod';
    }
    dynamicAMethod() {
        return 'dynamicAMethod';
    }
}

class TraitB extends TraitA {
    static staticBProperty = 'staticBProperty';
    dynamicBProperty = 'dynamicBProperty';

    static staticBMethod() {
        return 'staticBMethod';
    }
    dynamicBMethod() {
        return 'dynamicBMethod';
    }
}

Test.use(TraitB);

const obj = new Test();

console.log(
    obj.dynamicAProperty,
    obj.dynamicBMethod(),
    Test.staticAMethod(),
    Test.staticBProperty,
);
```

Результат выполнения приведённого примера:

    dynamicAProperty
    dynamicBMethod
    staticAMethod
    staticBProperty
