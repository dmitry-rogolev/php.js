import { expect, test } from '@jest/globals';
import { get_class, get_parent_class, is_a } from '../src/class.mjs';

test('class', () => {
    expect(get_class).not.toBeUndefined();
    expect(is_a).not.toBeUndefined();
    expect(get_parent_class).not.toBeUndefined();
});
