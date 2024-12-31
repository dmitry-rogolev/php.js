import { expect, test, describe } from '@jest/globals';
import { TypePHPJSError } from '../../src/exceptions.mjs';
import { to_integer } from '../../src/variables.mjs';

describe('Функция to_integer', () => {
    test('Должна возвращать целое число для строки', () => {
        expect(to_integer('123')).toBe(123);
    });

    test('Должна возвращать целое число для числа с плавающей точкой', () => {
        expect(to_integer(123.45)).toBe(123);
    });

    test('Должна возвращать 1 для true и 0 для false', () => {
        expect(to_integer(true)).toBe(1);
        expect(to_integer(false)).toBe(0);
    });

    test('Должна возвращать 0 для null и undefined', () => {
        expect(to_integer(null)).toBe(0);
        expect(to_integer(undefined)).toBe(0);
    });

    test('Должна возвращать 0 для нечисловых строк', () => {
        expect(to_integer('example')).toBe(0);
    });

    test('Должна возвращать целое число для строки с основанием системы счисления', () => {
        expect(to_integer('10', 2)).toBe(2);
        expect(to_integer('A', 16)).toBe(10);
        expect(to_integer('7', 8)).toBe(7);
    });

    test('Должна возвращать целое число для строки с основанием системы счисления 2', () => {
        expect(to_integer('1010', 2)).toBe(10);
    });

    test('Должна возвращать целое число для строки с основанием системы счисления 16', () => {
        expect(to_integer('A', 16)).toBe(10);
    });

    test('Должна возвращать целое число для строки с основанием системы счисления 8', () => {
        expect(to_integer('7', 8)).toBe(7);
    });

    test('Должна выбрасывать исключение для неверного значения параметра base', () => {
        expect(() => to_integer('123', 'invalid')).toThrow(TypePHPJSError);
    });
});
