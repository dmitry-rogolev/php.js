import { TypePHPJSError } from '../exceptions.mjs';
import { is_class, is_object } from '../variables.mjs';

/**
 * Проверяет, принадлежит ли объект к типу или подтипу
 *
 * Функция определяет, принадлежит ли объект или класс `object_or_class` непосредственно
 * к типу объекта `classobject`, или тип объекта `classobject` — супертип объекта или класса, который проверяют.
 *
 * @param {Object} object_or_class Экземпляр класса или объекта.
 * @param {Object} classobject Класс или интерфейс.
 * @returns {boolean} Функция возвращает `true`, если объект `object_or_class` принадлежит к типу объекта
 * `classobject`, или тип объекта `classobject` — супертип объекта, который проверяют, иначе `false`.
 */
export default function is_a(object_or_class, classobject) {
    if (!is_object(object_or_class) && !is_class(object_or_class)) {
        throw new TypePHPJSError('The "object_or_class" parameter must be an object or a class.');
    }

    if (!is_class(classobject)) {
        throw new TypePHPJSError('The "classobject" parameter must be of the "classobject" type.');
    }

    if (is_object(object_or_class)) {
        return object_or_class instanceof classobject;
    }

    let proto = object_or_class;

    while (is_class(proto)) {
        if (Object.is(proto, classobject)) {
            return true;
        }

        proto = Object.getPrototypeOf(proto);
    }

    return false;
}
