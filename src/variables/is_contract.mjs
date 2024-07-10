import Interface from '../contracts/Interface.mjs';
import is_class from './is_class.mjs';

/**
 * Проверяет, является ли переданное значение переменной контрактом
 *
 * Проверяет, является ли переданное значение классом и имеется ли в цепочке прототипов этого класса класс `Interface`.
 *
 * @param {any} value Проверяемое значение.
 * @returns {boolean} Возвращает `true`, если переданное значение является контрактом, иначе `false`.
 */
export default function is_contract(value) {
    return is_class(value) && new value() instanceof Interface;
}
