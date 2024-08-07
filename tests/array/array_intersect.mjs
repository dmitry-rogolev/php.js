import { expect, test } from '@jest/globals';
import { TypePHPJSError } from '../../src/exceptions.mjs';
import { array_intersect } from '../../src/array.mjs';

test('array_intersect выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_intersect(false)).toThrow(TypePHPJSError);
    expect(() => array_intersect([], false)).toThrow(TypePHPJSError);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUkksKkqsNFSwVQAzNJQSlRRs7RSU0otSU_OUdBSUilJTQFRSTmmqkqY1TIMRQkMSmobK1Jyc_HKYVrCWotTi0pwSmJb4zLyS1KLi1OQSDajtOgpQU0GqC4qA8vFFGlBdmtYA&v=8.2.20
test('array_intersect вычисляет пересечение массивов.', () => {
    const array1 = { a: 'green', 0: 'red', 1: 'blue' };
    const array2 = { b: 'green', 0: 'yellow', 1: 'red' };

    expect(array_intersect(array1, array2)).toStrictEqual({ a: 'green', 0: 'red' });
});
