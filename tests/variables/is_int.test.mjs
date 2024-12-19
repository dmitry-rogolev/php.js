import { expect, test } from '@jest/globals';
import { is_int } from '../../src/variables.mjs';

describe('is_int', () => {
    test('Возвращает true для положительных целых чисел', () => {
        expect(is_int(1)).toBe(true);
        expect(is_int(100)).toBe(true);
        expect(is_int(123456)).toBe(true);
    });

    test('Возвращает true для отрицательных целых чисел', () => {
        expect(is_int(-1)).toBe(true);
        expect(is_int(-100)).toBe(true);
        expect(is_int(-123456)).toBe(true);
    });

    test('Возвращает true для нуля', () => {
        expect(is_int(0)).toBe(true);
    });

    test('Возвращает false для чисел с плавающей точкой', () => {
        expect(is_int(1.1)).toBe(false);
        expect(is_int(-0.5)).toBe(false);
        expect(is_int(3.14159)).toBe(false);
    });

    test('Возвращает false для значений не типа number', () => {
        expect(is_int('42')).toBe(false); // строка
        expect(is_int(true)).toBe(false); // логическое значение
        expect(is_int(null)).toBe(false); // null
        expect(is_int(undefined)).toBe(false); // undefined
        expect(is_int({})).toBe(false); // объект
        expect(is_int([])).toBe(false); // массив
    });

    test('Возвращает false для специальных числовых значений', () => {
        expect(is_int(Infinity)).toBe(false); // бесконечность
        expect(is_int(-Infinity)).toBe(false); // отрицательная бесконечность
        expect(is_int(NaN)).toBe(false); // не число
    });
});
