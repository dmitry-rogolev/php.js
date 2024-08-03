import { expect, test } from '@jest/globals';
import { array_replace_recursive } from '../../src/array.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';

test('array_replace_recursive выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_replace_recursive(false)).toThrow(TypePHPJSError);
    expect(() => array_replace_recursive([], false)).toThrow(TypePHPJSError);
});

test('array_replace_recursive возвращает массив без изменения при отсутствии параметра replacements.', () => {
    expect(array_replace_recursive(['foo'])).toStrictEqual(['foo']);
});

// https://onlinephp.io?s=fY_dCsIwDIXvB3uHUISs0DeY00cZ6QhaNmtIu8He3v0JCuJVyEnynZPzVe5SFmVx8pQYGiBVmivsQtYxITSXQwHzVIo3NhYcoGfVwJ9z4wfq-lWfjQOjlGRvrANbL3xlWTb4wTGnPz4oITKJDIz2pxH6YeQNjXYF79F7zm9oezgttRs1hYmr7TkHXxnWW9EQc6vVQbD1Cw%2C%2C&v=8.2.20
test('array_replace_recursive рекурсивно заменяет элементы первого массива элементами переданных массивов.', () => {
    expect(
        array_replace_recursive(
            { citrus: ['orange'], berries: ['blackberry', 'raspberry'] },
            {
                citrus: ['pineapple'],
                berries: ['blueberry'],
            },
        ),
    ).toStrictEqual({ citrus: ['pineapple'], berries: ['blueberry', 'raspberry'] });

    expect(array_replace_recursive([1, [2], 3], [4, [5, 6]])).toStrictEqual([4, [5, 6], 3]);
});
