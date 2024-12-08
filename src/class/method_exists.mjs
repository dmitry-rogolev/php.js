import { TypePHPJSError } from '../exceptions.mjs';
import { is_callable, is_class, is_object, is_string } from '../variables.mjs';

/**
 * Проверяет, существует ли метод в классе
 *
 * Проверяет, существует ли метод класса в указанном объекте `object_or_class`.
 *
 * @param {Object|Function} object_or_class Экземпляр объекта или класс.
 * @param {string} method Имя метода.
 * @returns {boolean} Возвращает `true`, если метод `method` определён для указанного объекта `object_or_class`, иначе `false`.
 */
export default function method_exists(object_or_class, method) {
    if (!is_object(object_or_class) && !is_class(object_or_class)) {
        throw new TypePHPJSError('The "object_or_class" parameter must be an object or a class.');
    }

    if (!is_string(method)) {
        throw new TypePHPJSError('The "method" parameter must be of the "string" type.');
    }

    return Reflect.has(object_or_class, method) && is_callable(object_or_class[method]);
}
