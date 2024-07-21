import { expect, test } from '@jest/globals';
import '../src/exceptions.global.js';

test('exceptions.global', () => {
    expect(PHPJSError).not.toBeUndefined();
    expect(TypePHPJSError).not.toBeUndefined();
    expect(ValuePHPJSError).not.toBeUndefined();
});
