import { expect, test } from '@jest/globals';
import { array_udiff_assoc } from '../../src/array.mjs';
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

test('array_udiff_assoc выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_udiff_assoc(false)).toThrow(TypePHPJSError);
    expect(() => array_udiff_assoc(() => {}, false)).toThrow(TypePHPJSError);
    expect(() => array_udiff_assoc(() => {}, [], false)).toThrow(TypePHPJSError);
});

// https://onlinephp.io?s=jZLBboQgEIbvJr7DxHCQRBu13UNrdR-FIMUsiaIB3KZp-u4dqhvpemg5Mf8w_zcwvJ7nyxxHcSQGbi0IA59xBLhmo67cSSB-w0Y5dtLUa6pftHBq0sCYmLR1ZhEuJVc-0DW_OfhF3EXZvA08oAF_dLP68mi_sY47JXZrMY0z8xETJiU8A9Id3VUPmLuzbxDQ_dIoGOkWo6Go99pNOtS3h-ozlC95uTf80zPheBFuDP9Ik-KhTKBpQct3fMD0mWaA2inUygrFIhCqRxTKPX7CsAryeXmiGUUo6UJQ9Reougf9l4MkI-0yuBuOLW-q7xn-iklsE8hujQiTIDqcUUK9CT6bdgwHtlrR-hs%2C&v=8.2.20
test('array_udiff_assoc вычисляет расхождение в массивах с дополнительной проверкой индексов, используя для сравнения значений callback-функцию', () => {
    const a = { 0.1: new cr(9), 0.5: new cr(12), 0: new cr(23), 1: new cr(4), 2: new cr(-15) };
    const b = { 0.2: new cr(9), 0.5: new cr(22), 0: new cr(3), 1: new cr(4), 2: new cr(-15) };

    expect(array_udiff_assoc(cr.comp_func_cr, a, b)).toStrictEqual({
        0.1: new cr(9),
        0.5: new cr(12),
        0: new cr(23),
    });
});
