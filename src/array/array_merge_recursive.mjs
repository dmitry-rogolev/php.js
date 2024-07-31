import { TypePHPJSError } from '../exceptions.mjs';
import { empty, is_array, is_null, is_numeric } from '../variables.mjs';
import array_key_exists from './array_key_exists.mjs';

/**
 * Рекурсивно сливает один или несколько массивов
 *
 * Функция `array_merge_recursive()` сливает элементы одного или нескольких массивов так,
 * что значения одного добавляются в конец предыдущего.
 * Функция возвращает результирующий массив.
 *
 * Если входные массивы содержат одинаковые строковые ключи, то значения этих ключей сливаются в массив,
 * и это делается рекурсивно, поэтому, если одно значение — массив,
 * то функция сливает это значение с соответствующим значением в другом массиве.
 * Однако, если массивы содержат одинаковые числовые ключи, каждое следующее значение не перезапишет исходное,
 * а будет добавлено в конец массива.
 *
 * @param {Array|Object} arrays Список массивов для рекурсивного слияния.
 * @returns {Array|Object} Функция возвращает массив значений, который получился в результате объединения аргументов.
 * Без аргументов функция возвращает пустой массив `(array)`.
 * @throws {TypePHPJSError}
 */
export default function array_merge_recursive(...arrays) {
    if (!arrays.every(array => is_array(array))) {
        throw new TypePHPJSError('The "arrays" parameter must be an array.');
    }

    if (empty(arrays)) {
        return [];
    }

    const result = arrays.every(array => array instanceof Array) ? [] : {};

    // Текущий индекс в массиве
    let index = 0;

    // Индекс первого массива с числовым ключом, записанный в результат.
    let first_array_index = null;

    // Перебираем переданные массивы.
    for (const array of arrays) {
        for (const key in array) {
            const value = array[key];

            // Значение не является массивом, записываем его в результат и продолжаем итерацию.
            //
            // Если значение имеет числовой ключ, переиндексируем его.
            if (!is_array(value)) {
                if (is_numeric(key)) {
                    result[index] = value;
                    index++;
                } else if (array_key_exists(key, result)) {
                    result[key] = [result[key], value];
                } else {
                    result[key] = value;
                }

                continue;
            }

            // Значение является массивом
            //
            // Массив имеет числовой ключ
            if (is_numeric(key)) {
                // Если это первый массив с числовым ключом, сохраняем его индекс,
                // иначе объединяем массив с первым массивом.
                if (is_null(first_array_index)) {
                    result[index] = value;
                    first_array_index = index;
                    index++;
                } else {
                    result[first_array_index] = array_merge_recursive(
                        result[first_array_index],
                        value,
                    );
                }

                continue;
            }

            // Массив имеет строковый ключ.
            //
            // Если массив с таким ключом уже был записан в результат, объединяем его с текущим массивом.
            // Иначе записываем текущий массив в результат.
            if (array_key_exists(key, result) && is_array(result[key])) {
                result[key] = array_merge_recursive(result[key], value);

                continue;
            }

            result[key] = value;
        }
    }

    return result;
}
