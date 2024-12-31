import is_array from './is_array.mjs';
import is_class from './is_class.mjs';
import is_float from './is_float.mjs';
import is_int from './is_int.mjs';
import is_null from './is_null.mjs';
import is_object from './is_object.mjs';

/**
 * Определяет тип переменной.
 *
 * ### Описание
 *
 * Функция `gettype` используется для определения типа переменной. Она возвращает строку, представляющую тип переменной.
 *
 * ### Параметры
 *
 * - `value` (any)
 *      Переменная, тип которой необходимо определить.
 *
 * ### Возвращаемое значение
 *
 * Возвращает строку, представляющую тип переменной.
 *
 * ### Примеры использования
 *
 * 1. Определение типа переменной:
 *
 *    ```js
 *    const result1 = gettype(null);
 *    // Результат: 'null'
 *
 *    const result2 = gettype(NaN);
 *    // Результат: 'NaN'
 *
 *    const result3 = gettype(123);
 *    // Результат: 'integer'
 *
 *    const result4 = gettype(123.45);
 *    // Результат: 'double'
 *
 *    const result5 = gettype('example');
 *    // Результат: 'string'
 *
 *    const result6 = gettype(true);
 *    // Результат: 'boolean'
 *
 *    const result7 = gettype(undefined);
 *    // Результат: 'undefined'
 *
 *    const result8 = gettype([1, 2, 3]);
 *    // Результат: 'array'
 *
 *    const result9 = gettype({ key: 'value' });
 *    // Результат: 'object'
 *
 *    class MyClass {}
 *    const result10 = gettype(MyClass);
 *    // Результат: 'class'
 *
 *    const result11 = gettype(new MyClass());
 *    // Результат: 'object'
 *    ```
 *
 * @param {any} value Переменная, тип которой необходимо определить.
 * @returns {string} Возвращает строку, представляющую тип переменной.
 */
export default function gettype(value) {
    if (is_null(value)) {
        return 'null';
    }

    if (Number.isNaN(value)) {
        return 'NaN';
    }

    if (is_int(value)) {
        return 'integer';
    }

    if (is_float(value)) {
        return 'double';
    }

    if (is_class(value)) {
        return 'class';
    }

    if (is_array(value)) {
        return 'array';
    }

    if (is_object(value)) {
        return 'object';
    }

    return typeof value;
}
