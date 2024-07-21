import { test, expect } from '@jest/globals';
import Throwable from '../../src/contracts/Throwable.mjs';
import Interface from '../../src/contracts/Interface.mjs';

class Test {
    static __implements = [Throwable];
}

test('Throwable', () => {
    expect(new Throwable()).toBeInstanceOf(Interface);
    expect(new Test()).toBeInstanceOf(Throwable);
});
