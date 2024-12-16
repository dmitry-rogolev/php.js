import { expect, test } from '@jest/globals';
import { is_callable } from '../../src/variables.mjs';

describe('is_callable', () => {
    test('должна возвращать true для обычной функции', () => {
        function example() {}
        expect(is_callable(example)).toBe(true);
    });

    test('должна возвращать false для класса', () => {
        class MyClass {}
        expect(is_callable(MyClass)).toBe(false);
    });

    test('должна возвращать false для объектов', () => {
        class MyClass {}
        const obj = new MyClass();
        expect(is_callable(obj)).toBe(false);
    });

    test('должна возвращать false для массивов', () => {
        expect(is_callable([])).toBe(false);
        expect(is_callable({})).toBe(false);
        expect(is_callable(Object.create(null))).toBe(false);
    });

    test('должна возвращать false для примитивных типов', () => {
        expect(is_callable(42)).toBe(false);
        expect(is_callable('hello')).toBe(false);
        expect(is_callable(null)).toBe(false);
        expect(is_callable(undefined)).toBe(false);
    });

    test('должна возвращать false для стрелочных функций', () => {
        expect(is_callable(() => {})).toBe(true);
    });
});
