import { expect, test } from '@jest/globals';
import { get_magic_proxy, get_property_descriptor } from '../src/functions.mjs';

test('contracts', () => {
    expect(get_magic_proxy).not.toBeUndefined();
    expect(get_property_descriptor).not.toBeUndefined();
});
