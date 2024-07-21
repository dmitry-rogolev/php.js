import { expect, test } from '@jest/globals';
import { ArrayAccess, Interface, Stringable, Throwable, Traversable } from '../src/contracts.mjs';

test('contracts', () => {
    expect(Interface).not.toBeUndefined();
    expect(Traversable).not.toBeUndefined();
    expect(ArrayAccess).not.toBeUndefined();
    expect(Stringable).not.toBeUndefined();
    expect(Throwable).not.toBeUndefined();
});
