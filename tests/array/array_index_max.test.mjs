import { expect, test } from '@jest/globals';
import { array_index_max } from '../../src/array.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';

test('array_index_max выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_index_max(false)).toThrow(TypePHPJSError);
});

test('array_index_max возвращает null при передаче пустого массива или при отсутствии индексов.', () => {
    expect(array_index_max([])).toBeNull();
    expect(array_index_max({})).toBeNull();
    expect(array_index_max({ foo: 'bar' })).toBeNull();
});

test('array_index_max возвращает наибольший индекс массива.', () => {
    expect(array_index_max([1, 2, 3])).toBe(2);
    expect(array_index_max({ 0: 1, 1: 2, 2: 3 })).toBe(2);
    expect(array_index_max({ 0: 1, foo: 'bar', '-1': 2, bax: 'baz', '-2': 3 })).toBe(0);
});
