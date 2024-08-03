import { TypePHPJSError } from '../exceptions.mjs';
import { empty, is_array } from '../variables.mjs';
import array_is_list from './array_is_list.mjs';
import array_values from './array_values.mjs';

/**
 * Заменяет элементы массива элементами других переданных массивов
 *
 * `array_replace()` замещает значения массива array значениями
 * с такими же ключами из других переданных массивов.
 * Если ключ из первого массива присутствует во втором массиве,
 * его значение заменяется на значение из второго массива.
 * Если ключ есть во втором массиве, но отсутствует в первом - он будет создан в первом массиве.
 * Если ключ присутствует только в первом массиве, то сохранится как есть.
 * Если для замены передано несколько массивов, они будут обработаны в порядке передачи
 * и последующие массивы будут перезаписывать значения из предыдущих.
 *
 * `array_replace()` не рекурсивная: значения первого массива будут заменены
 * вне зависимости от типа значений второго массива, даже если это будут вложенные массивы.
 *
 * @param {Array|Object} array Массив, элементы которого требуется заменить.
 * @param  {...Array|Object} replacements Массивы, из которых будут браться элементы для замены.
 * Значения следующего массива затирают значения предыдущего.
 * @returns {Array|Object} Возвращает массив `(array)`.
 * @throws {TypePHPJSError}
 */
export default function array_replace(array, ...replacements) {
    if (!is_array(array)) {
        throw new TypePHPJSError('The "array" parameter must be an array.');
    }

    if (!replacements.every(replacement => is_array(replacement))) {
        throw new TypePHPJSError('The "replacements" parameter must be an array.');
    }

    if (empty(replacements)) {
        return array;
    }

    const result = Object.assign(array, ...replacements);

    return array instanceof Array && array_is_list(result) ? array_values(result) : result;
}
