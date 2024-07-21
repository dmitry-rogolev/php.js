import { test, expect } from '@jest/globals';
import { is_class } from '../../src/variables.mjs';
import { PHPJSError, ValuePHPJSError } from '../../src/exceptions.mjs';

test('ValuePHPJSError это класс', () => {
    // ValuePHPJSError должен быть классом
    expect(is_class(ValuePHPJSError)).toBeTruthy();

    // ValuePHPJSError должен расширять класс PHPJSError
    expect(new ValuePHPJSError()).toBeInstanceOf(PHPJSError);
});
