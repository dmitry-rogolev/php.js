import { expect, test } from '@jest/globals';
import is_array from '../../src/variables/is_array.mjs';

class stdClass {}

/**
 * https://onlinephp.io?s=jdJPC4IwGAbwu-B3eNnlVQjB7GR_PETQIci7hCybKciUTYmIvnsz89A8uOvzvO9vG2wTNUVjW7bFsqIGzGklWQgIHjilTKkQ9Ol8QxciwFZ0DCH8zaGrxuJjnB7Op_Uo9CM60Gfz-6MQ6OuB6dmB568myyozP5vIVpT8TnQFhxzNpcRfwPKiO0Nq-p6E5HVNYLsDcqWCTDVUPfY9qh4N3FGW7W1fUSl1kbMHjJ25lnc8a8uag-PC6z35Pn-tucq7qprcT2Xzwgc%2C&v=8.3.4
 */
test('is_array', () => {
    // php false: false
    expect(is_array(false)).toBeFalsy();

    // php true: false
    expect(is_array(true)).toBeFalsy();

    // php 3: false
    expect(is_array(3)).toBeFalsy();

    // php 3.14: false
    expect(is_array(3.14)).toBeFalsy();

    // php "string": false
    expect(is_array('string')).toBeFalsy();

    // php [1, 2]: true
    expect(is_array([1, 2])).toBeTruthy();
    expect(is_array({ 0: 1, 1: 2 })).toBeTruthy();

    // php ["foo" => "bar"]: true
    expect(is_array({ foo: 'bar' })).toBeTruthy();
    expect(is_array(Math)).toBeTruthy();

    // php stdClass: false
    expect(is_array(new stdClass())).toBeFalsy();

    // php function () {}: false
    expect(is_array(() => {})).toBeFalsy();

    // php null: false
    expect(is_array(null)).toBeFalsy();

    // js
    expect(is_array(undefined)).toBeFalsy();
    expect(is_array(NaN)).toBeFalsy();
    expect(is_array(stdClass)).toBeFalsy();
    expect(is_array(Symbol())).toBeFalsy();
});
