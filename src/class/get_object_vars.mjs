import { TypePHPJSError } from '../exceptions.mjs';
import { is_callable, is_object } from '../variables.mjs';

/**
 * Возвращает свойства указанного объекта
 *
 * Возвращает видимые нестатические свойства указанного объекта `object`.
 *
 * @param {Object} object Экземпляр объекта
 * @returns {Object} Возвращает ассоциативный массив нестатических свойств объекта `object`.
 */
export default function get_object_vars(object) {
    if (!is_object(object)) {
        throw new TypePHPJSError('The "object" parameter must be of the "object" type.');
    }

    const array = {};

    for (const key in object) {
        const value = object[key];

        if (!is_callable(value)) {
            array[key] = value;
        }
    }

    return array;
}
