import { expect, test, describe } from '@jest/globals';
import { to_double } from '../../src/variables.mjs';

describe('Функция to_double', () => {
    test('Должна возвращать число с плавающей точкой для строки', () => {
        expect(to_double('123.45')).toBe(123.45);
    });

    test('Должна возвращать число с плавающей точкой для целого числа', () => {
        expect(to_double(123)).toBe(123.0);
    });

    test('Должна возвращать 1 для true и 0 для false', () => {
        expect(to_double(true)).toBe(1.0);
        expect(to_double(false)).toBe(0.0);
    });

    test('Должна возвращать 0 для null и undefined', () => {
        expect(to_double(null)).toBe(0.0);
        expect(to_double(undefined)).toBe(0.0);
    });

    test('Должна возвращать 0 для нечисловых строк', () => {
        expect(to_double('example')).toBe(0.0);
    });
});
