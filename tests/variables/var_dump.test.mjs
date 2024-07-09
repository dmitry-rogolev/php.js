import { it, expect, jest } from '@jest/globals';
import var_dump from '../../src/variables/var_dump.mjs';

class stdClass {}

/**
 * https://onlinephp.io?s=hVJLa8MwDL4H8h90KDiBdNB1t67dYWPQy067hRDycNpA5gQ_tsPIf580XBKlewgfrE_yJ32W7h-G8xAGYfBe6Lx2b0NktZPxbgY0RWc4suXezeaOAcJY3aqT4CB304y7mwRuE9guUNH0vYD9AVJRFlpkPKzkBxhbP3aFMRSo6AKv0lgIg88wALTBlV1bwaqAPSjXdTsOlwgLiy-ED7Bw41Rl215Bnle9QlWuslHsc3wBspU9t2Z9-K4x68lTjn8xU-0ovmLU0jqNUZzFxDIutJPSSfeTLN3pqJr-5w-gQiS2prT_1NYXLlR73VU6IWSeksYkWnwjEpgSst_bZw3zjbt0QuXnXzHy-eM8GXB8eWb-egkQCW4ZHr-zXw%2C%2C&v=8.3.4
 */
it('var_dump', () => {
    const logSpy = jest.spyOn(console, 'log');

    // php "bool(true)"
    var_dump(true);
    expect(logSpy).toHaveBeenCalledWith('bool(true)\n');

    // php "bool(false)"
    var_dump(false);
    expect(logSpy).toHaveBeenCalledWith('bool(false)\n');

    // php "int(3)"
    var_dump(3);
    expect(logSpy).toHaveBeenCalledWith('int(3)\n');

    // php "float(3.14)"
    var_dump(3.14);
    expect(logSpy).toHaveBeenCalledWith('float(3.14)\n');

    // php 'string(6) "string"'
    var_dump('string');
    expect(logSpy).toHaveBeenCalledWith('string(6) "string"\n');

    // php 'string(0) ""'
    var_dump('');
    expect(logSpy).toHaveBeenCalledWith('string(0) ""\n');

    // php array(0) {
    // }
    var_dump([]);
    expect(logSpy).toHaveBeenCalledWith('array(0) {\n}\n');
    var_dump({});
    expect(logSpy).toHaveBeenCalledWith('array(0) {\n}\n');

    // php array(3) {
    //   [0]=>
    //   int(1)
    //   [1]=>
    //   int(2)
    //   [2]=>
    //   int(3)
    // }
    var_dump([1, 2, 3]);
    expect(logSpy).toHaveBeenCalledWith(
        'array(3) {\n  [0]=>\n  int(1)\n  [1]=>\n  int(2)\n  [2]=>\n  int(3)\n}\n',
    );

    // php array(1) {
    //   ["foo"]=>
    //   array(1) {
    //     [0]=>
    //     string(3) "bar"
    //   }
    // }
    var_dump({ foo: ['bar'] });
    expect(logSpy).toHaveBeenCalledWith(
        'array(1) {\n  ["foo"]=>\n  array(1) {\n    [0]=>\n    string(3) "bar"\n  }\n}\n',
    );

    // php object(stdClass)#1 (0) {
    // }
    var_dump(new stdClass());
    expect(logSpy).toHaveBeenCalledWith('object(stdClass)#1 (0) {\n}\n');

    class Test {
        a = new stdClass();
        b = 'test';

        test() {
            return true;
        }
    }
    // php object(Test)#1 (2) {
    //   ["a"]=>
    //   object(stdClass)#2 (0) {
    //   }
    //   ["b"]=>
    //   string(4) "test"
    // }
    var_dump(new Test());
    expect(logSpy).toHaveBeenCalledWith(
        'object(Test)#1 (2) {\n  ["a"]=>\n  object(stdClass)#2 (0) {\n  }\n  ["b"]=>\n  string(4) "test"\n}\n',
    );

    class DebugInfoTest {
        test = 'debug';

        __debugInfo() {
            return {
                debug: 'info',
            };
        }
    }
    // php object(DebugInfoTest)#1 (1) {
    //   ["debug"]=>
    //   string(4) "info"
    // }
    var_dump(new DebugInfoTest());
    expect(logSpy).toHaveBeenCalledWith(
        'object(DebugInfoTest)#1 (1) {\n  ["debug"]=>\n  string(4) "info"\n}\n',
    );

    // ! php object(Closure)#1 (0) {
    // }
    var_dump(() => {});
    expect(logSpy).toHaveBeenCalledWith('function () {}\n');

    // php NULL
    var_dump(null);
    expect(logSpy).toHaveBeenCalledWith('NULL\n');

    // ! php float(INF)
    var_dump(Infinity);
    expect(logSpy).toHaveBeenCalledWith('float(Infinity)\n');

    // ! php float(-INF)
    var_dump(-Infinity);
    expect(logSpy).toHaveBeenCalledWith('float(-Infinity)\n');

    // php bool(true)
    // int(3)
    // float(3.14)
    var_dump(true, 3, 3.14);
    expect(logSpy).toHaveBeenCalledWith('bool(true)\nint(3)\nfloat(3.14)\n');

    // js
    var_dump(undefined);
    expect(logSpy).toHaveBeenCalledWith('undefined\n');

    var_dump(NaN);
    expect(logSpy).toHaveBeenCalledWith('NaN\n');

    var_dump(stdClass);
    expect(logSpy).toHaveBeenCalledWith('class stdClass {}\n');

    var_dump(Symbol());
    expect(logSpy).toHaveBeenCalledWith('Symbol\n');
});
