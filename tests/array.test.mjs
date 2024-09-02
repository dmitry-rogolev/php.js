import { expect, test } from '@jest/globals';
import {
    array_change_key_case,
    array_chunk,
    array_column,
    array_combine,
    array_count_values,
    array_diff,
    array_diff_assoc,
    array_diff_key,
    array_diff_uassoc,
    array_diff_ukey,
    array_fill,
    array_fill_keys,
    array_filter,
    array_flip,
    array_index_max,
    array_index_min,
    array_intersect,
    array_intersect_assoc,
    array_intersect_key,
    array_intersect_uassoc,
    array_intersect_ukey,
    array_is_list,
    array_key_exists,
    array_key_first,
    array_key_last,
    array_keys,
    array_map,
    array_merge,
    array_merge_recursive,
    array_multisort,
    array_pad,
    array_pop,
    array_product,
    array_push,
    array_rand,
    array_reduce,
    array_reindex,
    array_replace,
    array_replace_recursive,
    array_reverse,
    array_search,
    array_shift,
    array_slice,
    array_splice,
    array_sum,
    array_udiff,
    array_udiff_assoc,
    array_udiff_uassoc,
    array_uintersect,
    array_uintersect_assoc,
    array_uintersect_uassoc,
    array_unique,
    array_unshift,
    array_values,
    array_walk,
    array_walk_recursive,
    count,
    in_array,
    key_exists,
    krsort,
    ksort,
    natcasesort,
    natsort,
    range,
    rsort,
    shuffle,
    sizeof,
    sort,
    uasort,
    uksort,
    usort,
} from '../src/array.mjs';

test('array', () => {
    expect(array_is_list).not.toBeUndefined();
    expect(array_change_key_case).not.toBeUndefined();
    expect(array_keys).not.toBeUndefined();
    expect(array_values).not.toBeUndefined();
    expect(array_combine).not.toBeUndefined();
    expect(array_chunk).not.toBeUndefined();
    expect(array_column).not.toBeUndefined();
    expect(array_count_values).not.toBeUndefined();
    expect(array_fill).not.toBeUndefined();
    expect(array_reduce).not.toBeUndefined();
    expect(count).not.toBeUndefined();
    expect(array_fill_keys).not.toBeUndefined();
    expect(array_filter).not.toBeUndefined();
    expect(array_flip).not.toBeUndefined();
    expect(array_key_exists).not.toBeUndefined();
    expect(array_key_first).not.toBeUndefined();
    expect(array_key_last).not.toBeUndefined();
    expect(array_map).not.toBeUndefined();
    expect(array_merge).not.toBeUndefined();
    expect(array_merge_recursive).not.toBeUndefined();
    expect(array_pad).not.toBeUndefined();
    expect(array_pop).not.toBeUndefined();
    expect(array_product).not.toBeUndefined();
    expect(array_index_max).not.toBeUndefined();
    expect(array_index_min).not.toBeUndefined();
    expect(array_push).not.toBeUndefined();
    expect(array_rand).not.toBeUndefined();
    expect(array_replace).not.toBeUndefined();
    expect(array_replace_recursive).not.toBeUndefined();
    expect(array_reverse).not.toBeUndefined();
    expect(array_search).not.toBeUndefined();
    expect(array_shift).not.toBeUndefined();
    expect(array_reindex).not.toBeUndefined();
    expect(array_slice).not.toBeUndefined();
    expect(array_splice).not.toBeUndefined();
    expect(array_sum).not.toBeUndefined();
    expect(array_unique).not.toBeUndefined();
    expect(array_unshift).not.toBeUndefined();
    expect(array_walk).not.toBeUndefined();
    expect(array_walk_recursive).not.toBeUndefined();
    expect(in_array).not.toBeUndefined();
    expect(key_exists).not.toBeUndefined();
    expect(range).not.toBeUndefined();
    expect(shuffle).not.toBeUndefined();
    expect(sizeof).not.toBeUndefined();
    expect(array_udiff_uassoc).not.toBeUndefined();
    expect(array_udiff_assoc).not.toBeUndefined();
    expect(array_udiff).not.toBeUndefined();
    expect(array_diff_uassoc).not.toBeUndefined();
    expect(array_diff).not.toBeUndefined();
    expect(array_diff_assoc).not.toBeUndefined();
    expect(array_diff_ukey).not.toBeUndefined();
    expect(array_diff_key).not.toBeUndefined();
    expect(array_uintersect_uassoc).not.toBeUndefined();
    expect(array_uintersect_assoc).not.toBeUndefined();
    expect(array_uintersect).not.toBeUndefined();
    expect(array_intersect).not.toBeUndefined();
    expect(array_intersect_uassoc).not.toBeUndefined();
    expect(array_intersect_assoc).not.toBeUndefined();
    expect(array_intersect_ukey).not.toBeUndefined();
    expect(array_intersect_key).not.toBeUndefined();
    expect(sort).not.toBeUndefined();
    expect(array_multisort).not.toBeUndefined();
    expect(rsort).not.toBeUndefined();
    expect(usort).not.toBeUndefined();
    expect(uksort).not.toBeUndefined();
    expect(uasort).not.toBeUndefined();
    expect(natsort).not.toBeUndefined();
    expect(natcasesort).not.toBeUndefined();
    expect(ksort).not.toBeUndefined();
    expect(krsort).not.toBeUndefined();
});
