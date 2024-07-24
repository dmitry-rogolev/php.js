import { expect, test } from '@jest/globals';
import { array_values } from '../../src/array.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';

// https://onlinephp.io?s=s7EvyCjg5eLlSk3OyFdQjzbUUTDSUTCOtVJQt-blKijKzCuJL9JILCpKrIwvS8wpTS3WgKvR1LSG6gvwCIh39fexRjJIqTizKlVJwdZOQSnCR0lHQSk5Pye_CCKQnp-TooTXCsK6sVsOAA%2C%2C&v=8.2.20

test('array_values выбрасывает ошибку TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_values(false)).toThrow(TypePHPJSError);
});

test('array_values возвращает массив значений при передаче массива.', () => {
    expect(array_values([1, 2, 3])).toStrictEqual([1, 2, 3]);
    expect(array_values({ size: 'XL', color: 'gold' })).toStrictEqual(['XL', 'gold']);
});
