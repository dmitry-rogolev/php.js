import { expect, test } from '@jest/globals';
import { array_key_last } from '../../src/array.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';

test('array_key_last выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_key_last(false)).toThrow(TypePHPJSError);
});

test('array_key_last получает последний ключ массива.', () => {
    expect(array_key_last({ a: 1, b: 2, c: 3 })).toBe('c');
    expect(array_key_last([1, 2, 3])).toBe('2');
    expect(array_key_last([])).toBeNull();
});
