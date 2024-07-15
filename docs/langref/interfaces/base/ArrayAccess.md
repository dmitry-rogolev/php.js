# Интерфейс ArrayAccess

[Документация на php.net](https://www.php.net/manual/ru/class.arrayaccess.php)

---

[Главная](../../../../README.md) / [Справочник языка](../../../langref.md) /
[Встроенные интерфейсы и классы](../../interfaces.md) / Интерфейс ArrayAccess

---

## Введение

Интерфейс разрешает обращаться к объектам как к массивам.

## Обзор интерфейсов

```js
class ArrayAccess extends Interface {
    /**
     * Определяет, существует или нет данное смещение (ключ).
     *
     * @param {any} offset Смещение (ключ) для проверки.
     * @returns {boolean} Функция возвращает `true` в случае успешного выполнения или `false`, если возникла ошибка.
     */
    offsetExists(offset) {}

    /**
     * Возвращает заданное смещение (ключ).
     *
     * @param {any} offset Смещение (ключ) для возврата.
     * @returns {any} Может возвращать значение любого типа.
     */
    offsetGet(offset) {}

    /**
     * Присваивает значение указанному смещению (ключу).
     *
     * @param {any} offset Смещение (ключ), которому будет присваиваться значение.
     * @param {any} value Значение для присвоения.
     * @returns {void} Функция не возвращает значения после выполнения.
     */
    offsetSet(offset, value) {}

    /**
     * Удаляет смещение (ключ).
     *
     * @param {any} offset Смещение (ключ) для удаления.
     * @returns {void} Функция не возвращает значения после выполнения.
     */
    offsetUnset(offset) {}
}
```

## Примеры

```js
class Test {
    static __implements = [ArrayAccess];

    _data = {};

    constructor() {
        verify_implementation_of_contracts(Object.getPrototypeOf(this).constructor);

        return get_magic_proxy(this);
    }

    offsetGet(offset) {
        console.log(`Получение значения по ключу ${offset}.`);
        return this._data[offset];
    }

    offsetSet(offset, value) {
        console.log(`Установка значения ${value} по ключу ${offset}.`);
        this._data[offset] = value;
    }

    offsetExists(offset) {
        console.log(`Проверка существования ключа ${offset}.`);
        return offset in this._data;
    }

    offsetUnset(offset) {
        console.log(`Удаление значения по ключу ${offset}.`);
        delete this._data[offset];
    }
}

implementable(Test);

const obj = new Test();

obj[1] = 'test';
console.log(obj[1]);
console.log('1' in obj);
delete obj[1];
console.log('1' in obj);
```

Вывод приведённого примера будет похож на:

    Установка значения test по ключу 1.
    Получение значения по ключу 1.
    test
    Проверка существования ключа 1.
    true
    Удаление значения по ключу 1.
    Проверка существования ключа 1.
    false
