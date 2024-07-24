# array_change_key_case

[Документация на php.net](https://www.php.net/manual/ru/function.array-change-key-case.php)

---

[Главная](../../../../../README.md) / [Справочник функций](../../../../funcref.md) /
[Модули для работы с переменными и типами](../../../vartype.md) / [Массивы](../../array.md) /
[Функции для работы с массивами](../func.md) / array_change_key_case

---

`array_change_key_case` — Меняет регистр всех ключей в массиве

### Описание

```ts
array_change_key_case(array: Array|Object, CASE: number = CASE_LOWER): Array|Object
```

Возвращает массив `array`, все ключи которого преобразованы в нижний или верхний регистр. Числовые
ключи останутся нетронутыми.

### Список параметров

-   `array`

    Обрабатываемый массив

-   `CASE`

    Либо [CASE_UPPER](../constants.md#case_upper-int), либо
    [CASE_LOWER](../constants.md#case_lower-int) (используется по умолчанию)

### Возвращаемые значения

Возвращает массив с ключами, преобразованными в верхний или нижний регистр.

### Примеры

**Пример #1 Пример использования array_change_key_case()**

```js
const input_array = { FirSt: 1, SecOnd: 4 };
print_r(array_change_key_case(input_array, CASE_UPPER));
```

Результат выполнения приведённого примера:

    Array
    (
      [FIRST] => 1
      [SECOND] => 4
    )

### Примечания

> **Замечание**:
>
> Если массив содержит индексы, которые станут одноимёнными после применения данной функции
> (например, "keY" и "kEY"), значение последнего одноимённого индекса перекроет другие совпадающие
> значения из этого массива.
