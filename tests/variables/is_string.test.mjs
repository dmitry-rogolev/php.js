import { expect, test } from '@jest/globals';
import is_string from '../../src/variables/is_string.mjs';

class stdClass {}

/**
 * https://onlinephp.io?s=jZPBCoJAEIbvgu8weFk9KC51qsBDFAVR3kVEbE1BVnGVDtG75xoeYhaa6__v980uw-6irupsy7ZEUbXAhn4UG2AQgFurTA19LR-uDj2Ivi2DqS_zRgnmTcfiU5wdbpftIpgbZJjT_4pFEiJBSJ3PEcqp6Crga0TrkH5xx0ECxqjzndBAh3ScG3BOx_VLDQYd0yX6jEEyo2TJXBksC0LdRpIiR5LScTXc902uFJJI8YSlpOvKURZD3UpwPXi98Rf5qelaOTYNvuEU0hXn6xEZpoy6L9_E-wTBBw%2C%2C&v=8.3.4
 */
test('is_string', () => {
    // php true: false
    expect(is_string(true)).toBeFalsy();

    // php false: false
    expect(is_string(false)).toBeFalsy();

    // php 0: false
    expect(is_string(0)).toBeFalsy();

    // php 1: false
    expect(is_string(1)).toBeFalsy();

    // php 3.14: false
    expect(is_string(3.14)).toBeFalsy();

    // php "": true
    expect(is_string('')).toBeTruthy();

    // php "0": true
    expect(is_string('0')).toBeTruthy();

    // php "1": true
    expect(is_string('1')).toBeTruthy();

    // php "3.14": true
    expect(is_string('3.14')).toBeTruthy();

    // php "true": true
    expect(is_string('true')).toBeTruthy();

    // php "false": true
    expect(is_string('false')).toBeTruthy();

    // php []: false
    expect(is_string([])).toBeFalsy();
    expect(is_string({})).toBeFalsy();

    // php stdClass: false
    expect(is_string(new stdClass())).toBeFalsy();

    // php function () {}: false
    expect(is_string(() => {})).toBeFalsy();

    // php null: false
    expect(is_string(null)).toBeFalsy();

    // php INF: false
    expect(is_string(Infinity)).toBeFalsy();

    // php -INF: false
    expect(is_string(-Infinity)).toBeFalsy();

    // js
    expect(is_string(undefined)).toBeFalsy();
    expect(is_string(NaN)).toBeFalsy();
    expect(is_string(stdClass)).toBeFalsy();
    expect(is_string(Symbol())).toBeFalsy();
});
