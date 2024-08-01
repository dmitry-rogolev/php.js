import { expect, test } from '@jest/globals';
import { array_pop } from '../../src/array.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';

test('array_pop выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_pop(false)).toThrow(TypePHPJSError);
});

test('array_pop возвращает null, если переданный массив пуст', () => {
    expect(array_pop([])).toBeNull();
    expect(array_pop({})).toBeNull();
});

// https://onlinephp.io?s=s7EvyCjg5eLlUikuSUzOVrBVSCwqSqzUUMovSsxLT1XSUVBKSswDQhArsaAgByxUlFhckJRaVFSppGkN1JpWVJpZAtMaX5BfoAExDSRZUJSZVxJfBBcBAA%2C%2C&v=8.2.20
test('array_pop извлекает последний элемент массива.', () => {
    let array = ['orange', 'banana', 'apple', 'raspberry'];
    expect(array_pop(array)).toBe('raspberry');
    expect(array).toStrictEqual(['orange', 'banana', 'apple']);

    array = { foo: 'bar', bax: 'baz', test: 'value' };
    expect(array_pop(array)).toBe('value');
    expect(array).toStrictEqual({ foo: 'bar', bax: 'baz' });
});
