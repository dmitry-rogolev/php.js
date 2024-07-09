import { test, expect } from '@jest/globals';
import isset from '../../src/variables/isset.mjs';

class stdClass {}

/**
 * https://onlinephp.io?s=pdRNa8JAEAbgeyD_YZDAJqCSpT3ViodSUSitd5GySVYNLKu4u-1B-t-bj3ayNj0E5pZ3ZnjIHHYeF-fjOQzCIPoQykmYg704OQsDmR9PwOrwAAymEJfGSBu3Ywks2h6DqrsXykiWVEOb1eb9-e1ldgM2bRSbRCVT5FIqxZHiVOpuyu9RqwMVZClDb5SOyBz3OE7nmsFOrCMdbfud2mQ664l0zNhLqQ8e2RbI8HaH5HZHxbT8BGOLJyWMQfa3QH7TTue2PGmIE7h-dY_7pkzewCmFdB2o4Pp1iV71TeUmvjchgOLnDkXZ3635GPqLizFE2SA49yGnC7kvtSz6Wj5Iy3rHvFL_uecD_-8b&v=8.3.4
 */
test('isset', () => {
    // php true: true
    expect(isset(true)).toBeTruthy();

    // php false: true
    expect(isset(false)).toBeTruthy();

    // php 0: true
    expect(isset(0)).toBeTruthy();

    // php 1: true
    expect(isset(1)).toBeTruthy();

    // php 3.14: true
    expect(isset(3.14)).toBeTruthy();

    // php "0": true
    expect(isset('0')).toBeTruthy();

    // php "1": true
    expect(isset('1')).toBeTruthy();

    // php "true": true
    expect(isset('true')).toBeTruthy();

    // php "false": true
    expect(isset('false')).toBeTruthy();

    // php "": true
    expect(isset('')).toBeTruthy();

    // php "string": true
    expect(isset('string')).toBeTruthy();

    // php []: true
    expect(isset([])).toBeTruthy();
    expect(isset({})).toBeTruthy();

    // php stdClass: true
    expect(isset(new stdClass())).toBeTruthy();

    // php function () {}: true
    expect(isset(() => {})).toBeTruthy();

    // php null: false
    expect(isset(null)).toBeFalsy();

    // php INF: true
    expect(isset(Infinity)).toBeTruthy();

    // php -INF: true
    expect(isset(-Infinity)).toBeTruthy();

    // php 1, null: false
    expect(isset(1, null)).toBeFalsy();

    // php 1, undefined: false
    expect(isset(1, undefined)).toBeFalsy();

    // php 1, false
    expect(isset(1, false)).toBeTruthy();

    // js
    expect(isset(undefined)).toBeFalsy();
    expect(isset(NaN)).toBeTruthy();
    expect(isset(stdClass)).toBeTruthy();
    expect(isset(Symbol())).toBeTruthy();
});
