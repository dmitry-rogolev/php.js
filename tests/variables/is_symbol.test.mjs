import { expect, test } from '@jest/globals';
import is_symbol from '../../src/variables/is_symbol.mjs';

class stdClass {}

test('is_symbol', () => {
    expect(is_symbol(true)).toBeFalsy();
    expect(is_symbol(false)).toBeFalsy();
    expect(is_symbol(0)).toBeFalsy();
    expect(is_symbol(1)).toBeFalsy();
    expect(is_symbol(3.14)).toBeFalsy();
    expect(is_symbol('string')).toBeFalsy();
    expect(is_symbol([])).toBeFalsy();
    expect(is_symbol({})).toBeFalsy();
    expect(is_symbol(new stdClass())).toBeFalsy();
    expect(is_symbol(() => {})).toBeFalsy();
    expect(is_symbol(null)).toBeFalsy();
    expect(is_symbol(Infinity)).toBeFalsy();
    expect(is_symbol(-Infinity)).toBeFalsy();
    expect(is_symbol(undefined)).toBeFalsy();
    expect(is_symbol(NaN)).toBeFalsy();
    expect(is_symbol(stdClass)).toBeFalsy();
    expect(is_symbol(Symbol())).toBeTruthy();
});
