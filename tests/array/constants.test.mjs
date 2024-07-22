import { expect, test } from '@jest/globals';
import {
    ARRAY_FILTER_USE_BOTH,
    ARRAY_FILTER_USE_KEY,
    CASE_LOWER,
    CASE_UPPER,
    COUNT_NORMAL,
    COUNT_RECURSIVE,
    EXTR_IF_EXISTS,
    EXTR_OVERWRITE,
    EXTR_PREFIX_ALL,
    EXTR_PREFIX_IF_EXISTS,
    EXTR_PREFIX_INVALID,
    EXTR_PREFIX_SAME,
    EXTR_REFS,
    EXTR_SKIP,
    SORT_ASC,
    SORT_DESC,
    SORT_FLAG_CASE,
    SORT_LOCALE_STRING,
    SORT_NATURAL,
    SORT_NUMERIC,
    SORT_REGULAR,
    SORT_STRING,
} from '../../src/array/constants.mjs';

test('constants', () => {
    expect(CASE_LOWER).toBe(0);
    expect(CASE_UPPER).toBe(1);
    expect(SORT_REGULAR).toBe(0);
    expect(SORT_NUMERIC).toBe(1);
    expect(SORT_STRING).toBe(2);
    expect(SORT_DESC).toBe(3);
    expect(SORT_ASC).toBe(4);
    expect(SORT_LOCALE_STRING).toBe(5);
    expect(SORT_NATURAL).toBe(6);
    expect(SORT_FLAG_CASE).toBe(8);
    expect(ARRAY_FILTER_USE_KEY).toBe(2);
    expect(ARRAY_FILTER_USE_BOTH).toBe(1);
    expect(COUNT_NORMAL).toBe(0);
    expect(COUNT_RECURSIVE).toBe(1);
    expect(EXTR_OVERWRITE).toBe(0);
    expect(EXTR_SKIP).toBe(1);
    expect(EXTR_PREFIX_SAME).toBe(2);
    expect(EXTR_PREFIX_ALL).toBe(3);
    expect(EXTR_PREFIX_INVALID).toBe(4);
    expect(EXTR_PREFIX_IF_EXISTS).toBe(5);
    expect(EXTR_IF_EXISTS).toBe(6);
    expect(EXTR_REFS).toBe(256);
});
