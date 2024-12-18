import { expect, test } from '@jest/globals';
import { is_double } from '../../src/variables.mjs';

describe('Функция is_double', () => {
    test('должна возвращать true для чисел с плавающей точкой', () => {
        expect(is_double(3.14)).toBe(true); // положительное число с плавающей точкой
        expect(is_double(-0.001)).toBe(true); // отрицательное число с плавающей точкой
    });

    test('должна возвращать false для целых чисел', () => {
        expect(is_double(2)).toBe(false); // целое положительное число
        expect(is_double(0)).toBe(false); // ноль
        expect(is_double(-5)).toBe(false); // целое отрицательное число
    });

    test('должна возвращать false для NaN', () => {
        expect(is_double(NaN)).toBe(false); // NaN
    });

    test('должна возвращать false для строк', () => {
        expect(is_double('3.14')).toBe(false); // строка
        expect(is_double('test')).toBe(false); // строка без чисел
    });

    test('должна возвращать false для булевых значений', () => {
        expect(is_double(true)).toBe(false); // булево значение true
        expect(is_double(false)).toBe(false); // булево значение false
    });

    test('должна возвращать false для null и undefined', () => {
        expect(is_double(null)).toBe(false); // null
        expect(is_double(undefined)).toBe(false); // undefined
    });

    test('должна возвращать false для объектов и массивов', () => {
        expect(is_double({})).toBe(false); // объект
        expect(is_double([])).toBe(false); // массив
    });
});
