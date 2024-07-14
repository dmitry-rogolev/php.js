import { test, expect } from '@jest/globals';
import uses from '../../src/functions/uses.mjs';

class TraitA {
    static staticAProperty = 'staticAProperty';
    dynamicAProperty = 'dynamicAProperty';

    static staticAMethod() {}
    dynamicAMethod() {}
}

class TraitB extends TraitA {
    static staticBProperty = 'staticBProperty';
    dynamicBProperty = 'dynamicBProperty';

    static staticBMethod() {}
    dynamicBMethod() {}
}

class TraitWrong {}

class Test {
    static __traits = [TraitB];
}

test('uses', () => {
    expect(uses(Test, TraitB)).toBeTruthy();
    expect(uses(Test, TraitA)).toBeTruthy();
    expect(uses(Test, TraitWrong)).toBeFalsy();
});
