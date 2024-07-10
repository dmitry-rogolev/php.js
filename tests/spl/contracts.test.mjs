import { expect, test } from '@jest/globals';
import { Countable } from '../../src/spl/contracts.mjs';

test('contracts', () => {
    expect(Countable).not.toBeUndefined();
});
