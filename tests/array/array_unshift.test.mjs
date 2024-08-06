import { expect, test } from '@jest/globals';
import { array_unshift } from '../../src/array.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';

test('array_unshift выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_unshift(false)).toThrow(TypePHPJSError);
});

test('array_unshift добавляет один или несколько элементов в начало массива.', () => {
    const array = ['orange', 'banana'];
    expect(array_unshift(array, 'apple', 'raspberry')).toBe(4);
    expect(array).toStrictEqual(['apple', 'raspberry', 'orange', 'banana']);
});

test('array_shift с ассоциативными массивами.', () => {
    const foods = {
        apples: {
            McIntosh: 'red',
            'Granny Smith': 'green',
        },
        oranges: {
            Navel: 'orange',
            Valencia: 'orange',
        },
    };

    const vegetables = {
        lettuce: {
            Iceberg: 'green',
            Butterhead: 'green',
        },
        carrots: {
            'Deep Purple Hybrid': 'purple',
            Imperator: 'orange',
        },
        cucumber: {
            Kirby: 'green',
            Gherkin: 'green',
        },
    };

    expect(array_unshift(foods, vegetables)).toBe(3);
    expect(foods).toStrictEqual({
        apples: {
            McIntosh: 'red',
            'Granny Smith': 'green',
        },
        oranges: {
            Navel: 'orange',
            Valencia: 'orange',
        },
        0: {
            lettuce: {
                Iceberg: 'green',
                Butterhead: 'green',
            },
            carrots: {
                'Deep Purple Hybrid': 'purple',
                Imperator: 'orange',
            },
            cucumber: {
                Kirby: 'green',
                Gherkin: 'green',
            },
        },
    });
});
