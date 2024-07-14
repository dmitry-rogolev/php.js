import { test, expect } from '@jest/globals';
import traitable from '../../src/functions/traitable.mjs';

class Test {}

traitable(Test);

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

Test.use(TraitB);

test('traitable', () => {
    expect(Test).toHaveProperty('__traits', [TraitB]);

    expect(Test).toHaveProperty('staticAProperty');
    expect(Test).toHaveProperty('staticAMethod');
    expect(Test).toHaveProperty('staticBProperty');
    expect(Test).toHaveProperty('staticBMethod');
    expect(Test.prototype).toHaveProperty('dynamicAProperty');
    expect(Test.prototype).toHaveProperty('dynamicAMethod');
    expect(Test.prototype).toHaveProperty('dynamicBProperty');
    expect(Test.prototype).toHaveProperty('dynamicBMethod');
});
