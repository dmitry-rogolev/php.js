import { TypePHPJSError } from '../exceptions.mjs';
import { is_array, is_callable } from '../variables.mjs';

/**
 * Итеративно уменьшает массив к единственному значению, используя callback-функцию
 *
 * `array_reduce()` итеративно применяет callback-функцию `callback` к элементам массива `array` и,
 * таким образом, сводит массив к единственному значению.
 *
 * @param {Array|Object} array Входной массив.
 * @param {Function} callback (carry, item) => any
 *
 * `carry` - Содержит результирующее значение с предыдущей итерации; в случае же первой итерации содержит значение параметра `initial`.
 *
 * `item` - Содержит значение текущей итерации.
 *
 * @param {any} initial [null] Если передан необязательный параметр `initial`,
 * то он будет использован в начале процесса, или в качестве окончательного результата
 * в случае пустого массива.
 * @returns {any} Возвращает получившееся значение.
 * Если массив пуст и не передан параметр `initial`, `array_reduce()` вернёт `null`.
 */
export default function array_reduce(array, callback, initial = null) {
    if (!is_array(array)) {
        throw new TypePHPJSError('The "array" parameter must be an array.');
    }

    if (!is_callable(callback)) {
        throw new TypePHPJSError('The "callback" parameter must be a function.');
    }

    let carry = initial;

    for (const key in array) {
        const value = array[key];

        carry = callback(carry, value);
    }

    return carry;
}
