import { expect, test } from '@jest/globals';
import { array_udiff_uassoc } from '../../src/array.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';

class cr {
    _priv_member;

    constructor(val) {
        this._priv_member = val;
    }

    static comp_func_cr(a, b) {
        return a._priv_member === b._priv_member;
    }

    static comp_func_key(a, b) {
        return a === b;
    }
}

test('array_udiff_uassoc выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_udiff_uassoc(false)).toThrow(TypePHPJSError);
    expect(() => array_udiff_uassoc(() => {}, false)).toThrow(TypePHPJSError);
    expect(() =>
        array_udiff_uassoc(
            () => {},
            () => {},
            false,
        ),
    ).toThrow(TypePHPJSError);
    expect(() =>
        array_udiff_uassoc(
            () => {},
            () => {},
            [],
            false,
        ),
    ).toThrow(TypePHPJSError);
});

// https://onlinephp.io?s=jZLBaoQwEIbvgu8wSA4GtKjtHlqr-yghppENq1Fi3LKUvnsn1UW7UtyQQ-Yf5_8GZ96P_an3Pd8TDR8GEAa-fA_w9EZduJVA3IO1sq2kyadUPWphVaeBMdHpwZpR2JBceEOn_OzgDrEnNcTlygMKcJ_OVt8O7R6D5VaJxVp0bc9cxIQJCY-AVFt3VQPm7uwLBFR_NApG2tFoSPKldpY29eWm-gjpW5w-3vBZXnc6npvc6eu3lQ0drzMAbgy_hkHylAZQlKDlJw4vfKURoHZYa2mGYrISsmcU0iV-wTBb5eP0QCOKSFKtQdkeKLsHPcpBkpHD2Ngbjo0fqq7ZiCvZiflnRrdOhAmQvV6QgP6bxGEE1DFwotoy3KWJRPMf&v=8.2.20
test('array_udiff_uassoc вычисляет расхождение в массивах с дополнительной проверкой индексов, используя для сравнения значений и индексов callback-функцию', () => {
    const a = { 0.1: new cr(9), 0.5: new cr(12), 0: new cr(23), 1: new cr(4), 2: new cr(-15) };
    const b = { 0.2: new cr(9), 0.5: new cr(22), 0: new cr(3), 1: new cr(4), 2: new cr(-15) };

    expect(array_udiff_uassoc(cr.comp_func_cr, cr.comp_func_key, a, b)).toStrictEqual({
        0.1: new cr(9),
        0.5: new cr(12),
        0: new cr(23),
    });
});
