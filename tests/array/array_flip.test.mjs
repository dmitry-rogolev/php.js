import { expect, test } from '@jest/globals';
import { array_flip } from '../../src/array.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';

test('array_flip выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_flip(false)).toThrow(TypePHPJSError);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUsnMKygtUbBVSCwqSqzUUMovSsxLTy1W0lFQSiwoyIGwClITi4qVNK2BytNyMgsKUlNgGuJBfA2IISB5Xq6Cosy8kvgiDZhKiCi6NYlKCrZ2CoZAs5PgrGQwy4h8awA%2C&v=8.2.20
test('array_flip меняет местами ключи с их значениями в массиве.', () => {
    expect(array_flip(['oranges', 'apples', 'pears'])).toStrictEqual({
        oranges: '0',
        apples: '1',
        pears: '2',
    });

    expect(array_flip({ a: 1, b: 1, c: 2 })).toStrictEqual({
        1: 'b',
        2: 'c',
    });
});
