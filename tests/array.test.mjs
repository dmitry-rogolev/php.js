import { expect, test } from '@jest/globals';
import { array_change_key_case, array_is_list, array_keys, array_values } from '../src/array.mjs';

test('array', () => {
    expect(array_is_list).not.toBeUndefined();
    expect(array_change_key_case).not.toBeUndefined();
    expect(array_keys).not.toBeUndefined();
    expect(array_values).not.toBeUndefined();
});
