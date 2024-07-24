import { expect, test } from '@jest/globals';
import './../src/array.global.js';

test('array.global', () => {
    expect(array_is_list).not.toBeUndefined();
    expect(array_change_key_case).not.toBeUndefined();
    expect(array_keys).not.toBeUndefined();
    expect(array_values).not.toBeUndefined();
});
