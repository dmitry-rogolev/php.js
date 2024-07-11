import ArrayAccess from '../contracts/ArrayAccess.mjs';
import is_callable from '../variables/is_callable.mjs';
import is_object from '../variables/is_object.mjs';
import is_undefined from '../variables/is_undefined.mjs';

/**
 * Добавляет экземпляру класса возможность работы с магическими методами
 *
 * Оборачивает экземпляр класса в `Proxy`, перенаправляющий запросы к целевому объекту на магические методы.
 *
 * @param {Object} object Экземпляр класса, который необходимо обернуть в `Proxy`.
 * @returns {Object} Возвращает обернутый в `Proxy` экземпляр класса.
 * @throws {TypeError}
 */
export default function get_magic_proxy(object) {
    if (!is_object(object)) {
        throw new TypeError('The "object" parameter must be of the "object" type.');
    }

    return new Proxy(object, {
        get(target, prop, receiver) {
            if (prop === 'toString' && is_callable(target.__toString)) {
                return target.__toString;
            }

            let result = Reflect.get(target, prop, receiver);

            if (is_undefined(result)) {
                if (target instanceof ArrayAccess) {
                    result = target.offsetGet(prop);
                } else if (is_callable(target.__get)) {
                    result = target.__get(prop);
                }
            }

            return result;
        },

        set(target, prop, newValue, receiver) {
            const propIsNotExists = is_undefined(Reflect.get(target, prop, receiver));

            if (propIsNotExists) {
                if (target instanceof ArrayAccess) {
                    target.offsetSet(prop, newValue);

                    return true;
                } else if (is_callable(target.__set)) {
                    target.__set(prop, newValue);

                    return true;
                }
            }

            return Reflect.set(target, prop, newValue, receiver);
        },

        has(target, prop) {
            const propIsNotExists = is_undefined(Reflect.get(target, prop));

            if (propIsNotExists) {
                if (target instanceof ArrayAccess) {
                    return target.offsetExists(prop);
                } else if (is_callable(target.__isset)) {
                    return target.__isset(prop);
                }
            }

            return Reflect.has(target, prop);
        },

        deleteProperty(target, prop) {
            const propIsNotExists = is_undefined(Reflect.get(target, prop));

            if (propIsNotExists) {
                if (target instanceof ArrayAccess) {
                    target.offsetUnset(prop);

                    return true;
                } else if (is_callable(target.__unset)) {
                    target.__unset(prop);

                    return true;
                }
            }

            return Reflect.deleteProperty(target, prop);
        },

        apply(target, thisArg, argArray) {
            if (!is_callable(target.__invoke)) {
                throw new Error('The "__invoke" method is not implemented.');
            }

            return target.__invoke(...argArray);
        },

        ownKeys(target) {
            return Reflect.ownKeys(target).filter(prop => !prop.startsWith('_'));
        },
    });
}
