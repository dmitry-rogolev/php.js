import { expect, test } from '@jest/globals';
import { is_object } from '../../src/variables.mjs';

describe('is_object', () => {
    test('должен возвращать true для объектов, созданных с использованием классов', () => {
        class MyClass {}
        const myClassInstance = new MyClass();
        expect(is_object(myClassInstance)).toBe(true);
    });

    test('должен возвращать false для классов', () => {
        class MyClass {}
        expect(is_object(MyClass)).toBe(false);
    });

    test('должен возвращать false для обычных объектов', () => {
        const obj = {};
        expect(is_object(obj)).toBe(false);
    });

    test('должен возвращать false для массивов', () => {
        const arr = [];
        expect(is_object(arr)).toBe(false);
    });

    test('должен возвращать false для объектов, таких как Date', () => {
        const date = new Date();
        expect(is_object(date)).toBe(false);
    });

    test('должен возвращать false для null', () => {
        expect(is_object(null)).toBe(false);
    });

    test('должен возвращать false для числа', () => {
        expect(is_object(42)).toBe(false);
    });

    test('должен возвращать false для строки', () => {
        expect(is_object('string')).toBe(false);
    });

    test('должен возвращать false для объектов, таких как Map', () => {
        const map = new Map();
        expect(is_object(map)).toBe(false);
    });

    test('должен возвращать false для объектов, созданных с Object.create(null)', () => {
        const objNoProto = Object.create(null);
        expect(is_object(objNoProto)).toBe(false);
    });
});
