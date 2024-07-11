import { test, expect } from '@jest/globals';
import ExtensibleFunction from '../../src/classes/ExtensibleFunction.mjs';

class CallableClass extends ExtensibleFunction {
    name = 'callable';
    length = 5;

    hello() {
        return 'hello';
    }

    __call__() {
        return this.hello();
    }
}

test('ExtensibleFunction', () => {
    class MyClass extends ExtensibleFunction {}
    expect(() => new MyClass()()).toThrow(Error);

    const obj = new CallableClass();
    expect(obj()).toBe('hello');
    expect(obj.__call__()).toBe('hello');
    expect(Object.entries(obj)).toStrictEqual([
        ['name', 'callable'],
        ['length', 5],
    ]);
});
