import { test, expect } from '@jest/globals';
import ArrayAccess from '../../src/contracts/ArrayAccess.mjs';

test('ArrayAccess', () => {
    expect(ArrayAccess?.toString()?.slice(0, 5)).toBe('class');

    expect(ArrayAccess.prototype).toHaveProperty('offsetExists');
    expect(ArrayAccess.prototype).toHaveProperty('offsetGet');
    expect(ArrayAccess.prototype).toHaveProperty('offsetSet');
    expect(ArrayAccess.prototype).toHaveProperty('offsetUnset');
});
