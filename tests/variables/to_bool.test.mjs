import { expect, test, describe } from '@jest/globals';
import { to_bool } from '../../src/variables.mjs';

describe('Функция to_bool', () => {
    test('Должна возвращать false для пустого массива', () => {
        expect(to_bool([])).toBe(false);
    });

    test('Должна возвращать true для непустого массива', () => {
        expect(to_bool([1, 2, 3])).toBe(true);
    });

    test('Должна возвращать false для пустого ассоциативного массива', () => {
        expect(to_bool({})).toBe(false);
    });

    test('Должна возвращать true для непустого ассоциативного массива', () => {
        expect(to_bool({ key: 'value' })).toBe(true);
    });

    test('Должна возвращать true для строки', () => {
        expect(to_bool('example')).toBe(true);
    });

    test('Должна возвращать true для числа', () => {
        expect(to_bool(123)).toBe(true);
    });

    test('Должна возвращать false для null и undefined', () => {
        expect(to_bool(null)).toBe(false);
        expect(to_bool(undefined)).toBe(false);
    });

    test('Должна возвращать true для булевых значений', () => {
        expect(to_bool(true)).toBe(true);
        expect(to_bool(false)).toBe(false);
    });

    test('Должна возвращать true для экземпляров класса', () => {
        class MyClass {}

        const instance = new MyClass();
        expect(to_bool(instance)).toBe(true);
    });

    test('Должна возвращать true для классов', () => {
        class MyClass {}

        expect(to_bool(MyClass)).toBe(true);
    });
});
