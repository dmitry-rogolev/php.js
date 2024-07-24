import { expect, test } from '@jest/globals';
import { array_change_key_case, array_is_list } from '../src/array.mjs';

test('array', () => {
    expect(array_is_list).not.toBeUndefined();
    expect(array_change_key_case).not.toBeUndefined();
});
