import { expect, test } from '@jest/globals';
import { ExtensibleFunction } from '../src/classes.mjs';

test('classes', () => {
    expect(ExtensibleFunction).not.toBeUndefined();
});
