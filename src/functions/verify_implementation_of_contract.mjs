import Interface from '../contracts/Interface.mjs';
import is_callable from '../variables/is_callable.mjs';
import is_class from '../variables/is_class.mjs';
import is_contract from '../variables/is_contract.mjs';
import get_property_descriptor from './get_property_descriptor.mjs';

/**
 * Проверяет реализацию контракта в переданном классе.
 *
 * Перебирает все прототипы класса и проверяет реализацию
 * всех методов переданного интерфейса.
 * В случае отсутствия хотя бы одного метода,
 * выбрасывает исключение `Error`.
 *
 * @param {Object} class_object Класс, требующий проверки реализации контракта.
 * @param {Interface} contract Контракт, реализуемый в классе.
 * @returns {void} Данная функция ничего не возвращает.
 * @throws {TypeError|Error} В случае отсутствия хотя бы одного метода,
 * выбрасывает исключение `Error`.
 */
export default function verify_implementation_of_contract(class_object, contract) {
    if (!is_class(class_object)) {
        throw new TypeError('The "class_object" parameter must be of the "class" type.');
    }

    if (!is_class(contract)) {
        throw new TypeError('The "contract" parameter must be of the "class" type.');
    }

    if (!is_contract(contract)) {
        throw new TypeError(
            `The "${contract.name}" contract should extend the "${Interface.name}" class.`,
        );
    }

    let proto = contract;

    while (is_class(proto) && !Object.is(proto, Interface)) {
        const staticMethods = Object.getOwnPropertyNames(proto).filter(name =>
            is_callable(Object.getOwnPropertyDescriptor(proto, name)?.value),
        );

        const dynamicMethods = Object.getOwnPropertyNames(proto.prototype).filter(name =>
            is_callable(Object.getOwnPropertyDescriptor(proto.prototype, name)?.value),
        );

        for (const method of staticMethods) {
            const descriptor = get_property_descriptor(class_object, method, true);

            if (!descriptor) {
                throw new Error(
                    `The "${method}" static method of the "${proto.name}" contract in the "${class_object.name}" class is not implemented.`,
                );
            }

            if (!is_callable(descriptor.value)) {
                throw new TypeError(
                    `The "${method}" static property of the "${proto.name}" contract in the "${class_object.name}" class must be a function.`,
                );
            }
        }

        for (const method of dynamicMethods) {
            const descriptor = get_property_descriptor(class_object, method);

            if (!descriptor) {
                throw new Error(
                    `The "${method}" method of the "${proto.name}" contract in the "${class_object.name}" class is not implemented.`,
                );
            }

            if (!is_callable(descriptor.value)) {
                throw new TypeError(
                    `The "${method}" property of the "${proto.name}" contract in the "${class_object.name}" class must be a function.`,
                );
            }
        }

        proto = Object.getPrototypeOf(proto);
    }
}
