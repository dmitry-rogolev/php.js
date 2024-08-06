import { expect, test } from '@jest/globals';
import { sizeof } from '../../src/array.mjs';
import { TypePHPJSError, ValuePHPJSError } from '../../src/exceptions.mjs';
import { COUNT_NORMAL, COUNT_RECURSIVE } from '../../src/array/constants.mjs';
import { stdClass } from '../../src/classes.mjs';
import { Countable } from '../../src/spl/contracts.mjs';

// https://onlinephp.io?s=lVLBSsMwGL4X-g45FNrCYE4ZonN6GAMFdTKdF5GSdukWaZOSphMdwqaHHXbyURQFFdRXSN7IpN2YyjyYHPL9yfd9-f8_2dpJ-olpmIYFz1bOQR1UajmuaLxW4FWNqwoPIPO6WZw4Kb5GNHQs6Lq1XOxrsWKt1_KgmgcbRVApfCvLDPyZAQr6FBztHnnN1n7hGFLaVTLIGLxy7JBlmKc2qG_PdyiDpIfsErB9SNTUCCZJhGy3ZBrgx7AHqNfD6Ls8UCvlWhTQKIKsq2GCoD1LqFwGciSexZu8kyM5Fi_iUbzLqXgF4lN8iCc5lhN5L2-X1KQzL4FGq3N44rWbjU77eO-0ubBV6gc5lZP_2P3VpSCCaQoaNCO8FR4g3qfdFOBYdSFGhM9OoB8h0xgWTUkYHkCOQJiRgGNKQEpjVCgdFwxvtGvOy_wIBwtaoJ0cdxNgwgvGcNFlhnjG5pwe4l6elxcXCTkW7-M0L0GT1RX5LRb1L9QDE3T5qwDHXfZTFFtZfAE%2C&v=8.2.20

class Test extends stdClass {
    static __implements = [Countable];

    count() {
        return 10;
    }
}

test('sizeof выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => sizeof(false)).toThrow(TypePHPJSError);
    expect(() => sizeof([], false)).toThrow(TypePHPJSError);
});

test('sizeof выбрасывает исключение ValuePHPJSError при передаче неверной константы вторым параметром.', () => {
    expect(() => sizeof([], 10)).toThrow(ValuePHPJSError);
});

test('sizeof подсчитывает количество элементов в массиве.', () => {
    expect(sizeof([1, 2, 3])).toBe(3);

    const array = [];
    array[0] = 1;
    array[5] = 2;
    array[10] = 3;

    expect(sizeof(array)).toBe(3);
});

test('sizeof рекурсивно подсчитывает количество элементов в многомерном массиве.', () => {
    const array = {
        fruits: ['orange', 'banana', 'apple'],
        veggie: ['carrot', 'collard', 'pea'],
    };

    expect(sizeof(array, COUNT_RECURSIVE)).toBe(8);
    expect(sizeof(array, COUNT_NORMAL)).toBe(2);
});

test('sizeof работает с объектами, реализующими интерфейс Countable.', () => {
    expect(sizeof(new Test())).toBe(10);
});
