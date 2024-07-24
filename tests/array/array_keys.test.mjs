import { expect, test } from '@jest/globals';
import array_keys from '../../src/array/array_keys.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';

// https://onlinephp.io?s=rZHNCoJAEIDvgu8w7GUN9uDWTfs5BR2CuoeI2vZD4sqkB3v6dkojKBeMTrszzHzzMTNdlKfSdVxHZScNfCcFjAVMogB46DolnosqRi9BTJr4opqr96oYjcK2a7vaxsvNOnzD-DCbg_R9ASzTuUZGMUO1ZxaypckyjO14mteKC-CmlJ4jKlXQp8s_3qj7BMB6BAaCftyAyRy0fsZpgr9t5ANCUgnanczpmDStY_t5ueRUI0BaaS8BwpLDQ4b4Jrp1agWpmWz_xGGcfymZigpr9RetlvVN7Q4%2C&v=8.2.20

test('array_keys выбрасывает ошибку TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_keys(false)).toThrow(TypePHPJSError);
    expect(() => array_keys([], null, 'wrong')).toThrow(TypePHPJSError);
});

test('array_keys возвращает все ключи массива при отсутствии параметра filter_value.', () => {
    expect(array_keys([1, 2, 3])).toStrictEqual(['0', '1', '2']);
    expect(array_keys({ 0: 100, color: 'red' })).toStrictEqual(['0', 'color']);
});

test('array_keys возвращает ключи только заданного значения, если определён параметр filter_value.', () => {
    expect(array_keys(['blue', 'red', 'green', 'blue', 'blue'], 'blue')).toStrictEqual([
        '0',
        '3',
        '4',
    ]);
    expect(array_keys({ 0: 100, color: 'blue', foo: 'bar' }, 'bar')).toStrictEqual(['foo']);
});

test('array_keys возвращает ключи только заданного значения, если определён параметр filter_value, сравнивая их в строгом (===) или в не строгом (==) режиме.', () => {
    expect(array_keys([1, '1', 2], 1)).toStrictEqual(['0', '1']);
    expect(array_keys({ foo: 1, bar: '1', baz: 'ban' }, '1')).toStrictEqual(['foo', 'bar']);
    expect(array_keys({ foo: 1, bar: '1', baz: 'ban' }, 1, true)).toStrictEqual(['foo']);
});
