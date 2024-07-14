import { it, expect, jest } from '@jest/globals';
import var_export from '../../src/variables/var_export.mjs';
import stdClass from '../../src/classes/stdClass.mjs';
import is_callable from '../../src/variables/is_callable.mjs';
import is_class from '../../src/variables/is_class.mjs';
import is_symbol from '../../src/variables/is_symbol.mjs';
import ExtensibleFunction from '../../src/classes/ExtensibleFunction.mjs';

/**
 * https://onlinephp.io?s=hZNRS8MwEMffA_kO9zBIC50w51vdfBBFQXQPvo1R0pjaQkhKclFh9Lubjg5XN5p7y_1_-d_luNzetXVLCSVf3BbypzUWE7RepjklUtQGNk-b4uHtJR8RFVcugiwj8tXiZppgDm2jP1mEiujbXURfZHCdwTKGscoYBqs1bFnJLdtFeC2_weHHveLOXSBFn4d36RAo2VMCIVpfqkbAjMMKtFcqH6fLkGYYbrBBGMmV1wIbo6EohNFhcl5gkg7MUKCPGdaNm68PNU5aHCy7Kee-dpKeOVqJ3gY17MyfS3c2jP6tkZ06Fgp9709du8iow6ymiefXx2lgfpk4HP_tbAbH3_EL&v=8.3.4
 */
it('var_export', () => {
    const logSpy = jest.spyOn(console, 'log');

    // php "true"
    var_export(true);
    expect(logSpy).toHaveBeenCalledWith('true');
    expect(eval(var_export(true, true))).toBe(true);

    // php "false"
    var_export(false);
    expect(logSpy).toHaveBeenCalledWith('false');
    expect(eval(var_export(false, true))).toBe(false);

    // php "3"
    var_export(3);
    expect(logSpy).toHaveBeenCalledWith('3');
    expect(eval(var_export(3, true))).toBe(3);

    // php "3.14"
    var_export(3.14);
    expect(logSpy).toHaveBeenCalledWith('3.14');
    expect(eval(var_export(3.14, true))).toBe(3.14);

    // php "'string'"
    var_export('string');
    expect(logSpy).toHaveBeenCalledWith("'string'");
    expect(eval(var_export('string', true))).toBe('string');

    // php "''"
    var_export('');
    expect(logSpy).toHaveBeenCalledWith("''");
    expect(eval(var_export('', true))).toBe('');

    // ! php array (
    // )
    var_export([]);
    expect(logSpy).toHaveBeenCalledWith('[]');
    expect(eval(var_export([], true))).toStrictEqual([]);
    var_export({});
    expect(logSpy).toHaveBeenCalledWith('{}');
    expect(eval(`const array = ${var_export({}, true)}; array;`)).toStrictEqual({});

    // ! php array (
    //   0 => 1,
    //   1 => 2,
    //   2 => 3,
    // )
    var_export([1, 2, 3]);
    expect(logSpy).toHaveBeenCalledWith('[\n  1,\n  2,\n  3,\n]');
    expect(eval(var_export([1, 2, 3], true))).toStrictEqual([1, 2, 3]);

    // ! php array (
    //   'foo' =>
    //   array (
    //     0 => 'bar',
    //   ),
    // )
    var_export({ foo: ['bar'] });
    expect(logSpy).toHaveBeenCalledWith("{\n  'foo': [\n    'bar',\n  ],\n}");
    expect(eval(`const array = ${var_export({ foo: ['bar'] }, true)}; array;`)).toStrictEqual({
        foo: ['bar'],
    });

    // ! php (object) array(
    // )
    var_export(new stdClass());
    expect(logSpy).toHaveBeenCalledWith('stdClass.__set_state({})');
    const obj = eval(
        `class stdClass {static __set_state(properties) {return Object.assign(new stdClass, properties)}}; const object = ${var_export(new stdClass(), true)}; object;`,
    );
    expect(Object.getPrototypeOf(obj).constructor.name).toBe('stdClass');
    expect(Object.keys(obj)).toEqual([]);

    class Test {
        a = new stdClass();
        b = 'test';

        test() {
            return true;
        }
    }
    // ! php \Test::__set_state(array(
    //    'a' =>
    //    (object) array(
    //    ),
    //     'b' => 'test',
    //  ))
    var_export(new Test());
    expect(logSpy).toHaveBeenCalledWith(
        "Test.__set_state({\n  'a': stdClass.__set_state({}),\n  'b': 'test',\n})",
    );
    const expected = new Test();
    expected.a = 'a';
    expected.b = 'b';
    expect(
        eval(
            `class stdClass {static __set_state(properties) {return Object.assign(new stdClass, properties);}} class Test {a = new stdClass; b = 'test'; test() {return true;} static __set_state(properties) {const object = new Test; object.a = 'a'; object.b = 'b'; return object;}} const object = ${var_export(new Test(), true)}; object;`,
        ),
    ).toEqual(expected);

    // ! php \Closure::__set_state(array(
    // ))
    var_export(() => true);
    expect(logSpy).toHaveBeenCalledWith('() => true');
    expect(is_callable(eval(`const func = ${var_export(() => true, true)}; func;`))).toBeTruthy();

    // ! php NULL
    var_export(null);
    expect(logSpy).toHaveBeenCalledWith('null');
    expect(eval(var_export(null, true))).toBe(null);

    // ! php INF
    var_export(Infinity);
    expect(logSpy).toHaveBeenCalledWith('Infinity');
    expect(eval(var_export(Infinity, true))).toBe(Infinity);

    // ! php -INF
    var_export(-Infinity);
    expect(logSpy).toHaveBeenCalledWith('-Infinity');
    expect(eval(var_export(-Infinity, true))).toBe(-Infinity);

    // js
    var_export(undefined);
    expect(logSpy).toHaveBeenCalledWith('undefined');
    expect(eval(var_export(undefined, true))).toBe(undefined);

    var_export(NaN);
    expect(logSpy).toHaveBeenCalledWith('NaN');
    expect(eval(var_export(NaN, true))).toBe(NaN);

    var_export(stdClass);
    expect(logSpy).toHaveBeenCalledWith(String(stdClass));
    expect(
        is_class(
            eval(
                `${var_export(ExtensibleFunction, true)}; ${var_export(stdClass, true)}; stdClass;`,
            ),
        ),
    ).toBeTruthy();

    var_export(Symbol());
    expect(logSpy).toHaveBeenCalledWith('Symbol()');
    expect(is_symbol(eval(var_export(Symbol(), true)))).toBeTruthy();
});
