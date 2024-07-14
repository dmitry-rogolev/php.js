import { test, expect } from '@jest/globals';
import unserialize from '../../src/variables/unserialize.mjs';
import stdClass from '../../src/classes/stdClass.mjs';

/**
 * https://onlinephp.io?s=1VZLb5tAEL5b8n9YrSxhSyXh4aTpbJMeWlXKoc6lUQ9RZC0G19sSQDwSy9b-9-4C5uHgxfGpQcIedh7Mft_MLJ-_RKtoOBgOnmk8d7OnaJwFiRcz6rONN8YOmARPJuSw3lDqWa9eHZ-BrjZwwT4zpz0mxpkhrj4jlV5L4BJwksYs-I2JpjS0jzU0ACtNMBUmW65Km4IJWwmyADL_EbclBUvctkF6nG3prJs7b93auev28f4nvVyjYME2B2sZhpjkkkPjStpgUm2uXFpjwnmB18KnSYJ-ekmKhoPtcIDEFWWOzxZoRNE10lKh0khb4ZTPrdVlFixSFgZoPl-EgSAuW6TjSWFSBpbXKF2xRL9xROzAe0FJ6n6VKZQReTNwd3iZ0HgCyAlDH70KH3tpFgujOPPqkPwwdqZVIOPkoJvEgQr3_C7bgsGUlHXG4IK0ipjBJWkyuCOwisMZfCw4qGmqH3Ou9hnaSIaE3xW5gylgyQ8ueDYBU8mtWJVISFEsOVgYXsmcCjhxXvAiwCcyK6rKhdvZdymaQtSlzFVNtVdVXen21BcvH55P8-baB_SgPdH13PWidKWh6xtkPb63jA1Vxh2MqShpVILZWQmtlr6vXaXPG5pbKhxN2eIn9KBqXjS3OXJpSg-ODZl1bvGgUe2RdI6V1q5U3X8H5gXgPaD2wC3-W8j-on-9-0gxMul_AOmLSDKL1PP3LUCJ0Vfv-6gC_EHX32QfdAMVOn_kCZD5_tFnyShvq9c7Yku00zWXG5stXyaOm2ZSpRPSkTlpVBI_Cg8LcDMWrgaEeJecxe_AYJYPLdWgPT9HnQBU9IwF4lzxYTPr-VSUx5DaQq9N_gE%2C&v=8.3.4
 */
test('unserialize', () => {
    // php bool(true)
    expect(unserialize('b:1;')).toBe(true);

    // php bool(false)
    expect(unserialize('b:0;')).toBe(false);

    // php int(0)
    expect(unserialize('i:0;')).toBe(0);

    // php int(1)
    expect(unserialize('i:1;')).toBe(1);

    // php int(-1)
    expect(unserialize('i:-1;')).toBe(-1);

    // php float(3.14)
    expect(unserialize('d:3.14;')).toBe(3.14);

    // php float(0)
    expect(unserialize('d:0.0000;')).toBe(0);

    // php float(0)
    expect(unserialize('d:0;')).toBe(0);

    // php string(13) string(6) "string"
    expect(unserialize('s:6:"string";')).toBe('string');

    // php bool(false)
    expect(unserialize('s:3:"string";')).toBe(false);

    // php string(0) ""
    expect(unserialize('s:0:"";')).toBe('');

    // php array(0) {
    // }
    expect(unserialize('a:0:{}')).toStrictEqual([]);

    // php bool(false)
    expect(unserialize('a:1:{i:0;i:10;i:1;i:20;i:2;i:30;}')).toBe(false);

    // php array(3) {
    //   [0]=>
    //   int(10)
    //   [1]=>
    //   int(20)
    //   [2]=>
    //   int(30)
    // }
    expect(unserialize('a:3:{i:0;i:10;i:1;i:20;i:2;i:30;}')).toStrictEqual([10, 20, 30]);

    // php array(3) {
    //   [-1]=>
    //   int(10)
    //   [-2]=>
    //   int(20)
    //   [-3]=>
    //   int(30)
    // }
    expect(unserialize('a:3:{i:-1;i:10;i:-2;i:20;i:-3;i:30;}')).toStrictEqual({
        '-1': 10,
        '-2': 20,
        '-3': 30,
    });

    // php array(2) {
    //   ["foo"]=>
    //   string(3) "bar"
    //   ["baz"]=>
    //   array(1) {
    //     [0]=>
    //     string(3) "bax"
    //   }
    // }
    expect(unserialize('a:2:{s:3:"foo";s:3:"bar";s:3:"baz";a:1:{i:0;s:3:"bax";}}')).toStrictEqual({
        foo: 'bar',
        baz: ['bax'],
    });

    class Test {
        a = 'test';
        b = new stdClass();

        test() {
            return true;
        }
    }

    // php array(12) {
    //   [0]=>
    //   bool(true)
    //   [1]=>
    //   bool(false)
    //   [2]=>
    //   int(3)
    //   [3]=>
    //   float(3.14)
    //   [4]=>
    //   string(0) ""
    //   [5]=>
    //   string(6) "string"
    //   [6]=>
    //   array(3) {
    //     [0]=>
    //     int(1)
    //     [1]=>
    //     int(2)
    //     [2]=>
    //     int(3)
    //   }
    //   [7]=>
    //   array(1) {
    //     ["foo"]=>
    //     array(1) {
    //       ["bar"]=>
    //       array(1) {
    //         [0]=>
    //         string(3) "baz"
    //       }
    //     }
    //   }
    //   [8]=>
    //   object(Test)#1 (2) {
    //     ["a"]=>
    //     string(4) "test"
    //     ["b"]=>
    //     object(stdClass)#2 (0) {
    //     }
    //   }
    //   [9]=>
    //   NULL
    //   [10]=>
    //   float(INF)
    //   [11]=>
    //   float(-INF)
    // }
    expect(
        unserialize(
            'a:12:{i:0;b:1;i:1;b:0;i:2;i:3;i:3;d:3.14;i:4;s:0:"";i:5;s:6:"string";i:6;a:3:{i:0;i:1;i:1;i:2;i:2;i:3;}i:7;a:1:{s:3:"foo";a:1:{s:3:"bar";a:1:{i:0;s:3:"baz";}}}i:8;O:4:"Test":2:{s:1:"a";s:4:"test";s:1:"b";O:8:"stdClass":0:{}}i:9;N;i:10;d:Infinity;i:11;d:-Infinity;}',
            { allowed_classes: [Test] },
        ),
    ).toEqual([
        true,
        false,
        3,
        3.14,
        '',
        'string',
        [1, 2, 3],
        { foo: { bar: ['baz'] } },
        {
            a: 'test',
            b: expect.any(stdClass),
        },
        null,
        Infinity,
        -Infinity,
    ]);

    // ! php Warning: unserialize(): Maximum depth of 2 exceeded. The depth limit can be changed using the max_depth unserialize() option or the unserialize_max_depth ini setting
    // ! bool(false)
    expect(
        unserialize(
            'a:2:{s:3:"foo";a:1:{s:3:"bar";a:1:{s:3:"baz";a:1:{i:0;s:3:"bax";}}}s:3:"bav";a:1:{s:3:"bar";a:1:{s:3:"baz";a:1:{i:0;s:3:"bax";}}}}',
            { max_depth: 2 },
        ),
    ).toStrictEqual({
        foo: { bar: 'a:1:{s:3:"baz";a:1:{i:0;s:3:"bax";}}' },
        bav: { bar: 'a:1:{s:3:"baz";a:1:{i:0;s:3:"bax";}}' },
    });

    // php array(2) {
    //   ["foo"]=>
    //   array(1) {
    //     ["bar"]=>
    //     array(1) {
    //       ["baz"]=>
    //       array(1) {
    //         [0]=>
    //         string(3) "bax"
    //       }
    //     }
    //   }
    //   ["bav"]=>
    //   array(1) {
    //     ["bar"]=>
    //     array(1) {
    //       ["baz"]=>
    //       array(1) {
    //         [0]=>
    //         string(3) "bax"
    //       }
    //     }
    //   }
    // }
    expect(
        unserialize(
            'a:2:{s:3:"foo";a:1:{s:3:"bar";a:1:{s:3:"baz";a:1:{i:0;s:3:"bax";}}}s:3:"bav";a:1:{s:3:"bar";a:1:{s:3:"baz";a:1:{i:0;s:3:"bax";}}}}',
            { max_depth: 0 },
        ),
    ).toStrictEqual({
        foo: { bar: { baz: ['bax'] } },
        bav: { bar: { baz: ['bax'] } },
    });

    // php object(stdClass)#1 (0) {
    // }
    expect(unserialize('O:8:"stdClass":0:{}')).toBeInstanceOf(stdClass);
    expect(Object.keys(unserialize('O:8:"stdClass":0:{}'))).toEqual([]);

    // php object(Test)#1 (1) {
    //   ["a"]=>
    //   string(4) "test"
    // }
    const obj = unserialize('O:4:"Test":1:{s:1:"a";s:4:"test";}', {
        allowed_classes: [Test],
    });
    expect(obj).toBeInstanceOf(Test);
    expect(obj).toHaveProperty('a', 'test');

    // object(UnserializeTest)#1 (2) {
    //   ["a"]=>
    //   string(1) "a"
    //   ["b"]=>
    //   string(4) "test"
    // }
    class UnserializeTest {
        a = 'test';
        b = 'b';

        test() {
            return true;
        }

        __unserialize(data) {
            this.a = data.a;
            this.b = 'test';
        }
    }
    let expected = new UnserializeTest();
    expected.a = 'a';
    expected.b = 'test';
    expect(
        unserialize('O:15:"UnserializeTest":1:{s:1:"a";s:1:"a";}', {
            allowed_classes: [UnserializeTest],
        }),
    ).toStrictEqual(expected);

    // php object(WakeUpTest)#1 (2) {
    //   ["a"]=>
    //   string(4) "test"
    //   ["b"]=>
    //   string(4) "test"
    // }
    class WakeUpTest {
        a = 'a';
        b = 'b';

        test() {
            return true;
        }

        __wakeup() {
            this.b = 'test';
        }
    }
    expected = new WakeUpTest();
    expected.a = 'test';
    expected.b = 'test';
    expect(
        unserialize('O:10:"WakeUpTest":1:{s:1:"a";s:4:"test";}', {
            allowed_classes: [WakeUpTest],
        }),
    ).toStrictEqual(expected);

    class MaxDepthTest {
        obj = null;

        constructor(depth) {
            if (depth) {
                this.obj = new MaxDepthTest(depth - 1);
            }
        }
    }
    // ! php Warning: unserialize(): Maximum depth of 2 exceeded. The depth limit can be changed using the max_depth unserialize() option or the unserialize_max_depth ini setting
    // ! bool(false)
    expected = new MaxDepthTest(1);
    expected.obj.obj =
        'O:12:"MaxDepthTest":1:{s:3:"obj";O:12:"MaxDepthTest":1:{s:3:"obj";O:12:"MaxDepthTest":1:{s:3:"obj";O:12:"MaxDepthTest":1:{s:3:"obj";N;}}}}';
    expect(
        unserialize(
            'O:12:"MaxDepthTest":1:{s:3:"obj";O:12:"MaxDepthTest":1:{s:3:"obj";O:12:"MaxDepthTest":1:{s:3:"obj";O:12:"MaxDepthTest":1:{s:3:"obj";O:12:"MaxDepthTest":1:{s:3:"obj";O:12:"MaxDepthTest":1:{s:3:"obj";N;}}}}}}',
            { allowed_classes: [MaxDepthTest], max_depth: 2 },
        ),
    ).toStrictEqual(expected);

    // php NULL
    expect(unserialize('N;')).toBeNull();

    // ! php float(INF)
    expect(unserialize('d:Infinity;')).toBe(Infinity);

    // ! php float(-INF)
    expect(unserialize('d:-Infinity;')).toBe(-Infinity);

    // js
    expect(unserialize('u;')).toBeUndefined();
    expect(unserialize('NaN;')).toBeNaN();
});
