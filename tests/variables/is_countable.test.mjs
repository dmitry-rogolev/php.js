import { test, expect } from '@jest/globals';
import is_countable from '../../src/variables/is_countable.mjs';
import Countable from '../../src/spl/contracts/Countable.mjs';

class stdClass {}

/**
 * https://onlinephp.io?s=jdPBCoJAEAbgu-A7DF5WD4pLnSqIiKIgsntImK1oLKu4KxHRu6eGUDDRXGf--fhVnM2rvLIt2xJpXgIzdSMmwCAAt9CntGyUSc5SuN3cg_k7wKCNZInUgnlt8rA5nFbRbjoY_QZD-sV_ZXBCzAipLTh2zanXo4CPMaCb05_AcTCDMWoLJ8SBkC5wXOB0ocvgSH9NdvoVDg1X1Pd6jDHmGFO7LOo6uUfnq0gNBilxg48IvZc2l6VMtP6FDnu6mDUqNUWpwPXg8UR_qq8EXVaNlGjPdk5Xtvs1hrRj6rfwfxA-wXgB&v=8.3.4
 */
test('is_countable', () => {
    // php true: false
    expect(is_countable(true)).toBeFalsy();

    // php false: false
    expect(is_countable(false)).toBeFalsy();

    // php 0: false
    expect(is_countable(0)).toBeFalsy();

    // php 1: false
    expect(is_countable(1)).toBeFalsy();

    // php 3.14: false
    expect(is_countable(3.14)).toBeFalsy();

    // php "": false
    expect(is_countable('')).toBeFalsy();

    // php "0": false
    expect(is_countable('0')).toBeFalsy();

    // php "1": false
    expect(is_countable('1')).toBeFalsy();

    // php "true": false
    expect(is_countable('true')).toBeFalsy();

    // php "false": false
    expect(is_countable('false')).toBeFalsy();

    // php []: true
    expect(is_countable([])).toBeTruthy();
    expect(is_countable({})).toBeTruthy();

    // php ArrayObject: true
    class ArrayObject extends Countable {}
    expect(is_countable(new ArrayObject())).toBeTruthy();

    // php stdClass: false
    expect(is_countable(new stdClass())).toBeFalsy();

    // php function () {}: false
    expect(is_countable(() => {})).toBeFalsy();

    // php null: false
    expect(is_countable(null)).toBeFalsy();

    // php INF: false
    expect(is_countable(Infinity)).toBeFalsy();

    // php -INF: false
    expect(is_countable(-Infinity)).toBeFalsy();

    // js
    expect(is_countable(undefined)).toBeFalsy();
    expect(is_countable(NaN)).toBeFalsy();
    expect(is_countable(stdClass)).toBeFalsy();
    expect(is_countable(Symbol())).toBeFalsy();
});
