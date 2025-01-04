import gettype from './gettype.mjs';
import is_bool from './is_bool.mjs';
import is_class from './is_class.mjs';
import is_contract from './is_contract.mjs';
import print from './print.mjs';

function print_array_type(value) {
    let result = `array(${Object.values(value).length}) ${Array.isArray(value) ? '[' : '{'}`;

    let new_line = false;

    for (const [k, v] of Object.entries(value)) {
        new_line = true;

        result += `\n    ${k}: ${print_type(v, true).replace(/\n/g, '\n    ')},`;
    }

    return (result += `${new_line ? '\n' : ''}${Array.isArray(value) ? ']' : '}'}`);
}

function print_object_type(value) {
    let result = `object(${value.constructor.name}) (${Object.values(value).length}) {`;

    let new_line = false;

    for (const [k, v] of Object.entries(value)) {
        new_line = true;

        result += `\n    ${k} = ${print_type(v, true).replace(/\n/g, '\n    ')};`;
    }

    return (result += `${new_line ? '\n' : ''}}`);
}

function print_class_type(value) {
    const parent = Object.getPrototypeOf(value);

    let result = `class ${value.name ? `${value.name} ` : ''}${is_class(parent) ? `extends ${parent.name} ` : ''}{`;

    let new_line = false;

    for (const [k, v] of Object.entries(value)) {
        new_line = true;

        result += `\n    ${k} = ${print_type(v, true).replace(/\n/g, '\n    ')};`;
    }

    return (result += `${new_line ? '\n' : ''}}`);
}

function print_contract_type(value) {
    const parent = Object.getPrototypeOf(value);

    let result = `interface ${value.name ? `${value.name} ` : ''}${is_class(parent) ? `extends ${parent.name} ` : ''}{`;

    let new_line = false;

    for (const [k, v] of Object.entries(value)) {
        new_line = true;

        result += `\n    ${k} = ${print_type(v, true).replace(/\n/g, '\n    ')};`;
    }

    return (result += `${new_line ? '\n' : ''}}`);
}

/**
 * Преобразует значение переменной в строку с указанием типа и выводит его на консоль.
 *
 * ### Описание
 *
 * Функция `print_type` используется для преобразования различных типов данных в строку с указанием типа и вывода их на консоль. Она обрабатывает массивы, объекты, классы, функции, символы и другие типы данных, возвращая их строковое представление с указанием типа.
 *
 * ### Параметры
 *
 * - `value` (any)
 *      Переменная, значение которой необходимо преобразовать в строку с указанием типа и вывести на консоль.
 *
 * - `return_result` (boolean)
 *      Если `true`, функция возвращает строковое представление значения переменной. Если `false`, функция выводит строковое представление значения переменной на консоль.
 *
 * ### Возвращаемое значение
 *
 * Возвращает строковое представление значения переменной с указанием типа, если параметр `return_result` равен `true`. В противном случае возвращает `undefined`.
 *
 * ### Примеры использования
 *
 * 1. Преобразование строки:
 *
 *    ```js
 *    print_type('example');
 *    ```
 *    Вывод:
 *    ```txt
 *    string(7) "example"
 *    ```
 *
 * 2. Преобразование числа:
 *
 *    ```js
 *    print_type(123);
 *    ```
 *    Вывод:
 *    ```txt
 *    int(123)
 *    ```
 *
 *    ```js
 *    print_type(123.45);
 *    ```
 *    Вывод:
 *    ```txt
 *    float(123.45)
 *    ```
 *
 * 3. Преобразование булевых значений:
 *
 *    ```js
 *    print_type(true);
 *    ```
 *    Вывод:
 *    ```txt
 *    bool(true)
 *    ```
 *
 *    ```js
 *    print_type(false);
 *    ```
 *    Вывод:
 *    ```txt
 *    bool(false)
 *    ```
 *
 * 4. Преобразование null и undefined:
 *
 *    ```js
 *    print_type(null);
 *    ```
 *    Вывод:
 *    ```txt
 *    null
 *    ```
 *
 *    ```js
 *    print_type(undefined);
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
 *    print_type(arr);
 *    ```
 *    Вывод:
 *    ```txt
 *    array(3) [
 *        0: int(1),
 *        1: int(2),
 *        2: int(3),
 *    ]
 *    ```
 *
 * 6. Преобразование ассоциативного массива:
 *
 *    ```js
 *    const obj = { key: 'value' };
 *    print_type(obj);
 *    ```
 *    Вывод:
 *    ```txt
 *    array(1) {
 *        key: string(5) "value",
 *    }
 *    ```
 *
 * 7. Преобразование функции:
 *
 *    ```js
 *    const func = function() {};
 *    print_type(func);
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
 *    print_type(symbol);
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
 *    print_type(MyClass);
 *    ```
 *    Вывод:
 *    ```txt
 *    class MyClass {
 *        test = string(4) "test";
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
 *    print_type(instance);
 *    ```
 *    Вывод:
 *    ```txt
 *    object(MyClass) (1) {
 *        test: string(4) "test",
 *    }
 *    ```
 *
 * 11. Преобразование интерфейса:
 *
 *    ```js
 *    class MyContract extends Interface {}
 *    print_type(MyContract);
 *    ```
 *    Вывод:
 *    ```txt
 *    interface MyContract extends Interface {}
 *    ```
 *
 * @param {any} value Переменная, значение которой необходимо преобразовать в строку с указанием типа и вывести на консоль.
 * @param {boolean} return_result Если `true`, функция возвращает строковое представление значения переменной. Если `false`, функция выводит строковое представление значения переменной на консоль.
 * @returns {string|undefined} Возвращает строковое представление значения переменной с указанием типа, если параметр `return_result` равен `true`. В противном случае возвращает `undefined`.
 */
export default function print_type(value, return_result = false) {
    if (!is_bool(return_result)) {
        throw new TypeError('Параметр "return_result" должен иметь логический тип.');
    }

    let result = '';

    switch (gettype(value)) {
        case 'boolean':
            result = value ? 'bool(true)' : 'bool(false)';
            break;
        case 'integer':
            result = `int(${value})`;
            break;
        case 'double':
            result = `float(${value})`;
            break;
        case 'string':
            result = `string(${value.length}) "${value}"`;
            break;
        case 'array':
            result = print_array_type(value);
            break;
        case 'object':
            result = print_object_type(value);
            break;
        case 'class':
            result = is_contract(value) ? print_contract_type(value) : print_class_type(value);
            break;
        default:
            result = print(value, true);
            break;
    }

    if (return_result) {
        return result;
    }

    console.log(result);

    return undefined;
}
