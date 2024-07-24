import { expect, test } from '@jest/globals';
import { TypePHPJSError } from '../../src/exceptions.mjs';
import { array_chunk } from '../../src/array.mjs';

// https://onlinephp.io?s=s7EvyCjg5eLlUsnMKygtiU8sKkqsVLBVANMa6onqOgrqSSAiGUSkgIhUdU1rXq6Cosy8kvgiDbDC-OSM0rxsDWQzdBSMNIlUp6NQUlSaClQNAA%2C%2C&v=8.2.20

test('array_chunk выбрасывает ошибку TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_chunk(false)).toThrow(TypePHPJSError);
    expect(() => array_chunk([], 'wrong')).toThrow(TypePHPJSError);
    expect(() => array_chunk([], 1, 'wrong')).toThrow(TypePHPJSError);
});

test('array_chunk возвращает массив значений при передаче массива.', () => {
    expect(array_chunk(['a', 'b', 'c', 'd', 'e'], 2)).toStrictEqual([
        ['a', 'b'],
        ['c', 'd'],
        ['e'],
    ]);

    expect(array_chunk(['a', 'b', 'c', 'd', 'e'], 2, true)).toStrictEqual([
        { 0: 'a', 1: 'b' },
        { 2: 'c', 3: 'd' },
        { 4: 'e' },
    ]);
});
