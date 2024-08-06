import { TypePHPJSError, ValuePHPJSError } from '../exceptions.mjs';
import { floatval, is_array, is_int, strval } from '../variables.mjs';
import { SORT_NUMERIC, SORT_REGULAR, SORT_STRING } from './constants.mjs';

/**
 * Убирает повторяющиеся значения из массива
 *
 * Принимает входной массив `array` и возвращает новый массив без повторяющихся значений.
 *
 * Обратите внимание, что ключи сохранятся.
 *
 * > **Замечание:**
 * >
 * > Два элемента считаются одинаковыми в том и только в том случае,
 * > если strval(elem1) === strval(elem2).
 * >
 * > Другими словами: если у них одинаковое строковое представление, то будет использован первый элемент.
 *
 * @param {Array|Object} array Входной массив.
 * @param {String} flag Можно использовать необязательный второй параметр `flags`
 * для изменения поведения сравнения с помощью следующих значений:
 *
 * Флаги видов сравнения:
 *
 * - `SORT_REGULAR` - нормальное сравнение элементов (типы не меняются)
 * - `SORT_NUMERIC` - элементы сравниваются как числа
 * - `SORT_STRING` - элементы сравниваются как строки
 *
 * @returns {Array|Object} Возвращает отфильтрованный массив.
 * @throws {TypePHPJSError|ValuePHPJSError}
 */
export default function array_unique(array, flag = SORT_STRING) {
    if (!is_array(array)) {
        throw new TypePHPJSError('The "array" parameter must be an array.');
    }

    if (!is_int(flag)) {
        throw new TypePHPJSError('The "flag" parameter must be a string.');
    }

    let compare_func;

    switch (flag) {
        case SORT_REGULAR:
            compare_func = (result, value) => !Object.values(result).some(v => v === value);
            break;
        case SORT_NUMERIC:
            compare_func = (result, value) =>
                !Object.values(result).some(v => floatval(v) === floatval(value));
            break;
        case SORT_STRING:
            compare_func = (result, value) =>
                !Object.values(result).some(v => strval(v) === strval(value));
            break;
        default:
            throw new ValuePHPJSError(
                'The "flag" parameter must have one of the following values: SORT_REGULAR, SORT_NUMERIC, SORT_STRING.',
            );
    }

    const result = {};

    for (const key in array) {
        const value = array[key];

        if (compare_func(result, value)) {
            result[key] = value;
        }
    }

    return result;
}
