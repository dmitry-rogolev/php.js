import { expect, test } from '@jest/globals';
import { array_diff } from '../../src/array.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';

class cr {
    _priv_member;

    constructor(val) {
        this._priv_member = val;
    }

    toString() {
        return String(this._priv_member);
    }
}

test('array_diff выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_diff(false)).toThrow(TypePHPJSError);
    expect(() => array_diff([], false)).toThrow(TypePHPJSError);
});

// https://onlinephp.io?s=jZDBSgMxEIbPu7DvMJQcEthKN9qD1NaH8AFCNmbbwDa7TJKKiO_uxK4YRNA5Zf4Zvo_Jw-N8mpu6qc2oQwCD8NbUQDWju-hogeWHOttzb3F3HQ3Jm-gmD0qZyYeIyUTOLnoU1_lCyMXiyYX1oWDAHvLqgnrP6mpO_ehMyY3TU0Tnj1xkWlWhjQn9LzjiVAT55DBNcI2oX_lqc9OtYH8Ab1_oKH4vWqBsW2adpHBTBPKWgu67v6NWFvN1txWtICPrS5H8SyR_iv7rIRPakMb4pVPPbhg40y2wPi_QR_iokC9rYvcB&v=8.2.20
test('array_diff вычисляет расхождение массивов.', () => {
    const a = { 0.1: new cr(9), 0.5: new cr(12), 0: new cr(23), 1: new cr(4), 2: new cr(-15) };
    const b = { 0.2: new cr(9), 0.5: new cr(22), 0: new cr(3), 1: new cr(4), 2: new cr(-15) };

    expect(array_diff(a, b)).toStrictEqual({
        0.5: new cr(12),
        0: new cr(23),
    });
});
