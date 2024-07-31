import { TypePHPJSError } from '../exceptions.mjs';
import { empty, is_array, is_callable, is_null } from '../variables.mjs';
import array_values from './array_values.mjs';
import count from './count.mjs';

/**
 * Применяет callback-функцию ко всем элементам указанных массивов
 *
 * Функция `array_map()` возвращает массив `(array)`, содержащий результаты применения callback-функции
 * к соответствующему элементу `array` (и `arrays`, если указано больше массивов),
 * используемого в качестве аргумента callback-функции.
 *
 * @param {Function|null} callback `(value) => any callable`, применяемая к каждому элементу в каждом массиве.
 * `null` может быть передан в качестве значения `callback` для выполнения `zip` операции с несколькими массивами.
 * Если указан только `array`, `array_map()` вернёт входной массив.
 * @param {Array|Object} array Массив, к которому применяется callback-функция.
 * @param {Array|Object} arrays Дополнительные массивы для обработки callback-функцией.
 * @returns {Array|Object}  Возвращает массив, содержащий результаты применения callback-функции
 * к соответствующему элементу `array` (и `arrays`, если указано больше массивов),
 * используемого в качестве аргумента для callback-функции.
 * Возвращённый массив сохранит ключи аргумента массива тогда и только тогда,
 * когда будет передан ровно один массив.
 * Если передано более одного массива, возвращённый массив будет иметь последовательные целочисленные ключи.
 * @throws {TypePHPJSError}
 */
export default function array_map(callback, array, ...arrays) {
    if (!is_callable(callback) && !is_null(callback)) {
        throw new TypePHPJSError('The "callback" parameter must be a function.');
    }

    if (!is_array(array)) {
        throw new TypePHPJSError('The "array" parameter must be an array.');
    }

    if (!arrays.every(a => is_array(a))) {
        throw new TypePHPJSError('The "arrays" parameter must be an array.');
    }

    if (is_null(callback) && empty(arrays)) {
        return array;
    }

    if (empty(arrays)) {
        const result = array instanceof Array ? [] : {};

        for (const key in array) {
            const value = array[key];

            result[key] = callback(value);
        }

        return result;
    }

    if (is_null(callback)) {
        callback = function (...args) {
            return array_values(args);
        };
    }

    arrays.unshift(array);

    let max_count = 0;

    // Получаем длину самого большого массива.
    for (const a of arrays) {
        if (count(a) > max_count) {
            max_count = count(a);
        }
    }

    const result = [];

    // Считаем, что все переданные массивы имеют длину самого большого массива.
    // Тогда получаем колонку значений и передаем ее в качестве параметров в переданную функцию.
    // Возвращаемое значение записываем в результат.
    for (let index = 0; index < max_count; index++) {
        const column = [];

        for (const a of arrays) {
            column.push(Object.values(a)[index]);
        }

        result.push(callback(...column));
    }

    return result;
}
