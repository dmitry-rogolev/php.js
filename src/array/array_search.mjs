import { TypePHPJSError } from '../exceptions.mjs';
import { is_array, is_bool, is_numeric } from '../variables.mjs';

/**
 * Ищет значение в массиве и в случае успешного поиска возвращает ключ первого найденного элемента
 *
 * Ищет значение `needle` в массиве `haystack`.
 *
 * @param {any} needle Искомое значение. Если искомое значение `needle` — строка, функция сравнивает значения с учётом регистра.
 * @param {Array|Object} haystack Массив.
 * @param {boolean} strict Функция `array_search()` будет искать идентичные элементы в массиве `haystack`,
 * если третьему параметру `strict` установили значение `true`.
 * То есть функция также будет выполнять строгое сравнение типа значения `needle` в массиве `haystack`,
 * а индекс объекта функция найдёт, если объект окажется тем же экземпляром.
 * @returns {number|string|false} Возвращает ключ значения `needle`, если функция нашла значение в массиве, иначе `false`.
 *
 * Функция вернёт первый найденный ключ, если в массиве `haystack` значение `needle` встречается больше одного раза.
 * Чтобы вернуть ключи всех найденных значений, вызывают функцию `array_keys()` с необязательным параметром `filter_value`.
 */
export default function array_search(needle, haystack, strict = false) {
    if (!is_array(haystack)) {
        throw new TypePHPJSError('The "haystack" parameter must be an array.');
    }

    if (!is_bool(strict)) {
        throw new TypePHPJSError('The "strict" parameter must be a boolean.');
    }

    const compare_func = strict ? value => Object.is(value, needle) : value => value == needle;

    for (const key in haystack) {
        const value = haystack[key];

        if (compare_func(value)) {
            return is_numeric(key) ? Number(key) : key;
        }
    }

    return false;
}
