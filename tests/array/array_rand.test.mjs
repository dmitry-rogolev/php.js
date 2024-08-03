import { expect, test } from '@jest/globals';
import { array_rand } from '../../src/array.mjs';
import { TypePHPJSError, ValuePHPJSError } from '../../src/exceptions.mjs';
import { is_int } from '../../src/variables.mjs';

test('array_rand выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_rand(false)).toThrow(TypePHPJSError);
    expect(() => array_rand([], false)).toThrow(TypePHPJSError);
});

test('array_rand выбрасывает исключение ValuePHPJSError, если массив array пуст или значение параметра num выходит за пределы диапазона.', () => {
    expect(() => array_rand([], 1)).toThrow(ValuePHPJSError);
    expect(() => array_rand([1, 2, 3], 5)).toThrow(ValuePHPJSError);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUsnMKygtUbBVSCwqSqzUUPJLzVfSUVDyzS8qyEgtLQaxQ4oy8zJLKkFM50qgaBFYMDEvW0nTGmhAUWJeSnx2amUxzJB4kIgGxGAdBSOQotTkjHwFiEg0QkO0QWysgp6CUkyeEm41hgg1AA%2C%2C&v=8.2.20
test('array_rand выбирает один или несколько случайных ключей из массива.', () => {
    expect(is_int(array_rand(['Neo', 'Morpheus', 'Trinity', 'Cypher', 'Tank'], 1))).toBeTruthy();
    expect(array_rand(['Neo', 'Morpheus', 'Trinity', 'Cypher', 'Tank'], 2)).toHaveLength(2);
    expect(array_rand({ foo: 'bar', baz: 'bax' }, 2)).toHaveLength(2);
});
