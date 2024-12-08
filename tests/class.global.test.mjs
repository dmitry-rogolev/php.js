import { expect, test } from '@jest/globals';
import '../src/class.global.js';

test('class.global', () => {
    expect(get_class).not.toBeUndefined();
    expect(is_a).not.toBeUndefined();
    expect(get_parent_class).not.toBeUndefined();
    expect(is_subclass_of).not.toBeUndefined();
    expect(method_exists).not.toBeUndefined();
    expect(property_exists).not.toBeUndefined();
    expect(get_object_vars).not.toBeUndefined();
    expect(get_class_vars).not.toBeUndefined();
});
