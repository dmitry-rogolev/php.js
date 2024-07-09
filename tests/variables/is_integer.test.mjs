import { expect, test } from '@jest/globals';
import is_integer from '../../src/variables/is_integer.mjs';

class stdClass {}

/**
 * https://onlinephp.io?s=jZNBC4IwFMfvgt_h4WV6UBx1qsBDFAVR3kVEbKYgU9ykQ_TdcwsPsUHv-v-_3483HtslQzO4juuwqumByHFiGyAQgd-KouWSPdjoqzSA5FsTmAfqshOMBPNcekqLw-2yXQy6MRU6_u9YLLFpiLEbUJOlWHYV0bWJqxS_u-eZBkKwG3ixDY_xPLXxFM-rx9oUKsdb1IzNolm0RVc2zcJgb5LlpiTL8byQ931XCmFaOHvC0uJ99cQr2fYc_ABeb8t3-enxXj51nWXHOcU7ztejqZhD7NVCqyBEGD4%2C&v=8.3.4
 */
test('is_integer', () => {
    // php true: false
    expect(is_integer(true)).toBeFalsy();

    // php false: false
    expect(is_integer(false)).toBeFalsy();

    // php 0: true
    expect(is_integer(0)).toBeTruthy();

    // php 1: true
    expect(is_integer(1)).toBeTruthy();

    // php 3.14: false
    expect(is_integer(3.14)).toBeFalsy();

    // php "": false
    expect(is_integer('')).toBeFalsy();

    // php "0": false
    expect(is_integer('0')).toBeFalsy();

    // php "1": false
    expect(is_integer('1')).toBeFalsy();

    // php "3.14": false
    expect(is_integer('3.14')).toBeFalsy();

    // php "true": false
    expect(is_integer('true')).toBeFalsy();

    // php "false": false
    expect(is_integer('false')).toBeFalsy();

    // php []: false
    expect(is_integer([])).toBeFalsy();
    expect(is_integer({})).toBeFalsy();

    // php stdClass: false
    expect(is_integer(new stdClass())).toBeFalsy();

    // php function () {}: false
    expect(is_integer(() => {})).toBeFalsy();

    // php null: false
    expect(is_integer(null)).toBeFalsy();

    // php INF: false
    expect(is_integer(Infinity)).toBeFalsy();

    // php -INF: false
    expect(is_integer(-Infinity)).toBeFalsy();

    // js
    expect(is_integer(undefined)).toBeFalsy();
    expect(is_integer(NaN)).toBeFalsy();
    expect(is_integer(stdClass)).toBeFalsy();
    expect(is_integer(Symbol())).toBeFalsy();
});
