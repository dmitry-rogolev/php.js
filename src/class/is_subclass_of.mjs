import { TypePHPJSError } from '../exceptions.mjs';
import { is_class, is_contract, is_object } from '../variables.mjs';
import get_class from './get_class.mjs';
import get_parent_class from './get_parent_class.mjs';
import is_a from './is_a.mjs';

/**
 * Проверяет, принадлежит ли объект к потомкам класса, или реализует ли объект или родители объекта интерфейс
 *
 * Функция проверяет, принадлежит ли объект или класс `object_or_class` к потомкам класса `classobject`,
 * или реализует ли объект или класс, или родители объекта или класса, интерфейс.
 *
 * @param {Object} object_or_class Класс или объект.
 * @param {Object} classobject Класс.
 * @returns {boolean} Функция возвращает `true`, если объект или класс `object_or_class` принадлежит
 * к потомкам класса `classobject`, или если объект или класс, или предок объекта или класса,
 * реализует интерфейс, иначе `false`.
 */
export default function is_subclass_of(object_or_class, classobject) {
    if (!is_object(object_or_class) && !is_class(object_or_class)) {
        throw new TypePHPJSError(
            'The "object_or_class" parameter must be of the "object_or_class" type.',
        );
    }

    if (!is_class(classobject)) {
        throw new TypePHPJSError('The "classobject" parameter must be of the "classobject" type.');
    }

    if (is_contract(classobject)) {
        let proto = is_object(object_or_class) ? get_class(object_or_class) : object_or_class;

        while (is_class(proto)) {
            if (
                Object.hasOwn(proto, '__implements') &&
                proto.__implements instanceof Array &&
                proto.__implements.includes(classobject)
            ) {
                return true;
            }

            proto = get_parent_class(proto);
        }

        return false;
    }

    return is_a(object_or_class, classobject);
}
