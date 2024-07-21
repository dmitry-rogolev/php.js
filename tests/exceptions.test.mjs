import { expect, test } from '@jest/globals';
import { PHPJSError } from '../src/exceptions.mjs';

test('exceptions', () => {
    expect(PHPJSError).not.toBeUndefined();
});
