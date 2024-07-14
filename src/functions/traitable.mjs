import is_callable from '../variables/is_callable.mjs';
import is_class from '../variables/is_class.mjs';
import uses from './uses.mjs';

/**
 * Добавляет классу возможность использования трейтов
 *
 * Добавляет классу статичный метод `use`,
 * добавляющий данному классу статичное поле `__traits`,
 * хранящее в себе перечень используемых трейтов,
 * а также копирует все динамические и статические свойства
 * и методы трейтов в прототип класса и в сам класс соответственно.
 *
 * @param {Object} class_object Класс, которому необходимо добавить возможность использования трейтов.
 * @returns {void} Данная функция ничего не возвращает.
 * @throws {TypeError}
 */
export default function traitable(class_object) {
    if (!is_class(class_object)) {
        throw new TypeError('The "class_object" parameter must be of the "class" type.');
    }

    if (!is_callable(class_object.use)) {
        Object.defineProperty(class_object, 'use', {
            configurable: false,
            enumerable: false,
            value(...traits) {
                if (!Object.hasOwn(this, '__traits')) {
                    Object.defineProperty(this, '__traits', {
                        configurable: false,
                        enumerable: false,
                        value: [],
                        writable: false,
                    });
                }

                for (const trait of traits) {
                    if (!is_class(trait)) {
                        throw new TypeError('The mixin must have a class type.');
                    }

                    if (!uses(this, trait)) {
                        this.__traits.push(trait);

                        Object.assign(this.prototype, new trait());

                        let proto = trait;

                        while (is_class(proto)) {
                            const staticProperties = Object.getOwnPropertyDescriptors(proto);

                            const dynamicProperties = Object.getOwnPropertyDescriptors(
                                proto.prototype,
                            );

                            for (const key in staticProperties) {
                                if (key !== 'prototype' && key !== 'length' && key !== 'name') {
                                    Object.defineProperty(this, key, staticProperties[key]);
                                }
                            }

                            for (const key in dynamicProperties) {
                                if (key !== 'constructor') {
                                    Object.defineProperty(
                                        this.prototype,
                                        key,
                                        dynamicProperties[key],
                                    );
                                }
                            }

                            proto = Object.getPrototypeOf(proto);
                        }
                    }
                }
            },
            writable: false,
        });
    }
}
