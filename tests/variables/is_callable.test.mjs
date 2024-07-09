import { expect, test } from '@jest/globals';
import is_callable from '../../src/variables/is_callable.mjs';

class stdClass {}

/**
 * https://onlinephp.io?s=jdLBCoJAEAbgu-A7DF5WD8oudarAQxQFUd5FYrMVhUWlVTpE79664SEYaK7_zP8xuG7Svu59z_dUWXfAhseoVsAggbAx11JqLW9ahVMcQfqdM7AbldRGscguZofsuruc1jPhJojh8v_IzHCE4NQbBFIW1PIiEUukP8X084MAIRij3hBwtM_pgEABQQemHdRwZTLjRqgzl6ifNC8QJS_ogBnuWy2NQZhWPWEe08FqbMuh6VoII3i9sX_-Z4EOt6PW2JU2piPH8x4xbEp9uxgXYgLxAQ%2C%2C&v=8.3.4
 */
test('is_callable', () => {
    // php true: false
    expect(is_callable(true)).toBeFalsy();

    // php true: false
    expect(is_callable(false)).toBeFalsy();

    // php 0: false
    expect(is_callable(0)).toBeFalsy();

    // php 1: false
    expect(is_callable(1)).toBeFalsy();

    // php 3.14: false
    expect(is_callable(3.14)).toBeFalsy();

    // php "": false
    expect(is_callable('')).toBeFalsy();

    // php "0": false
    expect(is_callable('0')).toBeFalsy();

    // php "1": false
    expect(is_callable('1')).toBeFalsy();

    // php "true": false
    expect(is_callable('true')).toBeFalsy();

    // php "false": false
    expect(is_callable('false')).toBeFalsy();

    // php []: false
    expect(is_callable([])).toBeFalsy();
    expect(is_callable({})).toBeFalsy();

    // php stdClass: false
    expect(is_callable(new stdClass())).toBeFalsy();

    // php function () {}: true
    expect(is_callable(() => {})).toBeTruthy();

    // php null: false
    expect(is_callable(null)).toBeFalsy();

    // php INF: false
    expect(is_callable(Infinity)).toBeFalsy();

    // php -INF: false
    expect(is_callable(-Infinity)).toBeFalsy();

    // js
    expect(is_callable(undefined)).toBeFalsy();
    expect(is_callable(NaN)).toBeFalsy();
    expect(is_callable(stdClass)).toBeFalsy();
    expect(is_callable(Symbol())).toBeFalsy();
});
