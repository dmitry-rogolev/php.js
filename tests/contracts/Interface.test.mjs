import { test, expect } from '@jest/globals';
import Interface from '../../src/contracts/Interface.mjs';

class Stringable extends Interface {}
class ContractA extends Interface {}
class ContractB extends ContractA {}
class Countable extends Interface {}

class TestA {
    static __implements = [ContractB, Stringable];
}

class TestB extends TestA {
    static __implements = [Countable];
}

test('Interface', () => {
    expect(Interface?.toString()?.slice(0, 5)).toBe('class');

    expect(new TestA()).toBeInstanceOf(ContractB);
    expect(new TestA()).toBeInstanceOf(ContractA);
    expect(new TestA()).toBeInstanceOf(Stringable);

    expect(new TestB()).toBeInstanceOf(ContractB);
    expect(new TestB()).toBeInstanceOf(ContractA);
    expect(new TestB()).toBeInstanceOf(Stringable);
    expect(new TestB()).toBeInstanceOf(Countable);
});
