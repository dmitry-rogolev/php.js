import { expect, test } from '@jest/globals';
import './../src/array.global.js';

test('array.global', () => {
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
    expect(array_filter).not.toBeUndefined();
    expect(array_flip).not.toBeUndefined();
    expect(array_key_exists).not.toBeUndefined();
    expect(array_key_first).not.toBeUndefined();
    expect(array_key_last).not.toBeUndefined();
    expect(array_map).not.toBeUndefined();
    expect(array_merge).not.toBeUndefined();
    expect(array_merge_recursive).not.toBeUndefined();
    expect(array_pad).not.toBeUndefined();
    expect(array_pop).not.toBeUndefined();
});
