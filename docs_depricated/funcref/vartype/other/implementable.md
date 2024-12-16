# implementable

[Главная](../../../../README.md) / [Справочник функций](../../../funcref.md) /
[Модули для работы с переменными и типами](../../vartype.md) / [Внутренние функции](../other.md) /
implementable

---

> Это дополнительная функция, отсутствующая в `PHP`.

`implementable` — Добавляет переданному классу возможность реализации интерфейсов

### Описание

```ts
function implementable(class_object: Object): void;
```

Добавляет переданному классу статичный метод `implements`, добавляющий данному классу статичное
свойство `__implements`, хранящее в себе список реализуемых данным классом интерфейсов.

### Список параметров

-   `class_object`

    Класс, которому необходимо добавить возможность реализации интерфейсов.

### Возвращаемые значения

Данная функция ничего не возвращает.

### Примеры

**Пример #1 Пример использования**

```js
class Contract1 extends Interface {}
class Contract2 extends Interface {}

class Test {}
implementable(Test);
Test.implements(Contract1, Contract2);

console.log(Test.__implements);
```

Результат выполнения приведённого примера:

    Array [ class Contract1, class Contract2 ]
