import { expect, test, describe } from '@jest/globals';
import { is_bool } from '../../src/variables.mjs';

describe('is_bool', () => {
    test('должна возвращать true для значения true', () => {
        expect(is_bool(true)).toBe(true);
    });

    test('должна возвращать true для значения false', () => {
        expect(is_bool(false)).toBe(true);
    });

    test('должна возвращать false для значения числа', () => {
        expect(is_bool(0)).toBe(false);
        expect(is_bool(1)).toBe(false);
    });

    test('должна возвращать false для строки', () => {
        expect(is_bool('true')).toBe(false);
        expect(is_bool('false')).toBe(false);
    });

    test('должна возвращать false для объекта', () => {
        expect(is_bool({})).toBe(false);
        expect(is_bool([])).toBe(false);
    });

    test('должна возвращать false для null', () => {
        expect(is_bool(null)).toBe(false);
    });

    test('должна возвращать false для undefined', () => {
        expect(is_bool(undefined)).toBe(false);
    });

    test('должна возвращать false для функции', () => {
        expect(is_bool(() => {})).toBe(false);
    });

    test('должна возвращать false для объекта Boolean', () => {
        expect(is_bool(new Boolean(true))).toBe(false);
    });
});
