import { expect, test } from '@jest/globals';
import { ksort } from '../../src/array.mjs';
import { TypePHPJSError, ValuePHPJSError } from '../../src/exceptions.mjs';
import {
    SORT_FLAG_CASE,
    SORT_NATURAL,
    SORT_NUMERIC,
    SORT_STRING,
} from '../../src/array/constants.mjs';

test('ksort выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => ksort(false)).toThrow(TypePHPJSError);
    expect(() => ksort([], false)).toThrow(TypePHPJSError);
});

test('ksort выбрасывает исключение ValuePHPJSError при передаче неверной константы вторым параметром.', () => {
    expect(() => ksort([], 100000)).toThrow(ValuePHPJSError);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUkkrKs0sKVawVUgsKkqs1FBKUVKwtVNQyknNzc9T0lFQSoTw84sS89JTQQJJEIGkxDwgBAkkQwQSCwpyUpU0rXm5sovzi0o0oCaDBAqKMvNK4ouQhQA%2C&v=8.2.20
test('ksort сортирует массив по ключу в порядке возрастания.', () => {
    const array = { d: 'lemon', a: 'orange', b: 'banana', c: 'apple' };

    expect(ksort(array)).toBeTruthy();
    expect(Object.keys(array)).toStrictEqual(['a', 'b', 'c', 'd']);
    expect(Object.values(array)).toStrictEqual(['orange', 'banana', 'apple', 'lemon']);
});
