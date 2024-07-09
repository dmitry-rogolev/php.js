import is_null from './is_null.mjs';
import is_undefined from './is_undefined.mjs';

/**
 * Определяет, была ли установлена переменная значением, отличным от `null` и `undefined`
 *
 * Если были переданы несколько параметров, то конструкция `isset()`
 * вернёт `true` только тогда, когда все параметры определены.
 * Проверка выполняется слева направо и заканчивается,
 * как только будет встречена неопределённая переменная.
 *
 * @param {any}  variable Проверяемая переменная.
 * @param {any}  variables Следующие переменные.
 * @returns {boolean} Возвращает `true`, если переданная в параметр `variable` переменная определена
 * и её значение отличается от `null` и `undefined`. В остальных случаях возвращает `false`.
 */
export default function isset(variable, ...variables) {
    variables.unshift(variable);

    for (const value of variables) {
        if (is_undefined(value) || is_null(value)) {
            return false;
        }
    }

    return true;
}
