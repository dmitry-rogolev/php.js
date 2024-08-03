import { TypePHPJSError, ValuePHPJSError } from '../exceptions.mjs';
import { empty, is_array, is_int, is_numeric } from '../variables.mjs';
import count from './count.mjs';

/**
 * Выбирает один или несколько случайных ключей из массива
 *
 * Выбирает одно или несколько случайных значений из массива.
 * Возвращает ключ (или ключи) данных случайных элементов.
 *
 * @param {Array|Object} array Входной массив.
 * @param {Number} num [1] Определяет количество выбираемых элементов.
 * @returns {Number|String|Array} Если вы выбираете только одно значение, функция `array_rand()` возвращает ключ,
 * соответствующий этому значению. В обратном случае, она возвращает массив ключей,
 * соответствующих случайным значениям. Это сделано для того,
 * чтобы дать возможность выбрать из массива как случайные значения, так и случайные ключи.
 * Если возвращается несколько ключей, они будут возвращены в том порядке,
 * в котором они присутствовали в исходном массиве.
 * @throws {TypePHPJSError|ValuePHPJSError}
 */
export default function array_rand(array, num = 1) {
    if (!is_array(array)) {
        throw new TypePHPJSError('The "array" parameter must be an array.');
    }

    if (!is_int(num)) {
        throw new TypePHPJSError('The "num" parameter must be an integer.');
    }

    if (empty(array)) {
        throw new ValuePHPJSError('The passed array is empty.');
    }

    if (num < 0 || num > count(array)) {
        throw new ValuePHPJSError('The value of the "num" parameter is out of range.');
    }

    const keys = Object.keys(array);
    const result = [];

    for (let i = 0; i < num; i++) {
        const key = keys[Math.floor(Math.random() * keys.length)];

        result.push(is_numeric(key) ? Number(key) : key);

        keys.splice(keys.indexOf(key), 1);
    }

    return result.length === 1 ? result[0] : result;
}
