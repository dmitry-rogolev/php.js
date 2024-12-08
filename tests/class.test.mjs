import { expect, test } from '@jest/globals';
import {
    get_class,
    get_object_vars,
    get_parent_class,
    is_a,
    is_subclass_of,
    method_exists,
    property_exists,
} from '../src/class.mjs';

test('class', () => {
    expect(get_class).not.toBeUndefined();
    expect(is_a).not.toBeUndefined();
    expect(get_parent_class).not.toBeUndefined();
    expect(is_subclass_of).not.toBeUndefined();
    expect(method_exists).not.toBeUndefined();
    expect(property_exists).not.toBeUndefined();
    expect(get_object_vars).not.toBeUndefined();
});
