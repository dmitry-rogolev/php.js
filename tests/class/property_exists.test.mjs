import { test, expect } from '@jest/globals';
import { property_exists } from '../../src/class.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';

class TestClass {
    static staticProperty = 'staticValue';

    constructor() {
        this.instanceProperty = 'value';
    }

    instanceMethod() {
        return 'method';
    }
}

const testObject = new TestClass();

/**
 * https://onlinephp.io?s=lZDPTsMwDMbvlfoOPlRKK21PUP4cEMdpOyCuVZcZGtQ5UeIMEOLdSVIKbcUk5ksSx7_vs311azqTZ3km-9Y5eEDHd-n2kWcQwvh9ryQ4bjkdVtEzFMNzZ7VBy-9wDWLIPLa9R1Ev0IFRFGpI4kjV0XVS9-RJstIEUodK6yWX1dhFjII75dY3S5lofprafp7THckNcqcPc3GL7C2BOKa_iVRSKzisZbt_QcnBjvD1d09lleY4tbY5-KMpzXdbDb4px66coCsQy-ZFFfGzsPixEatxxf9E__YdRr_I9SJ07kqa7mMeieddfwE%2C&v=8.3.14
 */
describe('property_exists', () => {
    test('Должна вернуть true для существующего свойства экземпляра объекта', () => {
        expect(property_exists(testObject, 'instanceProperty')).toBe(true);
    });

    test('Должна вернуть true для существующего статического свойства класса', () => {
        expect(property_exists(TestClass, 'staticProperty')).toBe(true);
    });

    test('Должна вернуть false для метода экземпляра объекта', () => {
        expect(property_exists(testObject, 'instanceMethod')).toBe(false);
    });

    test('Должна вернуть false для метода класса', () => {
        expect(property_exists(TestClass, 'instanceMethod')).toBe(false);
    });

    test('Должна вернуть false для несуществующего свойства', () => {
        expect(property_exists(testObject, 'nonExistentProperty')).toBe(false);
    });

    test('Должна выбросить ошибку, если object_or_class не объект или класс', () => {
        expect(() => property_exists(null, 'someProperty')).toThrow(TypePHPJSError);
    });

    test('Должна выбросить ошибку, если property не строка', () => {
        expect(() => property_exists(testObject, 123)).toThrow(TypePHPJSError);
    });
});
