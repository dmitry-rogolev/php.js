import { test, expect } from '@jest/globals';
import serialize from '../../src/variables/serialize.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';

class stdClass {}

/**
 * https://onlinephp.io?s=xZRPa4NAEMXvgt9hDoVVsI02OTVNeygUeumlvYnIatZE2Krsn7Yk-N27axQNZGgChQ6oq7_n8HyDe__YbBvXcZ1PKtK1_mg8yURJebljnhKa-f7yJCsolygMMRBh4Bol85togTEilSirDcF4HIUB3JpjHiaohhR1TWD1ACSjggT2suvuY7P6Jgn6ZsW-QKr1E6dSdprcruCdSQWus3cdMNXojJc5XFFYAVEGkeUBTM-9qNBVrsq6Aqvz_DvI6pr3kr6dLcGUFkZkptP3al2nRS1aPxN7bwO0z3-3OYDMguzY_B_Yxpul6fgZPtYsHp_YIvQwSGrGOHa2lZyT1FE008g4Y82ZY_3PvKzNS7IKLg5oCKILZzaDUxvDYMjzYd-i_47mHGMvr8_oNjGwHw%2C%2C&v=8.3.4
 */
test('serialize', () => {
    // php string(4) "b:1;"
    expect(serialize(true)).toBe('b:1;');

    // php string(4) "b:0;"
    expect(serialize(false)).toBe('b:0;');

    // php string(4) "i:0;"
    expect(serialize(0)).toBe('i:0;');

    // php string(4) "i:1;"
    expect(serialize(1)).toBe('i:1;');

    // php string(5) "i:-1;"
    expect(serialize(-1)).toBe('i:-1;');

    // php string(7) "d:3.14;"
    expect(serialize(3.14)).toBe('d:3.14;');

    // php string(13) "s:6:"string";"
    expect(serialize('string')).toBe('s:6:"string";');

    // php string(33) "a:3:{i:0;i:10;i:1;i:20;i:2;i:30;}"
    expect(serialize([10, 20, 30])).toBe('a:3:{i:0;i:10;i:1;i:20;i:2;i:30;}');

    // php string(56) "a:2:{s:3:"foo";s:3:"bar";s:3:"baz";a:1:{i:0;s:3:"bax";}}"
    expect(serialize({ foo: 'bar', baz: ['bax'] })).toBe(
        'a:2:{s:3:"foo";s:3:"bar";s:3:"baz";a:1:{i:0;s:3:"bax";}}',
    );

    // php string(19) "O:8:"stdClass":0:{}"
    expect(serialize(new stdClass())).toBe('O:8:"stdClass":0:{}');

    // php string(34) "O:4:"Test":1:{s:1:"a";s:4:"test";}"
    class Test {
        a = 'test';
        #b = 'private';

        test() {
            return true;
        }
    }
    expect(serialize(new Test())).toBe('O:4:"Test":1:{s:1:"a";s:4:"test";}');

    class SerializeTest {
        a = 'test';
        b = 'b';

        test() {
            return true;
        }

        __serialize() {
            return {
                a: 'a',
            };
        }
    }
    // php string(41) "O:13:"SerializeTest":1:{s:1:"a";s:1:"a";}"
    expect(serialize(new SerializeTest())).toBe('O:13:"SerializeTest":1:{s:1:"a";s:1:"a";}');

    // php string(39) "O:9:"SleepTest":1:{s:1:"a";s:4:"test";}"
    class SleepTest {
        a = 'test';
        b = 'b';

        test() {
            return true;
        }

        __sleep() {
            return ['a'];
        }
    }
    expect(serialize(new SleepTest())).toBe('O:9:"SleepTest":1:{s:1:"a";s:4:"test";}');

    // php Fatal error: Uncaught Exception: Serialization of 'Closure' is not allowed
    expect(() => serialize(() => {})).toThrow(TypePHPJSError);

    // php string(2) "N;"
    expect(serialize(null)).toBe('N;');

    // ! php string(6) "d:INF;"
    expect(serialize(Infinity)).toBe('d:Infinity;');

    // ! php string(7) "d:-INF;"
    expect(serialize(-Infinity)).toBe('d:-Infinity;');

    // js
    expect(serialize(undefined)).toBe('u;');
    expect(serialize(NaN)).toBe('NaN;');
    expect(() => serialize(stdClass)).toThrow(TypePHPJSError);
    expect(() => serialize(Symbol())).toThrow(TypePHPJSError);
});
