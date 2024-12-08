import { TypePHPJSError } from '../exceptions.mjs';
import { is_callable, is_class } from '../variables.mjs';

/**
 * Получает свойства класса
 *
 * Функция возвращает свойства заданного класса.
 *
 * @param {Function} classobject Класс.
 * @returns {Object} Функция возвращает ассоциативный массив свойств класса со значениями.
 */
export default function get_class_vars(classobject) {
    if (!is_class(classobject)) {
        throw new TypePHPJSError('The "classobject" parameter must be of the "class" type.');
    }

    const array = {};

    for (const key in classobject) {
        const value = classobject[key];

        if (!is_callable(value)) {
            array[key] = value;
        }
    }

    return array;
}
