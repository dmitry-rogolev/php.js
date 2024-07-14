import { expect, test } from '@jest/globals';
import { ExtensibleFunction, stdClass } from '../src/classes.mjs';

test('classes', () => {
    expect(ExtensibleFunction).not.toBeUndefined();
    expect(stdClass).not.toBeUndefined();
});
