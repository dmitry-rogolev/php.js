import { expect, test } from '@jest/globals';
import '../../src/spl/contracts.global.js';

test('contracts.global', () => {
    expect(Countable).not.toBeUndefined();
});
