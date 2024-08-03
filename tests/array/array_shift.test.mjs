import { expect, test } from '@jest/globals';
import { array_shift } from '../../src/array.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';

test('array_shift выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_shift(false)).toThrow(TypePHPJSError);
});

test('array_shift возвращает null при передаче пустого массива.', () => {
    expect(array_shift([])).toBeNull();
    expect(array_shift({})).toBeNull();
});

// https://onlinephp.io?s=s7EvyCjg5QJBleKSxORsBVuFxKKixEoNpfyixLz0VCUdBaWkxDwgBLESCwpywEJFicUFSalFRZVKmtZArWlFpZklMK3xxRmZaSUaEPNA0gVFmXkl8UVwEQA%2C&v=8.2.20
test('array_shift извлекает первый элемент массива.', () => {
    let array = ['orange', 'banana', 'apple', 'raspberry'];

    expect(array_shift(array)).toBe('orange');
    expect(array).toStrictEqual(['banana', 'apple', 'raspberry']);

    array = { foo: 'bar', baz: 'bax', bav: 'ban' };

    expect(array_shift(array)).toBe('bar');
    expect(array).toStrictEqual({ baz: 'bax', bav: 'ban' });
});
