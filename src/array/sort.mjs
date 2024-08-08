import { TypePHPJSError, ValuePHPJSError } from '../exceptions.mjs';
import { floatval, is_array, is_int, strval } from '../variables.mjs';
import array_key_exists from './array_key_exists.mjs';
import array_splice from './array_splice.mjs';
import {
    SORT_FLAG_CASE,
    SORT_NATURAL,
    SORT_NUMERIC,
    SORT_REGULAR,
    SORT_STRING,
} from './constants.mjs';
import count from './count.mjs';
import natcompare from './natcompare.mjs';

/**
 * Сортирует массив по возрастанию
 *
 * Сортирует `array` по значению в порядке возрастания.
 *
 * Замечание: Эта функция присваивает новые ключи элементам `array`.
 * Она удалит все существующие ключи, а не просто переупорядочит их.
 *
 * @param {Array|Object} array Входной массив.
 * @param {Number} flags Необязательный второй параметр `flags` изменяет поведение сортировки
 * и может принимать следующие значения:
 *
 * Флаги типов сортировки:
 *
 * - `SORT_REGULAR` — обычное сравнение элементов
 * - `SORT_NUMERIC` — числовое сравнение элементов
 * - `SORT_STRING` — строковое сравнение элементов
 * - `SORT_NATURAL` — сравнение элементов как строки,
 * используя "естественный порядок", например `natsort()`
 * - `SORT_FLAG_CASE` — можно объединять (побитовое ИЛИ) с `SORT_STRING`
 * или `SORT_NATURAL` для сортировки строк без учёта регистра
 *
 * @returns {true} Функция всегда возвращает `true`.
 * @throws {TypePHPJSError}
 */
export default function sort(array, flags = SORT_REGULAR) {
    if (!is_array(array)) {
        throw new TypePHPJSError('The "array" parameter must be an array.');
    }

    if (!is_int(flags)) {
        throw new TypePHPJSError('The "flag" parameter must be an integer.');
    }

    const compareFunctions = {
        [SORT_REGULAR]: (a, b) => {
            if (/^-?\d+\.?\d*$/.test(a)) {
                a = floatval(a);
            }

            if (/^-?\d+\.?\d*$/.test(b)) {
                b = floatval(b);
            }

            if (a < b) {
                return -1;
            }

            return a > b ? 1 : 0;
        },
        [SORT_NUMERIC]: (a, b) => floatval(a) - floatval(b),
        [SORT_STRING]: (a, b) => {
            a = strval(a);
            b = strval(b);

            if (a < b) {
                return -1;
            }

            return a > b ? 1 : 0;
        },
        [SORT_NATURAL]: (a, b) => {
            if (/^-?\d+\.?\d*$/.test(a) && /^-?\d+\.?\d*$/.test(b)) {
                return floatval(a) - floatval(b);
            }

            return natcompare(strval(a), strval(b));
        },
        [SORT_STRING | SORT_FLAG_CASE]: (a, b) => {
            a = strval(a).toLowerCase();
            b = strval(b).toLowerCase();

            if (a < b) {
                return -1;
            }

            return a > b ? 1 : 0;
        },
        [SORT_NATURAL | SORT_FLAG_CASE]: (a, b) => {
            if (/^-?\d+\.?\d*$/.test(a) && /^-?\d+\.?\d*$/.test(b)) {
                return floatval(a) - floatval(b);
            }

            return natcompare(strval(a).toLowerCase(), strval(b).toLowerCase());
        },
    };

    if (!array_key_exists(flags, compareFunctions)) {
        throw new ValuePHPJSError(
            'The "flags" parameter must have one of the following values: SORT_REGULAR, SORT_NUMERIC, SORT_STRING, SORT_LOCALE_STRING, SORT_NATURAL, SORT_FLAG_CASE.',
        );
    }

    if (count(array) < 2) {
        return array;
    }

    const compareFunction = compareFunctions[flags];

    array_splice(array, 0, count(array), Object.values(array).sort(compareFunction));

    return true;
}
