import { expect, test } from '@jest/globals';
import { array_merge } from '../../src/array.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';

test('array_merge выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_merge(false)).toThrow(TypePHPJSError);
});

test('array_merge возвращает пустой массив при отсутствии переданных параметров.', () => {
    expect(array_merge()).toStrictEqual([]);
});

// https://onlinephp.io?s=pU7NCoJAEL4LvsMwdNhgL0q3Mh9FphxUMHcZt0M-vY6uFNSty_Dxzfd3KX3r0yRNDiRCrwwKWIHBu-udIBRXQOEaLeQWTsfzrszfSlqeeNPz4WmEeVBubMnzxgVZ4OQ6TduihMdnH_ao6sHSsIlTLMQmVXrphlCJiQ6lvjf_WpetzTUFwj8bZw%2C%2C&v=8.2.20
test('array_merge сливает один или несколько массивов.', () => {
    expect(
        array_merge(
            { color: 'red', 0: 2, 1: 4 },
            { 0: 'a', 1: 'b', color: 'green', shape: 'trapezoid', 2: 4 },
        ),
    ).toStrictEqual({
        color: 'green',
        0: 2,
        1: 4,
        2: 'a',
        3: 'b',
        shape: 'trapezoid',
        4: 4,
    });

    expect(array_merge([], { 1: 'data' })).toStrictEqual(['data']);

    expect(array_merge([1, 2, 3], [4, 5, 6])).toStrictEqual([1, 2, 3, 4, 5, 6]);
});
