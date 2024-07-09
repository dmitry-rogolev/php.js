import { expect, test } from '@jest/globals';
import is_class from '../../src/variables/is_class.mjs';

class stdClass {}

test('is_class', () => {
    expect(is_class(true)).toBeFalsy();
    expect(is_class(false)).toBeFalsy();
    expect(is_class(0)).toBeFalsy();
    expect(is_class(1)).toBeFalsy();
    expect(is_class(3.14)).toBeFalsy();
    expect(is_class('string')).toBeFalsy();
    expect(is_class([])).toBeFalsy();
    expect(is_class({})).toBeFalsy();
    expect(is_class(new stdClass())).toBeFalsy();
    expect(is_class(() => {})).toBeFalsy();
    function Test() {}
    expect(is_class(Test)).toBeFalsy();
    expect(is_class(null)).toBeFalsy();
    expect(is_class(Infinity)).toBeFalsy();
    expect(is_class(-Infinity)).toBeFalsy();
    expect(is_class(undefined)).toBeFalsy();
    expect(is_class(NaN)).toBeFalsy();
    expect(is_class(stdClass)).toBeTruthy();
    expect(is_class(Symbol())).toBeFalsy();
});
