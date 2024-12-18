import { expect, test } from '@jest/globals';
import is_float from '../../src/variables/is_float.mjs';

describe('is_float', () => {
    // Тесты для чисел с плавающей точкой
    describe('Числа с плавающей точкой', () => {
        test('Должно возвращать true для положительных дробных чисел', () => {
            expect(is_float(3.14)).toBe(true);
        });

        test('Должно возвращать true для отрицательных дробных чисел', () => {
            expect(is_float(-0.5)).toBe(true);
        });

        test('Должно возвращать true для дробных чисел, полученных в результате вычислений', () => {
            expect(is_float(0.1 + 0.2)).toBe(true); // Результат из-за особенностей работы с плавающей точкой
        });
    });

    // Тесты для целых чисел
    describe('Целые числа', () => {
        test('Должно возвращать false для нуля', () => {
            expect(is_float(0)).toBe(false);
        });

        test('Должно возвращать false для положительных целых чисел', () => {
            expect(is_float(42)).toBe(false);
        });

        test('Должно возвращать false для отрицательных целых чисел', () => {
            expect(is_float(-100)).toBe(false);
        });
    });

    // Тесты для нечисловых значений
    describe('Нечисловые значения', () => {
        test('Должно возвращать false для строки', () => {
            expect(is_float('3.14')).toBe(false);
        });

        test('Должно возвращать false для NaN', () => {
            expect(is_float(NaN)).toBe(false);
        });

        test('Должно возвращать false для null', () => {
            expect(is_float(null)).toBe(false);
        });

        test('Должно возвращать false для undefined', () => {
            expect(is_float(undefined)).toBe(false);
        });

        test('Должно возвращать false для булевых значений', () => {
            expect(is_float(true)).toBe(false);
            expect(is_float(false)).toBe(false);
        });

        test('Должно возвращать false для объектов', () => {
            expect(is_float({})).toBe(false);
        });

        test('Должно возвращать false для массивов', () => {
            expect(is_float([])).toBe(false);
        });
    });

    // Тесты для специальных значений
    describe('Специальные значения', () => {
        test('Должно возвращать false для Infinity', () => {
            expect(is_float(Infinity)).toBe(false);
        });

        test('Должно возвращать false для -Infinity', () => {
            expect(is_float(-Infinity)).toBe(false);
        });
    });
});
