import stdClass from '../classes/stdClass.mjs';
import is_array from './is_array.mjs';
import is_class from './is_class.mjs';
import is_null from './is_null.mjs';
import is_object from './is_object.mjs';
import is_undefined from './is_undefined.mjs';

/**
 * Приводит значение переменной к объекту.
 *
 * ### Описание
 *
 * Функция `to_object` используется для преобразования различных типов данных в объект. Если значение уже является объектом, оно возвращается без изменений. Если значение является классом, возвращается новый экземпляр этого класса. Если значение является массивом, элементы массива копируются в новый объект. Для других значений создается объект с полем `value`, содержащим это значение.
 *
 * ### Параметры
 *
 * - `value` (any)
 *      Переменная, значение которой необходимо привести к объекту.
 *
 * ### Возвращаемое значение
 *
 * Возвращает объект, соответствующий переданному значению.
 *
 * ### Примеры использования
 *
 * 1. Преобразование объекта:
 *
 *    ```js
 *    class MyClass {}
 *    const obj = new MyClass();
 *    const result = to_object(obj);
 *    // Результат: obj
 *    ```
 *
 * 2. Преобразование класса:
 *
 *    ```js
 *    class MyClass {}
 *    const result = to_object(MyClass);
 *    // Результат: экземпляр MyClass
 *    ```
 *
 * 3. Преобразование null и undefined:
 *
 *    ```js
 *    const result1 = to_object(null);
 *    // Результат: экземпляр stdClass
 *
 *    const result2 = to_object(undefined);
 *    // Результат: экземпляр stdClass
 *    ```
 *
 * 4. Преобразование массива:
 *
 *    ```js
 *    const arr = [1, 2, 3];
 *    const result = to_object(arr);
 *    // Результат: объект с элементами массива
 *    ```
 *
 * 5. Преобразование других значений:
 *
 *    ```js
 *    const result = to_object('example');
 *    // Результат: объект с полем value, содержащим 'example'
 *    ```
 *
 * @param {any} value Переменная, значение которой необходимо привести к объекту.
 * @returns {object} Возвращает приведенное к объекту значение переменной `value`.
 */
export default function to_object(value) {
    if (is_object(value)) {
        return value;
    }

    if (is_class(value)) {
        return new value();
    }

    const object = new stdClass();

    if (is_null(value) || is_undefined(value)) {
        return object;
    }

    if (is_array(value)) {
        Object.assign(object, value);

        return object;
    }

    object.value = value;

    return object;
}
