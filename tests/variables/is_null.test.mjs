import { expect, test } from '@jest/globals';
import is_null from '../../src/variables/is_null.mjs';

class stdClass {}

/**
 * https://onlinephp.io?s=jZNBC4IwGIbvgv_hw8v0oGzUqQIPURREeRcRsYmCqDSlQ_TfcwsPfTv0XXZ43z3PvjG2i4d6cB3XkWXdAxsfk9wAgwj8RuXd1La-jgKIvx2Dua2KVkkWzJuSU5IfbpftgpsG8Sb7L1gUHOGcerZAoKCCq0isEasj-sieh3DGqGd73GI5HRYWLOiwvqPF65Cu0HsshQHJClNZjgWgvkCaIUOa0WE13vdtoRRSdPIJS0WXVVNXjk3fgR_A642_wk9Jl2oYTzcvdMH5ekT8nFDfKLTpkIB_AA%2C%2C&v=8.3.4
 */
test('is_null', () => {
    // php true: false
    expect(is_null(true)).toBeFalsy();

    // php false: false
    expect(is_null(false)).toBeFalsy();

    // php 0: false
    expect(is_null(0)).toBeFalsy();

    // php 1: false
    expect(is_null(1)).toBeFalsy();

    // php 3.14: false
    expect(is_null(3.14)).toBeFalsy();

    // php "": false
    expect(is_null('')).toBeFalsy();

    // php "0": false
    expect(is_null('0')).toBeFalsy();

    // php "1": false
    expect(is_null('1')).toBeFalsy();

    // php "3.14": false
    expect(is_null('3.14')).toBeFalsy();

    // php "true": false
    expect(is_null('true')).toBeFalsy();

    // php "false": false
    expect(is_null('false')).toBeFalsy();

    // php []: false
    expect(is_null([])).toBeFalsy();
    expect(is_null({})).toBeFalsy();

    // php stdClass: false
    expect(is_null(new stdClass())).toBeFalsy();

    // php function () {}: false
    expect(is_null(() => {})).toBeFalsy();

    // php null: true
    expect(is_null(null)).toBeTruthy();

    // php INF: false
    expect(is_null(Infinity)).toBeFalsy();

    // php -INF: false
    expect(is_null(-Infinity)).toBeFalsy();

    // js
    expect(is_null(undefined)).toBeFalsy();
    expect(is_null(NaN)).toBeFalsy();
    expect(is_null(stdClass)).toBeFalsy();
    expect(is_null(Symbol())).toBeFalsy();
});
