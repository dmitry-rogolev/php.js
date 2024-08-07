import array_diff_uassoc from './array_diff_uassoc.mjs';

/**
 * Вычисляет расхождение массивов с дополнительной проверкой индекса
 *
 * Сравнивает значения массива `original_array` со значениями массивов arrays и возвращает разницу.
 * В этой функции, в отличие от функции `array_diff()`, ключи массива также участвуют в сравнении.
 *
 * @param {Array|Object} original_array Исходный массив
 * @param {Array|Object} arrays Массивы для сравнения
 * @returns {Object} Возвращает массив `(array)`, содержащий значения массива `original_array`, которых нет в других сравниваемых массивах.
 * @throws {TypePHPJSError}
 */
export default function array_diff_assoc(original_array, ...arrays) {
    return array_diff_uassoc((a, b) => a === b, original_array, ...arrays);
}
