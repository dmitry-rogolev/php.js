import { test, expect } from '@jest/globals';
import boolval from '../../src/variables/boolval.mjs';

class stdClass {}

/**
 * https://onlinephp.io?s=jZRNC4JAEIbvgf9h2Msq1KLiyYIOQdClP2AdrOwDljVarUP031NraxS3xqOP78M7jMxkej6enYEzyLbHHPg-lTqL4fNw4W7yXF5T6TbIgynw4lJmHOL319wTbKXY2ChqigxYUaOfBuPwsaDt8AkVRp08io8o-Si05qOQNoBoV8ADCFIFEdoEFSJ1YMw6BWOECkwXl5M6fCw4_0YUi89sg1SIIgjsgoAkaN5-JUhgAgRJjVERLGmSpJUkwRDCda_lhQhNkrV1rcnvvDHoYjeTqdY9i1XZDQwmufal2hanXIHrwf0Rtw5GC5FsqpTScjtqRHIslnPb_1IhyvXoGPD1-Gd4Ag%2C%2C&v=8.3.4
 */
test('boolval', () => {
    // php false:    false
    expect(boolval(false)).toBeFalsy();

    // php true:     true
    expect(boolval(true)).toBeTruthy();

    // php 0:        false
    expect(boolval(0)).toBeFalsy();

    // php -0:       false
    expect(boolval(-0)).toBeFalsy();

    // php 42:       true
    expect(boolval(42)).toBeTruthy();

    // php 0.0:      false
    expect(boolval(0.0)).toBeFalsy();

    // php 4.2:      true
    expect(boolval(4.2)).toBeTruthy();

    // php "":       false
    expect(boolval('')).toBeFalsy();

    // php "string": true
    expect(boolval('string')).toBeTruthy();

    // php "0":      false
    expect(boolval('0')).toBeFalsy();

    // php "1":      true
    expect(boolval('1')).toBeTruthy();

    // php "false":  true
    expect(boolval('false')).toBeTruthy();

    // php "true":   true
    expect(boolval('true')).toBeTruthy();

    // php [1, 2]:   true
    expect(boolval([1, 2])).toBeTruthy();
    expect(boolval({ 0: 1, 1: 2 })).toBeTruthy();

    // php []:       false
    expect(boolval([])).toBeFalsy();
    expect(boolval({})).toBeFalsy();

    // php stdClass: true
    expect(boolval(new stdClass())).toBeTruthy();

    // php function () {}: true
    expect(boolval(() => {})).toBeTruthy();

    // php null:     false
    expect(boolval(null)).toBeFalsy();

    // php INF:            true
    expect(boolval(Infinity)).toBeTruthy();

    // php -INF:           true
    expect(boolval(-Infinity)).toBeTruthy();

    // js
    expect(boolval(undefined)).toBeFalsy();
    expect(boolval(NaN)).toBeFalsy();
    expect(boolval(stdClass)).toBeTruthy();
    expect(boolval(Symbol())).toBeTruthy();
});
