import { test, expect } from '@jest/globals';
import Stringable from '../../src/contracts/Stringable.mjs';
import Interface from '../../src/contracts/Interface.mjs';

class Test {
    static __implements = [Stringable];
}

test('Stringable', () => {
    expect(new Stringable()).toBeInstanceOf(Interface);
    expect(new Test()).toBeInstanceOf(Stringable);
});
