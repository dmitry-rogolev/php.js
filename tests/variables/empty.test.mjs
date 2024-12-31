import { expect, test, describe } from '@jest/globals';
import { empty } from '../../src/variables.mjs';

describe('Функция empty', () => {
    test('Должна возвращать true для пустых значений', () => {
        expect(empty(null)).toBe(true);
        expect(empty(undefined)).toBe(true);
        expect(empty('')).toBe(true);
        expect(empty(0)).toBe(true);
        expect(empty(false)).toBe(true);
        expect(empty([])).toBe(true);
        expect(empty({})).toBe(true);
    });

    test('Должна возвращать false для непустых значений', () => {
        expect(empty('example')).toBe(false);
        expect(empty(123)).toBe(false);
        expect(empty(true)).toBe(false);
        expect(empty([1, 2, 3])).toBe(false);
        expect(empty({ key: 'value' })).toBe(false);
    });
});
