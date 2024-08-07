import array_udiff_uassoc from './array_udiff_uassoc.mjs';

/**
 * Вычисляет расхождение массивов, используя callback-функцию для сравнения ключей
 *
 * Сравнивает ключи `original_array` с ключами `arrays` и возвращает разницу.
 * Эта функция похожа на `array_diff()` за исключением того, что сравниваются ключи, а не значения.
 *
 * В отличие от функции `array_diff_key()` для сравнения ключей используется функция,
 * предоставляемая пользователем, а не встроенная функция.
 *
 * @param {Function} key_compare_func `(a, b) => bool` Функция сравнения должна возвращать `true`,
 * если ключи совпадают, и `false`, если не совпадают.
 * @param {Array|Object} original_array Исходный массив
 * @param {Array|Object} arrays Массивы для сравнения
 * @returns {Object} Возвращает массив `(array)`, содержащий все элементы `original_array` с ключами,
 * которых нет во всех последующих массивах.
 * @throws {TypePHPJSError}
 */
export default function array_diff_ukey(key_compare_func, original_array, ...arrays) {
    return array_udiff_uassoc(() => true, key_compare_func, original_array, ...arrays);
}
