# Класс ExtensibleFunction

> Это дополнительный класс, отсутствующий в `PHP`.

`ExtensibleFunction` &mdash; класс, объекты которого могут быть вызваны, как функция.

### Обзор класса

```js
class ExtensibleFunction extends Function {
    __call__() {
        throw new Error('The "__call__" method is not implemented.');
    }
}
```

Для того, чтобы вызвать объект данного класса, как функцию, необходимо реализовать метод `__call__`.
Например:

```js
class Test extends ExtensibleFunction {
    __call__() {
        return '__call__';
    }
}

const test = new Test();

console.log(test()); // __call__
```
