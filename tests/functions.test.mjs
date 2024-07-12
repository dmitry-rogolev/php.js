import { expect, test } from '@jest/globals';
import {
    get_magic_proxy,
    get_property_descriptor,
    implementable,
    verify_implementation_of_contract,
} from '../src/functions.mjs';

test('contracts', () => {
    expect(get_magic_proxy).not.toBeUndefined();
    expect(get_property_descriptor).not.toBeUndefined();
    expect(implementable).not.toBeUndefined();
    expect(verify_implementation_of_contract).not.toBeUndefined();
});
