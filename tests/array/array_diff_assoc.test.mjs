import { expect, test } from '@jest/globals';
import { array_diff_assoc } from '../../src/array.mjs';
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

test('array_diff_assoc выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_diff_assoc(false)).toThrow(TypePHPJSError);
    expect(() => array_diff_assoc([], false)).toThrow(TypePHPJSError);
});

// https://onlinephp.io?s=jZFBasMwEEXXNfgOQ9BCAqfEbrMoadJD9ABCVuVE4MhmNEoppXfvGDtElEI7CKT58_kPSc8v42ksi7KwvYkRLMJnWQDXiP5iyIGYDvrszq3D3TzqUrDkhwBa2yFEwmRJiovp1TxfEqYSdPJxfcgyYA-TdYn6mrcFmdre2zyehldCH45SXUPv0FHC8EvwLZGXMMwxiOZDrjb39Qr2Bwjune8nn1QFrG1zrW5Y3GRC88BCfesfuW2y-breqkoxUrQ5qPkL1PwE_ZfDJHQx9XTF6TffdZr_bLBSmApEO9n4PQJplItZ7b4B&v=8.2.20
test('array_diff_assoc вычисляет расхождение в массивах с дополнительной проверкой индексов, используя для сравнения значений и индексов callback-функцию', () => {
    const a = { 0.1: new cr(9), 0.5: new cr(12), 0: new cr(23), 1: new cr(4), 2: new cr(-15) };
    const b = { 0.2: new cr(9), 0.5: new cr(22), 0: new cr(3), 1: new cr(4), 2: new cr(-15) };

    expect(array_diff_assoc(a, b)).toStrictEqual({
        0.1: new cr(9),
        0.5: new cr(12),
        0: new cr(23),
    });
});
