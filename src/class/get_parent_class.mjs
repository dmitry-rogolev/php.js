import { TypePHPJSError } from '../exceptions.mjs';
import { is_class, is_object } from '../variables.mjs';

/**
 * Получает родительский класс для объекта или класса
 *
 * Функция получает родительский класс для объекта или класса.
 *
 * @param {Object} object_or_class Тестируемый объект или класс.
 * @returns {Object|false}
 *
 * Функция возвращает родительский класс для объекта или класса `object_or_class`.
 *
 * Функция вернёт значение `false`, если у объекта нет родителя или класс не существует.
 */
export default function get_parent_class(object_or_class) {
    if (!is_object(object_or_class) && !is_class(object_or_class)) {
        throw new TypePHPJSError('The "object_or_class" parameter must be an object or a class.');
    }

    if (is_object(object_or_class)) {
        return Object.getPrototypeOf(object_or_class).constructor;
    }

    const proto = Object.getPrototypeOf(object_or_class);

    return is_class(proto) ? proto : false;
}
