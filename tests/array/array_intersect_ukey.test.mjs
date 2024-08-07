import { expect, test } from '@jest/globals';
import { TypePHPJSError } from '../../src/exceptions.mjs';
import { array_intersect_ukey } from '../../src/array.mjs';

test('array_intersect_ukey выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_intersect_ukey(false)).toThrow(TypePHPJSError);
    expect(() => array_intersect_ukey(() => {}, false)).toThrow(TypePHPJSError);
    expect(() => array_intersect_ukey(() => {}, [], false)).toThrow(TypePHPJSError);
});

// https://onlinephp.io?s=dZDdisIwEIXvA3mHuRDagoLWnxVq3UcJsY5aNqZhbFzKsu_upKk_uGxukm_OyZlJNp_u5KSQ4uBt1daNhS_sVNWcnSZUoZiOuDIbQ9jyTIofKYBXfYCoQFk-NBgWYevJwrSIJTQXfLmw_c8_e_H_ESdB_Q2jjjSRDo2hP6TJznhMAMot8JwJ4T5CznAkRBtxzug8OcNexkVW3KPyZ9TgZ33J9hjMsGLo0Jjmu8cPxqrTITjgOkRJcdWk9v7s0j5L1bZFumDVKs_PTYep-SNjT454_-oky4ob&v=8.2.20
test('array_intersect_ukey вычисляет пересечение массивов с дополнительной проверкой индекса, используя для сравнения индексов и значений отдельные callback-функции', () => {
    const array1 = { blue: 1, red: 2, green: 3, purple: 4 };
    const array2 = { green: 5, blue: 6, yellow: 7, cyan: 8 };

    expect(array_intersect_ukey((a, b) => a === b, array1, array2)).toStrictEqual({
        blue: 1,
        green: 3,
    });
});
