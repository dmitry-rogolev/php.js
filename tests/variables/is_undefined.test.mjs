import { expect, test } from '@jest/globals';
import is_undefined from '../../src/variables/is_undefined.mjs';

class stdClass {}

test('is_undefined', () => {
    expect(is_undefined(true)).toBeFalsy();
    expect(is_undefined(false)).toBeFalsy();
    expect(is_undefined(0)).toBeFalsy();
    expect(is_undefined(1)).toBeFalsy();
    expect(is_undefined(3.14)).toBeFalsy();
    expect(is_undefined('string')).toBeFalsy();
    expect(is_undefined([])).toBeFalsy();
    expect(is_undefined({})).toBeFalsy();
    expect(is_undefined(new stdClass())).toBeFalsy();
    expect(is_undefined(() => {})).toBeFalsy();
    function Test() {}
    expect(is_undefined(Test)).toBeFalsy();
    expect(is_undefined(null)).toBeFalsy();
    expect(is_undefined(Infinity)).toBeFalsy();
    expect(is_undefined(-Infinity)).toBeFalsy();
    expect(is_undefined(undefined)).toBeTruthy();
    expect(is_undefined(NaN)).toBeFalsy();
    expect(is_undefined(stdClass)).toBeFalsy();
    expect(is_undefined(Symbol())).toBeFalsy();
});
