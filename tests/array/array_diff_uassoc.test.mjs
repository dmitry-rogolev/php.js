import { expect, test } from '@jest/globals';
import { array_diff_uassoc } from '../../src/array.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';

class cr {
    _priv_member;

    constructor(val) {
        this._priv_member = val;
    }

    static comp_func_key(a, b) {
        return a === b;
    }

    toString() {
        return String(this._priv_member);
    }
}

test('array_diff_uassoc выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_diff_uassoc(false)).toThrow(TypePHPJSError);
    expect(() => array_diff_uassoc(() => {}, false)).toThrow(TypePHPJSError);
    expect(() =>
        array_diff_uassoc(
            () => {},
            () => {},
            false,
        ),
    ).toThrow(TypePHPJSError);
    expect(() =>
        array_diff_uassoc(
            () => {},
            () => {},
            [],
            false,
        ),
    ).toThrow(TypePHPJSError);
});

// https://onlinephp.io?s=jZLdaoQwEIWvK-w7DJKLBLSo7V60Vvch-gAhpnE3VKPEuGUpffdO2Ii2e9GGQDJnhvNNfl4O42ncRbtIdmKaQFr43EWAY7T6LJwC4je8V32jbHlNtbORTg8GOJeDmZydpaPkLDp2zQcHP4g76SmtNx5QgS8NVl8e7TeTE07L1VoO_ch9xN_VhRKRAGlu7XULmIOqqnwarHKzNZCVa0WQfFXtaw6QP6f5SvdLOPDcdNsOOHfDq7PaHClbmHfB7vZYqyNO3xIIa8WFxtl9HkNVg1EfeLv0iSWA2n6r5QWK2UYoHlDI1_gRw2KTT_M9SxgiSbMFFX-Bit-g_3KQZNU0d27B8TfdtnzGLzPI8DrJ0oi0MaJ_PGDMvAtel3Hc0uDFym8%2C&v=8.2.20
test('array_diff_uassoc вычисляет расхождение в массивах с дополнительной проверкой индексов, используя для сравнения значений и индексов callback-функцию', () => {
    const a = { 0.1: new cr(9), 0.5: new cr(12), 0: new cr(23), 1: new cr(4), 2: new cr(-15) };
    const b = { 0.2: new cr(9), 0.5: new cr(22), 0: new cr(3), 1: new cr(4), 2: new cr(-15) };

    expect(array_diff_uassoc(cr.comp_func_key, a, b)).toStrictEqual({
        0.1: new cr(9),
        0.5: new cr(12),
        0: new cr(23),
    });
});
