import { expect, test } from '@jest/globals';
import './../src/classes.global.js';

test('classes.global', () => {
    expect(ExtensibleFunction).not.toBeUndefined();
    expect(stdClass).not.toBeUndefined();
});
