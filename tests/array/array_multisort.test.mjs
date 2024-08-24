import { expect, test } from '@jest/globals';
import { array_column, array_multisort } from '../../src/array.mjs';
import { TypePHPJSError, ValuePHPJSError } from '../../src/exceptions.mjs';
import {
    SORT_ASC,
    SORT_DESC,
    SORT_FLAG_CASE,
    SORT_NATURAL,
    SORT_NUMERIC,
    SORT_STRING,
} from '../../src/array/constants.mjs';

// https://onlinephp.io?s=s7EvyCjg5eLl0tdXSCwqSqyMzy3NKckszi8q0UhLzClO1bTGKhfsHxQS7xjsrKMQHYtDSXSsjgI-I0DyCGOIVwlmBYcEefq5w7UBAA%2C%2C&v=8.2.20
test('array_multisort выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_multisort(false)).toThrow(TypePHPJSError);
    expect(() => array_multisort([], false)).toThrow(TypePHPJSError);
    expect(() => array_multisort([], SORT_ASC, false)).toThrow(TypePHPJSError);
    expect(() => array_multisort([], SORT_ASC, SORT_DESC)).toThrow(TypePHPJSError);
    expect(() => array_multisort([], SORT_STRING, SORT_NATURAL)).toThrow(TypePHPJSError);
});

// https://onlinephp.io?s=s7EvyCjg5eLl0tdXSCwqSqyMzy3NKckszi8q0YiO1VEwNAABTWteLmyy0YaxmtYA&v=8.2.20
test('array_multisort выбрасывает исключение ValuePHPJSError неверного значения параметра.', () => {
    expect(() => array_multisort([], 10000)).toThrow(ValuePHPJSError);
    expect(() => array_multisort([], SORT_ASC, 10000)).toThrow(ValuePHPJSError);
    expect(() => array_multisort([1, 2, 3], [1])).toThrow(ValuePHPJSError);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUkksKkqsVLBViDY00FEwNIARBrHWvFxgufjc0pySzOL8ohINiGJNa5DGgqLMvJL4IrgYAA%2C%2C&v=8.2.20
// Array
// (
//     [0] => 0
//     [1] => 10
//     [2] => 100
//     [3] => 100
// )
test('array_multisort сортирует список по умолчанию.', () => {
    let array = [10, 100, 100, 0];

    expect(array_multisort(array)).toBeTruthy();
    expect(array).toStrictEqual([0, 10, 100, 100]);

    array = { 0: 10, 1: 100, 2: 100, 3: 0 };

    expect(array_multisort(array)).toBeTruthy();
    expect(Object.keys(array)).toStrictEqual(['0', '1', '2', '3']);
    expect(Object.values(array)).toStrictEqual([0, 10, 100, 100]);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUkksKkqsVLBViDY00FEwNIARBrHWvFxgufjc0pySzOL8ohINiGIdhWD_oJB4x2BnTWuQEQVFmXkl8UVQWU1rAA%2C%2C&v=8.2.20
// Array
// (
//     [0] => 0
//     [1] => 10
//     [2] => 100
//     [3] => 100
// )
test('array_multisort сортирует список по возрастанию.', () => {
    let array = [10, 100, 100, 0];

    expect(array_multisort(array, SORT_ASC)).toBeTruthy();
    expect(array).toStrictEqual([0, 10, 100, 100]);

    array = { 0: 10, 1: 100, 2: 100, 3: 0 };

    expect(array_multisort(array, SORT_ASC)).toBeTruthy();
    expect(Object.keys(array)).toStrictEqual(['0', '1', '2', '3']);
    expect(Object.values(array)).toStrictEqual([0, 10, 100, 100]);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUkksKkqsVLBViDY00FEwNIARBrHWvFxgufjc0pySzOL8ohINiGIdhWD_oJB4F9dgZ01rkBkFRZl5JfFFUGlNawA%2C&v=8.2.20
// Array
// (
//     [0] => 100
//     [1] => 100
//     [2] => 10
//     [3] => 0
// )
test('array_multisort сортирует список по убыванию.', () => {
    let array = [10, 100, 100, 0];

    expect(array_multisort(array, SORT_DESC)).toBeTruthy();
    expect(array).toStrictEqual([100, 100, 10, 0]);

    array = { 0: 10, 1: 100, 2: 100, 3: 0 };

    expect(array_multisort(array, SORT_DESC)).toBeTruthy();
    expect(Object.keys(array)).toStrictEqual(['0', '1', '2', '3']);
    expect(Object.values(array)).toStrictEqual([100, 100, 10, 0]);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUkksKkqsVLBViDbVUTDUUdAFUQZA2khHwSDWmpcLLB-fW5pTklmcX1SiAdGgoxDsHxQS7xfq6xrk6axpDTKqoCgzryS-CKpC0xoA&v=8.2.20
// Array
// (
//     [0] => -5
//     [1] => -2
//     [2] => 0
//     [3] => 1
//     [4] => 5
//     [5] => 10
// )
test('array_multisort сортирует список как числа.', () => {
    let array = [5, 1, -5, 10, -2, 0];

    expect(array_multisort(array, SORT_NUMERIC)).toBeTruthy();
    expect(array).toStrictEqual([-5, -2, 0, 1, 5, 10]);

    array = { 0: 5, 1: 1, 2: -5, 3: 10, 4: -2, 5: 0 };

    expect(array_multisort(array, SORT_NUMERIC)).toBeTruthy();
    expect(Object.keys(array)).toStrictEqual(['0', '1', '2', '3', '4', '5']);
    expect(Object.values(array)).toStrictEqual([-5, -2, 0, 1, 5, 10]);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUkksKkqsVLBViDbVUTDUUdAFUQZA2khHwSDWmpcLLB-fW5pTklmcX1SiAdGgoxDsHxQSHxwS5OnnrmkNMqmgKDOvJL4IqkDTGgA%2C&v=8.2.20
// Array
// (
//     [0] => -2
//     [1] => -5
//     [2] => 0
//     [3] => 1
//     [4] => 10
//     [5] => 5
// )
test('array_multisort сортирует список как строки.', () => {
    let array = [5, 1, -5, 10, -2, 0];

    expect(array_multisort(array, SORT_STRING)).toBeTruthy();
    expect(array).toStrictEqual([-2, -5, 0, 1, 10, 5]);

    array = { 0: 5, 1: 1, 2: -5, 3: 10, 4: -2, 5: 0 };

    expect(array_multisort(array, SORT_STRING)).toBeTruthy();
    expect(Object.keys(array)).toStrictEqual(['0', '1', '2', '3', '4', '5']);
    expect(Object.values(array)).toStrictEqual([-2, -5, 0, 1, 10, 5]);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUkksKkqsVLBViFbPzE03NtbLKkhX11EAcQyR2QZIHIiiWGteLrDm-NzSnJLM4vyiEg2IaToKwf5BIfF-jiGhQY4-mtYgewqKMvNK4ougKjStAQ%2C%2C&v=8.2.20
// Array
// (
//     [0] => img1.jpg
//     [1] => img3.jpg
//     [2] => img10.jpg
//     [3] => img33.jpg
// )
test('array_multisort сортирует список, используя алгоритм "естественной сортировки".', () => {
    let array = ['img33.jpg', 'img1.jpg', 'img10.jpg', 'img3.jpg'];

    expect(array_multisort(array, SORT_NATURAL)).toBeTruthy();
    expect(array).toStrictEqual(['img1.jpg', 'img3.jpg', 'img10.jpg', 'img33.jpg']);

    array = { 0: 'img33.jpg', 1: 'img1.jpg', 2: 'img10.jpg', 3: 'img3.jpg' };

    expect(array_multisort(array, SORT_NATURAL)).toBeTruthy();
    expect(Object.keys(array)).toStrictEqual(['0', '1', '2', '3']);
    expect(Object.values(array)).toStrictEqual(['img1.jpg', 'img3.jpg', 'img10.jpg', 'img33.jpg']);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUkksKkqsVLBViFbPL0rMS081MlDXUYCxQUx_MNMYwTRUj7Xm5QLri88tzSnJLM4vKtGAGKSjEOwfFBLv5xgSGuToo1AD4br5OLrHOzsGu2pag-wsKMrMK4kvgmrRtAYA&v=8.2.20
// Array
// (
//     [0] => Orange1
//     [1] => orange2
//     [2] => Orange3
//     [3] => orange20
// )
test('array_multisort сортирует список, используя регистронезависимое естественное упорядочение.', () => {
    let array = ['orange20', 'orange2', 'Orange3', 'Orange1'];

    expect(array_multisort(array, SORT_NATURAL | SORT_FLAG_CASE)).toBeTruthy();
    expect(array).toStrictEqual(['Orange1', 'orange2', 'Orange3', 'orange20']);

    array = { 0: 'orange20', 1: 'orange2', 2: 'Orange3', 3: 'Orange1' };

    expect(array_multisort(array, SORT_NATURAL | SORT_FLAG_CASE)).toBeTruthy();
    expect(Object.keys(array)).toStrictEqual(['0', '1', '2', '3']);
    expect(Object.values(array)).toStrictEqual(['Orange1', 'orange2', 'Orange3', 'orange20']);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUkksKkqsVLBViFbPL0rMS081MlDXUYCxQUx_MNMYwTRUj7Xm5QLri88tzSnJLM4vKtGAGKSjEOwfFBIfHBLk6eeuUAPhufk4usc7Owa7alqDrCwoyswriS-C6tC0BgA%2C&v=8.2.20
// Array
// (
//     [0] => Orange1
//     [1] => orange2
//     [2] => orange20
//     [3] => Orange3
// )
test('array_multisort сортирует список, используя регистронезависимое строковое упорядочение.', () => {
    let array = ['orange20', 'orange2', 'Orange3', 'Orange1'];

    expect(array_multisort(array, SORT_STRING | SORT_FLAG_CASE)).toBeTruthy();
    expect(array).toStrictEqual(['Orange1', 'orange2', 'orange20', 'Orange3']);

    array = { 0: 'orange20', 1: 'orange2', 2: 'Orange3', 3: 'Orange1' };

    expect(array_multisort(array, SORT_STRING | SORT_FLAG_CASE)).toBeTruthy();
    expect(Object.keys(array)).toStrictEqual(['0', '1', '2', '3']);
    expect(Object.values(array)).toStrictEqual(['Orange1', 'orange2', 'orange20', 'Orange3']);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUkksKkqsVLBViFZQd1RXsLVTd00pTyxKUddRUHcC8RXUffKTs1NBfGcIPzgxKTMPxHeB8ENSgUaA-K7I-hVirXm5wIbH55bmlGQW5xeVaEBs0wTKFBRl5pXEF8FFAA%2C%2C&v=8.2.20
// Array
// (
//     [A] => Edward
//     [E] => Edward
//     [B] => Locke
//     [C] => Sabin
//     [D] => Terra
// )
test('array_multisort сортирует ассоциативный массив по умолчанию.', () => {
    const array = { A: 'Edward', B: 'Locke', C: 'Sabin', D: 'Terra', E: 'Edward' };

    expect(array_multisort(array)).toBeTruthy();
    expect(Object.keys(array)).toStrictEqual(['A', 'E', 'B', 'C', 'D']);
    expect(Object.values(array)).toStrictEqual(['Edward', 'Edward', 'Locke', 'Sabin', 'Terra']);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUkksKkqsVLBViFZQd1RXsLVTd00pTyxKUddRUHcC8RXUffKTs1NBfGcIPzgxKTMPxHeB8ENSgUaA-K7I-hVirXm5wIbH55bmlGQW5xeVaEBs01EI9g8KiXcMdtYEqikoyswriS-CymlaAwA%2C&v=8.2.20
// Array
// (
//     [A] => Edward
//     [E] => Edward
//     [B] => Locke
//     [C] => Sabin
//     [D] => Terra
// )
test('array_multisort сортирует ассоциативный массив по возрастанию.', () => {
    const array = { A: 'Edward', B: 'Locke', C: 'Sabin', D: 'Terra', E: 'Edward' };

    expect(array_multisort(array, SORT_ASC)).toBeTruthy();
    expect(Object.keys(array)).toStrictEqual(['A', 'E', 'B', 'C', 'D']);
    expect(Object.values(array)).toStrictEqual(['Edward', 'Edward', 'Locke', 'Sabin', 'Terra']);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUkksKkqsVLBViFZQd1RXsLVTd00pTyxKUddRUHcC8RXUffKTs1NBfGcIPzgxKTMPxHeB8ENSgUaA-K7I-hVirXm5wIbH55bmlGQW5xeVaEBs01EI9g8KiXdxDXbWBCoqKMrMK4kvgkpqWgMA&v=8.2.20
// Array
// (
//     [D] => Terra
//     [C] => Sabin
//     [B] => Locke
//     [A] => Edward
//     [E] => Edward
// )
test('array_multisort сортирует ассоциативный массив по убыванию.', () => {
    const array = { A: 'Edward', B: 'Locke', C: 'Sabin', D: 'Terra', E: 'Edward' };

    expect(array_multisort(array, SORT_DESC)).toBeTruthy();
    expect(Object.keys(array)).toStrictEqual(['D', 'C', 'B', 'A', 'E']);
    expect(Object.values(array)).toStrictEqual(['Terra', 'Sabin', 'Locke', 'Edward', 'Edward']);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUkksKkqsVLBViFZQd1RXsLVTd00pTyxKUddRUHcC8RXUffKTs1NBfGcIPzgxKTMPxHeB8ENSgUaA-K7I-hVirXm5wIbH55bmlGQW5xeVaEBs01EI9g8KifcL9XUN8nTWBKorKMrMK4kvgsprWgMA&v=8.2.20
// Array
// (
//     [A] => Edward
//     [B] => Locke
//     [C] => Sabin
//     [D] => Terra
//     [E] => Edward
// )
test('array_multisort сортирует ассоциативный массив как числа.', () => {
    const array = { A: 'Edward', B: 'Locke', C: 'Sabin', D: 'Terra', E: 'Edward' };

    expect(array_multisort(array, SORT_NUMERIC)).toBeTruthy();
    expect(Object.keys(array)).toStrictEqual(['A', 'B', 'C', 'D', 'E']);
    expect(Object.values(array)).toStrictEqual(['Edward', 'Locke', 'Sabin', 'Terra', 'Edward']);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUkksKkqsVLBViFZQd1RXsLVTd00pTyxKUddRUHcC8RXUffKTs1NBfGcIPzgxKTMPxHeB8ENSgUaA-K7I-hVirXm5wIbH55bmlGQW5xeVaEBs01EI9g8KiQ8OCfL0c9cEKisoyswriS-CSmtaAwA%2C&v=8.2.20
// Array
// (
//     [A] => Edward
//     [E] => Edward
//     [B] => Locke
//     [C] => Sabin
//     [D] => Terra
// )
test('array_multisort сортирует ассоциативный массив как строки.', () => {
    const array = { A: 'Edward', B: 'Locke', C: 'Sabin', D: 'Terra', E: 'Edward' };

    expect(array_multisort(array, SORT_STRING)).toBeTruthy();
    expect(Object.keys(array)).toStrictEqual(['A', 'E', 'B', 'C', 'D']);
    expect(Object.values(array)).toStrictEqual(['Edward', 'Edward', 'Locke', 'Sabin', 'Terra']);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUkksKkqsVLBViFZQd1RXsLVTUM_MTTc21ssqSFfXUVB3gosZwoScEUIGMDEXhFawkEKsNS8X2Oj43NKckszi_KISDYhdOgrB_kEh8X6OIaFBjj6aQHUFRZl5JfFFUHlNawA%2C&v=8.2.20
// Array
// (
//     [B] => img1.jpg
//     [D] => img3.jpg
//     [C] => img10.jpg
//     [A] => img33.jpg
// )
test('array_multisort сортирует ассоциативный массив, используя алгоритм "естественной сортировки".', () => {
    const array = { A: 'img33.jpg', B: 'img1.jpg', C: 'img10.jpg', D: 'img3.jpg' };

    expect(array_multisort(array, SORT_NATURAL)).toBeTruthy();
    expect(Object.keys(array)).toStrictEqual(['B', 'D', 'C', 'A']);
    expect(Object.values(array)).toStrictEqual(['img1.jpg', 'img3.jpg', 'img10.jpg', 'img33.jpg']);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUkksKkqsVLBViFZQd1RXsLVTUM8vSsxLTzUyUNdRUHdCEQKJOENE_MEixiARF2QRQ3WFWGteLrCp8bmlOSWZxflFJRoQa3QUgv2DQuL9HENCgxx9FGogXDcfR_d4Z8dgV02gxoKizLyS-CKoBk1rAA%2C%2C&v=8.2.20
// Array
// (
//     [D] => Orange1
//     [B] => orange2
//     [C] => Orange3
//     [A] => orange20
// )
test('array_multisort сортирует ассоциативный массив, используя регистронезависимое естественное упорядочение.', () => {
    const array = { A: 'orange20', B: 'orange2', C: 'Orange3', D: 'Orange1' };

    expect(array_multisort(array, SORT_NATURAL | SORT_FLAG_CASE)).toBeTruthy();
    expect(Object.keys(array)).toStrictEqual(['D', 'B', 'C', 'A']);
    expect(Object.values(array)).toStrictEqual(['Orange1', 'orange2', 'Orange3', 'orange20']);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUkksKkqsVLBViFZQd1RXsLVTUM8vSsxLTzUyUNdRUHdCEQKJOENE_MEixiARF2QRQ3WFWGteLrCp8bmlOSWZxflFJRoQa3QUgv2DQuKDQ4I8_dwVaiA8Nx9H93hnx2BXTaC-gqLMvJL4Iqh6TWsA&v=8.2.20
// Array
// (
//     [D] => Orange1
//     [B] => orange2
//     [A] => orange20
//     [C] => Orange3
// )
test('array_multisort сортирует ассоциативный массив, используя регистронезависимое строковое упорядочение.', () => {
    const array = { A: 'orange20', B: 'orange2', C: 'Orange3', D: 'Orange1' };

    expect(array_multisort(array, SORT_STRING | SORT_FLAG_CASE)).toBeTruthy();
    expect(Object.keys(array)).toStrictEqual(['D', 'B', 'A', 'C']);
    expect(Object.values(array)).toStrictEqual(['Orange1', 'orange2', 'orange20', 'Orange3']);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUkksKkqsVLBViDbVUTDUUdAFUQZA2khHwSDWmpcLLB-fW5pTklmcX1SiAdGgoxDsHxQS7-Ia7AxlBocEefq5awJ1FBRl5pXEF0FVgkQotQZiNpKd2KwBAA%2C%2C&v=8.2.20
// Array
// (
//     [0] => 5
//     [1] => 10
//     [2] => 1
//     [3] => 0
//     [4] => -5
//     [5] => -2
// )
test('array_multisort сортирует список, используя строковое упорядочение в обратном порядке.', () => {
    let array = [5, 1, -5, 10, -2, 0];

    expect(array_multisort(array, SORT_DESC, SORT_STRING)).toBeTruthy();
    expect(array).toStrictEqual([5, 10, 1, 0, -5, -2]);

    array = [5, 1, -5, 10, -2, 0];

    expect(array_multisort(array, SORT_STRING, SORT_DESC)).toBeTruthy();
    expect(array).toStrictEqual([5, 10, 1, 0, -5, -2]);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUkksKkqsVLBViFZQd1RXsLVTUHdNKU8sSlHXUVB3ggj45Cdnp4L4zhB-cGJSZh6I7wLhh6QCzQDxXVEMUIi15uUCGx-fW5pTklmcX1SiAbFPRyHYPygk3sU12BnKDA4J8vRz1wTqKCjKzCuJL4KqBIkMsCshTkNyMjZXAgA%2C&v=8.2.20
// Array
// (
//     [D] => Terra
//     [C] => Sabin
//     [B] => Locke
//     [A] => Edward
//     [E] => Edward
// )
test('array_multisort сортирует ассоциативный массив, используя строковое упорядочение в обратном порядке.', () => {
    let array = { A: 'Edward', B: 'Locke', C: 'Sabin', D: 'Terra', E: 'Edward' };

    expect(array_multisort(array, SORT_DESC, SORT_STRING)).toBeTruthy();
    expect(Object.keys(array)).toStrictEqual(['D', 'C', 'B', 'A', 'E']);
    expect(Object.values(array)).toStrictEqual(['Terra', 'Sabin', 'Locke', 'Edward', 'Edward']);

    array = { A: 'Edward', B: 'Locke', C: 'Sabin', D: 'Terra', E: 'Edward' };

    expect(array_multisort(array, SORT_STRING, SORT_DESC)).toBeTruthy();
    expect(Object.keys(array)).toStrictEqual(['D', 'C', 'B', 'A', 'E']);
    expect(Object.values(array)).toStrictEqual(['Terra', 'Sabin', 'Locke', 'Edward', 'Edward']);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUkksMlSwVUgsKkqs1DA00FEwNIARBprWYHkjhLyOgrGOgpGOgglICiwWn1uaU5JZnF9UogEySkcBpAEky8tVUJSZVxJfBBYHiSDxgSoA&v=8.2.20
// Array
// (
//     [0] => 0
//     [1] => 10
//     [2] => 100
//     [3] => 100
// )
// Array
// (
//     [0] => 4
//     [1] => 1
//     [2] => 2
//     [3] => 3
// )
test('array_multisort сортирует несколько массивов.', () => {
    const ar1 = [10, 100, 100, 0];
    const ar2 = [1, 3, 2, 4];

    expect(array_multisort(ar1, ar2)).toBeTruthy();
    expect(ar1).toStrictEqual([0, 10, 100, 100]);
    expect(ar2).toStrictEqual([4, 1, 2, 3]);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUkksUrBVSCwqSqzU4OVSAAIIW8nQQElHwdAQiA0MoIRSopKmDrIioKwRUNgIqNIYqEaTl0vTmpcLLBefW5pTklmcX1QCNRZoUbRBrI5CsH9QSLxjsDOUFRwS5OnnroNQYwhT4xfq6xrkCVPn4hrsDDG-LLEoPqU0t0ADqFrTGgA%2C&v=8.2.20
// array(2) {
//     [0]=>
//     array(5) {
//         [0]=>
//         string(2) "10"
//         [1]=>
//         int(100)
//         [2]=>
//         int(100)
//         [3]=>
//         int(11)
//         [4]=>
//         string(1) "a"
//     }
//     [1]=>
//     array(5) {
//         [0]=>
//         int(1)
//         [1]=>
//         int(3)
//         [2]=>
//         string(1) "2"
//         [3]=>
//         int(2)
//         [4]=>
//         int(1)
//     }
// }
test('array_multisort сортирует многомерный массив.', () => {
    const ar = [
        ['10', 11, 100, 100, 'a'],
        [1, 2, '2', 3, 1],
    ];

    expect(
        array_multisort(ar[0], SORT_ASC, SORT_STRING, ar[1], SORT_NUMERIC, SORT_DESC),
    ).toBeTruthy();
    expect(ar).toStrictEqual([
        ['10', 100, 100, 11, 'a'],
        [1, 3, '2', 2, 1],
    ]);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUklJLEmMjlWwVUgsKkqs1FAvy88pzU1VV7C1UzAz11FQT03JLMnMzwMLGGla49dhYYamw5CgDlM0HWaEdFhaUOwqgnZg-NwcpAOoB6JGAaYpPhnEz9MAmwXUAjUCbDxUOy6lMNMhBkOU5JbmlGQW5xeVaEAt0lEI9g8KiXdxDXbWUYCZCBV0BIuBTIMYUVCUmVcSX6QBFQIA&v=8.2.20
// Array
// (
//     [0] => Array
//         (
//             [volume] => 98
//             [edition] => 2
//         )

//     [1] => Array
//         (
//             [volume] => 86
//             [edition] => 1
//         )

//     [2] => Array
//         (
//             [volume] => 86
//             [edition] => 6
//         )

//     [3] => Array
//         (
//             [volume] => 85
//             [edition] => 6
//         )

//     [4] => Array
//         (
//             [volume] => 67
//             [edition] => 2
//         )

//     [5] => Array
//         (
//             [volume] => 67
//             [edition] => 7
//         )
// )
test('array_multisort сортирует результат из базы данных.', () => {
    const data = [
        { volume: 67, edition: 2 },
        { volume: 86, edition: 1 },
        { volume: 85, edition: 6 },
        { volume: 98, edition: 2 },
        { volume: 86, edition: 6 },
        { volume: 67, edition: 7 },
    ];

    const volume = array_column(data, 'volume');
    const edition = array_column(data, 'edition');

    expect(array_multisort(volume, SORT_DESC, edition, SORT_ASC, data)).toBeTruthy();
    expect(data).toStrictEqual([
        { volume: 98, edition: 2 },
        { volume: 86, edition: 1 },
        { volume: 86, edition: 6 },
        { volume: 85, edition: 6 },
        { volume: 67, edition: 2 },
        { volume: 67, edition: 7 },
    ]);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUkksKkqsNFSwVYg21FEw0lFAkLHWMGkjhLSxjoKJjoKpjoIZSJqXCywfn1uaU5JZnF9UogE1T0cBqlMTrKqgKDOvJL4IJgsSRBUCqgMA&v=8.2.20
// Array
// (
//     [0] => 1
//     [1] => 1
//     [2] => 1
//     [3] => 2
//     [4] => 2
//     [5] => 2
// )
// Array
// (
//     [0] => 1
//     [1] => 3
//     [2] => 5
//     [3] => 2
//     [4] => 4
//     [5] => 6
// )
test('Пример #1 из источника: https://locutus.io/php/array/array_multisort/', () => {
    const array1 = [1, 2, 1, 2, 1, 2];
    const array2 = [1, 2, 3, 4, 5, 6];
    expect(array_multisort(array1, array2)).toBeTruthy();
    expect(array1).toStrictEqual([1, 1, 1, 2, 2, 2]);
    expect(array2).toStrictEqual([1, 3, 5, 2, 4, 6]);
});

// https://onlinephp.io?s=Xc_RCoIwFAbge8F3OBfBCnwDs7CUiLLACV1EyNKly3JyXERvn9OI1d3-_8B3dqbzpmxsy7ZGWcmQZYpjCx4cgfgEvBmQMH8yzIkDZDEUW5lVXOflkCk7i1rnYMgJR2Q6hz8AnNxuyVWef_kDQxQSDT8pBb8YfiTryuAjVnBD39SiKNWg21aHsVd6f9yUaCWqsXGUA3QfJ2kQ0uXnSZN4vVs50H_q0_l_00nPNihqlaLJ6cG31sDEfQM%2C&v=8.2.20
// Array
// (
//     [D] => Terra
//     [C] => Sabin
//     [B] => Locke
//     [E] => Edward
//     [A] => Edward
// )
// Array
// (
//     [D] => Mage
//     [C] => Monk
//     [B] => Thief
//     [E] => Knight
//     [A] => Warrior
// )
test('Пример #2 из источника: https://locutus.io/php/array/array_multisort/', () => {
    const characters = { A: 'Edward', B: 'Locke', C: 'Sabin', D: 'Terra', E: 'Edward' };
    const jobs = { A: 'Warrior', B: 'Thief', C: 'Monk', D: 'Mage', E: 'Knight' };

    expect(
        array_multisort(characters, SORT_DESC, SORT_STRING, jobs, SORT_ASC, SORT_STRING),
    ).toBeTruthy();

    expect(Object.keys(characters)).toStrictEqual(['D', 'C', 'B', 'E', 'A']);
    expect(Object.values(characters)).toStrictEqual([
        'Terra',
        'Sabin',
        'Locke',
        'Edward',
        'Edward',
    ]);

    expect(Object.keys(jobs)).toStrictEqual(['D', 'C', 'B', 'E', 'A']);
    expect(Object.values(jobs)).toStrictEqual(['Mage', 'Monk', 'Thief', 'Knight', 'Warrior']);
});

// https://onlinephp.io?s=jY9BC4JAEIXvgv9hDoEFe6isICoiTKLCArVThCy4kaCrzG4H_32OiRldOu3HezNv3i7XxaMwDdPopVxpyTOhYAVXy-GoBVoMrE3MM0Xg5RJzQRSW6dvzeJyoXBIehZQiLj8bt0UVek-wm3ogopFD_qi3_hDorbMKFCqJhdQUZc8ZzBhMGYyGDCYM7ArHNGcaHJGXUfZMdVUOdb_TgkFw9sNo6wZOg0Ho7087Bp__N8bmd6Rt0Bini-f6e2dQXy0wkTrC7jUyWrnN_1LbSFJf&v=8.2.20
// Array
// (
//     [0] => John
//     [1] => John
//     [2] => John
//     [3] => John
//     [4] => James
//     [5] => James
//     [6] => James
// )
// Array
// (
//     [0] => Adams
//     [1] => Adams
//     [2] => Kennedy
//     [3] => Tyler
//     [4] => Carter
//     [5] => Madison
//     [6] => Monroe
// )
// Array
// (
//     [0] => 2
//     [1] => 6
//     [2] => 35
//     [3] => 10
//     [4] => 39
//     [5] => 4
//     [6] => 5
// )
test('Пример #3 из источника: https://locutus.io/php/array/array_multisort/', () => {
    const lastnames = ['Carter', 'Adams', 'Monroe', 'Tyler', 'Madison', 'Kennedy', 'Adams'];
    const firstnames = ['James', 'John', 'James', 'John', 'James', 'John', 'John'];
    const president = [39, 6, 5, 10, 4, 35, 2];

    expect(
        array_multisort(
            firstnames,
            SORT_DESC,
            SORT_STRING,
            lastnames,
            SORT_ASC,
            SORT_STRING,
            president,
            SORT_NUMERIC,
        ),
    ).toBeTruthy();

    expect(firstnames).toStrictEqual(['John', 'John', 'John', 'John', 'James', 'James', 'James']);
    expect(lastnames).toStrictEqual([
        'Adams',
        'Adams',
        'Kennedy',
        'Tyler',
        'Carter',
        'Madison',
        'Monroe',
    ]);
    expect(president).toStrictEqual([2, 6, 35, 10, 39, 4, 5]);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUkksKkqsNFSwVYhWLyjKTylNLvFMKY6OVddRUI9Xj7WGqTDCUGFraW5ubGFqamQJVmtraGpgZGlmam5hYWxiDtbJywXWGp9bmlOSWZxfVKIBtU1HIdg_KCTeMdhZRwFqvCZYfUFRZl5JfBFMHUgQVQisDgA%2C&v=8.2.20
// Array
// (
//     [0] => _
//     [1] => productIds[]
// )
// Array
// (
//     [0] => _=1502965788347
//     [1] => productIds[]=977385529
// )
test('Пример #4 из источника: https://locutus.io/php/array/array_multisort/', () => {
    const array1 = ['productIds[]', '_'];
    const array2 = ['productIds[]=977385529', '_=1502965788347'];

    expect(array_multisort(array1, SORT_ASC, array2)).toBeTruthy();

    expect(array1).toStrictEqual(['_', 'productIds[]']);
    expect(array2).toStrictEqual(['_=1502965788347', 'productIds[]=977385529']);
});
