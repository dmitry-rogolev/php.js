import { describe, test, expect } from '@jest/globals';
import Traversable from '../../src/contracts/Traversable.mjs';
import { array } from '../../src/array.mjs';
import { is_iterable } from '../../src/variables.mjs';

describe('Функция is_iterable', () => {
    test('возвращает true для массивов', () => {
        expect(is_iterable([1, 2, 3])).toBe(true);
    });

    test('возвращает true для ассоциативных массивов', () => {
        expect(is_iterable({ foo: 'bar' })).toBe(true);
        expect(is_iterable(array({ foo: 'bar' }))).toBe(true);
    });

    test('возвращает true для объектов, реализующих Traversable', () => {
        class Collection {
            static __implements = [Traversable];
        }
        const instance = new Collection();
        expect(is_iterable(instance)).toBe(true);
    });

    test('возвращает false для примитивных значений', () => {
        expect(is_iterable(42)).toBe(false);
        expect(is_iterable('hello')).toBe(false);
        expect(is_iterable(null)).toBe(false);
        expect(is_iterable(undefined)).toBe(false);
    });
});
