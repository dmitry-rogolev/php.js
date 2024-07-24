import { expect, test } from '@jest/globals';
import array_combine from '../../src/array/array_combine.mjs';
import { TypePHPJSError, ValuePHPJSError } from '../../src/exceptions.mjs';

// https://onlinephp.io?s=RcpBCoAgEAXQveAdXAgaeIOKjhKjDRWYDkMU3b6GiJjFn89_3UALaaWVBdMbYIbLu5kRiwvGMU4SF-ZcT9e0D4s_g6MmmKoIIMooT4Ty3EvTR8dUt7gW9BaCsVFGrYjXso_sbZJ-Aw%2C%2C&v=8.2.20

test('array_combine выбрасывает TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_combine(false, [])).toThrow(TypePHPJSError);
    expect(() => array_combine([], false)).toThrow(TypePHPJSError);
});

test('array_combine выбрасывает ValuePHPJSError при передаче массивов разной длины.', () => {
    expect(() => array_combine([1, 2], [1, 2, 3])).toThrow(ValuePHPJSError);
});

test('array_combine комбинирует ключи и значения', () => {
    expect(array_combine(['green', 'red', 'yellow'], ['avocado', 'apple', 'banana'])).toStrictEqual(
        {
            green: 'avocado',
            red: 'apple',
            yellow: 'banana',
        },
    );

    expect(array_combine([0, 1, 2], [1, 2, 3])).toStrictEqual({
        0: 1,
        1: 2,
        2: 3,
    });
});
