import { expect, test } from '@jest/globals';
import { array_walk_recursive } from '../../src/array.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';

test('array_walk_recursive выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_walk_recursive(false)).toThrow(TypePHPJSError);
    expect(() => array_walk_recursive([], false)).toThrow(TypePHPJSError);
});

// https://onlinephp.io?s=RY9dqsIwEEbfA9nDIIVUcAX-XDcilFoiBr1tSVJFRFBffNN3V6Fgtdh7XcNkR05bwcAQmMk586U_TKcpZ5x5ZimlhQGEWocrX4QCBj8g3AmvWOILn_gSHRDjpk3NC_5XJdo9gic6U9Z86VpWP228RJok0x-4xAL_yNnAnE2yOLIqicFKY4NUq9j6nrLytwPeTK7anK05AzoymibQwjOW7ugOIKqpALcj1w1zt8U7Fm4P-KiyuQPmdBeYd6G2jeIWrdtUG-uYwTKczwIto0wbtZD-5xeU9ZuDEr4B&v=8.2.20
test('array_walk_recursive рекурсивно применяет пользовательскую функцию к каждому элементу массива.', () => {
    const sweet = { a: 'яблоко', b: 'банан' };
    const fruits = { sweet, sour: 'лимон' };
    const result = [];

    array_walk_recursive(
        fruits,
        (value, key, res) => res.push(`Ключ '${key}' содержит значение: ${value}`),
        result,
    );

    expect(result).toStrictEqual([
        "Ключ 'a' содержит значение: яблоко",
        "Ключ 'b' содержит значение: банан",
        "Ключ 'sour' содержит значение: лимон",
    ]);
});
