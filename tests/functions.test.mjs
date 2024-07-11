import { expect, test } from '@jest/globals';
import { get_magic_proxy } from '../src/functions.mjs';

test('contracts', () => {
    expect(get_magic_proxy).not.toBeUndefined();
});
