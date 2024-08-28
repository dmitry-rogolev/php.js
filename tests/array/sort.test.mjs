import { expect, test } from '@jest/globals';
import { sort } from '../../src/array.mjs';
import { TypePHPJSError, ValuePHPJSError } from '../../src/exceptions.mjs';
import {
    SORT_FLAG_CASE,
    SORT_NATURAL,
    SORT_NUMERIC,
    SORT_STRING,
} from '../../src/array/constants.mjs';

test('sort выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => sort(false)).toThrow(TypePHPJSError);
    expect(() => sort([], false)).toThrow(TypePHPJSError);
});

test('sort выбрасывает исключение ValuePHPJSError при передаче неверной константы вторым параметром.', () => {
    expect(() => sort([], 100000)).toThrow(ValuePHPJSError);
});

// https://onlinephp.io?s=NY7RCsIwDEXfC_2HS-jDBrIf0OmHOB_iyKxY29JOYYj_bus0ebknnITsDtFGrbQyU3pc54wenBIvDTm5B08bUEjsL1LTmX3pmjhGJ9Rutcohzc1vufIUkvBo8Z-BM8xNFvR7mCe7Fi-tUEpGG0CrdCR0q9WBTuWHLxe78uCp3H1_AA%2C%2C&v=8.2.20
test('sort сортирует массив по возрастанию.', () => {
    const array = ['lemon', 'orange', 'banana', 'apple'];
    expect(sort(array)).toBeTruthy();
    expect(array).toStrictEqual(['apple', 'banana', 'lemon', 'orange']);
});

test('sort сортирует массив как числа.', () => {
    const array = [5, 1, -5, 10, -2, 0];
    expect(sort(array, SORT_NUMERIC)).toBeTruthy();
    expect(array).toStrictEqual([-5, -2, 0, 1, 5, 10]);
});

test('sort сортирует массив как строки.', () => {
    const array = [5, 1, -5, 10, -2, 0];
    expect(sort(array, SORT_STRING)).toBeTruthy();
    expect(array).toStrictEqual([-2, -5, 0, 1, 10, 5]);
});

test('sort сортирует массив, используя алгоритм "естественной сортировки".', () => {
    const array = ['img33.jpg', 'img1.jpg', 'img10.jpg', 'img3.jpg'];
    expect(sort(array, SORT_NATURAL)).toBeTruthy();
    expect(array).toStrictEqual(['img1.jpg', 'img3.jpg', 'img10.jpg', 'img33.jpg']);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUkkrKs0sKVawVUgsKkqs1ODlUgACJf-ixLz0VEMlHQWlfDDTCMSEiBojiRoo8XJpWvNyFecXlWhAzdJRCPYPCon3cwwJDXL0UaiBcN18HN3jnR2DXUHK0_KLUhOTMxRgWhQSixVUslMrFWztFFTKEnM0FaohDklNzshXUIIoilZS0IOo0lNQigW6GMwHqgbxY_KUgObWAgA%2C&v=8.2.20
test('sort с регистронезависимым естественным упорядочением.', () => {
    const array = ['orange20', 'orange2', 'Orange3', 'Orange1'];
    expect(sort(array, SORT_NATURAL | SORT_FLAG_CASE)).toBeTruthy();
    expect(array).toStrictEqual(['Orange1', 'orange2', 'Orange3', 'orange20']);
});

test('sort с регистронезависимым строковым упорядочением.', () => {
    const array = ['orange20', 'orange2', 'Orange3', 'Orange1'];
    expect(sort(array, SORT_STRING | SORT_FLAG_CASE)).toBeTruthy();
    expect(array).toStrictEqual(['Orange1', 'orange2', 'orange20', 'Orange3']);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUkksKkqsVLBViFZQT8vPV1ewtVMw1lFQT0osArONwOwqMNsEzM4Dsw0VYq1B-ovzi0o0IIZoggUKijLzSuKLkMQA&v=8.2.20
// Array
// (
//     [0] => 1
//     [1] => 2
//     [2] => 3
//     [3] => 4
// )
test('usort сбрасывает ключи ассоциативного массива.', () => {
    const array = { foo: 3, bar: 2, baz: 4, ban: 1 };

    expect(sort(array)).toBeTruthy();
    expect(array).toStrictEqual({ 0: 1, 1: 2, 2: 3, 3: 4 });
});
