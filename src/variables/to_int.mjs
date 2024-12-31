import to_bool from './to_bool.mjs';
import is_float from './is_float.mjs';
import is_int from './is_int.mjs';
import is_string from './is_string.mjs';
import { TypePHPJSError } from '../exceptions.mjs';

/**
 * Приводит значение переменной к целому числу.
 *
 * ### Описание
 *
 * Функция `to_int` используется для преобразования различных типов данных в целое число. Если значение не является числом или строкой, функция возвращает `1` для истинных значений и `0` для ложных значений.
 *
 * ### Параметры
 *
 * - `value` (any)
 *      Переменная, значение которой необходимо привести к целому числу.
 *
 * - `base` (number)
 *      Основание системы счисления для преобразования строки в число. По умолчанию `10`.
 *
 * ### Возвращаемое значение
 *
 * Возвращает целое число, соответствующее переданному значению.
 *
 * ### Примеры использования
 *
 * 1. Преобразование строки в целое число:
 *
 *    ```js
 *    const result = to_int('123');
 *    // Результат: 123
 *    ```
 *
 * 2. Преобразование числа с плавающей точкой в целое число:
 *
 *    ```js
 *    const result = to_int(123.45);
 *    // Результат: 123
 *    ```
 *
 * 3. Преобразование булевых значений:
 *
 *    ```js
 *    const result1 = to_int(true);
 *    // Результат: 1
 *
 *    const result2 = to_int(false);
 *    // Результат: 0
 *    ```
 *
 * 4. Преобразование других значений:
 *
 *    ```js
 *    const result1 = to_int(null);
 *    // Результат: 0
 *
 *    const result2 = to_int(undefined);
 *    // Результат: 0
 *
 *    const result3 = to_int('example');
 *    // Результат: 0
 *    ```
 *
 * 5. Преобразование строки с основанием системы счисления:
 *
 *    ```js
 *    const result1 = to_int('10', 2);
 *    // Результат: 2
 *
 *    const result2 = to_int('A', 16);
 *    // Результат: 10
 *
 *    const result3 = to_int('7', 8);
 *    // Результат: 7
 *    ```
 *
 * @param {any} value Переменная, значение которой необходимо привести к целому числу.
 * @param {number} [base=10] Основание системы счисления для преобразования строки в число.
 * @returns {number} Возвращает приведенное к целому числу значение переменной `value`.
 */
export default function to_int(value, base = 10) {
    if (!is_int(base)) {
        throw new TypePHPJSError('Параметр "base" должен быть целым числом.');
    }

    if (!is_int(value) && !is_float(value) && !is_string(value)) {
        return Number(to_bool(value));
    }

    const result = parseInt(value, base);

    return Number.isNaN(result) ? 0 : result;
}
