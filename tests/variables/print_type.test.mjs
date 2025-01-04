import { expect, test, describe } from '@jest/globals';
import { print_type } from '../../src/variables.mjs';
import { Interface } from '../../src/contracts.mjs';

describe('Функция print_type', () => {
    test('Должна возвращать строку для строки', () => {
        expect(print_type('example', true)).toBe('string(7) "example"');
    });

    test('Должна возвращать строку для числа', () => {
        expect(print_type(123, true)).toBe('int(123)');
        expect(print_type(123.45, true)).toBe('float(123.45)');
    });

    test('Должна возвращать строку для булевых значений', () => {
        expect(print_type(true, true)).toBe('bool(true)');
        expect(print_type(false, true)).toBe('bool(false)');
    });

    test('Должна возвращать строку для null и undefined', () => {
        expect(print_type(null, true)).toBe('null');
        expect(print_type(undefined, true)).toBe('undefined');
    });

    test('Должна возвращать строку для массивов', () => {
        const arr = [1, [2], 3];
        expect(print_type(arr, true)).toBe(
            'array(3) [\n    0: int(1),\n    1: array(1) [\n        0: int(2),\n    ],\n    2: int(3),\n]',
        );
    });

    test('Должна возвращать строку для ассоциативных массивов', () => {
        const obj = { key: 'value' };
        expect(print_type(obj, true)).toBe('array(1) {\n    key: string(5) "value",\n}');
    });

    test('Должна возвращать строку для функций', () => {
        const func = function () {};
        expect(print_type(func, true)).toBe('function func() {}');
    });

    test('Должна возвращать строку для символов', () => {
        const symbol = Symbol('example');
        expect(print_type(symbol, true)).toBe('Symbol(example)');
    });

    test('Должна возвращать строку для классов', () => {
        class MyClass {
            static test = 'test';
        }
        expect(print_type(MyClass, true)).toBe('class MyClass {\n    test = string(4) "test";\n}');
    });

    test('Должна возвращать строку для экземпляров классов', () => {
        class MyClass {
            test = 'test';
        }
        const instance = new MyClass();
        expect(print_type(instance, true)).toBe(
            'object(MyClass) (1) {\n    test = string(4) "test";\n}',
        );
    });

    test('Должна возвращать строку для интерфейсов', () => {
        class MyContract extends Interface {}
        expect(print_type(MyContract, true)).toBe('interface MyContract extends Interface {}');
    });
});
