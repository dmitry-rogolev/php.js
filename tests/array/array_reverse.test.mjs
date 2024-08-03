import { expect, test } from '@jest/globals';
import { array_reverse } from '../../src/array.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';

test('array_reverse выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_reverse(false)).toThrow(TypePHPJSError);
    expect(() => array_reverse([], 'wrong')).toThrow(TypePHPJSError);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUsnMKygtUVCwVUgsKkqs1FACiivpKJjoGejARNKLUlPzgGJKRakpSpqa1kBNRallqUXFqSkwbfFQAQ2IcWA1BUWpxalFZTgV6SiUFJWmgpTychUUZeaVxBchaYeLwKxCEYSbrWkNAA%2C%2C&v=8.2.20
test('array_reverse возвращает массив с элементами в обратном порядке.', () => {
    expect(array_reverse(['js', 4, ['green', 'red']])).toStrictEqual([['green', 'red'], 4, 'js']);
    expect(array_reverse(['js', 4, ['green', 'red']], true)).toStrictEqual({
        2: ['green', 'red'],
        1: 4,
        0: 'js',
    });
    expect(array_reverse({ foo: 'bar', baz: 'bax' })).toStrictEqual({ baz: 'bax', foo: 'bar' });
});
