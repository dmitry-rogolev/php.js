import { test, expect } from '@jest/globals';
import Traversable from '../../src/contracts/Traversable.mjs';
import Interface from '../../src/contracts/Interface.mjs';

class Test {
    static __implements = [Traversable];
}

test('Traversable', () => {
    expect(new Traversable()).toBeInstanceOf(Interface);
    expect(new Test()).toBeInstanceOf(Traversable);
});
