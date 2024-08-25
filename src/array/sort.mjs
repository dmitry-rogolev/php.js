import array_multisort from './array_multisort.mjs';

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
 * @throws {TypePHPJSError|ValuePHPJSError}
 */
export default function sort(array, flags) {
    return array_multisort(array, flags);
}
