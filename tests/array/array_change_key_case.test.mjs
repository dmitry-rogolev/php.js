import { test, expect } from '@jest/globals';
import { CASE_LOWER, CASE_UPPER } from '../../src/array/constants.mjs';
import { array_change_key_case } from '../../src/array.mjs';
import { TypePHPJSError, ValuePHPJSError } from '../../src/exceptions.mjs';

/**
 * https://onlinephp.io?s=s7EvyCjg5eLlKkssik8pzS3QSCwqSqyMT85IzEtPjc9OBTITi1M1opXcMouCS5QUbO0UDHUUlIJTk_3zUsBck1hNTWvKDNBRcHYMdo338Q93DaKWYaEBAUQaBjTBSEfBGOINAA%2C%2C&v=8.3.4
 */
test('array_change_key_case выбрасывает ошибку TypePHPJSError при передаче параметра с неверным типом.', () => {
    expect(() => array_change_key_case(false)).toThrow(TypePHPJSError);
    expect(() => array_change_key_case([], false)).toThrow(TypePHPJSError);
});

test('array_change_key_case выбрасывает ошибку ValuePHPJSError при передаче недопустимого значения константы.', () => {
    expect(() => array_change_key_case([], 2343)).toThrow(ValuePHPJSError);
});

test('array_change_key_case по умолчанию приводит ключи в нижний регистр.', () => {
    expect(array_change_key_case({ FirSt: 1, SecOnd: 4 })).toStrictEqual({
        first: 1,
        second: 4,
    });
});

test('array_change_key_case вторым параметром принимает константу регистра', () => {
    // Привидение к нижнему регистру
    expect(array_change_key_case({ FirSt: 1, SecOnd: 4 }, CASE_LOWER)).toStrictEqual({
        first: 1,
        second: 4,
    });

    // Привидение к верхнему регистру
    expect(array_change_key_case({ FirSt: 1, SecOnd: 4 }, CASE_UPPER)).toStrictEqual({
        FIRST: 1,
        SECOND: 4,
    });
});

test('array_change_key_case возвращает список без изменения.', () => {
    expect(array_change_key_case([1, 2, 3])).toStrictEqual([1, 2, 3]);
    expect(array_change_key_case({ 0: 1, 1: 2, 2: 3 })).toStrictEqual({
        0: 1,
        1: 2,
        2: 3,
    });
});
