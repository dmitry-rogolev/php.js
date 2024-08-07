import { expect, test } from '@jest/globals';
import { array_udiff } from '../../src/array.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';

class cr {
    _priv_member;

    constructor(val) {
        this._priv_member = val;
    }

    static comp_func_cr(a, b) {
        return a._priv_member === b._priv_member;
    }
}

test('array_udiff выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_udiff(false)).toThrow(TypePHPJSError);
    expect(() => array_udiff(() => {}, false)).toThrow(TypePHPJSError);
    expect(() => array_udiff(() => {}, [], false)).toThrow(TypePHPJSError);
});

// https://onlinephp.io?s=jZHBboQgEIbvJr7DxHCQRBu13UNrdR-FIMUsiaIB3KZp-u4dqhvpemg5zfzD_N8wvJ7nyxxHcSQGbi0IA59xBHhmo67cSSA-YKMcO2nqtdQvWjg1aWBMTNo6swiXkisf6FrfHPwh7qJs3gYe0IC_ull9ebQPrONOid1aTOPMfMaESQnPgHRHd9UD1u7sGwR0vzQKRrrFaCjqvXeTDv3tofsM5Ute7gP_zEw4PoQbwz_SpHgoE2ha0PIdF5g-0wxQO4VaWaFYBEL1iEK550-YVkE9L080owglXQiq_gJV96D_cpBkpF0Gd8Ox5U31_bb77DaCMAlCw99JqG_HhWnH8KtWE1p_Aw%2C%2C&v=8.2.20
test('array_udiff вычисляет расхождение массивов, используя для сравнения callback-функцию', () => {
    const a = { 0.1: new cr(9), 0.5: new cr(12), 0: new cr(23), 1: new cr(4), 2: new cr(-15) };
    const b = { 0.2: new cr(9), 0.5: new cr(22), 0: new cr(3), 1: new cr(4), 2: new cr(-15) };

    expect(array_udiff(cr.comp_func_cr, a, b)).toStrictEqual({
        0.5: new cr(12),
        0: new cr(23),
    });
});
