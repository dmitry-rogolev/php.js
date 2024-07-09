import './../src/variables.global.js';
import { expect, test } from '@jest/globals';

test('variables.global', () => {
    expect(is_array).not.toBeUndefined();
    expect(is_bool).not.toBeUndefined();
    expect(is_class).not.toBeUndefined();
    expect(is_number).not.toBeUndefined();
});
