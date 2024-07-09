import { expect, test } from '@jest/globals';
import is_bool from '../../src/variables/is_bool.mjs';

class stdClass {}

/**
 * https://onlinephp.io?s=jZJBC4IwFMfvgt_h4WV6UBx1qsBDFAVR3kWkTFEYTprSIfruTWOH3g696_-_3-89tm2Svuldx3WqspHAhsdYrYBBBH6ripuUwp-iAJJvx0C39VWoigX6UHpIi93ltDb43CB-zv4LjCJGeEydzRHIqeAi4kvEThF9Zc9DOGPU2V5ssTEd5hbM6fB0xuJnkKyYK8thAOr1ZTkyZDkdVsN9K65KIUVXPcFUdFk9duXQyg78AF5v_I9_Srq0G4XA2-mILjie94jXCfWNQpsOSfgH&v=8.3.4
 */
test('is_bool', () => {
    // php true: true
    expect(is_bool(true)).toBeTruthy();

    // php true: true
    expect(is_bool(false)).toBeTruthy();

    // php 0: false
    expect(is_bool(0)).toBeFalsy();

    // php 1: false
    expect(is_bool(1)).toBeFalsy();

    // php 3.14: false
    expect(is_bool(3.14)).toBeFalsy();

    // php "": false
    expect(is_bool('')).toBeFalsy();

    // php "0": false
    expect(is_bool('0')).toBeFalsy();

    // php "1": false
    expect(is_bool('1')).toBeFalsy();

    // php "true": false
    expect(is_bool('true')).toBeFalsy();

    // php "false": false
    expect(is_bool('false')).toBeFalsy();

    // php []: false
    expect(is_bool([])).toBeFalsy();
    expect(is_bool({})).toBeFalsy();

    // php stdClass: false
    expect(is_bool(new stdClass())).toBeFalsy();

    // php function () {}: false
    expect(is_bool(() => {})).toBeFalsy();

    // php null: false
    expect(is_bool(null)).toBeFalsy();

    // php INF: false
    expect(is_bool(Infinity)).toBeFalsy();

    // php -INF: false
    expect(is_bool(-Infinity)).toBeFalsy();

    // js
    expect(is_bool(undefined)).toBeFalsy();
    expect(is_bool(NaN)).toBeFalsy();
    expect(is_bool(stdClass)).toBeFalsy();
    expect(is_bool(Symbol())).toBeFalsy();
});
