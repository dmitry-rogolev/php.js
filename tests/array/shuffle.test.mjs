import { expect, test } from '@jest/globals';
import { range, shuffle } from '../../src/array.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';

test('shuffle выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => shuffle(false)).toThrow(TypePHPJSError);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUskrzU1KLSpWsFUoSsxLT9Uw1FEwMtC05uUqzihNS8tJ1YCpAIml5RelJiZnKMAFFRKLFaBsTYVqXi4FIEhNzshXUIKKKigBtdUCAA%2C%2C&v=8.2.20
test('shuffle перемешивает массив.', () => {
    let array = range(1, 20);
    expect(shuffle(array)).toBeTruthy();
    expect(array).not.toStrictEqual(range(1, 20));

    array = { foo: 'bar', baz: 'bav', bax: 'ban', bac: 'bam', bal: 'bak', baj: 'bah' };
    expect(shuffle(array)).toBeTruthy();
    expect(Object.values(array)).toHaveLength(6);
});
