import { expect, test, describe } from '@jest/globals';
import { to_array } from '../../src/variables.mjs';

describe('to_array', () => {
    test('Должна возвращать пустой массив для null и undefined', () => {
        expect(to_array(null)).toEqual([]);
        expect(to_array(undefined)).toEqual([]);
    });

    test('Должна возвращать исходный массив, если он передан', () => {
        const input = [1, 2, 3];
        expect(to_array(input)).toBe(input);
    });

    test('Должна возвращать ассоциативный массив без прототипа и с итератором Symbol.iterator при передаче объекта', () => {
        const result = to_array({ key: 'value' });

        expect(Object.getPrototypeOf(result)).toBeNull();

        for (const entry of result) {
            expect(entry).toEqual(['key', 'value']);
        }
    });

    test('Должна возвращать массив с примитивными значениями', () => {
        expect(to_array(true)).toEqual([true]);
        expect(to_array(false)).toEqual([false]);
        expect(to_array('example')).toEqual(['example']);
        expect(to_array(123)).toEqual([123]);
    });

    test('Должна оборачивать экземпляр класса в массив', () => {
        class MyClass {}

        const instance = new MyClass();
        expect(to_array(instance)).toEqual([instance]);
    });
});
