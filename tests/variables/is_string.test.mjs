import { describe, test, expect } from '@jest/globals';
import { is_string } from '../../src/variables.mjs';

describe('is_string', () => {
    test('Возвращает true для строковых значений', () => {
        expect(is_string('hello')).toBe(true);
        expect(is_string('')).toBe(true);
        expect(is_string(`template string`)).toBe(true);
    });

    test('Возвращает false для значений других типов', () => {
        expect(is_string(42)).toBe(false); // число
        expect(is_string(true)).toBe(false); // логическое значение
        expect(is_string(null)).toBe(false);
        expect(is_string(undefined)).toBe(false);
        expect(is_string({})).toBe(false); // объект
        expect(is_string([])).toBe(false); // массив
        expect(is_string(() => {})).toBe(false); // функция
    });
});
