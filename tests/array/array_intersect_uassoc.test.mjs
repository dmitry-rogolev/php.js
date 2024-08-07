import { expect, test } from '@jest/globals';
import { TypePHPJSError } from '../../src/exceptions.mjs';
import { array_intersect_uassoc } from '../../src/array.mjs';

test('array_intersect_uassoc выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_intersect_uassoc(false)).toThrow(TypePHPJSError);
    expect(() => array_intersect_uassoc(() => {}, false)).toThrow(TypePHPJSError);
    expect(() => array_intersect_uassoc(() => {}, [], false)).toThrow(TypePHPJSError);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUkksKkqsNFSwVQAzNJQSlRRs7RSU0otSU_OUdBSUkiD8pKL8cjA_GcrPKU0FcYtSU5Q0rWHmGGGY4x7k6uoHUuiEZk5lak5OfjmyEbxcBUWZeSXxRRpgI-KB7NSi4tTkkvjSxOLi_GQNqFt1FKCWAfUWlxQlJwLV5BYoaWpaAwA%2C&v=8.2.20
test('array_intersect_uassoc вычисляет пересечение массивов с дополнительной проверкой индекса, сравнивая индексы через callback-функцию.', () => {
    const array1 = { a: 'green', b: 'brown', c: 'blue', 0: 'red' };
    const array2 = { a: 'GREEN', B: 'brown', 0: 'yellow', 1: 'red' };

    expect(
        array_intersect_uassoc(
            (a, b) => String(a).toLowerCase() === String(b).toLowerCase(),
            array1,
            array2,
        ),
    ).toStrictEqual({ b: 'brown' });
});
