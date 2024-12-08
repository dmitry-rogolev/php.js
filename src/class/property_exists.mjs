import { TypePHPJSError } from '../exceptions.mjs';
import { is_callable, is_class, is_object, is_string } from '../variables.mjs';

/**
 * Проверяет, есть ли у объекта или класса свойство
 *
 * Функция проверяет, существует ли свойство `property` в указанном классе.
 *
 * @param {Object|Function} object_or_class Имя класса или объект класса для проверки.
 * @param {String} property Имя свойства.
 * @returns {Boolean} Возвращает `true`, если свойство существует, `false`, если не существует.
 */
export default function property_exists(object_or_class, property) {
    if (!is_object(object_or_class) && !is_class(object_or_class)) {
        throw new TypePHPJSError('The "object_or_class" parameter must be an object or a class.');
    }

    if (!is_string(property)) {
        throw new TypePHPJSError('The "property" parameter must be of the "string" type.');
    }

    return Reflect.has(object_or_class, property) && !is_callable(object_or_class[property]);
}
