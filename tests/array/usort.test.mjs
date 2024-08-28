import { expect, test } from '@jest/globals';
import { usort } from '../../src/array.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';

test('usort выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => usort(false)).toThrow(TypePHPJSError);
    expect(() => usort([], false)).toThrow(TypePHPJSError);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUkksKkqsVLBViDbWUTDSUTDVUTDTUTCMtQZJlhbnF5VoQJToKKTlKQDZOgoqSZoKtnYKKokKuiA2WGVBUWZeSXwRVC1IDAA%2C&v=8.2.20
// Array
// (
//     [0] => 1
//     [1] => 2
//     [2] => 3
//     [3] => 5
//     [4] => 6
// )
test('usort cортирует массив по значениям используя пользовательскую функцию для сравнения элементов.', () => {
    const array = [3, 2, 5, 6, 1];

    expect(usort(array, (a, b) => a - b)).toBeTruthy();
    expect(array).toStrictEqual([1, 2, 3, 5, 6]);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUkksKkqsVLBViObl4oxWTysqzSxRV7C1U1DPSc3NzytWj9VR4ESXSiwoyEnFLpVelFgAl4q1BllRWpxfVKIBsUhHIS1PAcjWUVBJ0gRpKC4pSs4tAIrATIkFScE5mppgIwqKMvNK4oughoDEAA%2C%2C&v=8.2.20
// Array
// (
//     [0] => Array
//         (
//             [fruit] => apples
//         )

//     [1] => Array
//         (
//             [fruit] => grapes
//         )

//     [2] => Array
//         (
//             [fruit] => lemons
//         )
// )
test('usort с многомерными массивами.', () => {
    const array = [{ fruit: 'lemons' }, { fruit: 'apples' }, { fruit: 'grapes' }];

    expect(
        usort(array, (a, b) => (a.fruit < b.fruit ? -1 : a.fruit > b.fruit ? 1 : 0)),
    ).toBeTruthy();
    expect(array).toStrictEqual([{ fruit: 'apples' }, { fruit: 'grapes' }, { fruit: 'lemons' }]);
});

// https://onlinephp.io?s=bZFNa8MwDIbPDeQ_iOBDUjJ6z_rxE3bprZRge97i0thGVlbG2H-f7Tgd-xA-6X0svZK2Bze4sigLeeXew1F5ehIX-CgLCOFQv3FS4Am1eQVm-KgeIx3Fl8lI0tZA30trAjJJqhPSzEAuEoPRoP3DPoqwu9eJyudSbrOGY4AgPBpiS05agrSj46n50q6D9Wb-kZG7Dzm63opLzXgLTPw1gYomNHEYsld7UxjI2VMD293-hyCy8O0yGWUckb-HEU5lsTLqtiysrmTVtLD6nRX_Zp9z9px2OXmLYXGpcgunTHVdukgLVR6rOjcJDzcx1GP-EHNf&v=8.2.20
// Array
// (
//     [0] => TestObj Object
//         (
//             [name:TestObj:private] => b
//         )
//     [1] => TestObj Object
//         (
//             [name:TestObj:private] => c
//         )
//     [2] => TestObj Object
//         (
//             [name:TestObj:private] => d
//         )
// )
test('usort с методом класса.', () => {
    class TestObj {
        _name;

        constructor(name) {
            this._name = name;
        }

        static cmp_obj(a, b) {
            return a._name < b._name ? -1 : a._name > b._name ? 1 : 0;
        }
    }

    const array = [new TestObj('c'), new TestObj('b'), new TestObj('d')];

    expect(usort(array, TestObj.cmp_obj)).toBeTruthy();
    expect(array).toStrictEqual([new TestObj('b'), new TestObj('c'), new TestObj('d')]);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUkksKkqsVLBViFZQT8vPV1ewtVMw1lFQT0osArONwOwqMNsEzM4Dsw0VYq1B-kuL84tKNCCm6Cik5SkA2ToKKkmaIEUqiQo2ICpJE6y2oCgzryS-CKoaJAYA&v=8.2.20
// Array
// (
//     [0] => 1
//     [1] => 2
//     [2] => 3
//     [3] => 4
// )
test('usort сбрасывает ключи ассоциативного массива.', () => {
    const array = { foo: 3, bar: 2, baz: 4, ban: 1 };

    expect(
        usort(array, (a, b) => {
            if (a < b) {
                return -1;
            }

            return a > b ? 1 : 0;
        }),
    ).toBeTruthy();
    expect(array).toStrictEqual({ 0: 1, 1: 2, 2: 3, 3: 4 });
});
