import { describe, test, expect } from '@jest/globals';
import { is_scalar } from '../../src/variables.mjs';

describe('is_scalar', () => {
    test('Возвращает true для скалярных значений', () => {
        expect(is_scalar(true)).toBe(true);
        expect(is_scalar(false)).toBe(true);
        expect(is_scalar(42)).toBe(true);
        expect(is_scalar(3.14)).toBe(true);
        expect(is_scalar('hello')).toBe(true);
        expect(is_scalar(Symbol('symbol'))).toBe(true);
    });

    test('Возвращает false для не скалярных значений', () => {
        expect(is_scalar(null)).toBe(false);
        expect(is_scalar(undefined)).toBe(false);
        expect(is_scalar({})).toBe(false); // объект
        expect(is_scalar([])).toBe(false); // массив
        expect(is_scalar(() => {})).toBe(false); // функция
    });
});
