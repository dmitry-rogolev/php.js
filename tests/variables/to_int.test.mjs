import { expect, test, describe } from '@jest/globals';
import { TypePHPJSError } from '../../src/exceptions.mjs';
import { to_int } from '../../src/variables.mjs';

describe('Функция to_int', () => {
    test('Должна возвращать целое число для строки', () => {
        expect(to_int('123')).toBe(123);
    });

    test('Должна возвращать целое число для числа с плавающей точкой', () => {
        expect(to_int(123.45)).toBe(123);
    });

    test('Должна возвращать 1 для true и 0 для false', () => {
        expect(to_int(true)).toBe(1);
        expect(to_int(false)).toBe(0);
    });

    test('Должна возвращать 0 для null и undefined', () => {
        expect(to_int(null)).toBe(0);
        expect(to_int(undefined)).toBe(0);
    });

    test('Должна возвращать 0 для нечисловых строк', () => {
        expect(to_int('example')).toBe(0);
    });

    test('Должна возвращать целое число для строки с основанием системы счисления', () => {
        expect(to_int('10', 2)).toBe(2);
        expect(to_int('A', 16)).toBe(10);
        expect(to_int('7', 8)).toBe(7);
    });

    test('Должна возвращать целое число для строки с основанием системы счисления 2', () => {
        expect(to_int('1010', 2)).toBe(10);
    });

    test('Должна возвращать целое число для строки с основанием системы счисления 16', () => {
        expect(to_int('A', 16)).toBe(10);
    });

    test('Должна возвращать целое число для строки с основанием системы счисления 8', () => {
        expect(to_int('7', 8)).toBe(7);
    });

    test('Должна выбрасывать исключение для неверного значения параметра base', () => {
        expect(() => to_int('123', 'invalid')).toThrow(TypePHPJSError);
    });
});
