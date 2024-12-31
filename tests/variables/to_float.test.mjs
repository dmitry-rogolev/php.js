import { expect, test, describe } from '@jest/globals';
import { to_float } from '../../src/variables.mjs';

describe('Функция to_float', () => {
    test('Должна возвращать число с плавающей точкой для строки', () => {
        expect(to_float('123.45')).toBe(123.45);
    });

    test('Должна возвращать число с плавающей точкой для целого числа', () => {
        expect(to_float(123)).toBe(123.0);
    });

    test('Должна возвращать 1 для true и 0 для false', () => {
        expect(to_float(true)).toBe(1.0);
        expect(to_float(false)).toBe(0.0);
    });

    test('Должна возвращать 0 для null и undefined', () => {
        expect(to_float(null)).toBe(0.0);
        expect(to_float(undefined)).toBe(0.0);
    });

    test('Должна возвращать 0 для нечисловых строк', () => {
        expect(to_float('example')).toBe(0.0);
    });
});
