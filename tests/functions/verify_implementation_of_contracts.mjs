import is_callable from '../variables/is_callable.mjs';
import is_class from '../variables/is_class.mjs';
import verify_implementation_of_contract from './verify_implementation_of_contract.mjs';

/**
 * Проверяет реализацию контрактов в переданном классе
 *
 * Проверяет реализацию контрактов в переданном классе,
 * перечисленных в статичном свойстве `__implements`.
 * В случае отсутствия хотя бы одного метода,
 * выбрасывает исключение `Error`.
 *
 * @param {Object} class_object Класс, требующий проверки реализации контракта.
 * @returns {void} Данная функция ничего не возвращает.
 * @throws {TypeError|Error} В случае отсутствия хотя бы одного метода,
 * выбрасывает исключение `Error`.
 */
export default function verify_implementation_of_contracts(class_object) {
    if (!is_class(class_object)) {
        throw new TypeError('The "class_object" parameter must be of the "class" type.');
    }

    if (!is_callable(class_object.implements)) {
        throw new TypeError('The implements method is missing in the passed class.');
    }

    class_object.implements();

    if (!Object.hasOwn(class_object, '__verified_implementation')) {
        Object.defineProperty(class_object, '__verified_implementation', {
            configurable: false,
            enumerable: false,
            value: false,
            writable: true,
        });
    }

    if (!class_object.__verified_implementation) {
        let proto = class_object;

        while (proto?.__implements) {
            for (const contract of proto.__implements) {
                verify_implementation_of_contract(class_object, contract);
            }

            proto = Object.getPrototypeOf(proto);
        }

        class_object.__verified_implementation = true;
    }
}
