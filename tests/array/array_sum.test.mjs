import { expect, test } from '@jest/globals';
import { array_sum } from '../../src/array.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';

test('array_sum выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_sum(false)).toThrow(TypePHPJSError);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUklUsFVILCpKrNQw0lEw0VEw01Gw0LTm5UpNzshXUCouzdVI1AQqUVLQgyiLBwmpAMX0FJRi8pSswYYkwQ1RSlRSsLVTMNQDmqaUBGYb6RkD2clgtrGeCarhSVgMT4IbDgA%2C&v=8.2.20
test('array_sum вычисляет сумму значений массива.', () => {
    expect(array_sum([2, 4, 6, 8])).toBe(20);
    expect(array_sum({ a: 1.2, b: 2.3, c: 3.4 })).toBe(6.9);
});
