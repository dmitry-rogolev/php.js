import { expect, test } from '@jest/globals';
import { array_index_min } from '../../src/array.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';

test('array_index_min выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_index_min(false)).toThrow(TypePHPJSError);
});

test('array_index_min возвращает null при передаче пустого массива или при отсутствии индексов.', () => {
    expect(array_index_min([])).toBeNull();
    expect(array_index_min({})).toBeNull();
    expect(array_index_min({ foo: 'bar' })).toBeNull();
});

test('array_index_min возвращает наибольший индекс массива.', () => {
    expect(array_index_min([1, 2, 3])).toBe(0);
    expect(array_index_min({ 0: 1, 1: 2, 2: 3 })).toBe(0);
    expect(array_index_min({ 0: 1, foo: 'bar', '-1': 2, bax: 'baz', '-2': 3 })).toBe(-2);
});
