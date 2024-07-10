import { expect, test } from '@jest/globals';
import { Interface } from '../src/contracts.mjs';

test('contracts', () => {
    expect(Interface).not.toBeUndefined();
});
