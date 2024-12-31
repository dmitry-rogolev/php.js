import { expect, test, describe } from '@jest/globals';
import { isset } from '../../src/variables.mjs';

describe('Функция isset', () => {
    test('Должна возвращать true для определенных значений', () => {
        expect(isset('example')).toBe(true);
        expect(isset(123)).toBe(true);
        expect(isset(true)).toBe(true);
        expect(isset(false)).toBe(true);
        expect(isset([1, 2, 3])).toBe(true);
        expect(isset({ key: 'value' })).toBe(true);
    });

    test('Должна возвращать false для null и undefined', () => {
        expect(isset(null)).toBe(false);
        expect(isset(undefined)).toBe(false);
    });

    test('Должна возвращать false, если хотя бы одно значение null или undefined', () => {
        expect(isset('example', null)).toBe(false);
        expect(isset(123, undefined)).toBe(false);
        expect(isset(true, null, undefined)).toBe(false);
    });

    test('Должна возвращать true, если все значения определены', () => {
        expect(isset('example', 123, true)).toBe(true);
        expect(isset([1, 2, 3], { key: 'value' })).toBe(true);
    });
});
