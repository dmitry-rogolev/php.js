import to_array from './to_array.mjs';
import to_bool from './to_bool.mjs';
import to_float from './to_float.mjs';
import to_int from './to_int.mjs';
import to_object from './to_object.mjs';
import to_string from './to_string.mjs';

/**
 * Приводит значение переменной к указанному типу.
 *
 * ### Описание
 *
 * Функция `settype` используется для преобразования значения переменной к указанному типу. Поддерживаются типы: `boolean`, `integer`, `float`, `string`, `array`, `object`, `null`, `undefined`, `NaN`.
 *
 * ### Параметры
 *
 * - `variable` (any)
 *      Переменная, значение которой необходимо привести к указанному типу.
 *
 * - `type` (string)
 *      Тип, к которому необходимо привести значение переменной.
 *
 * ### Возвращаемое значение
 *
 * Возвращает значение переменной, приведенное к указанному типу.
 *
 * ### Примеры использования
 *
 * 1. Преобразование в булевое значение:
 *
 *    ```js
 *    const result = settype('true', 'boolean');
 *    // Результат: true
 *    ```
 *
 * 2. Преобразование в целое число:
 *
 *    ```js
 *    const result = settype('123', 'integer');
 *    // Результат: 123
 *    ```
 *
 * 3. Преобразование в число с плавающей точкой:
 *
 *    ```js
 *    const result = settype('123.45', 'float');
 *    // Результат: 123.45
 *    ```
 *
 * 4. Преобразование в строку:
 *
 *    ```js
 *    const result = settype(123, 'string');
 *    // Результат: '123'
 *    ```
 *
 * 5. Преобразование в массив:
 *
 *    ```js
 *    const result = settype('example', 'array');
 *    // Результат: ['example']
 *    ```
 *
 * 6. Преобразование в объект:
 *
 *    ```js
 *    const result = settype('example', 'object');
 *    // Результат: { value: 'example' }
 *    ```
 *
 * @param {any} variable Переменная, значение которой необходимо привести к указанному типу.
 * @param {string} type Тип, к которому необходимо привести значение переменной.
 * @returns {any} Возвращает значение переменной, приведенное к указанному типу.
 */
export default function settype(variable, type) {
    if (type === 'boolean' || type === 'bool') {
        return to_bool(variable);
    }

    if (type === 'integer' || type === 'int') {
        return to_int(variable);
    }

    if (type === 'float' || type === 'double') {
        return to_float(variable);
    }

    if (type === 'string') {
        return to_string(variable);
    }

    if (type === 'array') {
        return to_array(variable);
    }

    if (type === 'object') {
        return to_object(variable);
    }

    return variable;
}
