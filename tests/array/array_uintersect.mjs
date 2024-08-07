import { expect, test } from '@jest/globals';
import { TypePHPJSError } from '../../src/exceptions.mjs';
import { array_uintersect } from '../../src/array.mjs';

test('array_uintersect выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_uintersect(false)).toThrow(TypePHPJSError);
    expect(() => array_uintersect(() => {}, false)).toThrow(TypePHPJSError);
    expect(() => array_uintersect(() => {}, [], false)).toThrow(TypePHPJSError);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUkksKkqsNFSwVQAzNJQSlRRs7RSU0otSU_OUdBSUkiD8pKL8cjA_GcrPKU0FcYtSU5Q0rWHmGGGY4x7k6uoHUuiEZk5lak5OfjmyEbxcBUWZeSXxRRpgI-JLgZzUouLU5BINqCt1FKDWAHUVlxQlJwIlcwuUNDWtAQ%2C%2C&v=8.2.20
test('array_uintersect вычисляет пересечение массивов, используя для сравнения значений callback-функцию.', () => {
    const array1 = { a: 'green', b: 'brown', c: 'blue', 0: 'red' };
    const array2 = { a: 'GREEN', B: 'brown', 0: 'yellow', 1: 'red' };

    expect(
        array_uintersect(
            (a, b) => String(a).toLowerCase() === String(b).toLowerCase(),
            array1,
            array2,
        ),
    ).toStrictEqual({ a: 'green', b: 'brown', 0: 'red' });
});
