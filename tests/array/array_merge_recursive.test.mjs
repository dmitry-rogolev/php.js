import { expect, test } from '@jest/globals';
import { array_merge_recursive } from '../../src/array.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';

test('array_merge_recursive выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_merge_recursive(false)).toThrow(TypePHPJSError);
});

test('array_merge_recursive возвращает пустой массив при отсутствии параметров.', () => {
    expect(array_merge_recursive()).toStrictEqual([]);
});

// https://onlinephp.io?s=hY5BCsIwFET3hd7hE1wkkIUVXNXqUUKs3xqITZgmBW-vCdat22Hemzld4iO2TdvsLDoayAL2JcUYfICg4bwFd7sGuMQ1E-CbUJqOqq_g4Qd2e03_4AnMs_j0rj6zUNUBXrJPm8Y8GRMb8JixuJVlOaepLJV2hJuTgfxSqn8D&v=8.2.20
test('array_merge_recursive рекурсивно сливает один или несколько массивов', () => {
    expect(
        array_merge_recursive(
            { color: { favorite: 'red' }, 0: 5 },
            { 0: 10, color: { favorite: 'green', 0: 'blue' } },
        ),
    ).toStrictEqual({
        color: { favorite: ['red', 'green'], 0: 'blue' },
        0: 5,
        1: 10,
    });
});
