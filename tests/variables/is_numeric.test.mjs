import { describe, test, expect } from '@jest/globals';
import { is_numeric } from '../../src/variables.mjs';

describe('is_numeric', () => {
    test('Возвращает true для числовых значений', () => {
        expect(is_numeric(42)).toBe(true);
        expect(is_numeric(3.14)).toBe(true);
        expect(is_numeric(-0.99)).toBe(true);
    });

    test('Возвращает true для числовых строк', () => {
        expect(is_numeric('42')).toBe(true);
        expect(is_numeric('3.14')).toBe(true);
        expect(is_numeric('-0.99')).toBe(true);
    });

    test('Возвращает false для специальных числовых значений', () => {
        expect(is_numeric(NaN)).toBe(false);
        expect(is_numeric(Infinity)).toBe(false);
        expect(is_numeric(-Infinity)).toBe(false);
    });

    test('Возвращает false для значений не типа number или string', () => {
        expect(is_numeric(true)).toBe(false); // логическое значение
        expect(is_numeric(null)).toBe(false); // null
        expect(is_numeric(undefined)).toBe(false); // undefined
        expect(is_numeric({})).toBe(false); // объект
        expect(is_numeric([])).toBe(false); // массив
    });
});
