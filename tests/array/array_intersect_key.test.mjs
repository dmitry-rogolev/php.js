import { expect, test } from '@jest/globals';
import { TypePHPJSError } from '../../src/exceptions.mjs';
import { array_intersect_key } from '../../src/array.mjs';

test('array_intersect_key выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_intersect_key(false)).toThrow(TypePHPJSError);
    expect(() => array_intersect_key([], false)).toThrow(TypePHPJSError);
});

// https://onlinephp.io?s=Rc7fCsIgFMfx-4HvcC4CFXaz9RfW6lGGbYeK3JLTLHz7ztTozg_--Orx7G5OFKJYGSITKmghHpS8WI8SoD1BVYIkHBJqxpUQp8Q103lylrfMjW5-qfqfynu-3_I8hRk7RkBrn5_IPbMPZgkvPCwpUbwNdYMfnYqt7j7NSC_s5-6BQeVPl5Cf1Lr5Ag%2C%2C&v=8.2.20
test('array_intersect_key вычисляет пересечение массивов, сравнивая ключи', () => {
    const array1 = { blue: 1, red: 2, green: 3, purple: 4 };
    const array2 = { green: 5, blue: 6, yellow: 7, cyan: 8 };

    expect(array_intersect_key(array1, array2)).toStrictEqual({
        blue: 1,
        green: 3,
    });
});
