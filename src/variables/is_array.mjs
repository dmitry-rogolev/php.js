/**
 * Проверяет, является ли переданное значение массивом или ассоциативным массивом (объектом с ключами и значениями).
 *
 * ### Описание
 *
 * В JavaScript массивы и объекты имеют разные структуры и предназначения:
 *
 * - Массивы (Array) являются упорядоченными коллекциями элементов, которые могут быть индексированы.
 * - Объекты (Object) содержат пары "ключ-значение", которые могут быть неупорядоченными.
 *
 * Эта функция проверяет, является ли переданное значение обычным массивом (например, `[1, 2, 3]`),
 * либо ассоциативным массивом (объектом с парами "ключ-значение", например, `{foo: 'bar'}`).
 *
 * ### Алгоритм работы функции
 *
 * 1. Сначала проверяется, является ли переданное значение обычным массивом с помощью встроенного метода `Array.isArray(value)`. Если это массив, функция сразу возвращает `true`.
 *
 * 2. Если переменная не является массивом, то выполняются дополнительные проверки:
 *
 *    - Проверяется, что значение не равно `null` (так как `null` в JavaScript также является объектом, но не является ни массивом, ни объектом с парами "ключ-значение").
 *    - Проверяется, что значение является объектом JavaScript (с помощью `typeof value === 'object'`).
 *    - Проверяется, что прототип объекта совпадает с `Object.prototype` (это объект, от которого наследуются все объекты в JavaScript) или является `null` (это означает, что объект был создан с помощью `Object.create(null)` и не имеет прототипа).
 *    - Исключаются массивоподобные объекты (например, `arguments`, `NodeList`), путем проверки, что свойство `length` не является собственным свойством объекта.
 *    - Дополнительно проверяется, что объект является простым (его конструктор равен `Object`), а также исключаются встроенные объекты (`Math`, `JSON`, `Reflect`, `Intl`), для которых функция возвращает `true`.
 *
 * ### Параметры
 *
 * - `value` (any)
 *      Проверяемая переменная.
 *
 * ### Возвращаемое значение
 *
 * Возвращает `true`, если переменная является обычным массивом (`Array`), ассоциативным массивом (объектом с парами "ключ-значение"), ассоциативным массивом, созданным с помощью `Object.create(null)`. В остальных случаях функция возвращает `false`.
 *
 * ### Примеры использования
 *
 * 1. Простые массивы:
 *
 *    ```js
 *    is_array([1, 2, 3]); // true
 *    is_array([]); // true
 *    ```
 *
 * 2. Ассоциативные массивы (объекты с ключами и значениями):
 *
 *    ```js
 *    is_array({ foo: 'bar', baz: 42 }); // true
 *    is_array({ '0': 'a', '1': 'b' }); // true
 *    ```
 *
 * 3. Объекты, созданные без прототипа:
 *
 *    ```js
 *    const noProtoObject = Object.create(null);
 *    noProtoObject.foo = 'bar';
 *    is_array(noProtoObject); // true
 *    ```
 *
 * 4. Примитивы и невалидные значения:
 *
 *    ```js
 *    is_array(null);         // false
 *    is_array(undefined);    // false
 *    is_array(42);           // false
 *    is_array('hello');      // false
 *    ```
 *
 * 5. Специальные объекты:
 *
 *    ```js
 *    is_array(new Map());    // false
 *    is_array(new Set());    // false
 *    is_array(() => {});     // false
 *    ```
 *
 * 6. Классы и их экземпляры:
 *
 *    ```js
 *    class MyClass {}
 *    const instance = new MyClass();
 *    is_array(instance); // false
 *    ```
 *
 * @param {any} value Проверяемая переменная.
 * @returns {boolean} Возвращает `true`, если значение является массивом или ассоциативным массивом, иначе `false`.
 */
export default function is_array(value) {
    // Для массивов (Array) возвращаем `true` по умолчанию.
    if (Array.isArray(value)) {
        return true;
    }

    // Далее работаем только с объектами.
    if (!value || typeof value !== 'object') {
        return false;
    }

    // Если у переданного объекта отсутствует прототип, то это означает,
    // что объект является контейнером пар ключ-значение без встроенных методов,
    // наследуемых от прототипа Object.prototype.
    // Такой контейнер можно создать с помощью конструкции `Object.create(null)`
    // или с помощью функции `array({})`.
    if (Object.getPrototypeOf(value) === null) {
        return true;
    }

    // Исключаем встроенные объекты Math, JSON, Reflect, Intl, для которых
    // функция возвращает `true`.
    if ([Math, JSON, Reflect, Intl].includes(value)) {
        return false;
    }

    // Если у объекта присутствует свойство `length`, то это означает, что
    // передан массивоподобный объект, например `arguments`.
    // С точки зрения данной функции, данные объекты считать
    // ассоциативными массивами нельзя.
    if (Object.hasOwn(value, 'length')) {
        return false;
    }

    // Если прототип переданного объекта - `Object.prototype`, то передан
    // обычный объект.
    if (Object.getPrototypeOf(value) === Object.prototype && value.constructor === Object) {
        return true;
    }

    return false;
}
