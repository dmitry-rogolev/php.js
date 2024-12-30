import { describe, test, expect } from '@jest/globals';
import { is_long } from '../../src/variables.mjs';

describe('is_long', () => {
    test('Возвращает true для положительных целых чисел', () => {
        expect(is_long(1)).toBe(true);
        expect(is_long(100)).toBe(true);
        expect(is_long(123456)).toBe(true);
    });

    test('Возвращает true для отрицательных целых чисел', () => {
        expect(is_long(-1)).toBe(true);
        expect(is_long(-100)).toBe(true);
        expect(is_long(-123456)).toBe(true);
    });

    test('Возвращает true для нуля', () => {
        expect(is_long(0)).toBe(true);
    });

    test('Возвращает false для чисел с плавающей точкой', () => {
        expect(is_long(1.1)).toBe(false);
        expect(is_long(-0.5)).toBe(false);
        expect(is_long(3.14159)).toBe(false);
    });

    test('Возвращает false для значений не типа number', () => {
        expect(is_long('42')).toBe(false); // строка
        expect(is_long(true)).toBe(false); // логическое значение
        expect(is_long(null)).toBe(false); // null
        expect(is_long(undefined)).toBe(false); // undefined
        expect(is_long({})).toBe(false); // объект
        expect(is_long([])).toBe(false); // массив
    });

    test('Возвращает false для специальных числовых значений', () => {
        expect(is_long(Infinity)).toBe(false); // бесконечность
        expect(is_long(-Infinity)).toBe(false); // отрицательная бесконечность
        expect(is_long(NaN)).toBe(false); // не число
    });
});
