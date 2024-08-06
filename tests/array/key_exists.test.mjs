import { expect, test } from '@jest/globals';
import { key_exists } from '../../src/array.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';

test('key_exists выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => key_exists(false)).toThrow(TypePHPJSError);
    expect(() => key_exists(1, false)).toThrow(TypePHPJSError);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUilOTSxKzohPLCpKrFSwVQDTGuppmUXFJeoKtnYKhjoK6sWpyfl5KWCuiaY1L1dmmoJGdmplfGpFZnFJMUy1jgKKYZqaCtW8XApAkJqcka-gdGHOhQ0XGy82XthxYZMCkNp3YcuFrRcbLmy7sONik8LF3gu7L2y9sAeI9wK5h1aDzTy0W08JaF8tAA%2C%2C&v=8.2.20
test('key_exists проверяет, существует ли в массиве заданный ключ или индекс.', () => {
    expect(key_exists('first', { first: 1, second: 4 })).toBeTruthy();
    expect(key_exists('foo', { first: 1, second: 4 })).toBeFalsy();
});
