import { TypePHPJSError } from '../exceptions.mjs';
import gettype from './gettype.mjs';
import intval from './intval.mjs';
import is_array from './is_array.mjs';
import is_callable from './is_callable.mjs';
import is_numeric from './is_numeric.mjs';

/**
 * Генерирует пригодное для хранения представление переменной
 *
 * Это полезно для хранения или передачи значений между скриптами без потери их типа и структуры.
 *
 * Для превращения сериализованной строки обратно в значение, используйте функцию `unserialize()`.
 *
 * @param {any} value Значение, которое необходимо сериализовать.
 *
 * `serialize()` обрабатывает все типы, кроме функций, классов и символов.
 *
 * При сериализации объекта функция пытается вызвать методы
 * `__serialize()` или `__sleep()` перед сериализацией.
 * Это делается для того, чтобы позволить объекту в последний момент
 * произвести очистку и тому подобные операции перед сериализацией.
 * Аналогично, когда объект восстанавливается функцией `unserialize()`,
 * вызывается метод `__unserialize()` или `__wakeup()`.
 *
 * @returns {string}
 *
 * Возвращает строку, содержащую потоковое представление переменной `value`,
 * которая может быть сохранена где угодно.
 */
export default function serialize(value) {
    const to_serialize = {
        boolean: () => `b:${value ? 1 : 0};`,
        integer: () => `i:${value};`,
        double: () => `d:${value};`,
        string: () => `s:${value.length}:"${value}";`,
        array: () => {
            let carry = '';

            for (const k in value) {
                const v = value[k];

                carry += serialize(is_numeric(k) ? intval(k) : k) + serialize(v);
            }

            return `a:${Object.values(value).length}:{${carry}}`;
        },
        object: () => {
            let props = value;

            if ('__serialize' in value && is_callable(value.__serialize)) {
                props = value.__serialize();

                if (!is_array(props) || props instanceof Array) {
                    throw new TypePHPJSError(
                        'The "__serialize" method should return an associative array of key/value pairs that represent the serialized form of the object.',
                    );
                }
            } else if ('__sleep' in value && is_callable(value.__sleep)) {
                const keys = value.__sleep();

                if (!is_array(keys) || !(keys instanceof Array)) {
                    throw new TypePHPJSError(
                        'The "sleep" method should return an array with the names of all object variables that should be serialized.',
                    );
                }

                props = {};

                for (const key of keys) {
                    props[key] = value[key];
                }
            }

            let carry = '';
            let length = 0;

            for (const k in props) {
                const v = props[k];

                if (is_callable(v)) {
                    continue;
                }

                carry += serialize(k) + serialize(v);
                length++;
            }

            const className = value.constructor.name;

            return `O:${className.length}:"${className}":${length}:{${carry}}`;
        },
        function: () => {
            throw new TypePHPJSError('Serialization of function is not allowed');
        },
        class: () => {
            throw new TypePHPJSError('Serialization of class is not allowed');
        },
        symbol: () => {
            throw new TypePHPJSError('Serialization of symbol is not allowed');
        },
        NULL: () => 'N;',
        undefined: () => 'u;',
        NaN: () => 'NaN;',
    }[gettype(value)];

    return to_serialize ? to_serialize() : '';
}
