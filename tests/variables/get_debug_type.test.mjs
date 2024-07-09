import { test, expect } from '@jest/globals';
import get_debug_type from '../../src/variables/get_debug_type.mjs';

class stdClass {}

/**
 * https://onlinephp.io?s=hdBBC4IwFMDxu-B3eHiZHhTCTivwEEVBlHcRKV0qyBS3ERF997SQrJ5sx_H_vY23DJqiMQ3TYGlRA5GtYhQ-h4AHOZNJxs4qT-StYXafON11uA2T9XG_GKg_djj1UefN5pon-wSjlpBtyXOLTlPyTgjGo5jqfhzFGOTsCkJmq-okBMXhOJkakQ5-esQrgfsDG3FRPJVlzcF2uoJiI74T9B-qqjTb7xOM7g4bqllfl2DS_aGIdP_oEw%2C%2C&v=8.3.4
 */
test('get_debug_type', () => {
    // php true:           bool
    expect(get_debug_type(true)).toBe('bool');

    // php 3:              int
    expect(get_debug_type(3)).toBe('int');

    // php 3.14:           float
    expect(get_debug_type(3.14)).toBe('float');

    // php "string":       string
    expect(get_debug_type('string')).toBe('string');

    // php []:             array
    expect(get_debug_type([])).toBe('array');
    expect(get_debug_type({})).toBe('array');

    // php new stdClass:   stdClass
    expect(get_debug_type(new stdClass())).toBe('stdClass');

    // php new class:      class@anonymous
    expect(get_debug_type(new (class {})())).toBe('class@anonymous');

    // ! php function () {} : 'Closure'
    expect(get_debug_type(() => {})).toBe('function');

    // php null:           null
    expect(get_debug_type(null)).toBe('null');

    // php INF: float
    expect(get_debug_type(Infinity)).toBe('float');

    // php -INF: float
    expect(get_debug_type(-Infinity)).toBe('float');

    // js
    expect(get_debug_type(undefined)).toBe('undefined');
    expect(get_debug_type(NaN)).toBe('NaN');
    expect(get_debug_type(stdClass)).toBe('class');
    expect(get_debug_type(Symbol())).toBe('symbol');
});
