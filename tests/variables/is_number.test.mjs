import { describe, test, expect } from '@jest/globals';
import { is_number } from '../../src/variables.mjs';

describe('is_number', () => {
    test('Возвращает true для числовых значений', () => {
        expect(is_number(42)).toBe(true);
        expect(is_number(3.14)).toBe(true);
        expect(is_number(-0.99)).toBe(true);
    });

    test('Возвращает false для специальных числовых значений', () => {
        expect(is_number(NaN)).toBe(false);
        expect(is_number(Infinity)).toBe(false);
        expect(is_number(-Infinity)).toBe(false);
    });

    test('Возвращает false для значений не типа number', () => {
        expect(is_number('42')).toBe(false); // строка
        expect(is_number(true)).toBe(false); // логическое значение
        expect(is_number(null)).toBe(false); // null
        expect(is_number(undefined)).toBe(false); // undefined
        expect(is_number({})).toBe(false); // объект
        expect(is_number([])).toBe(false); // массив
    });
});
