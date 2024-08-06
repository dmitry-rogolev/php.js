import { expect, test } from '@jest/globals';
import { array_walk } from '../../src/array.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';

test('array_walk выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_walk(false)).toThrow(TypePHPJSError);
    expect(() => array_walk([], false)).toThrow(TypePHPJSError);
});

// https://onlinephp.io?s=jZHNSsNAFIX3gbzDMASTQhDssrW6ElwIdm-lTNMpDU3TkE7VUgr1Zym48Rlc66JQGhtf4c4r-CTe-bFdFMFABnLOzXdmzhyfZv3MdVzH6-WTWIxJg7A8Z9OAdilpnBAKBazgE0rY0JBQZsV3-IIlFPJZ3qOtrY61PtDcqFeJkRHlC8oFQtZQ0kpd5fUmaSTiUUoEH4s2SwTPgwMvFnx4FBJvwKe4ZjnvxXcV15m5DsHH2LhFaq2alSgi5_vULI9TEeiRqoHuWDzqj5CD2qGBVFvpFmNMeIWy9r14M4aupX3LkkFguwqJv4vxzbH-ntJH9PFLPsmFfIS1fND_mKxWikGwIthriZ0WsKyZ2P8Ga0zzvNk-u7zQgscTPuSpvtIrn6nkjloi_3oP-zsakm2BgXfDkgm3tRHdmtnqTClzda8zMzO3zVXqPw%2C%2C&v=8.2.20
test('array_walk применяет пользовательскую функцию к каждому элементу массива.', () => {
    let result = [];
    array_walk(
        { d: 'лимон', a: 'апельсин', b: 'банан', c: 'яблоко' },
        (value, key, res) => res.push(`${key}: ${value}`),
        result,
    );
    expect(result).toStrictEqual(['d: лимон', 'a: апельсин', 'b: банан', 'c: яблоко']);

    result = [];
    array_walk(['a', 'b', 'c'], (value, key, res) => res.push(`${key} => ${value}`), result);
    expect(result).toStrictEqual(['0 => a', '1 => b', '2 => c']);
});
