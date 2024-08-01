import { expect, test } from '@jest/globals';
import { TypePHPJSError } from '../../src/exceptions.mjs';
import { array_product } from '../../src/array.mjs';

test('array_product выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_product(false)).toThrow(TypePHPJSError);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUklUsFVILCpKrNQw0lEw0VEw01Gw0LTm5UpNzshXUCooyk8pTS7RSNQEKlNS0IMojYcJqwDF9RSUYvKUMHWAzdTErg8uCdUMAA%2C%2C&v=8.2.20
test('array_product вычисляет произведение значений массива.', () => {
    expect(array_product([2, 4, 6, 8])).toBe(384);
    expect(array_product([])).toBe(1);
    expect(array_product({ foo: 5, bar: 2 })).toBe(10);
});
