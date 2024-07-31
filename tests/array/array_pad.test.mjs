import { expect, test } from '@jest/globals';
import { array_pad } from '../../src/array.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';

test('array_pad выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_pad(false)).toThrow(TypePHPJSError);
    expect(() => array_pad([], false)).toThrow(TypePHPJSError);
});

test('array_pad возвращает массив без изменения при передаче вторым параметром числа, абсолютное значение которого меньше или равно длине этого массива.', () => {
    expect(array_pad([12, 10, 9], 2, 'noop')).toStrictEqual([12, 10, 9]);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUsnMKygtUbBVSCwqSqzUMDTSUTA00FGw1LQGyxalFpfmwKXjCxJTNCA6dBRMdRQMQKoKijLzSuKLNKBqCWvUNQdiQ7K0Al2nlJefX6CEVTcA&v=8.2.20
test('array_pad дополняет массив значением до заданной длины.', () => {
    expect(array_pad([12, 10, 9], 5, 0)).toStrictEqual([12, 10, 9, 0, 0]);
    expect(array_pad([12, 10, 9], -7, -1)).toStrictEqual([-1, -1, -1, -1, 12, 10, 9]);
    expect(array_pad({ foo: 'bar', bax: 'baz' }, 5, 'test')).toStrictEqual({
        foo: 'bar',
        bax: 'baz',
        0: 'test',
        1: 'test',
        2: 'test',
    });
    expect(array_pad({ foo: 'bar', bax: 'baz' }, -5, 'test')).toStrictEqual({
        foo: 'bar',
        bax: 'baz',
        0: 'test',
        1: 'test',
        2: 'test',
    });
});
