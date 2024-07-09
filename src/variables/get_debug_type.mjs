import is_array from './is_array.mjs';
import is_bool from './is_bool.mjs';
import is_class from './is_class.mjs';
import is_float from './is_float.mjs';
import is_int from './is_int.mjs';
import is_null from './is_null.mjs';
import is_object from './is_object.mjs';

/**
 * Возвращает имя типа переменной в виде, подходящем для отладки
 *
 * Возвращает преобразованное имя переменной `value`.
 * Функция преобразует объекты в имя их класса,
 * а скалярные значения - в общепринятое имя их типа,
 * которое бы использовалось в объявлении типов.
 *
 * Функция отличается от `gettype()` тем, что возвращает имена типов,
 * которые больше соответствуют фактическому использованию,
 * а не те, которые присутствуют по историческим причинам.
 *
 * @param {any} value Переменная, у которой проверяется тип.
 * @returns {string}
 *
 * Возможные значения для возвращаемой строки:
 *
 * | Тип + Состояние | Возвращаемое значение |
 * |-----------------|-----------------------|
 * | null            | "null"                |
 * | undefined       | "undefined"           |
 * | NaN             | "NaN"                 |
 * | Логические значения (true или false) | "bool" |
 * | Целые числа     | "int"                 |
 * | Числа с плавающей точкой | "float"      |
 * | Строки          | "string"              |
 * | Массивы         | "array"               |
 * | Функции         | "function"            |
 * | Объекты именованных классов | Имя класса, например, "Foo" |
 * | Объекты анонимных классов | "class@anonymous" |
 * | Классы          | "class"               |
 * | Символы         | "symbol"              |
 */
export default function get_debug_type(value) {
    if (is_null(value)) {
        return 'null';
    }

    if (Number.isNaN(value)) {
        return 'NaN';
    }

    if (is_bool(value)) {
        return 'bool';
    }

    if (is_int(value)) {
        return 'int';
    }

    if (is_float(value)) {
        return 'float';
    }

    if (is_class(value)) {
        return 'class';
    }

    if (is_array(value)) {
        return 'array';
    }

    if (is_object(value)) {
        return value?.constructor?.name ? value?.constructor?.name : 'class@anonymous';
    }

    return typeof value;
}
