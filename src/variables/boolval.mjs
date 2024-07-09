import is_array from './is_array.mjs';

/**
 * Возвращает логическое значение переменной
 *
 * @param {any} value Скалярное значение, которое надо привести к типу boolean.
 * @returns {boolean} Возвращает приведённое к логическому типу (boolean) значение параметра value.
 */
export default function boolval(value) {
    if (value === '0' || (is_array(value) && Object.values(value).length === 0)) {
        return false;
    }

    return Boolean(value);
}
