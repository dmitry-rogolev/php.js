import { expect, test } from '@jest/globals';
import { array_splice } from '../../src/array.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';

test('array_splice выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_splice(false)).toThrow(TypePHPJSError);
    expect(() => array_splice([], false)).toThrow(TypePHPJSError);
    expect(() => array_splice([], 6, false)).toThrow(TypePHPJSError);
});

// https://onlinephp.io?s=s7EvyCjg5QJBlcy8gtISBVuFxKKixEoNpaLUFCUdBaX0otTUPBAjKac0FURXpubk5JcraVrzcoFVxhcX5GQmp2pA9OsoGIFkyhKL4lNKcwugoiAh6tlgqKOga0gPW5LzS_NKYIYDteQXJealpyrR3GpdQ7D1UFOSchKTs0HachOL8vPzlDSx2g8A&v=8.2.20
test('array_slice удаляет часть массива и заменяет её чем-нибудь ещё.', () => {
    let array = ['red', 'green', 'blue', 'yellow'];
    expect(array_splice(array, 2)).toStrictEqual(['blue', 'yellow']);
    expect(array).toStrictEqual(['red', 'green']);

    array = ['red', 'green', 'blue', 'yellow'];
    expect(array_splice(array, 1, -1)).toStrictEqual(['green', 'blue']);
    expect(array).toStrictEqual(['red', 'yellow']);

    array = ['red', 'green', 'blue', 'yellow'];
    expect(array_splice(array, 1, array.length, 'orange')).toStrictEqual([
        'green',
        'blue',
        'yellow',
    ]);
    expect(array).toStrictEqual(['red', 'orange']);

    array = ['red', 'green', 'blue', 'yellow'];
    expect(array_splice(array, -1, 1, ['black', 'maroon'])).toStrictEqual(['yellow']);
    expect(array).toStrictEqual(['red', 'green', 'blue', 'black', 'maroon']);

    array = { foo: 'bar', baz: 'bav', bax: 'ban' };
    expect(array_splice(array, 1, -1, { gaz: 'gav' })).toStrictEqual({ baz: 'bav' });
    expect(array).toStrictEqual({ foo: 'bar', 0: 'gav', bax: 'ban' });
});
