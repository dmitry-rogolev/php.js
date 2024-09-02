import { expect, test } from '@jest/globals';
import { asort } from '../../src/array.mjs';
import { TypePHPJSError, ValuePHPJSError } from '../../src/exceptions.mjs';

test('asort выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => asort(false)).toThrow(TypePHPJSError);
    expect(() => asort([], false)).toThrow(TypePHPJSError);
});

test('asort выбрасывает исключение ValuePHPJSError при передаче неверной константы вторым параметром.', () => {
    expect(() => asort([], 100000)).toThrow(ValuePHPJSError);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUkkrKs0sKVawVUgsKkqs1FBKUVKwtVNQyknNzc9T0lFQSoTw84sS89JTQQJJEIGkxDwgBAkkQwQSCwpyUpU0rXm5Eovzi0o0oCaDBAqKMvNK4ouQhQA%2C&v=8.2.20
// Array
// (
//     [c] => apple
//     [b] => banana
//     [d] => lemon
//     [a] => orange
// )
test('asort сортирует массив в порядке возрастания, сохраняя ассоциацию индексов.', () => {
    const array = { d: 'lemon', a: 'orange', b: 'banana', c: 'apple' };

    expect(asort(array)).toBeTruthy();
    expect(Object.keys(array)).toStrictEqual(['c', 'b', 'd', 'a']);
    expect(Object.values(array)).toStrictEqual(['apple', 'banana', 'lemon', 'orange']);
});
