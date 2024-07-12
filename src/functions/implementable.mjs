import Interface from '../contracts/Interface.mjs';
import is_callable from '../variables/is_callable.mjs';
import is_class from '../variables/is_class.mjs';

/**
 * Добавляет переданному классу возможность реализации интерфейсов
 *
 * Добавляет переданному классу статичный метод implements,
 * добавляющий данному классу статичное свойство __implements,
 * хранящее в себе список реализуемых данным классом интерфейсов.
 *
 * @param {Object} class_object Класс, которому необходимо добавить возможность реализации интерфейсов.
 * @returns {void} Данная функция ничего не возвращает.
 * @throws {TypeError}
 */
export default function implementable(class_object) {
    if (!is_class(class_object)) {
        throw new TypeError('The "class_object" parameter must be of the "class" type.');
    }

    if (!is_callable(class_object.implements)) {
        Object.defineProperty(class_object, 'implements', {
            configurable: false,
            enumerable: false,
            value(...contracts) {
                if (Object.hasOwn(this, '__implements')) {
                    for (const contract of contracts) {
                        if (!(new contract() instanceof Interface)) {
                            throw new TypeError(
                                `The interface must be inherited from the "${Interface.name}"`,
                            );
                        }

                        if (!this.__implements.includes(contract)) {
                            this.__implements.push(contract);
                        }
                    }
                } else {
                    Object.defineProperty(this, '__implements', {
                        configurable: false,
                        enumerable: false,
                        value: contracts,
                        writable: false,
                    });
                }
            },
            writable: false,
        });
    }
}
