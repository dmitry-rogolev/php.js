import { expect, test } from '@jest/globals';
import { Interface, Traversable } from '../src/contracts.mjs';

test('contracts', () => {
    expect(Interface).not.toBeUndefined();
    expect(Traversable).not.toBeUndefined();
});
