import stdClass from '../classes/stdClass.mjs';
import is_array from './is_array.mjs';
import is_callable from './is_callable.mjs';
import is_class from './is_class.mjs';
import is_null from './is_null.mjs';
import is_object from './is_object.mjs';
import is_symbol from './is_symbol.mjs';
import is_undefined from './is_undefined.mjs';

/**
 * Приводит значение переменной к объекту
 *
 * @param {any} value Переменная, значение которой необходимо привести к типу (`object`).
 * @returns {Object} Возвращает приведенное к типу (`object`) значение переменной `value`.
 */
export default function objval(value) {
    if (is_object(value)) {
        return value;
    }

    if (is_class(value)) {
        return new value();
    }

    const stdObject = new stdClass();

    if (is_array(value)) {
        const array = value;

        for (const k in array) {
            const v = array[k];

            stdObject[k] = v;
        }

        return stdObject;
    }

    if (is_null(value) || is_undefined(value)) {
        return stdObject;
    }

    if (is_callable(value)) {
        stdObject.function = value;

        return stdObject;
    }

    if (is_symbol(value)) {
        stdObject.symbol = value;

        return stdObject;
    }

    stdObject.scalar = value;

    return stdObject;
}
