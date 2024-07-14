import { expect, test } from '@jest/globals';
import {
    arrval,
    boolval,
    doubleval,
    empty,
    floatval,
    get_debug_type,
    gettype,
    intval,
    is_array,
    is_bool,
    is_callable,
    is_class,
    is_contract,
    is_countable,
    is_double,
    is_float,
    is_int,
    is_integer,
    is_iterable,
    is_long,
    is_null,
    is_number,
    is_numeric,
    is_object,
    is_scalar,
    is_string,
    is_symbol,
    is_undefined,
    print_r,
    serialize,
    settype,
    strval,
    var_dump,
} from './../src/variables.mjs';
import isset from '../src/variables/isset.mjs';
import { uses } from '../src/functions.mjs';

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
    expect(is_symbol).not.toBeUndefined();
    expect(is_undefined).not.toBeUndefined();
    expect(is_callable).not.toBeUndefined();
    expect(arrval).not.toBeUndefined();
    expect(boolval).not.toBeUndefined();
    expect(floatval).not.toBeUndefined();
    expect(doubleval).not.toBeUndefined();
    expect(empty).not.toBeUndefined();
    expect(get_debug_type).not.toBeUndefined();
    expect(gettype).not.toBeUndefined();
    expect(intval).not.toBeUndefined();
    expect(isset).not.toBeUndefined();
    expect(strval).not.toBeUndefined();
    expect(print_r).not.toBeUndefined();
    expect(var_dump).not.toBeUndefined();
    expect(serialize).not.toBeUndefined();
    expect(settype).not.toBeUndefined();
    expect(is_contract).not.toBeUndefined();
    expect(is_iterable).not.toBeUndefined();
    expect(is_countable).not.toBeUndefined();
    expect(uses).not.toBeUndefined();
});
