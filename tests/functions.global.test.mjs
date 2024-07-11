import { expect, test } from '@jest/globals';
import '../src/functions.global.js';

test('contracts', () => {
    expect(get_magic_proxy).not.toBeUndefined();
});
