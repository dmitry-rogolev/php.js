import { expect, test, describe } from '@jest/globals';
import { to_string } from '../../src/variables.mjs';
import { Interface } from '../../src/contracts.mjs';

describe('Функция to_string', () => {
    test('Должна возвращать строку для строки', () => {
        expect(to_string('example')).toBe('example');
    });

    test('Должна возвращать строку для числа', () => {
        expect(to_string(123)).toBe('123');
        expect(to_string(123.45)).toBe('123.45');
    });

    test('Должна возвращать строку для булевых значений', () => {
        expect(to_string(true)).toBe('true');
        expect(to_string(false)).toBe('false');
    });

    test('Должна возвращать строку для null и undefined', () => {
        expect(to_string(null)).toBe('null');
        expect(to_string(undefined)).toBe('undefined');
    });

    test('Должна возвращать строку для ассоциативных массивов', () => {
        const obj = { key: 'value' };
        expect(to_string(obj)).toBe("{\n    key: 'value',\n}");
        expect(to_string({})).toBe('{}');
    });

    test('Должна возвращать строку для массивов', () => {
        const arr = [1, [2], 3];
        expect(to_string(arr)).toBe('[\n    1,\n    [\n        2,\n    ],\n    3,\n]');
        expect(to_string([])).toBe('[]');
    });

    test('Должна возвращать строку для именованной функции', () => {
        const func = function () {};
        expect(to_string(func)).toBe('function func() {}');
    });

    test('Должна возвращать строку для безымянной функции', () => {
        expect(to_string(() => {})).toBe('function () {}');
    });

    test('Должна возвращать строку для символов', () => {
        const symbol = Symbol('example');
        expect(to_string(symbol)).toBe('Symbol(example)');
    });

    test('Должна возвращать строку для BigInt', () => {
        const bigInt = BigInt(123);
        expect(to_string(bigInt)).toBe('123');
    });

    test('Должна возвращать строку для именованного класса', () => {
        class MyClass {
            static test = 'test';
        }
        expect(to_string(MyClass)).toBe('class MyClass {}');
    });

    test('Должна возвращать строку для безымянного класса', () => {
        expect(to_string(class {})).toBe('class {}');
    });

    test('Должна возвращать строку для экземпляров классов', () => {
        class MyClass {}
        const instance = new MyClass();
        expect(to_string(instance)).toBe('object MyClass');
    });

    test('Должна возвращать строку для интерфейсов', () => {
        class MyContract extends Interface {}
        expect(to_string(MyContract)).toBe('interface MyContract {}');
    });
});
