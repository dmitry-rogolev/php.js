import { expect, test } from '@jest/globals';
import { array_push } from '../../src/array.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';

test('array_push выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_push(false)).toThrow(TypePHPJSError);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUikuSUzOVrBVSCwqSqzUUMovSsxLT1XSUVBKSswDQiVNa14usFx8QWlxhgZEPVA6saAgB6yuKLG4ICm1qKgSrLSgKDOvJL4Iqk7TGgA%2C&v=8.2.20
test('array_push добавляет один или несколько элементов в конец массива.', () => {
    let array = ['orange', 'banana'];
    expect(array_push(array, 'apple', 'raspberry')).toBe(4);
    expect(array).toStrictEqual(['orange', 'banana', 'apple', 'raspberry']);

    array = { foo: 'bar' };
    expect(array_push(array, 'bax', 'baz')).toBe(3);
    expect(array).toStrictEqual({
        foo: 'bar',
        0: 'bax',
        1: 'baz',
    });
});
