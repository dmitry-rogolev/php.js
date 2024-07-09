import { test, expect } from '@jest/globals';
import gettype from '../../src/variables/gettype.mjs';

class stdClass {}

/**
 * https://onlinephp.io?s=s7EvyCjg5eLlSk3OyFdQLykqTbVSQAB1BT2F9NSSksqCVA2QnCaQH-AREO_q72MN02OMrAFNjzFWDXqGJrgsAclh06NUXFKUmZeuZIVFjzpETh2bvuhYK5yOi47FpiMvtVyhuCTFOSexuNgKTQeyHDa9aaV5ySWZ-XkKGpoK1bVWKHpR5bDaXJqTgytcQHLY9Hj6uVnh8h9QDpsWXTQ9yFp0MfQAAA%2C%2C&v=8.3.4
 */
test('gettype', () => {
    // php true:           boolean
    expect(gettype(true)).toBe('boolean');

    // php 3:              integer
    expect(gettype(3)).toBe('integer');

    // php 3.14:           double
    expect(gettype(3.14)).toBe('double');

    // php "string":       string
    expect(gettype('string')).toBe('string');

    // php []:             array
    expect(gettype([])).toBe('array');
    expect(gettype({})).toBe('array');

    // php new stdClass:   object
    expect(gettype(new stdClass())).toBe('object');

    // ! php function () {} : 'object'
    expect(gettype(() => {})).toBe('function');

    // php null:           NULL
    expect(gettype(null)).toBe('NULL');

    // php INF: double
    expect(gettype(Infinity)).toBe('double');

    // php -INF: double
    expect(gettype(-Infinity)).toBe('double');

    // js
    expect(gettype(undefined)).toBe('undefined');
    expect(gettype(NaN)).toBe('NaN');
    expect(gettype(stdClass)).toBe('class');
    expect(gettype(Symbol())).toBe('symbol');
});
