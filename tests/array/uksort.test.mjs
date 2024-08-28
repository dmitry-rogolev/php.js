import { expect, test } from '@jest/globals';
import { uksort } from '../../src/array.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';

test('uksort выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => uksort(false)).toThrow(TypePHPJSError);
    expect(() => uksort([], false)).toThrow(TypePHPJSError);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUkksKkqsVLBViFZQ98rPyFNXsLVTMNRRUHdNLCrJAPOMgLzEgoKcVDDPGMhLSswDQjDXRCHWGmROaXZxflGJBsQ4HYW0PAUgW0dBJUkTpKq4pCg5sTg1ObcAJqoJ1lVQlJlXEl8E1QYSAwA%2C&v=8.2.20
// Array
// (
//     [apple] => 3
//     [banana] => 4
//     [Earth] => 2
//     [John] => 1
// )
test('uksort cортирует массив по ключам пользовательской функцией сравнения', () => {
    const array = { John: 1, Earth: 2, apple: 3, banana: 4 };

    expect(
        uksort(array, (a, b) => {
            if (a < b) {
                return -1;
            }

            return a > b ? 1 : 0;
        }),
    ).toBeTruthy();
    expect(array).toStrictEqual({ apple: 3, banana: 4, Earth: 2, John: 1 });
});
