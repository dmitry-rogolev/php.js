import { expect, test } from '@jest/globals';
import { array_key_first } from '../../src/array.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';

test('array_key_first выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_key_first(false)).toThrow(TypePHPJSError);
});

test('array_key_first получает первый ключ массива.', () => {
    expect(array_key_first({ a: 1, b: 2, c: 3 })).toBe('a');
    expect(array_key_first([1, 2, 3])).toBe('0');
    expect(array_key_first([])).toBeNull();
});
