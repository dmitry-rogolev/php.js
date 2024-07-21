import { test, expect } from '@jest/globals';
import { is_class } from '../../src/variables.mjs';
import { PHPJSError, TypePHPJSError } from '../../src/exceptions.mjs';

test('TypePHPJSError это класс', () => {
    // TypePHPJSError должен быть классом
    expect(is_class(TypePHPJSError)).toBeTruthy();

    // TypePHPJSError должен расширять класс PHPJSError
    expect(new TypePHPJSError()).toBeInstanceOf(PHPJSError);
});
