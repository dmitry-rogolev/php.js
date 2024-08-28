import { expect, test } from '@jest/globals';
import { uasort } from '../../src/array.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';

test('uasort выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => uasort(false)).toThrow(TypePHPJSError);
    expect(() => uasort([], false)).toThrow(TypePHPJSError);
});

// https://onlinephp.io?s=Lc3NCoJAFMXxveA7nMXAFIyL1KDw60Ei5FqZbXS42qK3986ddj8Ofzh15yefJmliiJl-aHCDJYumRelgB9VF9FBlJ-Ez8ip8KXPRqDqL3qpCNMWwxL0KF19aF94O8clhnCF2MMMxZIaQBWvq-TNvPf_bsO0%2C&v=8.2.20
// Array
// (
//     [d] => -9
//     [h] => -4
//     [c] => -1
//     [e] => 2
//     [g] => 3
//     [a] => 4
//     [f] => 5
//     [b] => 8
// )
test('uasort сортирует массив пользовательской функцией сравнения, сохраняя ассоциацию индексов.', () => {
    const array = { a: 4, b: 8, c: -1, d: -9, e: 2, f: 5, g: 3, h: -4 };

    expect(uasort(array, (a, b) => a - b)).toBeTruthy();
    expect(array).toStrictEqual({ d: -9, h: -4, c: -1, e: 2, g: 3, a: 4, f: 5, b: 8 });
});
