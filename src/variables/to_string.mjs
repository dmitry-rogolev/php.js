import is_array from './is_array.mjs';
import is_callable from './is_callable.mjs';
import is_class from './is_class.mjs';
import is_contract from './is_contract.mjs';
import is_object from './is_object.mjs';
import is_string from './is_string.mjs';

/**
 * Приводит значение переменной к строке.
 *
 * ### Описание
 *
 * Функция `to_string` используется для преобразования различных типов данных в строку. Она обрабатывает массивы, объекты, классы, функции, символы и другие типы данных, возвращая их строковое представление.
 *
 * ### Параметры
 *
 * - `value` (any)
 *      Переменная, значение которой необходимо привести к строке.
 *
 * ### Возвращаемое значение
 *
 * Возвращает строку, соответствующую переданному значению.
 *
 * ### Примеры использования
 *
 * 1. Преобразование строки:
 *
 *    ```js
 *    const result = to_string('example');
 *    // Результат: 'example'
 *    ```
 *
 * 2. Преобразование числа:
 *
 *    ```js
 *    const result = to_string(123);
 *    // Результат: '123'
 *    ```
 *
 * 3. Преобразование булевых значений:
 *
 *    ```js
 *    const result1 = to_string(true);
 *    // Результат: 'true'
 *
 *    const result2 = to_string(false);
 *    // Результат: 'false'
 *    ```
 *
 * 4. Преобразование null и undefined:
 *
 *    ```js
 *    const result1 = to_string(null);
 *    // Результат: 'null'
 *
 *    const result2 = to_string(undefined);
 *    // Результат: 'undefined'
 *    ```
 *
 * 5. Преобразование массива:
 *
 *    ```js
 *    const arr = [1, 2, 3];
 *    const result = to_string(arr);
 *    // Результат: '[\n    1,\n    2,\n    3,\n]'
 *    ```
 *
 * 6. Преобразование объекта:
 *
 *    ```js
 *    const obj = { key: 'value' };
 *    const result = to_string(obj);
 *    // Результат: '{\n    key: 'value',\n}'
 *    ```
 *
 * 7. Преобразование функции:
 *
 *    ```js
 *    const func = function() {};
 *    const result = to_string(func);
 *    // Результат: 'function func() {}'
 *    ```
 *
 * 8. Преобразование символа:
 *
 *    ```js
 *    const symbol = Symbol('example');
 *    const result = to_string(symbol);
 *    // Результат: 'Symbol(example)'
 *    ```
 *
 * 9. Преобразование BigInt:
 *
 *    ```js
 *    const bigInt = BigInt(123);
 *    const result = to_string(bigInt);
 *    // Результат: '123'
 *    ```
 *
 * 10. Преобразование класса:
 *
 *    ```js
 *    class MyClass {
 *        static test = 'test';
 *    }
 *    const result = to_string(MyClass);
 *    // Результат: 'class MyClass {}'
 *    ```
 *
 * 11. Преобразование экземпляра класса:
 *
 *    ```js
 *    class MyClass {}
 *    const instance = new MyClass();
 *    const result = to_string(instance);
 *    // Результат: 'object MyClass'
 *    ```
 *
 * 12. Преобразование интерфейса:
 *
 *    ```js
 *    class MyContract extends Interface {}
 *    const result = to_string(MyContract);
 *    // Результат: 'interface MyContract {}'
 *    ```
 *
 * @param {any} value Переменная, значение которой необходимо привести к строке.
 * @returns {string} Возвращает приведенное к строке значение переменной `value`.
 */
export default function to_string(value) {
    if (Array.isArray(value)) {
        let string = '[';

        for (const v of value) {
            string += `\n    ${is_string(v) ? "'" : ''}${to_string(v).replace(/\n/g, '\n    ')}${is_string(v) ? "'" : ''},`;
        }

        return (string += string.length > 1 ? '\n]' : ']');
    }

    if (is_array(value)) {
        let string = '{';

        for (const [k, v] of Object.entries(value)) {
            string += `\n    ${k}: ${is_string(v) ? "'" : ''}${to_string(v).replace(/\n/g, '\n    ')}${is_string(v) ? "'" : ''},`;
        }

        return (string += string.length > 1 ? '\n}' : '}');
    }

    if (is_contract(value)) {
        return `interface ${value.name ? `${value.name} ` : ''}{}`;
    }

    if (is_class(value)) {
        return `class ${value.name ? `${value.name} ` : ''}{}`;
    }

    if (is_object(value)) {
        return value.toString() === '[object Object]'
            ? `object ${Object.getPrototypeOf(value).constructor.name}`
            : value.toString();
    }

    if (is_callable(value)) {
        return `function ${value.name}() {}`;
    }

    return String(value);
}
