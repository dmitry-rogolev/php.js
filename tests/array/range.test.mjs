import { expect, test } from '@jest/globals';
import { range } from '../../src/array.mjs';
import { TypePHPJSError, ValuePHPJSError } from '../../src/exceptions.mjs';

test('range выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => range(false)).toThrow(TypePHPJSError);
    expect(() => range(4, false)).toThrow(TypePHPJSError);
    expect(() => range(4, 4, false)).toThrow(TypePHPJSError);
});

test('range выбрасывает исключение ValuePHPJSError при передаче неверного значения.', () => {
    expect(() => range(3, 6, 0)).toThrow(ValuePHPJSError);
    expect(() => range(3, 6, -1)).toThrow(ValuePHPJSError);
});

// https://onlinephp.io?s=s7EvyCjg5eLlSk3OyFfIzC3IyU9J1VDXUQCiosS89FQNAx0FQyNNTR2FAI-AeFd_H2uCqg3ABNFa1BNBvEx14jUkg3iJJGhwBPGqUDQAAA%2C%2C&v=8.2.20
test('range создаёт массив, который содержит диапазон элементов.', () => {
    expect(range(0, 12)).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    expect(range(0, 100, 10)).toStrictEqual([0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
    expect(range('a', 'i')).toStrictEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']);
    expect(range('c', 'a')).toStrictEqual(['c', 'b', 'a']);
    expect(range('A', 'z')).toStrictEqual([
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
        '[',
        '\\',
        ']',
        '^',
        '_',
        '`',
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
    ]);
});
