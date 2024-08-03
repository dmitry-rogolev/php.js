import { TypePHPJSError } from '../exceptions.mjs';
import { empty, is_array } from '../variables.mjs';
import array_is_list from './array_is_list.mjs';
import array_key_exists from './array_key_exists.mjs';

/**
 * Рекурсивно заменяет элементы первого массива элементами переданных массивов
 *
 * `array_replace_recursive()` заменяет значения массива array
 * на соответствующие по ключам значения из всех следующих массивов.
 * Если ключ из первого массива есть во втором, его значение будет заменено
 * на значение из второго массива. Если ключ есть во втором массиве,
 * но отсутствует в первом, он будет создан в первом массиве.
 * Если ключ есть только в первом массиве, то он остаётся как есть.
 * Если передано несколько массивов, они будут обработаны по порядку,
 * последующие перезаписывают предыдущие значения.
 *
 * `array_replace_recursive()` - рекурсивная функция: она будет рекурсивно углубляться в массивы
 * и применять к всем внутренним значениям один и тот же процесс.
 *
 * Если значение, переданное в первый массив является скалярным,
 * оно будет заменено значением во втором массиве,
 * которое может быть скалярным значением или массивом.
 * Если оба значения, переданные в первый массив и во второй массив - массивы,
 * `array_replace_recursive()` будет заменять их значения рекурсивно.
 *
 * @param {Array|Object} array Массив, элементы которого будут заменены.
 * @param  {...Array|Object} replacements Массивы, из которых будут браться элементы для замены.
 * @returns {Array|Object} Возвращает массив `(array)`.
 * @throws {TypePHPJSError}
 */
export default function array_replace_recursive(array, ...replacements) {
    if (!is_array(array)) {
        throw new TypePHPJSError('The "array" parameter must be an array.');
    }

    if (!replacements.every(replacement => is_array(replacement))) {
        throw new TypePHPJSError('The "replacements" parameter must be an array.');
    }

    if (empty(replacements)) {
        return array;
    }

    const result = { ...array };

    for (const replacement of replacements) {
        for (const key in replacement) {
            const value = replacement[key];

            if (is_array(value) && array_key_exists(key, result) && is_array(result[key])) {
                result[key] = array_replace_recursive(result[key], value);
            } else {
                result[key] = value;
            }
        }
    }

    return array instanceof Array && array_is_list(result) ? Object.values(result) : result;
}
