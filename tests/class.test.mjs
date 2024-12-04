import { expect, test } from '@jest/globals';
import { get_class } from '../src/class.mjs';

test('class', () => {
    expect(get_class).not.toBeUndefined();
});
