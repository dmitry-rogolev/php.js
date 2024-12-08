import { test, expect } from '@jest/globals';
import { TypePHPJSError } from '../../src/exceptions.mjs';
import { get_class_vars } from '../../src/class.mjs';

/**
 * https://onlinephp.io?s=lVPBaoQwEL0L_kMOBfWo9GZLD0uhl6V7KO1Rsma6BmIMcZRK8d9rolbturs2CIHJe_PmzYwPTypTruM6qaBlSfbNzt7frkO6o6qj4CkpkaK9NJcncqd0oUBjE5JH4tVUVBB68RqBS5zQUYe-j2KjdY78rGSKvJAkB8wK5gdjBeZowEpL4r1lvCTdR0dWDx61W9dpTfaa6oRVufJPgIm1lXSh0vcGc14QxJPj51zhaPo6fUIuM7xK0extJRf69sdcaNy1G4DRALxe1kx-WdcHx-yFMwby0I-Aw63B2uiAbux0ecmPAn7HqwuEFIGtrET_MCdnVnzi8poinDNteJ23cVVu9mitFctmHagGiVuW3wLn5faRd_MfmJrbKeku44L1OeELQbJ_6KSGO5exgaXKRb-TcO_yBw%2C%2C&v=8.3.14
 */
describe('get_class_vars', () => {
    // Тест на извлечение свойств из статического класса
    test('Возвращает свойства статического класса', () => {
        class MyClass {
            static property1 = 'value1';
            static property2 = 42;

            static method() {
                return 'This is a static method';
            }
        }

        const result = get_class_vars(MyClass);

        expect(result).toEqual({
            property1: 'value1',
            property2: 42,
        });
    });

    // Тест на выбрасывание ошибки при передаче некласса
    test('Выбрасывает ошибку, если передан не класс', () => {
        expect(() => get_class_vars(null)).toThrow(TypePHPJSError);
        expect(() => get_class_vars(123)).toThrow(TypePHPJSError);
        expect(() => get_class_vars('string')).toThrow(TypePHPJSError);
        expect(() => get_class_vars({})).toThrow(TypePHPJSError);
    });

    // Тест на пустой класс
    test('Возвращает пустой объект для пустого класса', () => {
        class EmptyClass {}

        const result = get_class_vars(EmptyClass);
        expect(result).toEqual({});
    });

    // Тест на класс с методами, но без свойств
    test('Возвращает пустой объект, если в классе только методы', () => {
        class MyClass {
            static method1() {}
            static method2() {}
        }

        const result = get_class_vars(MyClass);
        expect(result).toEqual({});
    });

    // Тест на класс с приватными свойствами
    test('Возвращает только публичные статические свойства класса', () => {
        class MyClass {
            static publicProperty = 'visible';
            static #privateProperty = 'hidden';

            static method() {}
        }

        const result = get_class_vars(MyClass);

        expect(result).toEqual({
            publicProperty: 'visible',
        });
    });

    // Тест на корректность работы с наследованием
    test('Возвращает свойства из всей цепочки наследования', () => {
        class ParentClass {
            static parentProperty = 'parentValue';
        }

        class ChildClass extends ParentClass {
            static childProperty = 'childValue';
        }

        const result = get_class_vars(ChildClass);

        expect(result).toEqual({
            parentProperty: 'parentValue',
            childProperty: 'childValue',
        });
    });
});
