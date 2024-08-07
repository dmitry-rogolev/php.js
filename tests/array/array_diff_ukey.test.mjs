import { expect, test } from '@jest/globals';
import { array_diff_ukey } from '../../src/array.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';

class cr {
    _priv_member;

    constructor(val) {
        this._priv_member = val;
    }

    static comp_func_key(a, b) {
        return a === b;
    }
}

test('array_diff_ukey выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_diff_ukey(false)).toThrow(TypePHPJSError);
    expect(() => array_diff_ukey(() => {}, false)).toThrow(TypePHPJSError);
    expect(() => array_diff_ukey(() => {}, [], false)).toThrow(TypePHPJSError);
});

// https://onlinephp.io?s=jZHBaoQwEIbvgu8wSA4GtBjbPbRW91FCTCMbVqMkcctS-u6dsC6x7aENOcz8__B_YfJ6XE5LmqSJHIVzIC18pAngWay-CK-AhIJPauqVbW7WsBrp9WyAczkb5-0qfU4uYqQ3f0sIh_iTdmW3y4AWwugW9RnQoXBeeC1jtJynhYeOn9U1J6IA0v-O1wOgB23bBhus8qs1UDVxYpPCVBdmjsBeShbpeEMACGvFNc-qB5ZB24FR77iL_JkWgNphr7EaxWon1I8osNg_YVvv_JIdaEERSfo9qP4LVP8E_ZeDJKvcOvo7jr_pYeBr3GRxf4a0GYK_LTujIQN_zHhu8y2JNl8%2C&v=8.2.20
test('array_diff_ukey вычисляет расхождение массивов, используя callback-функцию для сравнения ключей.', () => {
    const a = { 0.1: new cr(9), 0.5: new cr(12), 0: new cr(23), 1: new cr(4), 2: new cr(-15) };
    const b = { 0.2: new cr(9), 0.5: new cr(22), 0: new cr(3), 1: new cr(4), 2: new cr(-15) };

    expect(array_diff_ukey(cr.comp_func_key, a, b)).toStrictEqual({
        0.1: new cr(9),
    });
});
