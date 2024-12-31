import { expect, test, describe } from '@jest/globals';
import to_boolean from '../../src/variables/to_boolean.mjs';

describe('Функция to_boolean', () => {
    test('Должна возвращать false для пустого массива', () => {
        expect(to_boolean([])).toBe(false);
    });

    test('Должна возвращать true для непустого массива', () => {
        expect(to_boolean([1, 2, 3])).toBe(true);
    });

    test('Должна возвращать false для пустого ассоциативного массива', () => {
        expect(to_boolean({})).toBe(false);
    });

    test('Должна возвращать true для непустого ассоциативного массива', () => {
        expect(to_boolean({ key: 'value' })).toBe(true);
    });

    test('Должна возвращать true для строки', () => {
        expect(to_boolean('example')).toBe(true);
    });

    test('Должна возвращать true для числа', () => {
        expect(to_boolean(123)).toBe(true);
    });

    test('Должна возвращать false для null и undefined', () => {
        expect(to_boolean(null)).toBe(false);
        expect(to_boolean(undefined)).toBe(false);
    });

    test('Должна возвращать true для булевых значений', () => {
        expect(to_boolean(true)).toBe(true);
        expect(to_boolean(false)).toBe(false);
    });

    test('Должна возвращать true для экземпляров класса', () => {
        class MyClass {}

        const instance = new MyClass();
        expect(to_boolean(instance)).toBe(true);
    });

    test('Должна возвращать true для классов', () => {
        class MyClass {}

        expect(to_boolean(MyClass)).toBe(true);
    });
});
