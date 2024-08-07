import { expect, test } from '@jest/globals';
import { array_diff_key } from '../../src/array.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';

class cr {
    _priv_member;

    constructor(val) {
        this._priv_member = val;
    }
}

test('array_diff_key выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_diff_key(false)).toThrow(TypePHPJSError);
    expect(() => array_diff_key([], false)).toThrow(TypePHPJSError);
});

// https://onlinephp.io?s=jZBRC4IwFIXfBf_DRfawgYaueoiyfsqYa5JkS7ZpRPTfu6LR6KUue9g953C-sd2hO3VxFEeqlc6BsvCII8DpbDNIr4GMF3HRl0rb7WTVvVG-uRoQQl2N87ZXnpJBtmzy54ZxiD81LtsHHVDCGJ2rnnGEh0hUpbXyTpN8USRQ7sHoG76GblgKqK1DreAo5oHAlygUn32FKw_8rFizlCGSVCGI_wLxb9C_HCRZ7frWv3Hi2NS1OOs7JTIFUo0h_BTjhaVzlG1f&v=8.2.20
test('array_diff_key вычисляет расхождение в массивах с дополнительной проверкой индексов, используя для сравнения значений и индексов callback-функцию', () => {
    const a = { 0.1: new cr(9), 0.5: new cr(12), 0: new cr(23), 1: new cr(4), 2: new cr(-15) };
    const b = { 0.2: new cr(9), 0.5: new cr(22), 0: new cr(3), 1: new cr(4), 2: new cr(-15) };

    expect(array_diff_key(a, b)).toStrictEqual({
        0.1: new cr(9),
    });
});
