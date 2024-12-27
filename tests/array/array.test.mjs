import { expect, test, describe } from '@jest/globals';
import { array } from '../../src/array.mjs';

describe('Функция array', () => {
    test('Должна возвращать массив с единственным элементом, если передан один массив', () => {
        const input = [1, 2, 3];
        const result = array(input);
        expect(result).toEqual([1, 2, 3]);
    });

    test('Должна добавлять элементы в массив, если передано несколько значений', () => {
        const result = array(1, [2, 3], { a: 10, b: 20 });
        expect(result).toEqual([1, [2, 3], { a: 10, b: 20 }]);
    });

    test('Должна обрабатывать ассоциативные массивы (объекты с ключами и значениями)', () => {
        const assoc = { key1: 'value1', key2: 'value2' };
        const result = array(assoc);
        expect(result).toEqual(assoc); // Элемент должен быть объектом
        expect(Object.getPrototypeOf(result)).toBeNull(); // Прототип должен быть null
    });

    test('Должна создавать итератор для ассоциативного массива', () => {
        const assoc = { key: 'value', anotherKey: 'anotherValue' };
        const result = array(assoc);

        const iteratorOutput = [];
        for (const [key, value] of result) {
            iteratorOutput.push([key, value]);
        }

        expect(iteratorOutput).toEqual([
            ['key', 'value'],
            ['anotherKey', 'anotherValue'],
        ]);
    });

    test('Должна возвращать исходный массив, если он передан как единственный аргумент', () => {
        const nestedArray = [1, 2, 3];
        const result = array(nestedArray);
        expect(result).toBe(nestedArray); // Массив должен быть возвращен напрямую
    });

    test('Должна работать с примитивными значениями', () => {
        const result = array(42, 'test', true, null);
        expect(result).toEqual([42, 'test', true, null]);
    });

    test('Должна возвращать массив, если передано несколько различных типов', () => {
        const result = array(1, 'text', [2, 3], { foo: 'bar' });
        expect(result).toEqual([1, 'text', [2, 3], { foo: 'bar' }]);
    });

    test('Должна возвращать массив с объектами и ассоциативными массивами', () => {
        const result = array({ key1: 'value1' }, [1, 2], { key2: 'value2' });
        expect(result).toEqual([{ key1: 'value1' }, [1, 2], { key2: 'value2' }]);
    });
});
