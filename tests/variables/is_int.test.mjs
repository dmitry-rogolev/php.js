import { expect, test } from '@jest/globals';
import is_int from '../../src/variables/is_int.mjs';

class stdClass {}

/**
 * https://onlinephp.io?s=jZLNCoJAFEb3gu9wcTO6UGaoVQUuoiiIci8iYoqCjNIoLaJ3z5lwcadFd_t995z53cVDM7iO61Rl0wMbH1O1AQYR-K3KWzn6Ogkg_lYM5rIuOlWxYJ5JTkl-uF22C20ajJvoP78YOKY5dWWBOUHlVpFYY1Qn9P16HqYZo67scRvldFbYrKCz-oA2rjO6Qc_YBsORDaayFcs89e7TDAvSjM6q8b7vCqWwQVZPWBq6q55kOba9BD-A19v6_qijO-XUddbe5oTOn69HjM8B9XXCHzgk0B8%2C&v=8.3.4
 */
test('is_int', () => {
    // php true: false
    expect(is_int(true)).toBeFalsy();

    // php false: false
    expect(is_int(false)).toBeFalsy();

    // php 0: true
    expect(is_int(0)).toBeTruthy();

    // php 1: true
    expect(is_int(1)).toBeTruthy();

    // php 3.14: false
    expect(is_int(3.14)).toBeFalsy();

    // php "": false
    expect(is_int('')).toBeFalsy();

    // php "0": false
    expect(is_int('0')).toBeFalsy();

    // php "1": false
    expect(is_int('1')).toBeFalsy();

    // php "3.14": false
    expect(is_int('3.14')).toBeFalsy();

    // php "true": false
    expect(is_int('true')).toBeFalsy();

    // php "false": false
    expect(is_int('false')).toBeFalsy();

    // php []: false
    expect(is_int([])).toBeFalsy();
    expect(is_int({})).toBeFalsy();

    // php stdClass: false
    expect(is_int(new stdClass())).toBeFalsy();

    // php function () {}: false
    expect(is_int(() => {})).toBeFalsy();

    // php null: false
    expect(is_int(null)).toBeFalsy();

    // php INF: false
    expect(is_int(Infinity)).toBeFalsy();

    // php -INF: false
    expect(is_int(-Infinity)).toBeFalsy();

    // js
    expect(is_int(undefined)).toBeFalsy();
    expect(is_int(NaN)).toBeFalsy();
    expect(is_int(stdClass)).toBeFalsy();
    expect(is_int(Symbol())).toBeFalsy();
});
