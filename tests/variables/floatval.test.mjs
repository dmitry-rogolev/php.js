import { test, expect } from '@jest/globals';
import floatval from '../../src/variables/floatval.mjs';

class stdClass {}

/**
 * https://onlinephp.io?s=fdJBS8MwFMDx-2Df4dFLNmzL2vQ0BQ9jQ0F0B29lSJkpFUI7lnQexO9uMkzJiy-2t_7zS2iSu_tTd5rP5jNx7AZgbSOVWMP0MMihlUOjL41cXOPSfNk_7N-2L0-3Tunz6COsbMTIMe6bkPGIyYsqupSNNEt4so4uxTij_iqx03ksMCZGWPofS6OsqERWTjBg10jDVb4yeXvzazGcIm2Lssx5Zd7XThiOrR9pbsI06A_3I821UDq6UzYy-jTrA745CNYHaq2ap1CmUDiJiYv0ckq_b2SjFHk0vfgEN4Dm7dgf9cfQw2IJX9_BLuFIT9CPUkbvvI00e3zexe-8idQ2ZQFCJgvQDw%2C%2C&v=8.3.4
 */
test('floatval', () => {
    // php false:          0
    expect(floatval(false)).toBe(0);

    // php true:           1
    expect(floatval(true)).toBe(1);

    // php 3:              3
    expect(floatval(3)).toBe(3);

    // php 3.14:           3.14
    expect(floatval(3.14)).toBe(3.14);

    // php "3":              3
    expect(floatval('3')).toBe(3);

    // php "3.14":         3.14
    expect(floatval('3.14')).toBe(3.14);

    // php "3,14":         3
    expect(floatval('3,14')).toBe(3);

    // php "314e-2":       3.14
    expect(floatval('314e-2')).toBe(3.14);

    // php "0.0314E+2":    3.14
    expect(floatval('0.0314E+2')).toBe(3.14);

    // php "122.34343The": 122.34343
    expect(floatval('122.34343The')).toBe(122.34343);

    // php 'The122.34343': 0
    expect(floatval('The122.34343')).toBe(0);

    // php "test":         0
    expect(floatval('test')).toBe(0);

    // php []:             0
    expect(floatval([])).toBe(0);
    expect(floatval({})).toBe(0);

    // php [3, 2, 1]:      1
    expect(floatval([3, 2, 1])).toBe(1);
    expect(floatval({ 0: 3, 1: 2, 2: 1 })).toBe(1);

    // php stdClass:       1
    expect(floatval(new stdClass())).toBe(1);

    // php function () {}: 1
    expect(floatval(() => {})).toBe(1);

    // php null:           0
    expect(floatval(null)).toBe(0);

    // php INF:            INF
    expect(floatval(Infinity)).toBe(Infinity);

    // php -INF:           -INF
    expect(floatval(-Infinity)).toBe(-Infinity);

    // js
    expect(floatval(undefined)).toBe(0);
    expect(floatval(NaN)).toBe(0);
    expect(floatval(stdClass)).toBe(1);
    expect(floatval(Symbol())).toBe(1);
});
