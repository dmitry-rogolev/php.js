import { test, expect } from '@jest/globals';
import intval from '../../src/variables/intval.mjs';

class stdClass {}

/**
 * https://onlinephp.io?s=jZRdS8MwFIbvC_0PITfZ2Fra0guZgogoCqK7L2XU2bpCaUc_VBD_u0lnJVneLMtd6fPkvD05zdX1frd3HdfJt7uGsCKrunxF9MWIT8q6_8iq2cjM-fP6Yb25e3m6nOS-HaAry4JR3cmOI-gqdhyhumEeBra6gpFdMsnBV3hjkwWDCsdRMC7NVyIfGFh8eqmsFd5AWTjNklxYzm5kDP33DQcg636EZRpH1NZFHpDBLtCFwZblxZH9L3tnyJ5JDs6QA5MsZgrZsiwYQ2k-VDZbMCfsJdFGT7M5g5sO54oHUk8MMDgQbyQcv6MB0MbvT-_6tqzf9X7I-oFheAKT1H59JClsRUKLpuHp6WvWUnkbWWWc4ekZZ1iKI3T9222Vdd2pj6jzTzJxeJdiqLd92dRkNiffPziNyuB96qGqbL-kYLD9-HxvvQ04g87SM7mS6mmu6_wC&v=8.3.4
 */
test('intval', () => {
    // php false:                   0
    expect(intval(false)).toBe(0);

    // php true:                    1
    expect(intval(true)).toBe(1);

    // php 42:                      42
    expect(intval(42)).toBe(42);

    // php 4.2:                     4
    expect(intval(4.2)).toBe(4);

    // php 1e10:                    10000000000
    expect(intval(1e10)).toBe(10000000000);

    // php 0x1A:                    26
    expect(intval(0x1a)).toBe(26);

    // php 42000000:                42000000
    expect(intval(42000000)).toBe(42000000);

    // ! php 420000000000000000000:   -4275113695319687168
    expect(intval(420000000000000000000000000000000000000000000)).toBe(4);

    // ! php (42, 8): 42
    expect(intval(42, 8)).toBe(34);

    // php "42":                    42
    expect(intval('42')).toBe(42);

    // php "+42":                   42
    expect(intval('+42')).toBe(42);

    // php "-42":                   -42
    expect(intval('-42')).toBe(-42);

    // php "042":                   42
    expect(intval('042')).toBe(42);

    // ! php: 10000000000
    expect(intval('1e10')).toBe(1);

    // php "0x1A":                  0
    expect(intval('0x1A')).toBe(0);

    // php "0x1A", 0:               26
    expect(intval('0x1A', 0)).toBe(26);

    // ! php "420000000000000000000": 9223372036854775807
    expect(intval('420000000000000000000000000000000000000000000')).toBe(4.2e44);

    // php "42", 8:                 34
    expect(intval('42', 8)).toBe(34);

    // php "string":                0
    expect(intval('string')).toBe(0);

    // php []:                      0
    expect(intval([])).toBe(0);
    expect(intval({})).toBe(0);

    // php ["foo", "bar"]:          1
    expect(intval(['foo', 'bar'])).toBe(1);
    expect(intval({ 0: 'foo', 1: 'bar' })).toBe(1);

    // php stdClass:       1
    expect(intval(new stdClass())).toBe(1);

    // php function () {}: 1
    expect(intval(() => {})).toBe(1);

    // php null:           0
    expect(intval(null)).toBe(0);

    // php INF:            0
    expect(intval(Infinity)).toBe(0);

    // php -INF:           0
    expect(intval(-Infinity)).toBe(0);

    // js
    expect(intval(undefined)).toBe(0);
    expect(intval(NaN)).toBe(0);
    expect(intval(stdClass)).toBe(1);
    expect(intval(Symbol())).toBe(1);
});
