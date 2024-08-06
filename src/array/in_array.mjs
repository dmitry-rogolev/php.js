import array_search from './array_search.mjs';

/**
 * Проверяет, присутствует ли в массиве значение
 *
 * Ищет в `haystack` значение needle. Если `strict` не установлен,
 * то при поиске будет использовано нестрогое сравнение.
 *
 * @param {any} needle Искомое значение.
 * @param {Array|Object} haystack Массив.
 * @param {boolean} strict `[false]` Если третий параметр `strict` установлен в `true`,
 * тогда функция `in_array()` также проверит соответствие типов параметра `needle`
 * и соответствующего значения массива `haystack`.
 * @returns {boolean} Возвращает `true`, если `needle` был найден в массиве, и `false` в противном случае.
 * @throws {TypePHPJSError}
 */
export default function in_array(needle, haystack, strict = false) {
    return array_search(needle, haystack, strict) !== false;
}
