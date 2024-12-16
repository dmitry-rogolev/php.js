import { expect, test } from '@jest/globals';
import { is_class } from '../../src/variables.mjs';

describe('is_class', () => {
    test('должен возвращать true для класса', () => {
        class MyClass {}
        expect(is_class(MyClass)).toBe(true);
    });

    test('должен возвращать false для функции-конструктора', () => {
        function MyFunction() {}
        expect(is_class(MyFunction)).toBe(false);
    });

    test('должен возвращать false для объекта', () => {
        expect(is_class({})).toBe(false);
    });

    test('должен возвращать false для массива', () => {
        expect(is_class([])).toBe(false);
    });

    test('должен возвращать false для null', () => {
        expect(is_class(null)).toBe(false);
    });

    test('должен возвращать false для числа', () => {
        expect(is_class(42)).toBe(false);
    });

    test('должен возвращать false для строки', () => {
        expect(is_class('hello')).toBe(false);
    });

    test('должен возвращать false для булевого значения', () => {
        expect(is_class(true)).toBe(false);
    });

    test('должен возвращать false для встроенных объектов, таких как Map', () => {
        expect(is_class(new Map())).toBe(false);
    });

    test('должен возвращать false для встроенных объектов, таких как Date', () => {
        expect(is_class(new Date())).toBe(false);
    });

    test('должен возвращать false для объекта, созданного через Object.create(null)', () => {
        const noProtoObject = Object.create(null);
        noProtoObject.foo = 'bar';
        expect(is_class(noProtoObject)).toBe(false);
    });
});
