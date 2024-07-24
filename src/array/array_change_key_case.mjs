import { TypePHPJSError, ValuePHPJSError } from '../exceptions.mjs';
import { is_array, is_int, is_numeric, strval } from '../variables.mjs';
import array_is_list from './array_is_list.mjs';
import { CASE_LOWER, CASE_UPPER } from './constants.mjs';

/**
 * Меняет регистр всех ключей в массиве
 *
 * Возвращает массив `array`, все ключи которого преобразованы в нижний или верхний регистр.
 * Числовые ключи останутся нетронутыми.
 *
 * @param {Array|Object} array Обрабатываемый массив
 * @param {Number} CASE Либо `CASE_UPPER`, либо `CASE_LOWER` (используется по умолчанию)
 * @returns {Array|Object} Возвращает массив с ключами, преобразованными в верхний или нижний регистр.
 * @throws {TypePHPJSError|ValuePHPJSError}
 */
export default function array_change_key_case(array, CASE = CASE_LOWER) {
    if (!is_array(array)) {
        throw new TypePHPJSError('The "array" parameter must be an array.');
    }

    if (!is_int(CASE)) {
        throw new TypePHPJSError('The "CASE" parameter must be an integer.');
    }

    const cases = {
        [CASE_UPPER]: key => strval(key).toUpperCase(),
        [CASE_LOWER]: key => strval(key).toLowerCase(),
    };

    if (!(CASE in cases)) {
        throw new ValuePHPJSError(
            'The "CASE" parameter must have one of the following values: UPPER_CASE, LOWER_CASE.',
        );
    }

    if (array_is_list(array)) {
        return array;
    }

    const toCase = cases[CASE];

    const result = {};

    for (const key in array) {
        result[is_numeric(key) ? key : toCase(key)] = array[key];
    }

    return result;
}
