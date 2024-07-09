import { expect, test } from '@jest/globals';
import is_number from '../../src/variables/is_number.mjs';

class stdClass {}

test('is_number', () => {
    expect(is_number(true)).toBeFalsy();
    expect(is_number(false)).toBeFalsy();
    expect(is_number(0)).toBeTruthy();
    expect(is_number(1)).toBeTruthy();
    expect(is_number(0x539)).toBeTruthy();
    expect(is_number(0b10100111001)).toBeTruthy();
    expect(is_number(3.14)).toBeTruthy();
    expect(is_number('')).toBeFalsy();
    expect(is_number('0')).toBeFalsy();
    expect(is_number('1')).toBeFalsy();
    expect(is_number('0x539')).toBeFalsy();
    expect(is_number('02471')).toBeFalsy();
    expect(is_number('0b10100111001')).toBeFalsy();
    expect(is_number('1337e0')).toBeFalsy();
    expect(is_number('3.14')).toBeFalsy();
    expect(is_number('true')).toBeFalsy();
    expect(is_number('false')).toBeFalsy();
    expect(is_number([])).toBeFalsy();
    expect(is_number({})).toBeFalsy();
    expect(is_number(new stdClass())).toBeFalsy();
    expect(is_number(() => {})).toBeFalsy();
    expect(is_number(null)).toBeFalsy();
    expect(is_number(Infinity)).toBeTruthy();
    expect(is_number(-Infinity)).toBeTruthy();
    expect(is_number(undefined)).toBeFalsy();
    expect(is_number(NaN)).toBeFalsy();
    expect(is_number(stdClass)).toBeFalsy();
    expect(is_number(Symbol())).toBeFalsy();
});
