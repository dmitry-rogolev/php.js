import { expect, test } from '@jest/globals';
import { Countable } from '../../../src/spl/contracts.mjs';
import { Interface } from '../../../src/contracts.mjs';

test('Countable', () => {
    expect(new Countable()).toBeInstanceOf(Interface);
    expect(new Countable()).toHaveProperty('count');
});
