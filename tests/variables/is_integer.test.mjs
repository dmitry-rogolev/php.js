import { expect, test } from '@jest/globals';
import { is_integer } from '../../src/variables.mjs';

describe('is_integer', () => {
    test('Должна возвращать true для целых чисел', () => {
        expect(is_integer(42)).toBe(true);
        expect(is_integer(-7)).toBe(true);
        expect(is_integer(0)).toBe(true);
    });

    test('Должна возвращать false для чисел с плавающей точкой', () => {
        expect(is_integer(3.14)).toBe(false);
        expect(is_integer(-0.99)).toBe(false);
        expect(is_integer(0.1)).toBe(false);
    });

    test('Должна возвращать false для специальных чисел', () => {
        expect(is_integer(NaN)).toBe(false);
        expect(is_integer(Infinity)).toBe(false);
        expect(is_integer(-Infinity)).toBe(false);
    });

    test('Должна возвращать false для строк', () => {
        expect(is_integer('42')).toBe(false);
        expect(is_integer('3.14')).toBe(false);
        expect(is_integer('')).toBe(false);
    });

    test('Должна возвращать false для логических значений', () => {
        expect(is_integer(true)).toBe(false);
        expect(is_integer(false)).toBe(false);
    });

    test('Должна возвращать false для null и undefined', () => {
        expect(is_integer(null)).toBe(false);
        expect(is_integer(undefined)).toBe(false);
    });

    test('Должна возвращать false для объектов и массивов', () => {
        expect(is_integer({})).toBe(false);
        expect(is_integer([])).toBe(false);
        expect(is_integer({ foo: 42 })).toBe(false);
        expect(is_integer([1, 2, 3])).toBe(false);
    });

    test('Должна возвращать false для функций', () => {
        expect(is_integer(() => {})).toBe(false);
        expect(is_integer(() => {})).toBe(false);
    });
});
