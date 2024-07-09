import { expect, test } from '@jest/globals';
import is_object from '../../src/variables/is_object.mjs';

class stdClass {}

/**
 * https://onlinephp.io?s=jZPBCoJAEIbvgu8weFk9KC51qsBDFAVR3kXEbEVDVNqVDtG75xoeYhaa6__v980uw26ivupty7ZEUXXA1GMQK2AQgFvLrLveRaFcHXoQfVsGY1_mjRTMG4_FhzjbXU7rWTA1yDCl_xWzJESCkDqfI5RT0UXAl4jWIf3ijoMEjFHnO6GBDuk4N-CcjuuXGgw6pkv0GYNkQsmSqTJYZoS6jSRFjiSl41Ldtk0uJZK04glzSdeVQ1uoumvB9eD1xl_kp6Zr26Fp8A3HkK44nvfIMGbUffkm3icIPg%2C%2C&v=8.3.4
 */
test('is_object', () => {
    // php true: false
    expect(is_object(true)).toBeFalsy();

    // php false: false
    expect(is_object(false)).toBeFalsy();

    // php 0: false
    expect(is_object(0)).toBeFalsy();

    // php 1: false
    expect(is_object(1)).toBeFalsy();

    // php 3.14: false
    expect(is_object(3.14)).toBeFalsy();

    // php "": false
    expect(is_object('')).toBeFalsy();

    // php "0": false
    expect(is_object('0')).toBeFalsy();

    // php "1": false
    expect(is_object('1')).toBeFalsy();

    // php "3.14": false
    expect(is_object('3.14')).toBeFalsy();

    // php "true": false
    expect(is_object('true')).toBeFalsy();

    // php "false": false
    expect(is_object('false')).toBeFalsy();

    // php []: false
    expect(is_object([])).toBeFalsy();
    expect(is_object({})).toBeFalsy();

    // php stdClass: true
    expect(is_object(new stdClass())).toBeTruthy();

    // ! php function () {}: true
    expect(is_object(() => {})).toBeFalsy();

    // php null: false
    expect(is_object(null)).toBeFalsy();

    // php INF: false
    expect(is_object(Infinity)).toBeFalsy();

    // php -INF: false
    expect(is_object(-Infinity)).toBeFalsy();

    // js
    expect(is_object(undefined)).toBeFalsy();
    expect(is_object(NaN)).toBeFalsy();
    expect(is_object(stdClass)).toBeFalsy();
    expect(is_object(Symbol())).toBeFalsy();
});
