import { expect, test } from '@jest/globals';
import { natcasesort } from '../../src/array.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';

test('natcasesort выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => natcasesort(false)).toThrow(TypePHPJSError);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUkksKkqsVLBViFZQ9_R1N9AryEtX11FQz8xNNzRC5iDLoEjA2EDdxmC2Qqw1L1deYklyYnFqcX5RiQbEDk2gaEFRZl5JfBGSCAA%2C&v=8.2.20
// Array
// (
//     [0] => IMG0.png
//     [4] => img1.png
//     [3] => img2.png
//     [5] => IMG3.png
//     [2] => img10.png
//     [1] => img12.png
// )
test('natcasesort сортирует массив алгоритмом естественной сортировки (natural order) без учёта регистра символов.', () => {
    const array = ['IMG0.png', 'img12.png', 'img10.png', 'img2.png', 'img1.png', 'IMG3.png'];

    expect(natcasesort(array)).toBeTruthy();
    expect(array).toStrictEqual([
        'IMG0.png',
        'img1.png',
        'img2.png',
        'IMG3.png',
        'img10.png',
        'img12.png',
    ]);
});
