import { expect, test } from '@jest/globals';
import { array_reindex } from '../../src/array.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';

test('array_reindex выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_reindex(false)).toThrow(TypePHPJSError);
});

test('array_reindex переиндексирует переданный массив.', () => {
    expect(array_reindex([1, 2, 3])).toStrictEqual([1, 2, 3]);
    expect(array_reindex({ foo: 'bar', 2: 'baz', 10: 'ban' })).toStrictEqual({
        foo: 'bar',
        0: 'baz',
        1: 'ban',
    });
});
