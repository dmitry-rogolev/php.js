import { expect, test } from '@jest/globals';
import { arsort } from '../../src/array.mjs';
import { TypePHPJSError, ValuePHPJSError } from '../../src/exceptions.mjs';

test('arsort выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => arsort(false)).toThrow(TypePHPJSError);
    expect(() => arsort([], false)).toThrow(TypePHPJSError);
});

test('arsort выбрасывает исключение ValuePHPJSError при передаче неверной константы вторым параметром.', () => {
    expect(() => arsort([], 100000)).toThrow(ValuePHPJSError);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUkkrKs0sKVawVUgsKkqs1FBKUVKwtVNQyknNzc9T0lFQSoTw84sS89JTQQJJEIGkxDwgBAkkQwQSCwpyUpU0rXm5EouK84tKNKBGg0QKijLzSuKLkIUA&v=8.2.20
// Array
// (
//     [a] => orange
//     [d] => lemon
//     [b] => banana
//     [c] => apple
// )
test('arsort сортирует массив в порядке убывания, сохраняя ассоциацию индексов.', () => {
    const array = { d: 'lemon', a: 'orange', b: 'banana', c: 'apple' };

    expect(arsort(array)).toBeTruthy();
    expect(Object.keys(array)).toStrictEqual(['a', 'd', 'b', 'c']);
    expect(Object.values(array)).toStrictEqual(['orange', 'lemon', 'banana', 'apple']);
});
