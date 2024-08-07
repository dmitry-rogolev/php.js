import array_diff_ukey from './array_diff_ukey.mjs';

/**
 * Вычисляет расхождение массивов, сравнивая ключи
 *
 * Сравнивает ключи `original_array` с ключами `arrays` и возвращает разницу.
 * Эта функция схожа с `array_diff()` за исключением того, что сравниваются ключи, а не значения.
 *
 * @param {Array|Object} original_array Исходный массив
 * @param {Array|Object} arrays Массивы для сравнения
 * @returns {Object} Возвращает массив `(array)`, содержащий все элементы `original_array` с ключами,
 * которых нет во всех последующих массивах.
 * @throws {TypePHPJSError}
 */
export default function array_diff_key(original_array, ...arrays) {
    return array_diff_ukey((a, b) => a === b, original_array, ...arrays);
}
