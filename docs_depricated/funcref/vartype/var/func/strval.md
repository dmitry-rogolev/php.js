# strval

[Документация на php.net](https://www.php.net/manual/ru/function.strval.php)

---

[Главная](../../../../../README.md) / [Справочник функций](../../../../funcref.md) /
[Модули для работы с переменными и типами](../../../vartype.md) /
[Обработка переменных](../../var.md) / strval

---

`strval` — Возвращает строковое значение переменной

### Описание

```ts
strval(value: any): string
```

Возвращает строковое значение переменной.

### Список параметров

-   `value`

    Переменная, которую необходимо преобразовать в строку.

### Возвращаемые значения

Строковое значение (`string`) параметра `value`.

### Примеры

**Пример #1 Пример использования strval()**

```js
console.log('true:', strval(true));
console.log('false:', strval(false));
console.log('0:', strval(0));
console.log('1:', strval(1));
console.log('3.14:', strval(3.14));
console.log('"string":', strval('string'));
console.log('[]:', strval([]));
console.log('{}:', strval({}));
console.log('new stdClass():', strval(new stdClass()));
class StrValTest {
    toString() {
        return StrValTest.name;
    }
}
console.log('new StrValTest():', strval(new StrValTest()));
try {
    strval(function () {});
} catch (e) {
    console.log(e);
}
console.log('null:', strval(null));
console.log('Infinity:', strval(Infinity));
console.log('-Infinity:', strval(-Infinity));
console.log('undefined:', strval(undefined));
console.log('NaN:', strval(NaN));
try {
    strval(stdClass);
} catch (e) {
    console.log(e);
}
try {
    strval(Symbol());
} catch (e) {
    console.log(e);
}
```

Результат выполнения приведённого примера:

    true: 1
    false: <empty string>
    0: 0
    1: 1
    3.14: 3.14
    "string": string
    []: Array
    {}: Array
    new stdClass(): [object stdClass]
    new StrValTest(): StrValTest
    TypeError: Function could not be converted to string.
    null: <empty string>
    Infinity: Infinity
    -Infinity: -Infinity
    undefined: <empty string>
    NaN: NaN
    TypeError: Class could not be converted to string.
    TypeError: Symbol could not be converted to string.
