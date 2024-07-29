import { expect, test } from '@jest/globals';
import { array_key_exists } from '../../src/array.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';

test('array_key_exists выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_key_exists(false)).toThrow(TypePHPJSError);
    expect(() => array_key_exists(1, false)).toThrow(TypePHPJSError);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUilOTSxKzohPLCpKrFSwVQDTGuppmUXFJeoKtnYKhjoK6sWpyfl5KWCuiaY1L1dmmoIGWGF8dmplfGpFZnFJMUyPjgKKkZqaCtW8XApAkJqcka-gdGHOhQ0XGy82XthxYZMCkNp3YcuFrRcbLmy7sONik8LF3gu7L2y9sAeI9wK5h1aDzTy0W08JaGstAA%2C%2C&v=8.2.20
test('array_key_exists проверяет, существует ли в массиве заданный ключ или индекс.', () => {
    expect(array_key_exists('first', { first: 1, second: 4 })).toBeTruthy();
    expect(array_key_exists('foo', { first: 1, second: 4 })).toBeFalsy();
});
