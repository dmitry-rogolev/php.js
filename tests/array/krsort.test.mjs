import { expect, test } from '@jest/globals';
import { krsort } from '../../src/array.mjs';
import { TypePHPJSError, ValuePHPJSError } from '../../src/exceptions.mjs';

test('krsort выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => krsort(false)).toThrow(TypePHPJSError);
    expect(() => krsort([], false)).toThrow(TypePHPJSError);
});

test('krsort выбрасывает исключение ValuePHPJSError при передаче неверной константы вторым параметром.', () => {
    expect(() => krsort([], 100000)).toThrow(ValuePHPJSError);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUkkrKs0sKVawVUgsKkqs1FBKUVKwtVNQyknNzc9T0lFQSoTw84sS89JTQQJJEIGkxDwgBAkkQwQSCwpyUpU0rXm5souK84tKNKBGg0QKijLzSuKLkIUA&v=8.2.20
// Array
// (
//     [d] => lemon
//     [c] => apple
//     [b] => banana
//     [a] => orange
// )
test('krsort сортирует массив по ключу в порядке убывания.', () => {
    const array = { d: 'lemon', a: 'orange', b: 'banana', c: 'apple' };

    expect(krsort(array)).toBeTruthy();
    expect(Object.keys(array)).toStrictEqual(['d', 'c', 'b', 'a']);
    expect(Object.values(array)).toStrictEqual(['lemon', 'apple', 'banana', 'orange']);
});
