import { expect, test } from '@jest/globals';
import { is_array, is_bool } from './../src/variables.mjs';

test('variables', () => {
    expect(is_array).not.toBeUndefined();
    expect(is_bool).not.toBeUndefined();
});
