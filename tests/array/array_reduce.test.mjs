import { expect, test } from '@jest/globals';
import { array_reduce } from '../../src/array.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';

// https://onlinephp.io?s=jY8xTsMwFIZ3S77DU-TBNpYap80ApeIolZUGyJA0cm3UCrEUIQbOwB0YYKPlCs83wiUBdaAUL7a__3-__nd-0V63lFz6pnDVvIGFrzkrjLUrBaxyZS0ouaUE4ukwnEw6YdxRWzpvm16M7I6SvbjWzme-cEci5T8imYEJRGBWXCvIFAwVjBTkIhrY8kfbfSm5MXY683XLv-DUlrFEyZlRkMQFEyHGMBhA1Tiuc_GnvV8gUaDT_bEsTYUC_MBtWOMW38M9hMfd8ywapZaZHMqRzA9mL_sq8cJnfAtrwFd8wQ1uwlN4-G64cLZqrrg-Fb_bPgE%2C&v=8.2.20

test('array_reduce выбрасывает исключение PHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_reduce(false)).toThrow(TypePHPJSError);
    expect(() => array_reduce([], false)).toThrow(TypePHPJSError);
});

test('array_reduce итеративно уменьшает массив к единственному значению, используя callback-функцию', () => {
    expect(array_reduce([1, 2, 3, 4, 5], (carry, item) => (carry += item))).toBe(15);
    expect(array_reduce([1, 2, 3, 4, 5], (carry, item) => (carry *= item), 10)).toBe(1200);
    expect(
        array_reduce({ 0: 1, 1: 2, 2: 3, 3: 4, 4: 5 }, (carry, item) => (carry *= item), 10),
    ).toBe(1200);
    expect(array_reduce([], (carry, item) => (carry += item), 'Нет данных')).toBe('Нет данных');
});
