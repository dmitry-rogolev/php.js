# uses

[Главная](../../../../README.md) / [Справочник функций](../../../funcref.md) /
[Модули для работы с переменными и типами](../../vartype.md) / [Внутренние функции](../other.md) /
uses

---

> Это дополнительная функция, отсутствующая в `PHP`.

`uses` — Проверяет, используется ли переданный трейт в переданном классе

### Описание

```ts
function uses(class_object: Object, trait: Object): boolean;
```

Проверяет, присутствует ли переданный трейт в статичном поле `__traits` в самом классе или в его
родительских классах.

### Список параметров

-   `class_object`

    Класс, требующий проверки использования трейта.

-   `trait`

    Трейт, используемый в классе.

### Возвращаемые значения

Возвращает `true`, если переданный трейт используется в классе, иначе `false`.

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

console.log(uses(Test, TraitB));
console.log(uses(Test, TraitA));
```

Результат выполнения приведённого примера:

    true
    true
