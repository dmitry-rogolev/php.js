import is_float from './is_float.mjs';
import is_int from './is_int.mjs';
import is_string from './is_string.mjs';
import to_bool from './to_bool.mjs';

/**
 * Приводит значение переменной к числу с плавающей точкой.
 *
 * ### Описание
 *
 * Функция `to_float` используется для преобразования различных типов данных в число с плавающей точкой. Если значение не является числом или строкой, функция возвращает `1` для истинных значений и `0` для ложных значений.
 *
 * ### Параметры
 *
 * - `value` (any)
 *      Переменная, значение которой необходимо привести к числу с плавающей точкой.
 *
 * ### Возвращаемое значение
 *
 * Возвращает число с плавающей точкой, соответствующее переданному значению.
 *
 * ### Примеры использования
 *
 * 1. Преобразование строки в число с плавающей точкой:
 *
 *    ```js
 *    const result = to_float('123.45');
 *    // Результат: 123.45
 *    ```
 *
 * 2. Преобразование целого числа в число с плавающей точкой:
 *
 *    ```js
 *    const result = to_float(123);
 *    // Результат: 123.0
 *    ```
 *
 * 3. Преобразование булевых значений:
 *
 *    ```js
 *    const result1 = to_float(true);
 *    // Результат: 1.0
 *
 *    const result2 = to_float(false);
 *    // Результат: 0.0
 *    ```
 *
 * 4. Преобразование других значений:
 *
 *    ```js
 *    const result1 = to_float(null);
 *    // Результат: 0.0
 *
 *    const result2 = to_float(undefined);
 *    // Результат: 0.0
 *
 *    const result3 = to_float('example');
 *    // Результат: 0.0
 *    ```
 *
 * @param {any} value Переменная, значение которой необходимо привести к числу с плавающей точкой.
 * @returns {number} Возвращает приведенное к числу с плавающей точкой значение переменной `value`.
 */
export default function to_float(value) {
    if (!is_int(value) && !is_float(value) && !is_string(value)) {
        return Number(to_bool(value));
    }

    const result = parseFloat(value);

    return Number.isNaN(result) ? 0 : result;
}
