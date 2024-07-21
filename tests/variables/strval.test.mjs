import { test, expect } from '@jest/globals';
import strval from '../../src/variables/strval.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';

class stdClass {}

/**
 * https://onlinephp.io?s=dY9LC8IwEITvgfyH3JoetBa9VRApCIJ4qXgRCbFNtRDTkEc9lP53-_ABNu5ll_kGZna5kjcJAQQVVSSzd4m1URXl2CjLfD8ag5xy7SYzpxo61fk0XDiB1-5CXD0nPJ17OQjQLxHsgbTJYk617j1pd6HEqCPlB6YNBDUEqB1pL7xIUW5FaopSIEJMmfSZ2B8cL2M3ihmrOk-8WycJIdGAGgiacbuuwzfwX9NPMPZR3TjfFJZzJ9juN0598gZP&v=8.3.4
 */
test('strval', () => {
    // php string(1) "1"
    expect(strval(true)).toBe('1');

    // php string(0) ""
    expect(strval(false)).toBe('');

    // php string(1) "0"
    expect(strval(0)).toBe('0');

    // php string(1) "1"
    expect(strval(1)).toBe('1');

    // php string(4) "3.14"
    expect(strval(3.14)).toBe('3.14');

    // php string(6) "string"
    expect(strval('string')).toBe('string');

    // php string(5) "Array"
    expect(strval([])).toBe('Array');
    expect(strval({})).toBe('Array');

    // ! php Fatal error: Uncaught Error: Object of class stdClass could not be converted to string
    expect(strval(new stdClass())).toBe('[object stdClass]');

    // php string(10) "StrValTest"
    class StrValTest {
        toString() {
            return StrValTest.name;
        }
    }
    expect(strval(new StrValTest())).toBe('StrValTest');

    // php Fatal error: Uncaught Error: Object of class Closure could not be converted to string
    expect(() => strval(() => {})).toThrow(TypePHPJSError);

    // php string(0) ""
    expect(strval(null)).toBe('');

    // ! php string(3) "INF"
    expect(strval(Infinity)).toBe('Infinity');

    // ! php string(4) "-INF"
    expect(strval(-Infinity)).toBe('-Infinity');

    // js
    expect(strval(undefined)).toBe('');
    expect(strval(NaN)).toBe('NaN');
    expect(() => strval(stdClass)).toThrow(TypePHPJSError);
    expect(() => strval(Symbol())).toThrow(TypePHPJSError);
});
