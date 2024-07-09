import { expect, test } from '@jest/globals';
import arrval from '../../src/variables/arrval.mjs';

class stdClass {}

/**
 * https://onlinephp.io?s=fdJLi8IwFAXgfSD_4SJCWhjFqis74kIUB8Rx4U5EMrWjhRhLHiMi_vcxPhCh92Z7znfuJp-Dcldyxlme7Q4gnPF5D0TK2Z80643fl1EkjZGnGEIUp4_ifDJfj76n6Uv-SmUxessI20JcizAJYhLCdJpJF2EhImSthjghKGWdKfQWtfeYWliuELtcUSr5gDYqbyGhrdsMlbQW8ZHOj_DsxJU7WYhgkVvH2ZkzuL7S_6gig7qEPggZhi_Pe682dTHk1dce_8_rzBUHDVEM5wv2Ed9KxJr2SiEbISLk12yMwGtCuAYOG9XyHw%2C%2C&v=8.3.4
 */
test('arrval', () => {
    // php true: array(1) {
    //      [0]=>
    //      bool(true)
    // }
    expect(arrval(true)).toStrictEqual([true]);

    // php false: array(1) {
    //      [0]=>
    //      bool(false)
    // }
    expect(arrval(false)).toStrictEqual([false]);

    // php 0: array(1) {
    //      [0]=>
    //      int(0)
    // }
    expect(arrval(0)).toStrictEqual([0]);

    // php 1: array(1) {
    //      [0]=>
    //      int(1)
    // }
    expect(arrval(1)).toStrictEqual([1]);

    // php 3.14: array(1) {
    //      [0]=>
    //      float(3.14)
    // }
    expect(arrval(3.14)).toStrictEqual([3.14]);

    // php "": array(1) {
    //      [0]=>
    //      string(0) ""
    // }
    expect(arrval('')).toStrictEqual(['']);

    // php "string": array(1) {
    //      [0]=>
    //      string(6) "string"
    // }
    expect(arrval('string')).toStrictEqual(['string']);

    // php []: array(0) {
    // }
    expect(arrval([])).toStrictEqual([]);
    expect(arrval({})).toStrictEqual({});

    // php [1, 2]: array(2) {
    //      [0]=>
    //      int(1)
    //      [1]=>
    //      int(2)
    // }
    expect(arrval([1, 2])).toStrictEqual([1, 2]);
    expect(arrval({ 0: 1, 1: 2 })).toStrictEqual({ 0: 1, 1: 2 });

    // php stdClass: array(0) {
    // }
    expect(arrval(new stdClass())).toStrictEqual({});

    class Test {
        a = 'a';
    }
    // php Test: array(1) {
    //      ["a"]=>
    //      string(1) "a"
    // }
    expect(arrval(new Test())).toStrictEqual({ a: 'a' });

    // php function () {}: array(1) {
    //      [0]=>
    //      object(Closure)#1 (0) {
    //      }
    // }
    function func() {}
    expect(arrval(func)).toStrictEqual([func]);

    // php null: array(0) {
    // }
    expect(arrval(null)).toStrictEqual([]);

    // php INF: array(1) {
    //      [0]=>
    //      float(INF)
    // }
    expect(arrval(Infinity)).toStrictEqual([Infinity]);

    // php -INF: array(1) {
    //      [0]=>
    //      float(-INF)
    // }
    expect(arrval(-Infinity)).toStrictEqual([-Infinity]);

    // js
    expect(arrval(undefined)).toStrictEqual([]);
    expect(arrval(NaN)).toStrictEqual([NaN]);
    expect(arrval(stdClass)).toStrictEqual([stdClass]);
    // expect(arrval(Symbol())).toStrictEqual([Symbol()]);
});
