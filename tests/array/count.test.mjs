import { expect, test } from '@jest/globals';
import { count } from '../../src/array.mjs';
import { TypePHPJSError, ValuePHPJSError } from '../../src/exceptions.mjs';
import { COUNT_NORMAL, COUNT_RECURSIVE } from '../../src/array/constants.mjs';
import { stdClass } from '../../src/classes.mjs';
import { Countable } from '../../src/spl/contracts.mjs';

// https://onlinephp.io?s=lVLdSsMwGL0v9B1yMWgLg1lliM7pxRgoqJPpvBEpaZf-SNuUNJ3IEDa92MWufBRFQQX1FZI3Mmk25s-8sLno-dJzTs73NVs7WZjpmq5V4NnKOWgCu1FiW-I1hVclrgs8gMTpF0lmerhIqVmBltUota7UCtJ6oyzqZbGhClvZ2kv07kyPvBCDo90jp93ZV4Y-xn2hgoTAK9PwSRHR3ADN7fkOJjANkFEFhgtTsSSCWRYjw6rqGvj2GAMUBBH6KvfEG1Mp8nAcQ9KXMEPQmAWq1QAfsSf2ym_5iI_ZM3tgb3zKXgD7YO_skY_5hN_xm98tyeBV0Or0Dk-cbrvV6x7vnbYXrkJ8z6d88g-3v2bkxTDPQUsSO_4BoiHu5yBKxAwSlNLZF-jGSNeGaiQZiQaQIuAXqUcjnIIcJ0gpTQsMr6VrySvcOPIWNBXG2gRRShVjuJgxQbQgc06AqFPmchIVyKzQMMrLFiRZHFGeUsHuhfi9Kbr80YBpLbkmgiwcPgE%2C&v=8.2.20

class Test extends stdClass {
    static __implements = [Countable];

    count() {
        return 10;
    }
}

test('count выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => count(false)).toThrow(TypePHPJSError);
    expect(() => count([], false)).toThrow(TypePHPJSError);
});

test('count выбрасывает исключение ValuePHPJSError при передаче неверной константы вторым параметром.', () => {
    expect(() => count([], 10)).toThrow(ValuePHPJSError);
});

test('count подсчитывает количество элементов в массиве.', () => {
    expect(count([1, 2, 3])).toBe(3);

    const array = [];
    array[0] = 1;
    array[5] = 2;
    array[10] = 3;

    expect(count(array)).toBe(3);
});

test('count рекурсивно подсчитывает количество элементов в многомерном массиве.', () => {
    const array = {
        fruits: ['orange', 'banana', 'apple'],
        veggie: ['carrot', 'collard', 'pea'],
    };

    expect(count(array, COUNT_RECURSIVE)).toBe(8);
    expect(count(array, COUNT_NORMAL)).toBe(2);
});

test('count работает с объектами, реализующими интерфейс Countable.', () => {
    expect(count(new Test())).toBe(10);
});
