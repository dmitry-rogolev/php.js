import { TypePHPJSError } from '../exceptions.mjs';
import { is_object } from '../variables.mjs';

/**
 * Возвращает класс, которому принадлежит объект.
 *
 * Функция получает класс объекта object.
 *
 * @param {Object} object Тестируемый объект.
 * @returns {Object} Функция возвращает класс, которому принадлежит экземпляр object.
 */
export default function get_class(object) {
    if (!is_object(object)) {
        throw new TypePHPJSError('The "object" parameter must be of the "object" type.');
    }

    return Object.getPrototypeOf(object).constructor;
}
