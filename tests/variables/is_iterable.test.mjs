import { test, expect } from '@jest/globals';
import is_iterable from '../../src/variables/is_iterable.mjs';
import Traversable from '../../src/contracts/Traversable.mjs';

class stdClass {}

/**
 * https://onlinephp.io?s=jdPBCoJAEAbge-A7DF5WD4VLnSqQiKIg0ruIqG1kLCruSkT07rmGUDDRXGfm__hlcenXl9oaWSORXypgumnFHBhMwClUUmjRpJkUjhm74L_3DLqLcyqVYG53GO7CZBMcFgPRbxCjn_9HBsZDCI_agSNhTg1PJ3yG5M2YXt-2EYIxagfbQ_MeHeAowOmA-V7UMAs6Y25Qpg-TmX6FOkOI-jJRjChRTG2yapr0HmRXkWvEKcUNPi7orZQ-rWWq1A9zWNPBc1vmuqhKcFx4PLH_8euADpetlFjLbkxH9sctYnRT6jOMcWFMIF4%2C&v=8.3.4
 */
test('is_iterable', () => {
    // php true: false
    expect(is_iterable(true)).toBeFalsy();

    // php false: false
    expect(is_iterable(false)).toBeFalsy();

    // php 0: false
    expect(is_iterable(0)).toBeFalsy();

    // php 1: false
    expect(is_iterable(1)).toBeFalsy();

    // php 3.14: false
    expect(is_iterable(3.14)).toBeFalsy();

    // php "": false
    expect(is_iterable('')).toBeFalsy();

    // php "0": false
    expect(is_iterable('0')).toBeFalsy();

    // php "1": false
    expect(is_iterable('1')).toBeFalsy();

    // php "3.14": false
    expect(is_iterable('3.14')).toBeFalsy();

    // php "true": false
    expect(is_iterable('true')).toBeFalsy();

    // php "false": false
    expect(is_iterable('false')).toBeFalsy();

    // php []: true
    expect(is_iterable([])).toBeTruthy();
    expect(is_iterable({})).toBeTruthy();

    // php ArrayObject: true
    class ArrayObject extends Traversable {}
    expect(is_iterable(new ArrayObject())).toBeTruthy();

    // php stdClass: false
    expect(is_iterable(new stdClass())).toBeFalsy();

    // php function () {}: false
    expect(is_iterable(() => {})).toBeFalsy();

    // php null: false
    expect(is_iterable(null)).toBeFalsy();

    // php INF: false
    expect(is_iterable(Infinity)).toBeFalsy();

    // php -INF: false
    expect(is_iterable(-Infinity)).toBeFalsy();

    // js
    expect(is_iterable(undefined)).toBeFalsy();
    expect(is_iterable(NaN)).toBeFalsy();
    expect(is_iterable(stdClass)).toBeFalsy();
    expect(is_iterable(Symbol())).toBeFalsy();
});
