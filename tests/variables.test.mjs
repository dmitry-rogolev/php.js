import { expect, test } from '@jest/globals';
import {
    is_array,
    is_bool,
    is_class,
    is_double,
    is_float,
    is_int,
    is_integer,
    is_long,
    is_null,
    is_number,
    is_numeric,
    is_object,
    is_scalar,
    is_string,
} from './../src/variables.mjs';

test('variables', () => {
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
});
