import { expect, test } from '@jest/globals';
import { array_unique } from '../../src/array.mjs';
import { TypePHPJSError, ValuePHPJSError } from '../../src/exceptions.mjs';

test('array_unique выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_unique(false)).toThrow(TypePHPJSError);
    expect(() => array_unique([], false)).toThrow(TypePHPJSError);
});

test('array_unique выбрасывает исключение ValuePHPJSError при передаче вторым параметром неверного значения константы.', () => {
    expect(() => array_unique([], 1000)).toThrow(ValuePHPJSError);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUsnMKygtUbBVSCwqSqzUUEpUUrC1U1BKL0pNzVPSUVAqSk0BUUlowkk5pakwaU1roDFFqcWlOXBz4kvzMgtLUzUgpoMUFBRl5pXEF2lAFYKEMCw3ARpoAjLVGEgAOcZgJlHGlyUWxaeU5hYgzAcA&v=8.2.20
test('array_unique убирает повторяющиеся значения из массива.', () => {
    expect(array_unique({ a: 'green', 0: 'red', b: 'green', 1: 'blue', 2: 'red' })).toStrictEqual({
        a: 'green',
        0: 'red',
        1: 'blue',
    });

    expect(array_unique([4, '4', '3', 4, 3, '3'])).toStrictEqual({ 0: 4, 2: '3' });
});
