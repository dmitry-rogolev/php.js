import { expect, test } from '@jest/globals';
import is_double from '../../src/variables/is_double.mjs';

class stdClass {}

/**
 * https://onlinephp.io?s=jZLBCoJAEIbvgu8weFk9KC51qsBDFAVR3kXEdEVhUWmVDtG7txoeYhaa6__v982wu7uor3vbsi1R1B2w4TGKDTAIwG1UVnbjXQp3Cj2Ivi0D3Ve5VIJ5-lh8irPD7bJdBHODDHP6X7FIQiQIqfM5QjkVXQV8jegppC_uOEjAGHW-ExrokI5zA87p-HTGYJhRsmSuDJYFoV5kkiJHktJxNZR7mSuFJK14wlLSddXYFkPTteB68Hrj3_1T07XtKCXeUId0xfl6RAadUd_LN_E-QfAB&v=8.3.4
 */
test('is_double', () => {
    // php true: false
    expect(is_double(true)).toBeFalsy();

    // php false: false
    expect(is_double(false)).toBeFalsy();

    // php 0: false
    expect(is_double(0)).toBeFalsy();

    // php 1: false
    expect(is_double(1)).toBeFalsy();

    // php 3.14: true
    expect(is_double(3.14)).toBeTruthy();

    // php "": false
    expect(is_double('')).toBeFalsy();

    // php "0": false
    expect(is_double('0')).toBeFalsy();

    // php "1": false
    expect(is_double('1')).toBeFalsy();

    // php "3.14": false
    expect(is_double('3.14')).toBeFalsy();

    // php "true": false
    expect(is_double('true')).toBeFalsy();

    // php "false": false
    expect(is_double('false')).toBeFalsy();

    // php []: false
    expect(is_double([])).toBeFalsy();
    expect(is_double({})).toBeFalsy();

    // php stdClass: false
    expect(is_double(new stdClass())).toBeFalsy();

    // php function () {}: false
    expect(is_double(() => {})).toBeFalsy();

    // php null: false
    expect(is_double(null)).toBeFalsy();

    // php INF: true
    expect(is_double(Infinity)).toBeTruthy();

    // php -INF: true
    expect(is_double(-Infinity)).toBeTruthy();

    // js
    expect(is_double(undefined)).toBeFalsy();
    expect(is_double(NaN)).toBeFalsy();
    expect(is_double(stdClass)).toBeFalsy();
    expect(is_double(Symbol())).toBeFalsy();
});
