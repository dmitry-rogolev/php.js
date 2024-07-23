import { expect, test } from '@jest/globals';
import './../src/array.global.js';

test('array.global', () => {
    expect(array_is_list).not.toBeUndefined();
});
