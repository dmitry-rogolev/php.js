import { test, expect } from '@jest/globals';
import Interface from '../../src/contracts/Interface.mjs';
import verify_implementation_of_contract from '../../src/functions/verify_implementation_of_contract.mjs';

class Contract extends Interface {
    static staticMethod() {}
    dynamicMethod() {}
}

class A {
    static staticMethod() {}
}

class B extends A {
    dynamicMethod() {}
}

class NotImplemented {
    static staticMethod() {}
}

test('verify_implementation_of_contract', () => {
    expect(() => verify_implementation_of_contract('wrong')).toThrow(TypeError);
    expect(() => verify_implementation_of_contract(B, 'wrong')).toThrow(TypeError);
    expect(() => verify_implementation_of_contract(B, B)).toThrow(TypeError);
    expect(() => verify_implementation_of_contract(NotImplemented, Contract)).toThrow(Error);

    expect(() => verify_implementation_of_contract(B, Contract)).not.toThrow(Error);
});
