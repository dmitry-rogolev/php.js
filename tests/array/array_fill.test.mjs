import { expect, test } from '@jest/globals';
import { array_fill } from '../../src/array.mjs';
import { TypePHPJSError, ValuePHPJSError } from '../../src/exceptions.mjs';

// https://onlinephp.io?s=s7EvyCjg5eLlUklUsFVILCpKrIxPy8zJ0TDQUTDWUVBPy89X17Tm5SooyswriS_SUEkE8TCV6wIVG-komKOrBQA%2C&v=8.2.20

test('array_fill выбрасывает ошибку TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_fill(false)).toThrow(TypePHPJSError);
    expect(() => array_fill(1, false)).toThrow(TypePHPJSError);
});

test('array_fill выбрасывает ошибку ValuePHPJSError при count < 0.', () => {
    expect(() => array_fill(1, -5)).toThrow(ValuePHPJSError);
});

test('array_fill заполняет массив значениями.', () => {
    expect(array_fill(0, 3, 'foo')).toStrictEqual(['foo', 'foo', 'foo']);
    expect(array_fill(-3, 2, 7)).toStrictEqual({ '-3': 7, '-2': 7 });
});
