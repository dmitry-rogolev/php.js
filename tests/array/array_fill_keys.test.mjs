import { expect, test } from '@jest/globals';
import { array_fill_keys } from '../../src/array.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';

// https://onlinephp.io?s=s7EvyCjg5eLlUslOrSxWsFVILCpKrNRQT8vPV9dRMNVRMDTQUVBPSixS17QGKkqEqYhPy8zJiQfp0QDrBCvKA0KwuoKizLyS-CINlURNawA%2C&v=8.2.20

test('array_fill_keys выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_fill_keys(false)).toThrow(TypePHPJSError);
});

test('array_fill_keys создаёт массив и заполняет его значениями с определёнными ключами.', () => {
    expect(array_fill_keys(['foo', 5, 10, 'bar'], 'banana')).toStrictEqual({
        foo: 'banana',
        5: 'banana',
        10: 'banana',
        bar: 'banana',
    });

    expect(array_fill_keys({ 0: 'foo', 1: 5, 2: 10, 3: 'bar' }, 'banana')).toStrictEqual({
        foo: 'banana',
        5: 'banana',
        10: 'banana',
        bar: 'banana',
    });
});
