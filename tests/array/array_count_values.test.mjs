import { expect, test } from '@jest/globals';
import { array_count_values } from '../../src/array.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';

// https://onlinephp.io?s=s7EvyCjg5eLlUkksKkqsVLBVANMahjoKShmpOTn5SjoKIHZ5flFOihJcUNOal6ugKDOvJL5IA6whPjm_FMgrS8wpTS3WgBimqWkNAA%2C%2C&v=8.2.20

test('array_count_values выбрасывает ошибку TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_count_values(false)).toThrow(TypePHPJSError);
});

test('array_count_values подсчитывает количество вхождений каждого отдельного значения массива.', () => {
    expect(array_count_values([1, 'hello', '1', 'world', 'hello'])).toStrictEqual({
        1: 2,
        hello: 2,
        world: 1,
    });

    expect(
        array_count_values({ foo: 'bar', 2: 'hello', baz: 'bar', world: 'hello', 3: 1 }),
    ).toStrictEqual({
        bar: 2,
        hello: 2,
        1: 1,
    });
});
