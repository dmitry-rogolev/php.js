import { describe, test, expect } from '@jest/globals';
import { is_symbol } from '../../src/variables.mjs';

describe('is_symbol', () => {
    test('Возвращает true для символов', () => {
        expect(is_symbol(Symbol('symbol'))).toBe(true);
        expect(is_symbol(Symbol.iterator)).toBe(true);
    });

    test('Возвращает false для значений других типов', () => {
        expect(is_symbol('hello')).toBe(false); // строка
        expect(is_symbol(42)).toBe(false); // число
        expect(is_symbol(true)).toBe(false); // логическое значение
        expect(is_symbol(null)).toBe(false);
        expect(is_symbol(undefined)).toBe(false);
        expect(is_symbol({})).toBe(false); // объект
        expect(is_symbol([])).toBe(false); // массив
        expect(is_symbol(() => {})).toBe(false); // функция
    });
});
