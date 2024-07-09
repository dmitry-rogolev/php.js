import { test, expect } from '@jest/globals';
import print_r from '../../src/variables/print_r.mjs';

class stdClass {}

/**
 * https://onlinephp.io?s=fZI9C8IwEIb3Qv_DDUJaqIIfm1-DILg4uYmUGFstxDQkFx2k_91UK1bUuyEkeV7e3HtkMtcnHQZhcOEmPbizjrQpFKYmQuOyBOo1jsc_eM6lJQVDEvb6I4ozi353ZKSGpNsdSfsJDBIY0iKWlyWD6Qy2bM8N25FqlV3B4mEhubUtnajPsMksQhjcwgB8abeXhYAOhykoJ-X4ef0Bc6cEFqWCNBWl8uNwAqO40TQ-dXXwVNju7GHV6qCxrChn9E1F8ZejydAZ9Ujwdqn-JK6Dkd_k9Zjv_dZ2rshZ-qFQfLVeUrj7ye8%2C&v=8.3.4
 */
test('print_r', () => {
    // php string(1) "1"
    expect(print_r(true, true)).toBe('1');

    // php string(0) ""
    expect(print_r(false, true)).toBe('');

    // php string(1) "3"
    expect(print_r(3, true)).toBe('3');

    // php string(4) "3.14"
    expect(print_r(3.14, true)).toBe('3.14');

    // php string(6) "string"
    expect(print_r('string', true)).toBe('string');

    // php string(0) ""
    expect(print_r('', true)).toBe('');

    // php string(10) "Array
    // (
    // )
    // "
    expect(print_r([], true)).toBe('Array\n(\n)\n');

    // php string(49) "Array
    // (
    //     [0] => 1
    //     [1] => 2
    //     [2] => 3
    // )
    // "
    expect(print_r([1, 2, 3], true)).toBe(
        'Array\n(\n    [0] => 1\n    [1] => 2\n    [2] => 3\n)\n',
    );

    // php string(73) "Array
    // (
    //     [foo] => Array
    //         (
    //             [0] => bar
    //         )
    //
    // )
    // "
    expect(print_r({ foo: ['bar'] }, true)).toBe(
        'Array\n(\n    [foo] => Array\n        (\n            [0] => bar\n        )\n        \n)\n',
    );

    // php string(20) "stdClass Object
    // (
    // )
    // "
    expect(print_r(new stdClass(), true)).toBe('stdClass Object\n(\n)\n');

    class Test {
        a = new stdClass();

        test() {
            return true;
        }
    }
    // php string(64) "Test Object
    // (
    //     [a] => stdClass Object
    //         (
    //         )
    //
    // )
    // "
    expect(print_r(new Test(), true)).toBe(
        'Test Object\n(\n    [a] => stdClass Object\n        (\n        )\n        \n)\n',
    );

    // ! php string(19) "Closure Object
    // (
    // )
    // "
    expect(print_r(() => true, true)).toBe('function () {}');

    // php string(0) ""
    expect(print_r(null, true)).toBe('');

    // php string(3) "INF"
    expect(print_r(Infinity, true)).toBe('Infinity');

    // php string(4) "-INF"
    expect(print_r(-Infinity, true)).toBe('-Infinity');

    // js
    expect(print_r(undefined, true)).toBe('');
    expect(print_r(NaN, true)).toBe('NaN');
    expect(print_r(stdClass, true)).toBe('class stdClass');
    expect(print_r(Symbol(), true)).toBe('Symbol');
});
