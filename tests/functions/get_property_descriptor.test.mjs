import { test, expect } from '@jest/globals';
import get_property_descriptor from '../../src/functions/get_property_descriptor.mjs';

class A {
    static staticAProperty = 'a';
    dynamicAProperty = 'a';

    static staticAMethod() {}
    dynamicAMethod() {}
}

class B extends A {
    static staticBProperty = 'b';
    dynamicBProperty = 'b';

    static staticBMethod() {}
    dynamicBMethod() {}
}

test('class', () => {
    expect(() => get_property_descriptor('wrong')).toThrow(TypeError);
    expect(() => get_property_descriptor(B, false)).toThrow(TypeError);
    expect(() => get_property_descriptor(B, 'property', 'wrong')).toThrow(TypeError);

    expect(get_property_descriptor(B, 'dynamicBProperty')).toBeUndefined();
    expect(get_property_descriptor(B, 'dynamicAProperty')).toBeUndefined();
    expect(get_property_descriptor(B, 'dynamicBMethod')).not.toBeUndefined();
    expect(get_property_descriptor(B, 'dynamicAMethod')).not.toBeUndefined();
    expect(get_property_descriptor(B, 'staticBProperty', true)).not.toBeUndefined();
    expect(get_property_descriptor(B, 'staticAProperty', true)).not.toBeUndefined();
    expect(get_property_descriptor(B, 'staticBMethod', true)).not.toBeUndefined();
    expect(get_property_descriptor(B, 'staticAMethod', true)).not.toBeUndefined();
});

test('object', () => {
    const obj = new B();

    expect(get_property_descriptor(obj, 'dynamicBProperty')).not.toBeUndefined();
    expect(get_property_descriptor(obj, 'dynamicAProperty')).not.toBeUndefined();
    expect(get_property_descriptor(obj, 'dynamicBMethod')).not.toBeUndefined();
    expect(get_property_descriptor(obj, 'dynamicAMethod')).not.toBeUndefined();
    expect(get_property_descriptor(obj, 'staticBProperty', true)).not.toBeUndefined();
    expect(get_property_descriptor(obj, 'staticAProperty', true)).not.toBeUndefined();
    expect(get_property_descriptor(obj, 'staticBMethod', true)).not.toBeUndefined();
    expect(get_property_descriptor(obj, 'staticAMethod', true)).not.toBeUndefined();
});
