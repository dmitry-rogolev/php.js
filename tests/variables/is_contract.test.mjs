import { test, expect } from '@jest/globals';
import is_contract from '../../src/variables/is_contract.mjs';
import Interface from '../../src/contracts/Interface.mjs';

class stdClass {}

class Contract extends Interface {}

test('is_contract', () => {
    expect(is_contract(true)).toBeFalsy();
    expect(is_contract(false)).toBeFalsy();
    expect(is_contract(0)).toBeFalsy();
    expect(is_contract(1)).toBeFalsy();
    expect(is_contract(3.14)).toBeFalsy();
    expect(is_contract('string')).toBeFalsy();
    expect(is_contract([])).toBeFalsy();
    expect(is_contract({})).toBeFalsy();
    expect(is_contract(new stdClass())).toBeFalsy();
    expect(is_contract(() => {})).toBeFalsy();
    function Test() {}
    expect(is_contract(Test)).toBeFalsy();
    expect(is_contract(null)).toBeFalsy();
    expect(is_contract(Infinity)).toBeFalsy();
    expect(is_contract(-Infinity)).toBeFalsy();
    expect(is_contract(undefined)).toBeFalsy();
    expect(is_contract(NaN)).toBeFalsy();
    expect(is_contract(stdClass)).toBeFalsy();
    expect(is_contract(Interface)).toBeTruthy();
    expect(is_contract(Contract)).toBeTruthy();
    expect(is_contract(Symbol())).toBeFalsy();
});
