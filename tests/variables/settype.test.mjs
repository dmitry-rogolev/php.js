import { test, expect } from '@jest/globals';
import settype from '../../src/variables/settype.mjs';
import { stdClass } from '../../src/classes.mjs';

/**
 * https://onlinephp.io?s=rdVBa8IwGMbxe6Hf4UWEKNjQFk868SCKA9m8jyGZxinEtDSJQ8a--9p1Drw9-O7WNP_y482heZiWhzKO4qh7ViZompCvgh7HkdPeX0rda98PSLwVhdHKin69qbeHgkRTjkjU67OqNrtwKn_rv2S9XG_mzyuS16cxTP2nkwJIyhIShEh4xjAHjGHOOykJnZVkTiKhUSRvFiEApNPhGc5XR_sOSW3K9FKISplKBikZU9kr4zQk_ZRMrfmLQFgT8qyXbED5K2C1Ic-CHJ5h9Qc5v5sZ5RygXVOWuQ9264-FpV6fPr8A9fYD3rzBGEBsMpbz-LQAmLri3U0Yk9zlfAM%2C&v=8.3.4
 */
test('settype boolean', () => {
    // php true: bool(true)
    expect(settype(true, 'boolean')).toBeTruthy();

    // php true: bool(true)
    expect(settype(true, 'bool')).toBeTruthy();

    // php 0: bool(false)
    expect(settype(0, 'bool')).toBeFalsy();

    // php -0: bool(false)
    expect(settype(-0, 'bool')).toBeFalsy();

    // php 42: bool(true)
    expect(settype(42, 'bool')).toBeTruthy();

    // php 0.0: bool(false)
    expect(settype(0.0, 'bool')).toBeFalsy();

    // php 4.2: bool(true)
    expect(settype(4.2, 'bool')).toBeTruthy();

    // php "": bool(false)
    expect(settype('', 'bool')).toBeFalsy();

    // php "string": bool(true)
    expect(settype('string', 'bool')).toBeTruthy();

    // php "0": bool(false)
    expect(settype('0', 'bool')).toBeFalsy();

    // php "1": bool(true)
    expect(settype('1', 'bool')).toBeTruthy();

    // php "false": bool(true)
    expect(settype('false', 'bool')).toBeTruthy();

    // php "true": bool(true)
    expect(settype('true', 'bool')).toBeTruthy();

    // php [1, 2]: bool(true)
    expect(settype([1, 2], 'bool')).toBeTruthy();
    expect(settype({ 0: 1, 1: 2 }, 'bool')).toBeTruthy();

    // php []: bool(false)
    expect(settype([], 'bool')).toBeFalsy();
    expect(settype({}, 'bool')).toBeFalsy();

    // php stdClass: bool(true)
    expect(settype(new stdClass(), 'bool')).toBeTruthy();

    // php function () {}: bool(true)
    expect(settype(() => {}, 'bool')).toBeTruthy();

    // php null: bool(false)
    expect(settype(null, 'bool')).toBeFalsy();

    // php INF: bool(true)
    expect(settype(Infinity, 'bool')).toBeTruthy();

    // php -INF: bool(true)
    expect(settype(-Infinity, 'bool')).toBeTruthy();

    // js
    expect(settype(undefined, 'bool')).toBeFalsy();
    expect(settype(NaN, 'bool')).toBeFalsy();
    expect(settype(stdClass, 'bool')).toBeTruthy();
    expect(settype(Symbol(), 'bool')).toBeTruthy();
});

/**
 * https://onlinephp.io?s=rdVdS8MwFIDh-0L_w2EI2dhamtIrp4iIoiC6e5ERtrgVYlaaZE7E_26yOqEwyMGzXPXjbZ-EtvTiqlk3aZImZ1uhnIRLsK2T0zQx0trPRg674xNgtbZyJVs28iflYr0BFspzYH5_K9r50r03v_VfMrufzW-fHyE_bE2x1CmZN6EMwtlnJKgq40pV0ogcY-Q0hEtexJVQkZhix0WcCRXxqRT7gXk2XXkSrjfwdm-QJuJvyeLuoCoHNGaMc8ZkKMNBGRkqcFBBhsInhJFCR13Tjl-jFuU7InX0Vca9ikcuJE7G2LbWK4zelTTuhU-gfI1jXUejMAyN0PIDjF3eKGFMHDuUtH-10wtbbzQMR_D1jfhp93raap1ScTBUJObh6S6u-IiEZCgl-xfzAw%2C%2C&v=8.3.4
 */
test('settype integer', () => {
    // php true: int(1)
    expect(settype(true, 'integer')).toBe(1);

    // php true: int(1)
    expect(settype(true, 'int')).toBe(1);

    // php false: int(0)
    expect(settype(false, 'int')).toBe(0);

    // php 42: int(42)
    expect(settype(42, 'int')).toBe(42);

    // php 4.2: int(4)
    expect(settype(4.2, 'int')).toBe(4);

    // php 1e10: int(10000000000)
    expect(settype(1e10, 'int')).toBe(10000000000);

    // php 0x1a: int(26)
    expect(settype(0x1a, 'int')).toBe(26);

    // php 42000000: int(42000000)
    expect(settype(42000000, 'int')).toBe(42000000);

    // ! php 420000000000000000000: int(-4275113695319687168)
    expect(settype(420000000000000000000000000000000000000000000, 'int')).toBe(4);

    // php "42": int(42)
    expect(settype('42', 'int')).toBe(42);

    // php "+42": int(42)
    expect(settype('+42', 'int')).toBe(42);

    // php "-42": int(-42)
    expect(settype('-42', 'int')).toBe(-42);

    // php "042": int(42)
    expect(settype('042', 'int')).toBe(42);

    // ! php "1e10": int(10000000000)
    expect(settype('1e10', 'int')).toBe(1);

    // php "0x1A": int(0)
    expect(settype('0x1A', 'int')).toBe(0);

    // php "420000000000000000000": int(9223372036854775807)
    expect(settype('420000000000000000000000000000000000000000000', 'int')).toBe(4.2e44);

    // php "string": int(0)
    expect(settype('string', 'int')).toBe(0);

    // php [1, 2]: int(1)
    expect(settype([1, 2], 'int')).toBe(1);
    expect(settype({ 0: 1, 1: 2 }, 'int')).toBe(1);

    // php []: int(0)
    expect(settype([], 'int')).toBe(0);
    expect(settype({}, 'int')).toBe(0);

    // php stdClass: int(1)
    expect(settype(new stdClass(), 'int')).toBe(1);

    // php function () {}: int(1)
    expect(settype(() => {}, 'int')).toBe(1);

    // php null: int(0)
    expect(settype(null, 'int')).toBe(0);

    // php INF: int(0)
    expect(settype(Infinity, 'int')).toBe(0);

    // php -INF: int(0)
    expect(settype(-Infinity, 'int')).toBe(0);

    // js
    expect(settype(undefined, 'int')).toBe(0);
    expect(settype(NaN, 'int')).toBe(0);
    expect(settype(stdClass, 'int')).toBe(1);
    expect(settype(Symbol(), 'int')).toBe(1);
});

/**
 * https://onlinephp.io?s=rdVBS8MwGMbxe6Hf4WUI2bAta9OTUzzIREF0B28io66ZHcS2NMlExO9utroybw--0kub_vP-2lPOL9uqDYMwONkW2im6INs5NQsDo6z9aNW4X49IlI170UpM_Du1qhoSu_CMhH_eFt2ydG_tTzwki5vFcv5wR8nhbgZJa90U9j-hdaENJO1DFiURRvKIJM0hxXcsSEiBOCM5YjL-Q0HJl1wsgrGIj6W5ijOQ27dMcJpM_Zz5KWgOOZNNsyyRub8eK4XJxzuYuJ8wTMPw4x1M3NhuU79ibN_ywKc0ouwZ4fqSh2EQD6nVOxlbXunCGIQ7tLwTwdUru2lqGk_o8ws6Gn7t4P2x0xohdx0Lur2_RhyfsZgYdOI_Qd8%2C&v=8.3.4
 */
test('settype float', () => {
    // php true: float(1)
    expect(settype(true, 'double')).toBe(1);

    // php true: float(1)
    expect(settype(true, 'float')).toBe(1);

    // php false: float(0)
    expect(settype(false, 'float')).toBe(0);

    // php 3: float(3)
    expect(settype(3, 'float')).toBe(3);

    // php 3.14: float(3.14)
    expect(settype(3.14, 'float')).toBe(3.14);

    // php "3": float(3)
    expect(settype('3', 'float')).toBe(3);

    // php "3.14": float(3.14)
    expect(settype('3.14', 'float')).toBe(3.14);

    // php "3,14": float(3)
    expect(settype('3,14', 'float')).toBe(3);

    // php "314e-2": float(3.14)
    expect(settype('314e-2', 'float')).toBe(3.14);

    // php "0.0314E+2": float(3.14)
    expect(settype('0.0314E+2', 'float')).toBe(3.14);

    // php "122.34343The": float(122.34343)
    expect(settype('122.34343The', 'float')).toBe(122.34343);

    // php "The122.34343": float(0)
    expect(settype('The122.34343', 'float')).toBe(0);

    // php "string": float(0)
    expect(settype('string', 'float')).toBe(0);

    // php [1, 2]: float(1)
    expect(settype([1, 2], 'float')).toBe(1);
    expect(settype({ 0: 1, 1: 2 }, 'float')).toBe(1);

    // php []: float(0)
    expect(settype([], 'float')).toBe(0);
    expect(settype({}, 'float')).toBe(0);

    // php stdClass: float(1)
    expect(settype(new stdClass(), 'float')).toBe(1);

    // php function () {}: float(1)
    expect(settype(() => {}, 'float')).toBe(1);

    // php null: float(0)
    expect(settype(null, 'float')).toBe(0);

    // php INF: float(INF)
    expect(settype(Infinity, 'float')).toBe(Infinity);

    // php -INF: float(-INF)
    expect(settype(-Infinity, 'float')).toBe(-Infinity);

    // js
    expect(settype(undefined, 'float')).toBe(0);
    expect(settype(NaN, 'float')).toBe(0);
    expect(settype(stdClass, 'float')).toBe(1);
    expect(settype(Symbol(), 'float')).toBe(1);
});

/**
 * https://onlinephp.io?s=pZJdS8MwFIbvC_kPhyF0BfdR9MoqIkNRGDqoeDNGqF3mCrEt-ZjI6H83adbWwZDY5Ko950mfc156fVtuS-Qh72yXUEngBgSTJEIeJ0J8l2Ro6ufgc8Gy_MMPVI-k2wJ8DV6Br953CcNr-Vke4BZZPC7w_cscxs1TdGTaJJTbqWrSyTW18kydHKGVI3RyXIzDSyuNBp1MzSetbANTGTgZlysr13LVxzKZQCvKyRdwsZ7RhPOobv1lVW0jbq4YvSqfmKCBTw-R6usQC_aW0FfCBfL2yAN1SvlOsxQ2Mk9FVuSAsSjieoRhYIgDqA8jQjLNzOZ3cYxxZFoV8qpfaeolO5NVsh3umnC7yDCAffWPjI8v9k-6i0FSarW8Bp1-36fnByuR4pw8I1vRqJfpBw%2C%2C&v=8.3.4
 */
test('settype string', () => {
    // php true: string(1) "1"
    expect(settype(true, 'string')).toBe('1');

    // php false: string(0) ""
    expect(settype(false, 'string')).toBe('');

    // php 0: string(1) "0"
    expect(settype(0, 'string')).toBe('0');

    // php 1: string(1) "1"
    expect(settype(1, 'string')).toBe('1');

    // php 3.14: string(4) "3.14"
    expect(settype(3.14, 'string')).toBe('3.14');

    // php "string": string(6) "string"
    expect(settype('string', 'string')).toBe('string');

    // php []: string(5) "Array"
    expect(settype([], 'string')).toBe('Array');
    expect(settype({}, 'string')).toBe('Array');

    // ! php Fatal error: Uncaught Error: Object of class stdClass could not be converted to string
    expect(settype(new stdClass(), 'string')).toBe('[object stdClass]');

    class StrValTest {
        toString() {
            return StrValTest.name;
        }
    }
    // php StrValTest: string(10) "StrValTest"
    expect(settype(new StrValTest(), 'string')).toBe('StrValTest');

    // php Fatal error: Uncaught Error: Object of class Closure could not be converted to string
    expect(() => settype(() => {}, 'string')).toThrow(TypeError);

    // php null: string(0) ""
    expect(settype(null, 'string')).toBe('');

    // php INF: string(3) "INF"
    expect(settype(Infinity, 'string')).toBe('Infinity');

    // php -INF: string(4) "-INF"
    expect(settype(-Infinity, 'string')).toBe('-Infinity');

    // js
    expect(settype(undefined, 'string')).toBe('');
    expect(settype(NaN, 'string')).toBe('NaN');
    expect(() => settype(stdClass, 'string')).toThrow(TypeError);
    expect(() => settype(Symbol(), 'string')).toThrow(TypeError);
});

/**
 * https://onlinephp.io?s=pdTLisIwFIDhfSDvcBAhCipWXamDi2HEAXFcuBORWONYiDXk4iDiu0_jDXR18HSVNn_6BQLpD8zWcMZZ-SB1UPAB3gbV48wp749GVa7fayCktfIoqsWUSrd7ELHrgijeD9Iu12Fnbu0jmY6my6-fMTTuo94TtJHaoaRLSKKaGKZJIhIMkZCIdiPpYJTYkSAhMEypREOct1n-i6OuLQ2cLzDUfEFDkhq0cNClJGG5-gPn159aOoch7-07aBoXwkw5z9mJMygeE1Y6S6Es42nK-Mvzy-ZijtlY7Gh3SchTn-1zqFThdEZdKk8raMcQtMaQsSNB35MhxikyElNHOvW3oH8%2C&v=8.3.4
 */
test('settype array', () => {
    // php true: array(1) {
    //      [0]=>
    //      bool(true)
    // }
    expect(settype(true, 'array')).toStrictEqual([true]);

    // php false: array(1) {
    //      [0]=>
    //      bool(false)
    // }
    expect(settype(false, 'array')).toStrictEqual([false]);

    // php 0: array(1) {
    //      [0]=>
    //      int(0)
    // }
    expect(settype(0, 'array')).toStrictEqual([0]);

    // php 1: array(1) {
    //      [0]=>
    //      int(1)
    // }
    expect(settype(1, 'array')).toStrictEqual([1]);

    // php 3.14: array(1) {
    //      [0]=>
    //      float(3.14)
    // }
    expect(settype(3.14, 'array')).toStrictEqual([3.14]);

    // php "": array(1) {
    //      [0]=>
    //      string(0) ""
    // }
    expect(settype('', 'array')).toStrictEqual(['']);

    // php "string": array(1) {
    //      [0]=>
    //      string(6) "string"
    // }
    expect(settype('string', 'array')).toStrictEqual(['string']);

    // php []: array(0) {
    // }
    expect(settype([], 'array')).toStrictEqual([]);
    expect(settype({}, 'array')).toStrictEqual({});

    // php [1, 2]: array(2) {
    //      [0]=>
    //      int(1)
    //      [1]=>
    //      int(2)
    // }
    expect(settype([1, 2], 'array')).toStrictEqual([1, 2]);
    expect(settype({ 0: 1, 1: 2 }, 'array')).toStrictEqual({ 0: 1, 1: 2 });

    // php stdClass: array(0) {
    // }
    expect(settype(new stdClass(), 'array')).toStrictEqual({});

    class Test {
        a = 'a';
    }
    // php Test: array(1) {
    //      ["a"]=>
    //      string(1) "a"
    // }
    expect(settype(new Test(), 'array')).toStrictEqual({ a: 'a' });

    // php function () {}: array(1) {
    //      [0]=>
    //      object(Closure)#1 (0) {
    //      }
    // }
    function func() {}
    expect(settype(func, 'array')).toStrictEqual([func]);

    // php null: array(0) {
    // }
    expect(settype(null, 'array')).toStrictEqual([]);

    // php INF: array(1) {
    //      [0]=>
    //      float(INF)
    // }
    expect(settype(Infinity, 'array')).toStrictEqual([Infinity]);

    // php -INF: array(1) {
    //      [0]=>
    //      float(-INF)
    // }
    expect(settype(-Infinity, 'array')).toStrictEqual([-Infinity]);

    // js
    expect(settype(undefined, 'array')).toStrictEqual([]);
    expect(settype(NaN, 'array')).toStrictEqual([NaN]);
    expect(settype(stdClass, 'array')).toStrictEqual([stdClass]);
    // expect(settype(Symbol(), 'array')).toStrictEqual([Symbol()]);
});

/**
 * https://onlinephp.io?s=pdRNawIxEIDh-0L-wxCEKKi4tKfa4qG0tFBaD72JSDZG3ZJuwiaxFPG_N6lVsKfB2dN-vJMnENjbids4VrCis5UmariD0EY9ZoXXIXw73T2874Ow1YdWQfTSN602FkQOb0Ck561sF8v46f7iUzJ9mi4e3l5geLwbn0kraTyO-i1J1gjljEhGiTJKknE1LK9RTA5JkhAoh3Oa4kNbN2ukdYhp4myOsmZzmiJW1oq0cCVbgRR5GuF94GmE0_RGf4EPy3sjvUfZx_gSVeVBeNc-sGLHCkiXi5WpFXRkPmGZl9z_213OUTvLIe0vExsVattAtwe7Pe53czZCO4loDMrMIUl6fn1EQakjOQMsNLhI-gE%2C&v=8.3.4
 */
test('settype object', () => {
    // php true: object(stdClass)#1 (1) {
    //      ["scalar"]=>
    //      bool(true)
    // }
    expect(settype(true, 'object')).toHaveProperty('scalar', true);

    // php false: object(stdClass)#1 (1) {
    //      ["scalar"]=>
    //      bool(false)
    // }
    expect(settype(false, 'object')).toHaveProperty('scalar', false);

    // php 0: object(stdClass)#1 (1) {
    //      ["scalar"]=>
    //      int(0)
    // }
    expect(settype(0, 'object')).toHaveProperty('scalar', 0);

    // php 1: object(stdClass)#1 (1) {
    //     ["scalar"]=>
    //     int(1)
    // }
    expect(settype(1, 'object')).toHaveProperty('scalar', 1);

    // php 3.14: object(stdClass)#1 (1) {
    //      ["scalar"]=>
    //      float(3.14)
    // }
    expect(settype(3.14, 'object')).toHaveProperty('scalar', 3.14);

    // php "": object(stdClass)#1 (1) {
    //      ["scalar"]=>
    //      string(0) ""
    // }
    expect(settype('', 'object')).toHaveProperty('scalar', '');

    // php "string": object(stdClass)#1 (1) {
    //      ["scalar"]=>
    //      string(6) "string"
    // }
    expect(settype('string', 'object')).toHaveProperty('scalar', 'string');

    // php []: object(stdClass)#1 (0) {
    // }
    expect(settype([], 'object')).toBeInstanceOf(stdClass);
    expect(Object.keys(settype([], 'object'))).toStrictEqual([]);
    expect(settype({}, 'object')).toBeInstanceOf(stdClass);
    expect(Object.keys(settype({}, 'object'))).toStrictEqual([]);

    // php ["foo", "bar"]: object(stdClass)#1 (2) {
    //      ["0"]=>
    //      string(3) "foo"
    //      ["1"]=>
    //      string(3) "bar"
    // }
    let obj = settype(['foo', 'bar'], 'object');
    expect(obj).toBeInstanceOf(stdClass);
    expect(obj).toHaveProperty('0', 'foo');
    expect(obj).toHaveProperty('1', 'bar');

    obj = settype({ 0: 'foo', 1: 'bar' }, 'object');
    expect(obj).toBeInstanceOf(stdClass);
    expect(obj).toHaveProperty('0', 'foo');
    expect(obj).toHaveProperty('1', 'bar');

    // php stdClass: object(stdClass)#2 (0) {
    // }
    obj = settype(new stdClass(), 'object');
    expect(obj).toBeInstanceOf(stdClass);
    expect(Object.keys(obj)).toStrictEqual([]);

    class Test {
        a = 'a';
    }

    // php Test: object(Test)#1 (1) {
    //      ["a"]=>
    //      string(1) "a"
    // }
    obj = settype(new Test(), 'object');
    expect(obj).toBeInstanceOf(Test);
    expect(obj).toHaveProperty('a', 'a');

    // ! php function () {}: object(Closure)#2 (0) {
    // }
    function func() {}
    obj = settype(func, 'object');
    expect(obj).toBeInstanceOf(stdClass);
    expect(obj).toHaveProperty('function', func);

    // php null: object(stdClass)#2 (0) {
    // }
    obj = settype(null, 'object');
    expect(obj).toBeInstanceOf(stdClass);
    expect(Object.keys(obj)).toStrictEqual([]);

    // php INF: object(stdClass)#2 (1) {
    //      ["scalar"]=>
    //      float(INF)
    // }
    obj = settype(Infinity, 'object');
    expect(obj).toBeInstanceOf(stdClass);
    expect(obj).toHaveProperty('scalar', Infinity);

    // php -INF: object(stdClass)#2 (1) {
    //      ["scalar"]=>
    //      float(-INF)
    // }
    obj = settype(-Infinity, 'object');
    expect(obj).toBeInstanceOf(stdClass);
    expect(obj).toHaveProperty('scalar', -Infinity);

    // js

    obj = settype(undefined, 'object');
    expect(obj).toBeInstanceOf(stdClass);
    expect(Object.keys(obj)).toStrictEqual([]);

    obj = settype(NaN, 'object');
    expect(obj).toBeInstanceOf(stdClass);
    expect(obj).toHaveProperty('scalar', NaN);

    obj = settype(stdClass, 'object');
    expect(obj).toBeInstanceOf(stdClass);
    expect(Object.keys(obj)).toStrictEqual([]);

    obj = settype(Test, 'object');
    expect(obj).toBeInstanceOf(Test);
    expect(obj).toHaveProperty('a', 'a');

    // stdObject = new stdClass();
    // stdObject['symbol'] = Symbol();
    // expect(settype(Symbol(), 'object')).toStrictEqual(stdObject);
});

/**
 * https://onlinephp.io?s=s7EvyCjg5eLlUilLzClNVbBVUC8uKcrMS1e35uUqTi0pqSxI1YDI6Sio55Xm5KhrAmVSkzPyFdSVIEqVrBRAqssSi-JTSnMLoMrhygI8AuJd_X0U9GAsoAQA&v=8.3.4
 */
test('settype null', () => {
    // php "string": NULL
    expect(settype('string', 'null')).toBeNull();
});

test('settype undefined', () => {
    expect(settype('string', 'undefined')).toBeUndefined();
});

test('settype NaN', () => {
    expect(settype('string', 'NaN')).toBeNaN();
});
