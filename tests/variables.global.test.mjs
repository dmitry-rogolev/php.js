import './../src/variables.global.js';
import { expect, test } from '@jest/globals';

test('variables.global', () => {
    expect(is_array).not.toBeUndefined();
    expect(is_bool).not.toBeUndefined();
    expect(is_class).not.toBeUndefined();
    expect(is_number).not.toBeUndefined();
    expect(is_float).not.toBeUndefined();
    expect(is_double).not.toBeUndefined();
    expect(is_int).not.toBeUndefined();
    expect(is_integer).not.toBeUndefined();
    expect(is_long).not.toBeUndefined();
    expect(is_null).not.toBeUndefined();
    expect(is_numeric).not.toBeUndefined();
    expect(is_object).not.toBeUndefined();
    expect(is_string).not.toBeUndefined();
    expect(is_scalar).not.toBeUndefined();
    expect(is_symbol).not.toBeUndefined();
    expect(is_undefined).not.toBeUndefined();
    expect(is_callable).not.toBeUndefined();
    expect(arrval).not.toBeUndefined();
    expect(boolval).not.toBeUndefined();
    expect(floatval).not.toBeUndefined();
    expect(doubleval).not.toBeUndefined();
    expect(empty).not.toBeUndefined();
});
