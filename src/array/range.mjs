import { TypePHPJSError, ValuePHPJSError } from '../exceptions.mjs';
import { floatval, is_float, is_int, is_string } from '../variables.mjs';

/**
 * Создаёт массив, содержащий диапазон элементов
 *
 * Создаёт массив, содержащий диапазон элементов.
 *
 * Если оба параметра — `start` и `end` — будут строками `(string)`,
 * а параметр `step` — числом `(int)`, то созданный массив будет последовательностью байтов.
 * В других случаях созданный массив будет последовательностью чисел.
 *
 * Последовательность будет возрастать, если значение параметра `start` меньше
 * или равно значению параметра `end`. В противном случае последовательность будет убывать.
 *
 * Если значение хотя бы одного из параметров `start` или `end` окажется нечисловой
 * строкой размером более одного байта, будет выброшено исключение `ValuePHPJSError`.
 *
 * @param {String|Number} start Первое значение последовательности.
 * @param {String|Number} end Последнее значение последовательности.
 * @param {Number} step `[1]` Параметр step определяет, на сколько будут изменяться
 * значения в создаваемой последовательности.
 * @returns {Array}
 *
 * Возвращает последовательность элементов в виде массива `(array)`,
 * в котором первый элемент получает значение параметра `start`,
 * а последний — параметра `end`, в которой каждое значение
 * последовательности отстаёт от другого на указанное в параметре
 * `step` количество шагов.
 *
 * Последний элемент возвращённого массива будет равен либо значению параметра `end`,
 * либо предыдущему значению последовательности, в зависимости от значения параметра `step`.
 *
 * Если оба параметра — `start` и `end` — будут строками `(string)`,
 * а параметр `step` — числом `(int)`, то созданный массив будет
 * последовательностью байтов, обычно латинских символов в кодировке `ASCII`.
 *
 * @throws {TypePHPJSError|ValuePHPJSError}
 *
 * Если значение параметра `step` будет равно `0`, будет выброшено исключение `ValuePHPJSError`.
 *
 * Если значение хотя бы одного из параметров `start`, `end`, или `step` окажется
 * недопустимым конечным числом, как его определяет функция `is_finite()`,
 * будет выброшено исключение `ValuePHPJSError`.
 *
 * Если значение параметра `step` будет отрицательным при создании возрастающей
 * последовательности (т. е. `start <= end`), будет выброшено исключение `ValuePHPJSError`.
 *
 * Если значение хотя бы одного из параметров `start` или `end` будет пустой строкой `('')`,
 * то она будет интерпретирована как целое число `0`.
 */
export default function range(start, end, step = 1) {
    if (!is_string(start) && !is_int(start) && !is_float(start)) {
        throw new TypePHPJSError('The "start" parameter must be a string, an integer or a float.');
    }

    if (!is_string(end) && !is_int(end) && !is_float(end)) {
        throw new TypePHPJSError('The "end" parameter must be a string, an integer or a float.');
    }

    if (!is_int(step) && !is_float(step)) {
        throw new TypePHPJSError('The "step" parameter must be an integer or a float.');
    }

    if (step === 0) {
        throw new ValuePHPJSError('The "step" parameter cannot be zero.');
    }

    if (start < end && step < 0) {
        throw new ValuePHPJSError(
            'The "step" parameter must be greater than zero at start <= end.',
        );
    }

    step = Math.abs(step);

    if (start === '') {
        start = 0;
    }

    if (end === '') {
        end = 0;
    }

    if (is_string(start) && (is_int(end) || is_float(end))) {
        start = Number.isNaN(floatval(start)) ? 0 : floatval(start);
    }

    if ((is_int(start) || is_float(start)) && is_string(end)) {
        end = Number.isNaN(floatval(end)) ? 0 : floatval(end);
    }

    let next;

    if ((is_int(start) || is_float(start)) && (is_int(end) || is_float(end))) {
        next = start < end ? value => (value += step) : value => (value -= step);
    } else {
        next =
            start < end
                ? value => String.fromCharCode(value.charCodeAt(0) + step)
                : value => String.fromCharCode(value.charCodeAt(0) - step);
    }

    const result = [];

    let value = is_string(start) ? start.at(0) : start;

    do {
        result.push(value);
        value = next(value);
    } while (start < end ? value <= end : value >= end);

    return result;
}
