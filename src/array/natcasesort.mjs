import array_multisort from './array_multisort.mjs';
import { SORT_FLAG_CASE, SORT_NATURAL } from './constants.mjs';

/**
 * Сортирует массив алгоритмом естественной сортировки (natural order) без учёта регистра символов
 *
 * Функция `natcasesort()` — это регистронезависимый аналог функции `natsort()`.
 *
 * Функция реализует алгоритм сортировки, при котором порядок буквенно-цифровых строк будет привычным для человека.
 * Такой алгоритм называется natural ordering.
 *
 * > **Замечание:**
 * >
 * > Функция сохраняет первоначальный порядок элементов, если при сравнении значения двух элементов равны.
 *
 * @param {Array|Object} array Входной массив.
 * @returns {true} Функция всегда возвращает `true`.
 * @throws {TypePHPJSError}
 */
export default function natcasesort(array) {
    return array_multisort(array, SORT_NATURAL | SORT_FLAG_CASE);
}
