import { expect, test, describe } from '@jest/globals';
import { gettype } from '../../src/variables.mjs';

describe('Функция gettype', () => {
    test('Должна возвращать "null" для null', () => {
        expect(gettype(null)).toBe('null');
    });

    test('Должна возвращать "NaN" для NaN', () => {
        expect(gettype(NaN)).toBe('NaN');
    });

    test('Должна возвращать "integer" для целых чисел', () => {
        expect(gettype(123)).toBe('integer');
    });

    test('Должна возвращать "double" для чисел с плавающей точкой', () => {
        expect(gettype(123.45)).toBe('double');
    });

    test('Должна возвращать "class" для классов', () => {
        class MyClass {}
        expect(gettype(MyClass)).toBe('class');
    });

    test('Должна возвращать "object" для экземпляров классов', () => {
        class MyClass {}
        expect(gettype(new MyClass())).toBe('object');
    });

    test('Должна возвращать "array" для массивов', () => {
        expect(gettype([1, 2, 3])).toBe('array');
    });

    test('Должна возвращать "array" для ассоциативных массивов', () => {
        expect(gettype({ key: 'value' })).toBe('array');
    });

    test('Должна возвращать правильный тип для других значений', () => {
        expect(gettype('example')).toBe('string');
        expect(gettype(true)).toBe('boolean');
        expect(gettype(undefined)).toBe('undefined');
    });
});
