import { TypePHPJSError } from '../exceptions.mjs';
import { is_array, is_callable } from '../variables.mjs';
import multisort from './multisort.mjs';

/**
 * Сортирует массив пользовательской функцией сравнения, сохраняя ассоциацию индексов.
 *
 * Сортирует массив `array` пользовательской функцией сравнения так, чтобы ключи массива
 * сохраняли корреляцию со значениями, с которыми они связаны.
 *
 * Функцией пользуются для сортировки ассоциативных массивов, для которых важен текущий порядок элементов.
 *
 * > **Замечание:**
 * >
 * > Функция сохраняет первоначальный порядок элементов, если при сравнении значения двух элементов равны.
 *
 * @param {Array|Object} array Входной массив.
 * @param {Function} callback
 *
 * Функция сравнения должна возвращать целое, которое меньше, равно или больше нуля,
 * если первый аргумент является соответственно меньшим, равным или большим, чем второй.
 *
 * 		(a, b) => Number
 *
 * @returns {true} Функция возвращает логическое значение `true`.
 */
export default function usort(array, callback) {
    if (!is_array(array)) {
        throw new TypePHPJSError('The "array" parameter must be an array.');
    }

    if (!is_callable(callback)) {
        throw new TypePHPJSError('The "callback" parameter must be a function.');
    }

    return multisort(array, callback);
}
