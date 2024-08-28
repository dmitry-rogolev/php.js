import array_multisort from './array_multisort.mjs';
import { SORT_DESC } from './constants.mjs';

/**
 * Сортирует массив в порядке убывания
 *
 * Сортирует массив `(array)` по значениям в порядке убывания.
 *
 * > **Замечание:**
 * >
 * > Функция сохраняет первоначальный порядок элементов, если при сравнении значения двух элементов равны.
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
 * @throws {TypePHPJSError|ValuePHPJSError}
 */
export default function rsort(array, flags) {
    array_multisort(array, SORT_DESC, flags);

    if (!(array instanceof Array)) {
        let index = 0;

        for (const key in array) {
            const value = array[key];

            delete array[key];
            array[index] = value;
            index++;
        }
    }

    return true;
}
