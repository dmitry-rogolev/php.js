import { TypePHPJSError } from '../exceptions.mjs';
import { is_callable, is_class, is_object, is_string } from '../variables.mjs';
import get_class from './get_class.mjs';
import get_parent_class from './get_parent_class.mjs';

/**
 * Возвращает ассоциативный массив методов класса
 *
 * Функция возвращает ассоциативный массив, содержащий методы класса или объекта в виде пар "имя метода: функция".
 *
 * @param {Object|Function} object_or_class Класс или объект
 * @returns {Object} Функция возвращает ассоциативный массив методов, которые объявлены в классе или объекте `object_or_class`.
 */
export default function get_class_methods(object_or_class) {
    if (!is_object(object_or_class) && !is_class(object_or_class)) {
        throw new TypePHPJSError('The "object_or_class" parameter must be an object or a class.');
    }

    const methods = {};

    const add_methods = proto => {
        for (const name of Reflect.ownKeys(proto)) {
            const method = proto[name];

            if (is_callable(method) && is_string(name)) {
                methods[name] = method;
            }
        }
    };

    if (is_class(object_or_class)) {
        let proto = object_or_class;

        while (is_class(proto)) {
            add_methods(proto);
            proto = get_parent_class(proto);
        }
    } else {
        let proto = get_class(object_or_class);

        while (is_class(proto)) {
            add_methods(proto.prototype);
            proto = get_parent_class(proto);
        }
    }

    return methods;
}
