import is_null from './is_null.mjs';
import is_undefined from './is_undefined.mjs';

/**
 * Проверяет, определены ли переменные.
 *
 * ### Описание
 *
 * Функция `isset` используется для проверки, определены ли переменные. Она возвращает `true`, если все переменные определены, и `false` в противном случае.
 *
 * ### Параметры
 *
 * - `...variables` (any[])
 *      Переменные, которые необходимо проверить на определенность.
 *
 * ### Возвращаемое значение
 *
 * Возвращает `true`, если все переменные определены, и `false` в противном случае.
 *
 * ### Примеры использования
 *
 * 1. Проверка определенных значений:
 *
 *    ```js
 *    const result1 = isset('example');
 *    // Результат: true
 *
 *    const result2 = isset(123);
 *    // Результат: true
 *
 *    const result3 = isset(true);
 *    // Результат: true
 *
 *    const result4 = isset([1, 2, 3]);
 *    // Результат: true
 *
 *    const result5 = isset({ key: 'value' });
 *    // Результат: true
 *    ```
 *
 * 2. Проверка значений null и undefined:
 *
 *    ```js
 *    const result1 = isset(null);
 *    // Результат: false
 *
 *    const result2 = isset(undefined);
 *    // Результат: false
 *    ```
 *
 * 3. Проверка нескольких значений:
 *
 *    ```js
 *    const result1 = isset('example', null);
 *    // Результат: false
 *
 *    const result2 = isset(123, undefined);
 *    // Результат: false
 *
 *    const result3 = isset(true, 'example', 123);
 *    // Результат: true
 *    ```
 *
 * @param {...any} variables Переменные, которые необходимо проверить на определенность.
 * @returns {boolean} Возвращает `true`, если все переменные определены, и `false` в противном случае.
 */
export default function isset(...variables) {
    for (const variable of variables) {
        if (is_undefined(variable) || is_null(variable)) {
            return false;
        }
    }

    return true;
}
