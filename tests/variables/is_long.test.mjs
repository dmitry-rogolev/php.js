import { expect, test } from '@jest/globals';
import is_long from '../../src/variables/is_long.mjs';

class stdClass {}

/**
 * https://onlinephp.io?s=jZNBC4IwFMfvgt_h4WV6UBx1qsBDFAVR3kVESlMYU5rSIfrubYaH3g696_-_3-9tPLZJ-qZ3Hdeprk0HbHiM1QoYROC3qhCdvPsmCiD5dgx0W5dCVSzQh9JDWuwup_WMTw3ip-y_YFbECI-pszkCORVcRHyJWBPRr-x5CGeMOtuLLTamw9yCOR02b7R4E9IV5oylmECyYqosxwxQN5DlyJDldFgNt60olUIKWT1hruiyepTXoe0k-AG83vgr_JR0qRyFwLfTEV1wPO8RrxPqjkKbDgn4Bw%2C%2C&v=8.3.4
 */
test('is_long', () => {
    // php true: false
    expect(is_long(true)).toBeFalsy();

    // php false: false
    expect(is_long(false)).toBeFalsy();

    // php 0: true
    expect(is_long(0)).toBeTruthy();

    // php 1: true
    expect(is_long(1)).toBeTruthy();

    // php 3.14: false
    expect(is_long(3.14)).toBeFalsy();

    // php "": false
    expect(is_long('')).toBeFalsy();

    // php "0": false
    expect(is_long('0')).toBeFalsy();

    // php "1": false
    expect(is_long('1')).toBeFalsy();

    // php "3.14": false
    expect(is_long('3.14')).toBeFalsy();

    // php "true": false
    expect(is_long('true')).toBeFalsy();

    // php "false": false
    expect(is_long('false')).toBeFalsy();

    // php []: false
    expect(is_long([])).toBeFalsy();
    expect(is_long({})).toBeFalsy();

    // php stdClass: false
    expect(is_long(new stdClass())).toBeFalsy();

    // php function () {}: false
    expect(is_long(() => {})).toBeFalsy();

    // php null: false
    expect(is_long(null)).toBeFalsy();

    // php INF: false
    expect(is_long(Infinity)).toBeFalsy();

    // php -INF: false
    expect(is_long(-Infinity)).toBeFalsy();

    // js
    expect(is_long(undefined)).toBeFalsy();
    expect(is_long(NaN)).toBeFalsy();
    expect(is_long(stdClass)).toBeFalsy();
    expect(is_long(Symbol())).toBeFalsy();
});
