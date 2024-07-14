import { test, expect } from '@jest/globals';
import objval from '../../src/variables/objval.mjs';
import stdClass from '../../src/classes/stdClass.mjs';

/**
 * https://onlinephp.io?s=fdJBSwMxEAXgeyD_YQhCdqGVLnpyFQ-iKIj24K2Ukk1TuxKTZZPoofS_u9GWIuxMru99by65vu22HWecGb31IGOfzBXImrMv1a_W6bMrCt98GB1LyFlZH5rzx_nq_vW5PtGNsgG1vyGBZxicEajCUEWgi_PqEnM5I6gQGJSSYiH2rXvH8V9OTSyWGF4sKSY23osJiEb1Ap-QQ0tOQA4tSc2FuL6zKgRsqHDmG46lcnRI5wjeTIic7TiD4XWpsa2GMwU3IFVe3h8PntrkyVwYP3f4mcnp2HoHRQm7PfpF_7WIOZesxUZyRtCnlwdMDhEBp4ScjtMf&v=8.3.4
 */
test('objval', () => {
    // php true: object(stdClass)#1 (1) {
    //      ["scalar"]=>
    //      bool(true)
    // }
    expect(objval(true)).toBeInstanceOf(stdClass);
    expect(objval(true)).toHaveProperty('scalar', true);

    // php false: object(stdClass)#1 (1) {
    //      ["scalar"]=>
    //      bool(false)
    // }
    expect(objval(false)).toBeInstanceOf(stdClass);
    expect(objval(false)).toHaveProperty('scalar', false);

    // php 0: object(stdClass)#1 (1) {
    //      ["scalar"]=>
    //      int(0)
    // }
    expect(objval(0)).toBeInstanceOf(stdClass);
    expect(objval(0)).toHaveProperty('scalar', 0);

    // php 1: object(stdClass)#1 (1) {
    //     ["scalar"]=>
    //     int(1)
    // }
    expect(objval(1)).toBeInstanceOf(stdClass);
    expect(objval(1)).toHaveProperty('scalar', 1);

    // php 3.14: object(stdClass)#1 (1) {
    //      ["scalar"]=>
    //      float(3.14)
    // }
    expect(objval(3.14)).toBeInstanceOf(stdClass);
    expect(objval(3.14)).toHaveProperty('scalar', 3.14);

    // php "": object(stdClass)#1 (1) {
    //      ["scalar"]=>
    //      string(0) ""
    // }
    expect(objval('')).toBeInstanceOf(stdClass);
    expect(objval('')).toHaveProperty('scalar', '');

    // php "string": object(stdClass)#1 (1) {
    //      ["scalar"]=>
    //      string(6) "string"
    // }
    expect(objval('string')).toBeInstanceOf(stdClass);
    expect(objval('string')).toHaveProperty('scalar', 'string');

    // php []: object(stdClass)#1 (0) {
    // }
    expect(objval([])).toBeInstanceOf(stdClass);
    expect(Object.keys(objval([]))).toStrictEqual([]);

    expect(objval({})).toBeInstanceOf(stdClass);
    expect(Object.keys(objval({}))).toStrictEqual([]);

    // php ["foo", "bar"]: object(stdClass)#1 (2) {
    //      ["0"]=>
    //      string(3) "foo"
    //      ["1"]=>
    //      string(3) "bar"
    // }
    let obj = objval(['foo', 'bar']);
    expect(obj).toBeInstanceOf(stdClass);
    expect(obj).toHaveProperty('0', 'foo');
    expect(obj).toHaveProperty('1', 'bar');

    obj = objval({ 0: 'foo', 1: 'bar' });
    expect(objval({})).toBeInstanceOf(stdClass);
    expect(obj).toHaveProperty('0', 'foo');
    expect(obj).toHaveProperty('1', 'bar');

    // php stdClass: object(stdClass)#2 (0) {
    // }
    expect(objval(new stdClass())).toBeInstanceOf(stdClass);
    expect(Object.keys(objval(new stdClass()))).toStrictEqual([]);

    class Test {
        a = 'a';
    }

    // php Test: object(Test)#1 (1) {
    //      ["a"]=>
    //      string(1) "a"
    // }
    expect(objval(new Test())).toBeInstanceOf(Test);
    expect(objval(new Test())).toHaveProperty('a', 'a');

    // ! php function () {}: object(Closure)#2 (0) {
    // }
    function func() {}
    expect(objval(func)).toBeInstanceOf(stdClass);
    expect(objval(func)).toHaveProperty('function', func);

    // php null: object(stdClass)#2 (0) {
    // }
    expect(objval(null)).toBeInstanceOf(stdClass);
    expect(Object.keys(objval(null))).toStrictEqual([]);

    // php INF: object(stdClass)#2 (1) {
    //      ["scalar"]=>
    //      float(INF)
    // }
    expect(objval(Infinity)).toBeInstanceOf(stdClass);
    expect(objval(Infinity)).toHaveProperty('scalar', Infinity);

    // php -INF: object(stdClass)#2 (1) {
    //      ["scalar"]=>
    //      float(-INF)
    // }
    expect(objval(-Infinity)).toBeInstanceOf(stdClass);
    expect(objval(-Infinity)).toHaveProperty('scalar', -Infinity);

    // js

    expect(objval(undefined)).toBeInstanceOf(stdClass);
    expect(Object.keys(objval(undefined))).toStrictEqual([]);

    expect(objval(NaN)).toBeInstanceOf(stdClass);
    expect(objval(NaN)).toHaveProperty('scalar', NaN);

    expect(objval(stdClass)).toBeInstanceOf(stdClass);
    expect(Object.keys(objval(stdClass))).toStrictEqual([]);

    expect(objval(Test)).toStrictEqual(new Test());
    expect(objval(Test)).toBeInstanceOf(Test);
    expect(objval(Test)).toHaveProperty('a', 'a');
});
