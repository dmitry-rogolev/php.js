import { expect, test } from '@jest/globals';
import is_float from '../../src/variables/is_float.mjs';

class stdClass {}

/**
 * https://onlinephp.io?s=jZNBC4IwFMfvgt_h4WV6UBx1qsBDFAVR3kVEaqIwVJrSIfruuYWH3oLe9f_f7_c2Htskfd27juuIa90BG-6jWAGDCPxGFZXsysHXWQDJp2Qw1VUplWDBdCo9pMXuclrPvGmwwIT_DbMjxnxMnc4xyankIuJLDOuMfmvPwzxj1OlebMMxneY2zem0fqYt0Cndoc_YDkOSHaayJTNB3UOWY0WW02k13LayVAo7WvGAuaPbqrG9Dk3Xgh_A82V9i6-Wbm1HKa37TRndcDzvsWCKqJsKf-AhgX8D&v=8.3.4
 */
test('is_float', () => {
    // php true: false
    expect(is_float(true)).toBeFalsy();

    // php false: false
    expect(is_float(false)).toBeFalsy();

    // php 0: false
    expect(is_float(0)).toBeFalsy();

    // php 1: false
    expect(is_float(1)).toBeFalsy();

    // php 3.14: true
    expect(is_float(3.14)).toBeTruthy();

    // php "": false
    expect(is_float('')).toBeFalsy();

    // php "0": false
    expect(is_float('0')).toBeFalsy();

    // php "1": false
    expect(is_float('1')).toBeFalsy();

    // php "3.14": false
    expect(is_float('3.14')).toBeFalsy();

    // php "true": false
    expect(is_float('true')).toBeFalsy();

    // php "false": false
    expect(is_float('false')).toBeFalsy();

    // php []: false
    expect(is_float([])).toBeFalsy();
    expect(is_float({})).toBeFalsy();

    // php stdClass: false
    expect(is_float(new stdClass())).toBeFalsy();

    // php function () {}: false
    expect(is_float(() => {})).toBeFalsy();

    // php null: false
    expect(is_float(null)).toBeFalsy();

    // php INF: true
    expect(is_float(Infinity)).toBeTruthy();

    // php -INF: true
    expect(is_float(-Infinity)).toBeTruthy();

    // js
    expect(is_float(undefined)).toBeFalsy();
    expect(is_float(NaN)).toBeFalsy();
    expect(is_float(stdClass)).toBeFalsy();
    expect(is_float(Symbol())).toBeFalsy();
});
