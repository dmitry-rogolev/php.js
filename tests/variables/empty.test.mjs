import { test, expect } from '@jest/globals';
import empty from '../../src/variables/empty.mjs';

class stdClass {}

/**
 * https://onlinephp.io?s=jZRfC4IwFMXfg77D2MsUcqj0ZIEPQdBLX8B6kFp_wKa4SUT03VNzbtaq6-O5-51z4Mqdx8WpGI_GI7Y75Ygc0kywCKmPUIddCnlzWt1FMSKyrBhBUfeUuBRvOJ4pvplqXPON_hNXBr5BmwY-INwbwj3rQeBpaIenIaw3HYTr3hQUTkMrXeugdIzt5TEGhGMhyzM_KgsNdzrEwsfW_rUOoYMvdACiW7V36Gn1GuDQjHUF7dBioAUkwQSF20-Llw7okGztG0x-wwoXcr_IUiHed8jZFakZyOhQ8Z0859xx0f0RGQfA1EFOvMoy2ylodJDBar20_ha1DjkGQ1wfg3_4Ew%2C%2C&v=8.3.4
 */
test('empty', () => {
    // php false:    true
    expect(empty(false)).toBeTruthy();

    // php true:     false
    expect(empty(true)).toBeFalsy();

    // php 0:        true
    expect(empty(0)).toBeTruthy();

    // php -0:       true
    expect(empty(-0)).toBeTruthy();

    // php 42:       false
    expect(empty(42)).toBeFalsy();

    // php 0.0:      true
    expect(empty(0.0)).toBeTruthy();

    // php 4.2:      false
    expect(empty(4.2)).toBeFalsy();

    // php "":       true
    expect(empty('')).toBeTruthy();

    // php "string": false
    expect(empty('string')).toBeFalsy();

    // php "0":      true
    expect(empty('0')).toBeTruthy();

    // php "1":      false
    expect(empty('1')).toBeFalsy();

    // php "false":  false
    expect(empty('false')).toBeFalsy();

    // php "true":   false
    expect(empty('true')).toBeFalsy();

    // php [1, 2]:   false
    expect(empty([1, 2])).toBeFalsy();
    expect(empty({ 0: 1, 1: 2 })).toBeFalsy();

    // php []:       true
    expect(empty([])).toBeTruthy();
    expect(empty({})).toBeTruthy();

    // php stdClass: false
    expect(empty(new stdClass())).toBeFalsy();

    // php function() {}: false
    expect(empty(() => {})).toBeFalsy();

    // php null:     true
    expect(empty(null)).toBeTruthy();

    // php INF:            false
    expect(empty(Infinity)).toBeFalsy();

    // php -INF:           false
    expect(empty(-Infinity)).toBeFalsy();

    // js
    expect(empty(undefined)).toBeTruthy();
    expect(empty(NaN)).toBeTruthy();
    expect(empty(stdClass)).toBeFalsy();
    expect(empty(Symbol())).toBeFalsy();
});
