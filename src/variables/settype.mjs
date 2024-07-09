import arrval from './arrval.mjs';
import boolval from './boolval.mjs';
import floatval from './floatval.mjs';
import intval from './intval.mjs';
import objval from './objval.mjs';
import strval from './strval.mjs';

/**
 * Задаёт тип переменной
 *
 * @param {any} variable Преобразуемая переменная.
 * @param {String} type Допустимыми значениями параметра `type` являются:
 * - "boolean" или "bool"
 * - "integer" или "int"
 * - "float" или "double"
 * - "string"
 * - "array"
 * - "object"
 * - "null"
 * - "undefined"
 * - "NaN"
 * @returns {any} Возвращает значение переменной `variable`, преобразованное к типу `type`.
 */
export default function settype(variable, type) {
    if (type === 'boolean' || type === 'bool') {
        return boolval(variable);
    }

    if (type === 'integer' || type === 'int') {
        return intval(variable);
    }

    if (type === 'float' || type === 'double') {
        return floatval(variable);
    }

    if (type === 'string') {
        return strval(variable);
    }

    if (type === 'array') {
        return arrval(variable);
    }

    if (type === 'object') {
        return objval(variable);
    }

    if (type === 'null') {
        return null;
    }

    if (type === 'undefined') {
        return undefined;
    }

    if (type === 'NaN') {
        return NaN;
    }

    return variable;
}
