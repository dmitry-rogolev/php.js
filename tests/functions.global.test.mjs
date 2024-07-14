import { expect, test } from '@jest/globals';
import '../src/functions.global.js';

test('contracts', () => {
    expect(get_magic_proxy).not.toBeUndefined();
    expect(get_property_descriptor).not.toBeUndefined();
    expect(implementable).not.toBeUndefined();
    expect(verify_implementation_of_contract).not.toBeUndefined();
    expect(verify_implementation_of_contracts).not.toBeUndefined();
    expect(uses).not.toBeUndefined();
    expect(traitable).not.toBeUndefined();
});
