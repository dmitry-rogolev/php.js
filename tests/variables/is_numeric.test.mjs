import { expect, test } from '@jest/globals';
import is_numeric from '../../src/variables/is_numeric.mjs';

class stdClass {}

/**
 * https://onlinephp.io?s=lZRPa8JAEMXvgt9hyGWTg7JjFOkf8FBaLBT1LiKarhhIV3ETWij97s2sBCI74OSyh_fm_XaYWfZ5dj6e-71-z2THE6jyUplHUDCEOHdbW32ZS57FpCYwu9oK6oLDrnBGJXXdar7avi4_nhqCd0KEl-8zGooOCVraAYZZlGb1zyR9YO4mWczYo0atEelgWG1bykyHOA5RpMpnGkUhQSlpB5Hm4lqeRy6PHe6nHbA9kNGBMxpP2V680YHT3iPLaxd0mFOaTg077KsjJ9Hz4DikyylUw1F8VkzxFodpMtJXvN6EkPVGnnfl50uxcy6kWPMNjSvnHSqblfnJQpzA7x_z8d34cq6tioLpsVbljPfFW4ioRenWBixgICD8Aw%2C%2C&v=8.3.4
 */
test('is_numeric', () => {
    // php true: false
    expect(is_numeric(true)).toBeFalsy();

    // php false: false
    expect(is_numeric(false)).toBeFalsy();

    // php 0: true
    expect(is_numeric(0)).toBeTruthy();

    // php 1: true
    expect(is_numeric(1)).toBeTruthy();

    // php 0x539: true
    expect(is_numeric(0x539)).toBeTruthy();

    // php 0b10100111001: true
    expect(is_numeric(0b10100111001)).toBeTruthy();

    // php 3.14: false
    expect(is_numeric(3.14)).toBeTruthy();

    // php "": false
    expect(is_numeric('')).toBeFalsy();

    // php "0": false
    expect(is_numeric('0')).toBeTruthy();

    // php "1": false
    expect(is_numeric('1')).toBeTruthy();

    // ! php "0x539": false
    expect(is_numeric('0x539')).toBeTruthy();

    // php "02471": true
    expect(is_numeric('02471')).toBeTruthy();

    // php "0b10100111001": false
    expect(is_numeric('0b10100111001')).toBeTruthy();

    // php "1337e0": true
    expect(is_numeric('1337e0')).toBeTruthy();

    // php "3.14": false
    expect(is_numeric('3.14')).toBeTruthy();

    // php "true": false
    expect(is_numeric('true')).toBeFalsy();

    // php "false": false
    expect(is_numeric('false')).toBeFalsy();

    // php []: false
    expect(is_numeric([])).toBeFalsy();
    expect(is_numeric({})).toBeFalsy();

    // php stdClass: false
    expect(is_numeric(new stdClass())).toBeFalsy();

    // php function () {}: false
    expect(is_numeric(() => {})).toBeFalsy();

    // php null: false
    expect(is_numeric(null)).toBeFalsy();

    // php INF: true
    expect(is_numeric(Infinity)).toBeTruthy();

    // php -INF: true
    expect(is_numeric(-Infinity)).toBeTruthy();

    // js
    expect(is_numeric(undefined)).toBeFalsy();
    expect(is_numeric(NaN)).toBeFalsy();
    expect(is_numeric(stdClass)).toBeFalsy();
    expect(is_numeric(Symbol())).toBeFalsy();
});
