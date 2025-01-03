import gettype from './gettype.mjs';
import is_bool from './is_bool.mjs';
import is_class from './is_class.mjs';
import is_contract from './is_contract.mjs';
import to_string from './to_string.mjs';

function print_array(value) {
    let result = Array.isArray(value) ? '[' : '{';

    for (const [k, v] of Object.entries(value)) {
        result += `\n    ${k}: ${print(v, true).replace(/\n/g, '\n    ')},`;
    }

    return (result += (result.length > 1 ? '\n' : '') + (Array.isArray(value) ? ']' : '}'));
}

function print_object(value) {
    let result = `${to_string(value)} {`;

    let new_line = false;

    for (const [k, v] of Object.entries(value)) {
        new_line = true;

        result += `\n    ${k} = ${print(v, true).replace(/\n/g, '\n    ')};`;
    }

    return (result += `${new_line ? '\n' : ''}${Array.isArray(value) ? ']' : '}'}`);
}

function print_contract(value) {
    const parent = Object.getPrototypeOf(value);

    let result = `interface ${value.name ? `${value.name} ` : ''}${is_class(parent) ? `extends ${parent.name} ` : ''}{`;

    let new_line = false;

    for (const [k, v] of Object.entries(value)) {
        new_line = true;

        result += `\n    ${k} = ${print(v, true).replace(/\n/g, '\n    ')};`;
    }

    return (result += `${new_line ? '\n' : ''}}`);
}

function print_class(value) {
    const parent = Object.getPrototypeOf(value);

    let result = `class ${value.name ? `${value.name} ` : ''}${is_class(parent) ? `extends ${parent.name} ` : ''}{`;

    let new_line = false;

    for (const [k, v] of Object.entries(value)) {
        new_line = true;

        result += `\n    ${k} = ${print(v, true).replace(/\n/g, '\n    ')};`;
    }

    return (result += `${new_line ? '\n' : ''}}`);
}

function print_string(value) {
    return `"${value}"`;
}

/**
 * Преобразует значение переменной в строку и выводит его на консоль.
 *
 * ### Описание
 *
 * Функция `print` используется для преобразования различных типов данных в строку и вывода их на консоль. Она обрабатывает массивы, объекты, классы, функции, символы и другие типы данных, возвращая их строковое представление.
 *
 * ### Параметры
 *
 * - `value` (any)
 *      Переменная, значение которой необходимо преобразовать в строку и вывести на консоль.
 *
 * - `return_result` (boolean)
 *      Если `true`, функция возвращает строковое представление значения переменной.
 *      Если `false`, функция выводит строковое представление значения переменной на консоль.
 *
 * ### Возвращаемое значение
 *
 * Возвращает строковое представление значения переменной, если параметр `return_result` равен `true`. В противном случае возвращает `undefined`.
 *
 * ### Примеры использования
 *
 * 1. Преобразование строки:
 *
 *    ```js
 *    print('example');
 *    ```
 *    Вывод:
 *    ```txt
 *    "example"
 *    ```
 *
 * 2. Преобразование числа:
 *
 *    ```js
 *    print(123);
 *    ```
 *    Вывод:
 *    ```txt
 *    123
 *    ```
 *
 * 3. Преобразование булевых значений:
 *
 *    ```js
 *    print(true);
 *    ```
 *    Вывод:
 *    ```txt
 *    true
 *    ```
 *
 *    ```js
 *    print(false);
 *    ```
 *    Вывод:
 *    ```txt
 *    false
 *    ```
 *
 * 4. Преобразование null и undefined:
 *
 *    ```js
 *    print(null);
 *    ```
 *    Вывод:
 *    ```txt
 *    null
 *    ```
 *
 *    ```js
 *    print(undefined);
 *    ```
 *    Вывод:
 *    ```txt
 *    undefined
 *    ```
 *
 * 5. Преобразование массива:
 *
 *    ```js
 *    const arr = [1, 2, 3];
 *    print(arr);
 *    ```
 *    Вывод:
 *    ```txt
 *    [
 *        0: 1,
 *        1: 2,
 *        2: 3,
 *    ]
 *    ```
 *
 * 6. Преобразование ассоциативного массива:
 *
 *    ```js
 *    const obj = { key: 'value' };
 *    print(obj);
 *    ```
 *    Вывод:
 *    ```txt
 *    {
 *        key: "value",
 *    }
 *    ```
 *
 * 7. Преобразование функции:
 *
 *    ```js
 *    const func = function() {};
 *    print(func);
 *    ```
 *    Вывод:
 *    ```txt
 *    function func() {}
 *    ```
 *
 * 8. Преобразование символа:
 *
 *    ```js
 *    const symbol = Symbol('example');
 *    print(symbol);
 *    ```
 *    Вывод:
 *    ```txt
 *    Symbol(example)
 *    ```
 *
 * 9. Преобразование класса:
 *
 *    ```js
 *    class MyClass {
 *        static test = 'test';
 *    }
 *    print(MyClass);
 *    ```
 *    Вывод:
 *    ```txt
 *    class MyClass {
 *        test = "test";
 *    }
 *    ```
 *
 * 10. Преобразование экземпляра класса:
 *
 *    ```js
 *    class MyClass {
 *        test = 'test';
 *    }
 *    const instance = new MyClass();
 *    print(instance);
 *    ```
 *    Вывод:
 *    ```txt
 *    object MyClass {
 *        test = "test";
 *    }
 *    ```
 *
 * 11. Преобразование интерфейса:
 *
 *    ```js
 *    class MyContract extends Interface {}
 *    print(MyContract);
 *    ```
 *    Вывод:
 *    ```txt
 *    interface MyContract extends Interface {}
 *    ```
 *
 * @param {any} value Переменная, значение которой необходимо преобразовать в строку и вывести на консоль.
 * @param {boolean} return_result Если `true`, функция возвращает строковое представление значения переменной. Если `false`, функция выводит строковое представление значения переменной на консоль.
 * @returns {string|undefined} Возвращает строковое представление значения переменной, если параметр `return_result` равен `true`. В противном случае возвращает `undefined`.
 */
export default function print(value, return_result = false) {
    if (!is_bool(return_result)) {
        throw new TypeError('Параметр "return_result" должен быть логическим типом.');
    }

    let result = '';

    switch (gettype(value)) {
        case 'array':
            result = print_array(value);
            break;
        case 'object':
            result =
                value.toString() === '[object Object]' ? print_object(value) : value.toString();
            break;
        case 'class':
            result = is_contract(value) ? print_contract(value) : print_class(value);
            break;
        case 'string':
            result = print_string(value);
            break;
        default:
            result = to_string(value);
    }

    if (return_result) {
        return result;
    }

    console.log(result);

    return undefined;
}
