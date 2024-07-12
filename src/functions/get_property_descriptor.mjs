import is_bool from '../variables/is_bool.mjs';
import is_class from '../variables/is_class.mjs';
import is_object from '../variables/is_object.mjs';
import is_string from '../variables/is_string.mjs';

function get_property_descriptor_of_object(object, property, is_static = false) {
    if (Object.getOwnPropertyDescriptor(object, property)) {
        return Object.getOwnPropertyDescriptor(object, property);
    }

    let proto = Object.getPrototypeOf(object);

    while (is_class(proto.constructor)) {
        const descriptor = Object.getOwnPropertyDescriptor(
            is_static ? proto.constructor : proto,
            property,
        );

        if (descriptor) {
            return descriptor;
        }

        proto = Object.getPrototypeOf(proto);
    }

    return undefined;
}

function get_property_descriptor_of_class(class_object, property, is_static = false) {
    let proto = class_object;

    while (is_class(proto)) {
        const descriptor = Object.getOwnPropertyDescriptor(
            is_static ? proto : proto.prototype,
            property,
        );

        if (descriptor) {
            return descriptor;
        }

        proto = Object.getPrototypeOf(proto);
    }

    return undefined;
}

/**
 * Возвращает дескриптор свойства, находящегося в цепочке прототипов класса.
 *
 * @param {Object} class_object Класс, из которого необходимо получить дескриптор свойства.
 * @param {string} property Имя свойства возвращаемого дескриптора.
 * @param {boolean} is_static Является ли свойство статичным?
 * @returns {Object|undefined} Возвращает объект дескриптора свойства, либо `undefined` в случае его отсутствия.
 * @throws {TypeError}
 */
export default function get_property_descriptor(object_or_class, property, is_static = false) {
    if (!is_object(object_or_class) && !is_class(object_or_class)) {
        throw new TypeError(
            'The "class_object" parameter must be of the "object" or the "class" type.',
        );
    }

    if (!is_string(property)) {
        throw new TypeError('The "property" parameter must be of the "string" type.');
    }

    if (!is_bool(is_static)) {
        throw new TypeError('The "is_static" parameter must be of the "boolean" type.');
    }

    return is_class(object_or_class)
        ? get_property_descriptor_of_class(object_or_class, property, is_static)
        : get_property_descriptor_of_object(object_or_class, property, is_static);
}
