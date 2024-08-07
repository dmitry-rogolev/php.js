import { expect, test } from '@jest/globals';
import { TypePHPJSError } from '../../src/exceptions.mjs';
import { array_intersect_assoc } from '../../src/array.mjs';

test('array_intersect_assoc выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_intersect_assoc(false)).toThrow(TypePHPJSError);
    expect(() => array_intersect_assoc([], false)).toThrow(TypePHPJSError);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUkksKkqsNFSwVQAzNJQSlRRs7RSU0otSU_OUdBSUkiD8pKL8cjA_GcrPKU0FcYtSU5Q0rWHmGBE0pzI1Jye_HCyAbkJRanFpTkk8WD_MnPjMvJLUouLUZKB4cXF-sgbUvToKUAtBOguKgKriizRQTNC0BgA%2C&v=8.2.20
test('array_intersect_assoc вычисляет пересечение массивов с дополнительной проверкой индекса, используя для сравнения индексов и значений отдельные callback-функции', () => {
    const array1 = { a: 'green', b: 'brown', c: 'blue', 0: 'red' };
    const array2 = { a: 'green', b: 'yellow', 0: 'blue', 1: 'red' };

    expect(array_intersect_assoc(array1, array2)).toStrictEqual({ a: 'green' });
});
