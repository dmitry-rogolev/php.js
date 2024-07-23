import { expect, test } from '@jest/globals';
import {
    get_magic_proxy,
    get_property_descriptor,
    implementable,
    traitable,
    uses,
    verify_implementation_of_contract,
    verify_implementation_of_contracts,
} from '../src/functions.mjs';

test('functions', () => {
    expect(get_magic_proxy).not.toBeUndefined();
    expect(get_property_descriptor).not.toBeUndefined();
    expect(implementable).not.toBeUndefined();
    expect(verify_implementation_of_contract).not.toBeUndefined();
    expect(verify_implementation_of_contracts).not.toBeUndefined();
    expect(uses).not.toBeUndefined();
    expect(traitable).not.toBeUndefined();
});
