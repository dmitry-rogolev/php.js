import { expect, test } from '@jest/globals';
import { natsort } from '../../src/array.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';

test('natsort выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => natsort(false)).toThrow(TypePHPJSError);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUkksKkqsVLBViFZQysxNNzTSK8hLV9KBcAyQOCgSYLZCrDXIhLzEkuL8ohINiEmaYLGCosy8kvgiJDEA&v=8.2.20
// Array
// (
//     [3] => img1.png
//     [2] => img2.png
//     [1] => img10.png
//     [0] => img12.png
// )
test('natsort сортирует массив, для чего использует алгоритм «естественной сортировки».', () => {
    const array = ['img12.png', 'img10.png', 'img2.png', 'img1.png'];

    expect(natsort(array)).toBeTruthy();
    expect(array).toStrictEqual(['img1.png', 'img2.png', 'img10.png', 'img12.png']);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUkksKkqsVLBViFZQ1zVV11E3BmJdIyBhAGIYGhiAaEsgNlRXiLXm5cpLLCnOLyrRgGjUBIoUFGXmlcQXIYkgG6tuANSsoG4BIgwNQKQBRMTA0BBMqRNrKgA%2C&v=8.2.20
// Array
// (
//     [2] => -2
//     [0] => -5
//     [4] => -1000
//     [3] => 0
//     [6] => 1
//     [1] => 3
//     [5] => 9
// )
// Array
// (
//     [5] => 0
//     [1] => 8
//     [0] => 09
//     [3] => 009
//     [2] => 10
//     [4] => 011
// )
test('Примеры показывают ошибки, которые возникают при использовании функции natsort().', () => {
    let array = ['-5', '3', '-2', '0', '-1000', '9', '1'];

    expect(natsort(array)).toBeTruthy();
    expect(array).toStrictEqual(['-1000', '-5', '-2', '0', '1', '3', '9']);

    array = ['09', '8', '10', '009', '011', '0'];

    expect(natsort(array)).toBeTruthy();
    expect(array).toStrictEqual(['0', '8', '09', '009', '10', '011']);
});
