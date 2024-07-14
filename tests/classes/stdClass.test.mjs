import { test, expect } from '@jest/globals';
import stdClass from '../../src/classes/stdClass.mjs';
import { Interface } from '../../src/contracts.mjs';

class Stringable extends Interface {
    __toString() {}
}

class Test extends stdClass {
    static __implements = [Stringable];

    __toString() {
        return 'test';
    }

    __get() {
        return '__get';
    }
}

class NotImplemented extends stdClass {
    static __implements = [Stringable];
}

test('stdClass', () => {
    expect(() => new NotImplemented()).toThrow(Error);
    expect(() => new Test()).not.toThrow(Error);
    expect(new Test().unknown).toBe('__get');
});
