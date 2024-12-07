import { expect, test } from '@jest/globals';
import '../src/class.global.js';

test('class.global', () => {
    expect(get_class).not.toBeUndefined();
    expect(is_a).not.toBeUndefined();
    expect(get_parent_class).not.toBeUndefined();
});
