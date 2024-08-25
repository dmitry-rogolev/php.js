import { expect, test } from '@jest/globals';
import { rsort } from '../../src/array.mjs';
import { TypePHPJSError, ValuePHPJSError } from '../../src/exceptions.mjs';
import {
    SORT_FLAG_CASE,
    SORT_NATURAL,
    SORT_NUMERIC,
    SORT_STRING,
} from '../../src/array/constants.mjs';

test('rsort выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => rsort(false)).toThrow(TypePHPJSError);
    expect(() => rsort([], false)).toThrow(TypePHPJSError);
});

test('rsort выбрасывает исключение ValuePHPJSError при передаче неверной константы вторым параметром.', () => {
    expect(() => rsort([], 100000)).toThrow(ValuePHPJSError);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUkksKkqsVLBViFbPSc3Nz1PXUVDPL0rMS08FsZIS84AQxEosKMhJVY-1BukpKs4vKtGA6NQEixQUZeaVxBchiQEA&v=8.2.20
// Array
// (
//     [0] => orange
//     [1] => lemon
//     [2] => banana
//     [3] => apple
// )
test('rsort сортирует массив по убыванию.', () => {
    const array = ['lemon', 'orange', 'banana', 'apple'];
    expect(rsort(array)).toBeTruthy();
    expect(array).toStrictEqual(['orange', 'lemon', 'banana', 'apple']);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUkksKkqsVLBViDbVUTDUUdAFUQZA2khHwSDWGqSkqDi_qEQDolBHIdg_KCTeL9TXNcjTWRMsX1CUmVcSXwRVARIDAA%2C%2C&v=8.2.20
// Array
// (
//     [0] => 10
//     [1] => 5
//     [2] => 1
//     [3] => 0
//     [4] => -2
//     [5] => -5
// )
test('rsort сортирует массив как числа.', () => {
    const array = [5, 1, -5, 10, -2, 0];
    expect(rsort(array, SORT_NUMERIC)).toBeTruthy();
    expect(array).toStrictEqual([10, 5, 1, 0, -2, -5]);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUkksKkqsVLBViDbVUTDUUdAFUQZA2khHwSDWGqSkqDi_qEQDolBHIdg_KCQ-OCTI089dEyxdUJSZVxJfBFUAEgMA&v=8.2.20
// Array
// (
//     [0] => 5
//     [1] => 10
//     [2] => 1
//     [3] => 0
//     [4] => -5
//     [5] => -2
// )
test('rsort сортирует массив как строки.', () => {
    const array = [5, 1, -5, 10, -2, 0];
    expect(rsort(array, SORT_STRING)).toBeTruthy();
    expect(array).toStrictEqual([5, 10, 1, 0, -5, -2]);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUkksKkqsVLBViFbPzE03NtbLKkhX11EAcQyR2QZIHIiiWGuQ_qLi_KISDYgpOgrB_kEh8X6OIaFBjj6aYPmCosy8kvgiqAqQGAA%2C&v=8.2.20
// Array
// (
//     [0] => img33.jpg
//     [1] => img10.jpg
//     [2] => img3.jpg
//     [3] => img1.jpg
// )
test('rsort сортирует массив, используя алгоритм "естественной сортировки".', () => {
    const array = ['img33.jpg', 'img1.jpg', 'img10.jpg', 'img3.jpg'];
    expect(rsort(array, SORT_NATURAL)).toBeTruthy();
    expect(array).toStrictEqual(['img33.jpg', 'img10.jpg', 'img3.jpg', 'img1.jpg']);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUkksKkqsVLBViFbPL0rMS081MlDXUYCxQUx_MNMYwTRUj7UGaS0qzi8q0YAYoKMQ7B8UEu_nGBIa5OijUAPhuvk4usc7Owa7aoI1FBRl5pXEF0G1gMQA&v=8.2.20
// Array
// (
//     [0] => orange20
//     [1] => Orange3
//     [2] => orange2
//     [3] => Orange1
// )
test('rsort с регистронезависимым естественным упорядочением.', () => {
    const array = ['orange20', 'orange2', 'Orange3', 'Orange1'];
    expect(rsort(array, SORT_NATURAL | SORT_FLAG_CASE)).toBeTruthy();
    expect(array).toStrictEqual(['orange20', 'Orange3', 'orange2', 'Orange1']);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUkksKkqsVLBViFbPL0rMS081MlDXUYCxQUx_MNMYwTRUj7UGaS0qzi8q0YAYoKMQ7B8UEh8cEuTp565QA-G5-Ti6xzs7BrtqgtUXFGXmlcQXQXWAxAA%2C&v=8.2.20
// Array
// (
//     [0] => Orange3
//     [1] => orange20
//     [2] => orange2
//     [3] => Orange1
// )
test('rsort с регистронезависимым строковым упорядочением.', () => {
    const array = ['orange20', 'orange2', 'Orange3', 'Orange1'];
    expect(rsort(array, SORT_STRING | SORT_FLAG_CASE)).toBeTruthy();
    expect(array).toStrictEqual(['Orange3', 'orange20', 'orange2', 'Orange1']);
});
