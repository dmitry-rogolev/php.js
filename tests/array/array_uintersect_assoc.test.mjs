import { expect, test } from '@jest/globals';
import { TypePHPJSError } from '../../src/exceptions.mjs';
import { array_uintersect_assoc } from '../../src/array.mjs';

test('array_uintersect_assoc выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_uintersect_assoc(false)).toThrow(TypePHPJSError);
    expect(() => array_uintersect_assoc(() => {}, false)).toThrow(TypePHPJSError);
    expect(() => array_uintersect_assoc(() => {}, [], false)).toThrow(TypePHPJSError);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUkksKkqsNFSwVQAzNJQSlRRs7RSU0otSU_OUdBSUkiD8pKL8cjA_GcrPKU0FcYtSU5Q0rWHmGGGY4x7k6uoHUuiEZk5lak5OfjmyEbxcBUWZeSXxRRpgI-JLgZzUouLU5JL4xOLi_GQNqFt1FKCWAfUWlxQlJwKV5BYoaWpaAwA%2C&v=8.2.20
test('array_uintersect_assoc вычисляет пересечение массивов с дополнительной проверкой индекса, используя для сравнения индексов и значений отдельные callback-функции', () => {
    const array1 = { a: 'green', b: 'brown', c: 'blue', 0: 'red' };
    const array2 = { a: 'GREEN', B: 'brown', 0: 'yellow', 1: 'red' };

    expect(
        array_uintersect_assoc(
            (a, b) => String(a).toLowerCase() === String(b).toLowerCase(),
            array1,
            array2,
        ),
    ).toStrictEqual({ a: 'green' });
});
