import { expect, test } from '@jest/globals';
import {
    array_change_key_case,
    array_chunk,
    array_column,
    array_combine,
    array_count_values,
    array_fill,
    array_fill_keys,
    array_is_list,
    array_keys,
    array_reduce,
    array_values,
    count,
} from '../src/array.mjs';

test('array', () => {
    expect(array_is_list).not.toBeUndefined();
    expect(array_change_key_case).not.toBeUndefined();
    expect(array_keys).not.toBeUndefined();
    expect(array_values).not.toBeUndefined();
    expect(array_combine).not.toBeUndefined();
    expect(array_chunk).not.toBeUndefined();
    expect(array_column).not.toBeUndefined();
    expect(array_count_values).not.toBeUndefined();
    expect(array_fill).not.toBeUndefined();
    expect(array_reduce).not.toBeUndefined();
    expect(count).not.toBeUndefined();
    expect(array_fill_keys).not.toBeUndefined();
});
