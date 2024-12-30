import { describe, test, expect } from '@jest/globals';
import { is_null } from '../../src/variables.mjs';

describe('is_null', () => {
    test('Возвращает true для значения null', () => {
        expect(is_null(null)).toBe(true);
    });

    test('Возвращает false для значений не типа null', () => {
        expect(is_null(undefined)).toBe(false);
        expect(is_null(0)).toBe(false);
        expect(is_null('')).toBe(false);
        expect(is_null(false)).toBe(false);
        expect(is_null({})).toBe(false);
        expect(is_null([])).toBe(false);
    });
});
