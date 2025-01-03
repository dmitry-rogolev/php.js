import { expect, test, describe } from '@jest/globals';
import { print } from '../../src/variables.mjs';
import { Interface } from '../../src/contracts.mjs';

describe('Функция print', () => {
    test('Должна возвращать строку для строки', () => {
        expect(print('example', true)).toBe('"example"');
    });

    test('Должна возвращать строку для числа', () => {
        expect(print(123, true)).toBe('123');
        expect(print(123.45, true)).toBe('123.45');
    });

    test('Должна возвращать строку для булевых значений', () => {
        expect(print(true, true)).toBe('true');
        expect(print(false, true)).toBe('false');
    });

    test('Должна возвращать строку для null и undefined', () => {
        expect(print(null, true)).toBe('null');
        expect(print(undefined, true)).toBe('undefined');
    });

    test('Должна возвращать строку для массивов', () => {
        const arr = [1, [2], 3];
        expect(print(arr, true)).toBe(
            '[\n    0: 1,\n    1: [\n        0: 2,\n    ],\n    2: 3,\n]',
        );
    });

    test('Должна возвращать строку для ассоциативных массивов', () => {
        const obj = { key: 'value' };
        expect(print(obj, true)).toBe('{\n    key: "value",\n}');
    });

    test('Должна возвращать строку для функций', () => {
        const func = function () {};
        expect(print(func, true)).toBe('function func() {}');
    });

    test('Должна возвращать строку для символов', () => {
        const symbol = Symbol('example');
        expect(print(symbol, true)).toBe('Symbol(example)');
    });

    test('Должна возвращать строку для классов', () => {
        class MyClass {
            static test = 'test';
        }
        expect(print(MyClass, true)).toBe('class MyClass {\n    test = "test";\n}');
    });

    test('Должна возвращать строку для экземпляров классов', () => {
        class MyClass {}
        const instance = new MyClass();
        expect(print(instance, true)).toBe('object MyClass {}');
    });

    test('Должна возвращать строку для интерфейсов', () => {
        class MyContract extends Interface {}
        expect(print(MyContract, true)).toBe('interface MyContract extends Interface {}');
    });

    test('Должна выбрасывать исключение для неверного значения параметра return_result', () => {
        expect(() => print('example', 'invalid')).toThrow(TypeError);
    });
});
