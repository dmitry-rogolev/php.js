import { expect, test } from '@jest/globals';
import { array_search } from '../../src/array.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';

test('array_search выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_search('needle', false)).toThrow(TypePHPJSError);
    expect(() => array_search('needle', [], 'wrong')).toThrow(TypePHPJSError);
});

// https://onlinephp.io?s=s7EvyCjg5QJBlcSiosRKBVsFMK1hoGBrp6CelFOaqq6jYAjmFKWmANlGYHZ6UWpqHpBnDJfRtAabkp0KNyO-ODWxKDlDA64YYoWmtYK-vgJUoRFQV0FRZl5JfJEGSAhkSmpyRr5CgEdAvKu_jzUOIyFugRuogGSkIYaRAA%2C%2C&v=8.2.20
test('array_search ищет значение в массиве и в случае успешного поиска возвращает ключ первого найденного элемента.', () => {
    expect(array_search('green', ['blue', 'red', 'green', 'red'])).toBe(2);
    expect(array_search('red', ['blue', 'red', 'green', 'red'])).toBe(1);
    expect(array_search(3, { foo: 'bar', baz: '3', ban: 3 })).toBe('baz');
    expect(array_search(3, { foo: 'bar', baz: '3', ban: 3 }, true)).toBe('ban');
    expect(array_search('test', { foo: 'bar', baz: '3', ban: 3 })).toBeFalsy();
});
