import { expect, test } from '@jest/globals';
import { array_filter } from '../../src/array.mjs';
import { TypePHPJSError, ValuePHPJSError } from '../../src/exceptions.mjs';
import { ARRAY_FILTER_USE_BOTH, ARRAY_FILTER_USE_KEY } from '../../src/array/constants.mjs';

test('array_filter выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_filter(false)).toThrow(TypePHPJSError);
    expect(() => array_filter([], false)).toThrow(TypePHPJSError);
    expect(() => array_filter([], () => {}, false)).toThrow(TypePHPJSError);
});

test('array_filter выбрасывает исключение ValuePHPJSError при передаче неверной константы в параметр mode.', () => {
    expect(() => array_filter([], () => {}, 10)).toThrow(ValuePHPJSError);
});

// https://onlinephp.io?s=tVLbSsNAEH1fyD-MoZgEFmrq3Vr9EJUSk5QGJAlLWhARtF6KCEo_wDfB11IMBm3yDbN_5OxqUB9FXFg4c2bO4exlezftpwYzWG8Q-1mUxJAEgd0YesIx2InBgFazCfgoL7DEV3mNhbwHnGGFLziTZziVNzjFXI4ACyzlJVZEzolWk3eAFcgRDc85kD6XYzmhuiQa37AgI3lF3WfFYA4kyonXcEz6c1V8hBBhNhAxqGSwCG7bYKc_YofDMP6f3H_OvGDXqZ06dsMTwjt2oQN7lmdBZwdcDtahRi1CvkbLhAKNVgiFGq0etGt5S8nXOKxz2OCwycFdok1GbksNGSz0-wmY-PB17_IW86392KR2KqI46wpbW3V70VEWCvszFweTvoHpON9tnn5jQYcw1ZMoj3c%2C&v=8.2.20
test('array_filter фильтрует элементы массива через callback-функцию.', () => {
    const array1 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
    const array2 = [6, 7, 8, 9, 10, 11, 12];

    expect(array_filter(array1, value => value % 2 === 1)).toStrictEqual({ a: 1, c: 3, e: 5 });
    expect(array_filter(array2, value => value % 2 === 0)).toStrictEqual({
        0: 6,
        2: 8,
        4: 10,
        6: 12,
    });
});

// https://onlinephp.io?s=s7EvyCjg5eLlUknNKymqVLBViOblUgACAwVbOwX1tPx8dR2IgCFIIC0xpzgVKmAEEtA1hPKMQby80pwcKN8ErB-m2RTMM4BxzUBcAyAn1hpkd0FRZl5JfJFGYlFRYmV8WmZOSWqRBsRBmprWAA%2C%2C&v=8.2.20
test('array_filter фильтрует элементы массива без аргумента callback.', () => {
    expect(array_filter(['foo', false, -1, null, '', '0', 0])).toStrictEqual({ 0: 'foo', 2: -1 });
});

// https://onlinephp.io?s=s7EvyCjg5eLlUkksKlKwVYhWT1RXsLVTMNRRUE8Cs4yArGQwyxjISgGzTGKtQXrKEoviU0pzCzR4uRSAAGhCYmV8WmZOSWoRVAgEQCbrILhppXnJJZn5eQoaKtmaCtUICRAoSi0pLcpTUMlWsLUFOcAaIV2LZIZjUJBjZLybp0-Ia1B8aLBrvLdrJERWk5dLE6gJAA%2C%2C&v=8.2.20
test('array_filter фильтрует элементы массива по ключам.', () => {
    const array = { a: 1, b: 2, c: 3, d: 4, e: 5 };

    expect(array_filter(array, key => key === 'b', ARRAY_FILTER_USE_KEY)).toStrictEqual({ b: 2 });
});

// https://onlinephp.io?s=s7EvyCjg5eLlUkksKlKwVYhWT1RXsLVTMNRRUE8Cs4yArGQwyxjISgGzTGKtQXrKEoviU0pzCzR4uRSAAGhCYmV8WmZOSWoRVAgEQCbrILhppXnJJZn5eQoaKmU6CirZmgrVCEkQKEotKS3KA8oo2NqCHVFTo6BSBuKYWCNU1iIZ6RgU5BgZ7-bpE-IaFB8a7Brv5B_iAZHW5OXSBOoCAA%2C%2C&v=8.2.20
test('array_filter фильтрует элементы массива по ключам и значениям.', () => {
    const array = { a: 1, b: 2, c: 3, d: 4, e: 5 };

    expect(
        array_filter(array, (value, key) => key === 'b' || value === 4, ARRAY_FILTER_USE_BOTH),
    ).toStrictEqual({ b: 2, d: 4 });
});
