import { describe, test, expect } from '@jest/globals';
import { is_undefined } from '../../src/variables.mjs';

describe('is_undefined', () => {
    test('Возвращает true для значения undefined', () => {
        expect(is_undefined(undefined)).toBe(true);
    });

    test('Возвращает false для значений других типов', () => {
        expect(is_undefined('hello')).toBe(false); // строка
        expect(is_undefined(42)).toBe(false); // число
        expect(is_undefined(true)).toBe(false); // логическое значение
        expect(is_undefined(null)).toBe(false);
        expect(is_undefined({})).toBe(false); // объект
        expect(is_undefined([])).toBe(false); // массив
        expect(is_undefined(() => {})).toBe(false); // функция
    });
});
