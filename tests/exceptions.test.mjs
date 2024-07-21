import { expect, test } from '@jest/globals';
import { PHPJSError, TypePHPJSError, ValuePHPJSError } from '../src/exceptions.mjs';

test('exceptions', () => {
    expect(PHPJSError).not.toBeUndefined();
    expect(TypePHPJSError).not.toBeUndefined();
    expect(ValuePHPJSError).not.toBeUndefined();
});
