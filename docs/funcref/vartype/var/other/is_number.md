# is_number

[Главная](../../../../../README.md) / [Справочник функций](../../../../funcref.md) /
[Модули для работы с переменными и типами](../../../vartype.md) /
[Обработка переменных](../../var.md) / is_number

---

> Это дополнительная функция.<br>В `PHP` нет такой функции.

`is_number` — Проверяет, является ли переданное значение числом

### Описание

```ts
is_number(value: any): boolean
```

Проверяет, является ли переданное значение целым числом или числом с плавающей
запятой.

> **Замечание**:
>
> Для значения `NaN` функция возвращает `false`.

### Список параметров

-   `value`

    Переменная, значение которой требует проверки.

### Возвращаемые значения

Возвращает `true`, если переданное значение является числом и не является
значением `NaN`, иначе `false`.

### Примеры

**Пример #1 Пример использования is_number()**

```js
console.log('true:', is_number(true));
console.log('false:', is_number(false));
console.log('0:', is_number(0));
console.log('1:', is_number(1));
console.log('0x539:', is_number(0x539));
console.log('0b10100111001:', is_number(0b10100111001));
console.log('3.14:', is_number(3.14));
console.log('"":', is_number(''));
console.log('"0":', is_number('0'));
console.log('"1":', is_number('1'));
console.log('"0x539":', is_number('0x539'));
console.log('"02471":', is_number('02471'));
console.log('"0b10100111001":', is_number('0b10100111001'));
console.log('"1337e0":', is_number('1337e0'));
console.log('"3.14":', is_number('3.14'));
console.log('"true":', is_number('true'));
console.log('"false":', is_number('false'));
console.log('[]:', is_number([]));
console.log('{}:', is_number({}));
console.log('new stdClass():', is_number(new stdClass()));
console.log(
    'function () {}:',
    is_number(function () {}),
);
console.log('null:', is_number(null));
console.log('Infinity:', is_number(Infinity));
console.log('-Infinity:', is_number(-Infinity));
console.log('undefined:', is_number(undefined));
console.log('NaN:', is_number(NaN));
console.log('stdClass:', is_number(stdClass));
console.log('Symbol():', is_number(Symbol()));
```

Результат выполнения приведённого примера:

    true: false
    false: false
    0: true
    1: true
    0x539: true
    0b10100111001: true
    3.14: true
    "": false
    "0": false
    "1": false
    "0x539": false
    "02471": false
    "0b10100111001": false
    "1337e0": false
    "3.14": false
    "true": false
    "false": false
    []: false
    {}: false
    new stdClass(): false
    function () {}: false
    null: false
    Infinity: true
    -Infinity: true
    undefined: false
    NaN: false
    stdClass: false
    Symbol(): false
