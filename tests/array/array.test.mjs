import { expect, test, describe } from '@jest/globals';
import { array } from '../../src/array.mjs';

describe('array function', () => {
    test('должна возвращать обычный массив без изменений', () => {
        const input = [1, 2, 3];
        const result = array(input);
        expect(result).toEqual([1, 2, 3]);
    });

    test('должна возвращать ассоциативный массив (объект) без изменений', () => {
        const input = { foo: 'bar', baz: 42 };
        const result = array(input);
        expect(result).toEqual({ foo: 'bar', baz: 42 });
        expect(Object.getPrototypeOf(result)).toBe(null); // Проверяем, что объект без прототипа
    });

    test('должна корректно обрабатывать несколько входных значений', () => {
        const result = array(42, [1, 2], { foo: 'bar' });
        expect(result).toEqual([42, [1, 2], { foo: 'bar' }]);
        expect(Object.getPrototypeOf(result[2])).toBe(null); // Проверяем, что третий элемент без прототипа
    });

    test('должна возвращать пустой массив при отсутствии входных значений', () => {
        const result = array();
        expect(result).toEqual([]);
    });

    test('должна обрабатывать примитивные значения', () => {
        const result = array('hello', null, 3.14);
        expect(result).toEqual(['hello', null, 3.14]);
    });

    test('должна корректно обрабатывать объект, созданный с помощью Object.create(null)', () => {
        const input = Object.create(null);
        input.foo = 'bar';
        const result = array(input);
        expect(result).toEqual({ foo: 'bar' });
        expect(Object.getPrototypeOf(result)).toBe(null); // Проверяем, что результат без прототипа
    });

    test('должна возвращать первый элемент напрямую, если он единственный и массив', () => {
        const input = [1, 2, 3];
        const result = array(input);
        expect(result).toEqual(input);
    });

    test('должна возвращать ассоциативный массив напрямую, если он единственный аргумент', () => {
        const input = { key: 'value' };
        const result = array(input);
        expect(result).toEqual(input);
        expect(Object.getPrototypeOf(result)).toBe(null); // Проверяем, что объект без прототипа
    });

    test('должна корректно работать с вложенными ассоциативными массивами', () => {
        const input = { a: { b: 2 } };
        const result = array(input);
        expect(result).toEqual({ a: { b: 2 } });
        expect(Object.getPrototypeOf(result)).toBe(null);
    });

    test('должна корректно обрабатывать обычные примитивы', () => {
        const result = array(1, 'string', true, null, undefined);
        expect(result).toEqual([1, 'string', true, null, undefined]);
    });

    test('должна не изменять обычные массивы внутри списка аргументов', () => {
        const input = [
            [1, 2],
            [3, 4],
        ];
        const result = array(...input);
        expect(result).toEqual(input);
    });
});
