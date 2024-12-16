# get_property_descriptor

[Главная](../../../../README.md) / [Справочник функций](../../../funcref.md) /
[Модули для работы с переменными и типами](../../vartype.md) / [Внутренние функции](../other.md) /
get_property_descriptor

---

Это дополнительная функция, отсутствующая в `PHP`.

`get_property_descriptor` — Получает дескриптор свойства, находящегося в цепочке прототипов класса

### Описание

```ts
function get_property_descriptor(
    class_object: Object,
    property: string,
    is_static: boolean = false,
): Object;
```

Возвращает дескриптор свойства, находящегося в цепочке прототипов класса.

### Список параметров

-   `class_object`

    Класс, из которого необходимо получить дескриптор свойства.

-   `property`

    Имя свойства возвращаемого дескриптора.

-   `is_static`

    Является ли свойство статичным?

### Возвращаемые значения

Возвращает объект дескриптора свойства, либо `undefined` в случае его отсутствия.

### Примеры

**Пример #1 Пример использования**

```js
console.log('Передача класса');
console.log();
console.log('dynamicBProperty:', get_property_descriptor(B, 'dynamicBProperty'));
console.log('dynamicAProperty:', get_property_descriptor(B, 'dynamicAProperty'));
console.log('dynamicBMethod:', get_property_descriptor(B, 'dynamicBMethod'));
console.log('dynamicAMethod:', get_property_descriptor(B, 'dynamicAMethod'));
console.log('staticBProperty:', get_property_descriptor(B, 'staticBProperty', true));
console.log('staticAProperty:', get_property_descriptor(B, 'staticAProperty', true));
console.log('staticBMethod:', get_property_descriptor(B, 'staticBMethod', true));
console.log('staticAMethod:', get_property_descriptor(B, 'staticAMethod', true));
console.log();

const obj = new B();

console.log('Передача экземпляра класса');
console.log();
console.log('dynamicBProperty:', get_property_descriptor(obj, 'dynamicBProperty'));
console.log('dynamicAProperty:', get_property_descriptor(obj, 'dynamicAProperty'));
console.log('dynamicBMethod:', get_property_descriptor(obj, 'dynamicBMethod'));
console.log('dynamicAMethod:', get_property_descriptor(obj, 'dynamicAMethod'));
console.log('staticBProperty:', get_property_descriptor(obj, 'staticBProperty', true));
console.log('staticAProperty:', get_property_descriptor(obj, 'staticAProperty', true));
console.log('staticBMethod:', get_property_descriptor(obj, 'staticBMethod', true));
console.log('staticAMethod:', get_property_descriptor(obj, 'staticAMethod', true));
```

Результат выполнения приведённого примера:

    Передача класса

    dynamicBProperty: undefined
    dynamicAProperty: undefined
    dynamicBMethod: Object { value: dynamicBMethod(), writable: true, enumerable: false, configurable: true }
    dynamicAMethod: Object { value: dynamicAMethod(), writable: true, enumerable: false, configurable: true }
    staticBProperty: Object { value: "b", writable: true, enumerable: true, configurable: true }
    staticAProperty: Object { value: "a", writable: true, enumerable: true, configurable: true }
    staticBMethod: Object { value: staticBMethod(), writable: true, enumerable: false, configurable: true }
    staticAMethod: Object { value: staticAMethod(), writable: true, enumerable: false, configurable: true }

    Передача экземпляра класса

    dynamicBProperty: Object { value: "b", writable: true, enumerable: true, configurable: true }
    dynamicAProperty: Object { value: "a", writable: true, enumerable: true, configurable: true }
    dynamicBMethod: Object { value: dynamicBMethod(), writable: true, enumerable: false, configurable: true }
    dynamicAMethod: Object { value: dynamicAMethod(), writable: true, enumerable: false, configurable: true }
    staticBProperty: Object { value: "b", writable: true, enumerable: true, configurable: true }
    staticAProperty: Object { value: "a", writable: true, enumerable: true, configurable: true }
    staticBMethod: Object { value: staticBMethod(), writable: true, enumerable: false, configurable: true }
    staticAMethod: Object { value: staticAMethod(), writable: true, enumerable: false, configurable: true }
