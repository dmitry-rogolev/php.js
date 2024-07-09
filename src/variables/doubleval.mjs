import floatval from './floatval.mjs';

/**
 * Возвращает значение переменной в виде числа с плавающей точкой
 *
 * @param {any} value
 *
 * Может быть любого типа.
 * Типы отличные от `Number` и `String` приводятся
 * к логическому значению, а затем к числу.
 *
 * @returns {Number}
 *
 * Значение заданной переменной в виде числа с плавающей точкой.
 */
export default function doubleval(value) {
    return floatval(value);
}
