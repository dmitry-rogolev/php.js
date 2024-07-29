import { TypePHPJSError, ValuePHPJSError } from '../exceptions.mjs';
import { empty, is_array, is_callable, is_int, is_null } from '../variables.mjs';
import { ARRAY_FILTER_USE_BOTH, ARRAY_FILTER_USE_KEY } from './constants.mjs';

/**
 * Фильтрует элементы массива с помощью callback-функции
 *
 * Обходит каждое значение массива `array`, передавая его в callback-функцию.
 * Если callback-функция возвращает `true`, данное значение из `array` возвращается в результирующий `array`.
 *
 * @param {Array|Object} array Итерируемый массив
 * @param {Function|null} callback `(value, key) => bool` Используемая callback-функция.
 *
 * Если callback-функция не передана, все пустые значения массива `array`
 * будут удалены с помощью функции `empty()`.
 *
 * @param {Number} mode
 *
 * Флаг, определяющий, какие аргументы передавать в `callback`:
 *
 * - `ARRAY_FILTER_USE_KEY` - передавать только ключ массива
 *   как аргумент для callback вместо значения;
 *
 * - `ARRAY_FILTER_USE_BOTH` - передавать и ключ,
 *   и значение в callback вместо только значения;
 *
 * По умолчанию `0`, что означает, что в callback-функцию
 * будет передаваться только значение в качестве единственного аргумента.
 *
 * @returns {Object} Возвращает отфильтрованный массив.
 * @throws {TypePHPJSError|ValuePHPJSError}
 */
export default function array_filter(array, callback = null, mode = 0) {
    if (!is_array(array)) {
        throw new TypePHPJSError('The "array" parameter must be an array.');
    }

    if (!is_callable(callback) && !is_null(callback)) {
        throw new TypePHPJSError('The "callback" parameter must be a function.');
    }

    if (!is_int(mode)) {
        throw new TypePHPJSError('The "mode" parameter must be an integer.');
    }

    if (is_null(callback)) {
        callback = value => !empty(value);
        mode = 0;
    }

    const modes = {
        0: value => callback(value),
        [ARRAY_FILTER_USE_BOTH]: (value, key) => callback(value, key),
        [ARRAY_FILTER_USE_KEY]: (value, key) => callback(key),
    };

    if (!(mode in modes)) {
        throw new ValuePHPJSError(
            'The "mode" parameter must have one of the following values: 0, ARRAY_FILTER_USE_BOTH, ARRAY_FILTER_USE_KEY.',
        );
    }

    const check = modes[mode];

    const result = {};

    for (const key in array) {
        const value = array[key];

        if (check(value, key)) {
            result[key] = value;
        }
    }

    return result;
}
