import { expect, test } from '@jest/globals';
import './../src/contracts.global.js';

test('contracts.global', () => {
    expect(Interface).not.toBeUndefined();
    expect(Traversable).not.toBeUndefined();
    expect(ArrayAccess).not.toBeUndefined();
    expect(Stringable).not.toBeUndefined();
    expect(Throwable).not.toBeUndefined();
});
