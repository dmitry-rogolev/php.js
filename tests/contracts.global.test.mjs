import { expect, test } from '@jest/globals';
import './../src/contracts.global.js';

test('contracts.global', () => {
    expect(Interface).not.toBeUndefined();
});
