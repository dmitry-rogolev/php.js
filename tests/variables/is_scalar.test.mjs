import { expect, test } from '@jest/globals';
import is_scalar from '../../src/variables/is_scalar.mjs';

class stdClass {}

/**
 * https://onlinephp.io?s=jZNBC4IwFMfvgd_h4WV6UBx1qsBDFAVR3kVkmKIwVJzSIfruuYWHeIPe9f_f7_c2HtvHfd07K2dVFnUHbBymcgsMQvAalatCSDF4OvQh_rYM5r4SUpXMn48l5yQ_3q-7RWAaZDDpf8UiiZAgos7nCOVUdB3yDaJ1SL-46yIBY9T5bmShIzrOLTin4_qlFoOO6RJ9xiIxKFliKotlQajbSDPkSDM6rsbHQQqlkKQtn7CUdF01tcXYdC14Prze-Iv81HRtO0mJbziHdMXldkKGOaPuK7DxAUHwAQ%2C%2C&v=8.3.4
 */
test('is_scalar', () => {
    // php true: true
    expect(is_scalar(true)).toBeTruthy();

    // php false: true
    expect(is_scalar(false)).toBeTruthy();

    // php 0: true
    expect(is_scalar(0)).toBeTruthy();

    // php 1: true
    expect(is_scalar(1)).toBeTruthy();

    // php 3.14: true
    expect(is_scalar(3.14)).toBeTruthy();

    // php "": true
    expect(is_scalar('')).toBeTruthy();

    // php "0": true
    expect(is_scalar('0')).toBeTruthy();

    // php "1": true
    expect(is_scalar('1')).toBeTruthy();

    // php "3.14": true
    expect(is_scalar('3.14')).toBeTruthy();

    // php "true": true
    expect(is_scalar('true')).toBeTruthy();

    // php "false": true
    expect(is_scalar('false')).toBeTruthy();

    // php []: false
    expect(is_scalar([])).toBeFalsy();
    expect(is_scalar({})).toBeFalsy();

    // php stdClass: false
    expect(is_scalar(new stdClass())).toBeFalsy();

    // php function () {}: false
    expect(is_scalar(() => {})).toBeFalsy();

    // php null: false
    expect(is_scalar(null)).toBeFalsy();

    // php INF: true
    expect(is_scalar(Infinity)).toBeTruthy();

    // php -INF: true
    expect(is_scalar(-Infinity)).toBeTruthy();

    // js
    expect(is_scalar(undefined)).toBeFalsy();
    expect(is_scalar(NaN)).toBeFalsy();
    expect(is_scalar(stdClass)).toBeFalsy();
    expect(is_scalar(Symbol())).toBeFalsy();
});
