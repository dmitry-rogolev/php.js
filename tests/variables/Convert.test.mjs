import { expect, test, describe } from '@jest/globals';
import Convert from '../../src/variables/Convert.mjs';
import stdClass from '../../src/classes/stdClass.mjs';
import { Interface } from '../../src/contracts.mjs';

describe('класс Convert', () => {
    describe('Convert.toArray', () => {
        test('Должна возвращать пустой массив для null и undefined', () => {
            expect(Convert.toArray(null)).toEqual([]);
            expect(Convert.toArray(undefined)).toEqual([]);
        });

        test('Должна возвращать исходный массив, если он передан', () => {
            const input = [1, 2, 3];
            expect(Convert.toArray(input)).toBe(input);
        });

        test('Должна возвращать ассоциативный массив без прототипа и с итератором Symbol.iterator при передаче объекта', () => {
            const result = Convert.toArray({ key: 'value' });

            expect(Object.getPrototypeOf(result)).toBeNull();

            for (const entry of result) {
                expect(entry).toEqual(['key', 'value']);
            }
        });

        test('Должна возвращать массив с примитивными значениями', () => {
            expect(Convert.toArray(true)).toEqual([true]);
            expect(Convert.toArray(false)).toEqual([false]);
            expect(Convert.toArray('example')).toEqual(['example']);
            expect(Convert.toArray(123)).toEqual([123]);
        });

        test('Должна оборачивать экземпляр класса в массив', () => {
            class MyClass {}

            const instance = new MyClass();
            expect(Convert.toArray(instance)).toEqual([instance]);
        });
    });

    describe('Convert.toBool', () => {
        test('Должна возвращать false для пустого массива', () => {
            expect(Convert.toBool([])).toBe(false);
        });

        test('Должна возвращать true для непустого массива', () => {
            expect(Convert.toBool([1, 2, 3])).toBe(true);
        });

        test('Должна возвращать false для пустого ассоциативного массива', () => {
            expect(Convert.toBool({})).toBe(false);
        });

        test('Должна возвращать true для непустого ассоциативного массива', () => {
            expect(Convert.toBool({ key: 'value' })).toBe(true);
        });

        test('Должна возвращать true для строки', () => {
            expect(Convert.toBool('example')).toBe(true);
        });

        test('Должна возвращать true для числа', () => {
            expect(Convert.toBool(123)).toBe(true);
        });

        test('Должна возвращать false для null и undefined', () => {
            expect(Convert.toBool(null)).toBe(false);
            expect(Convert.toBool(undefined)).toBe(false);
        });

        test('Должна возвращать true для булевых значений', () => {
            expect(Convert.toBool(true)).toBe(true);
            expect(Convert.toBool(false)).toBe(false);
        });

        test('Должна возвращать true для экземпляров класса', () => {
            class MyClass {}

            const instance = new MyClass();
            expect(Convert.toBool(instance)).toBe(true);
        });

        test('Должна возвращать true для классов', () => {
            class MyClass {}

            expect(Convert.toBool(MyClass)).toBe(true);
        });
    });

    describe('Convert.toBoolean', () => {
        test('Должна возвращать false для пустого массива', () => {
            expect(Convert.toBoolean([])).toBe(false);
        });

        test('Должна возвращать true для непустого массива', () => {
            expect(Convert.toBoolean([1, 2, 3])).toBe(true);
        });

        test('Должна возвращать false для пустого ассоциативного массива', () => {
            expect(Convert.toBoolean({})).toBe(false);
        });

        test('Должна возвращать true для непустого ассоциативного массива', () => {
            expect(Convert.toBoolean({ key: 'value' })).toBe(true);
        });

        test('Должна возвращать true для строки', () => {
            expect(Convert.toBoolean('example')).toBe(true);
        });

        test('Должна возвращать true для числа', () => {
            expect(Convert.toBoolean(123)).toBe(true);
        });

        test('Должна возвращать false для null и undefined', () => {
            expect(Convert.toBoolean(null)).toBe(false);
            expect(Convert.toBoolean(undefined)).toBe(false);
        });

        test('Должна возвращать true для булевых значений', () => {
            expect(Convert.toBoolean(true)).toBe(true);
            expect(Convert.toBoolean(false)).toBe(false);
        });

        test('Должна возвращать true для экземпляров класса', () => {
            class MyClass {}

            const instance = new MyClass();
            expect(Convert.toBoolean(instance)).toBe(true);
        });

        test('Должна возвращать true для классов', () => {
            class MyClass {}

            expect(Convert.toBoolean(MyClass)).toBe(true);
        });
    });

    describe('Convert.toObject', () => {
        test('Должна возвращать объект для объекта', () => {
            class MyClass {}
            const obj = new MyClass();
            expect(Convert.toObject(obj)).toBe(obj);
        });

        test('Должна возвращать экземпляр класса для класса', () => {
            class MyClass {}
            const instance = Convert.toObject(MyClass);
            expect(instance).toBeInstanceOf(MyClass);
        });

        test('Должна возвращать stdClass для null и undefined', () => {
            expect(Convert.toObject(null)).toBeInstanceOf(stdClass);
            expect(Convert.toObject(undefined)).toBeInstanceOf(stdClass);
        });

        test('Должна возвращать объект с элементами массива для массива', () => {
            const arr = [1, 2, 3];
            const obj = Convert.toObject(arr);
            expect(obj).toBeInstanceOf(stdClass);
            expect(obj[0]).toBe(1);
            expect(obj[1]).toBe(2);
            expect(obj[2]).toBe(3);
        });

        test('Должна возвращать объект с полем value для других значений', () => {
            const obj = Convert.toObject('example');
            expect(obj).toBeInstanceOf(stdClass);
            expect(obj.value).toBe('example');
        });
    });

    describe('Convert.toString', () => {
        test('Должна возвращать строку для строки', () => {
            expect(Convert.toString('example')).toBe('example');
        });

        test('Должна возвращать строку для числа', () => {
            expect(Convert.toString(123)).toBe('123');
            expect(Convert.toString(123.45)).toBe('123.45');
        });

        test('Должна возвращать строку для булевых значений', () => {
            expect(Convert.toString(true)).toBe('true');
            expect(Convert.toString(false)).toBe('false');
        });

        test('Должна возвращать строку для null и undefined', () => {
            expect(Convert.toString(null)).toBe('null');
            expect(Convert.toString(undefined)).toBe('undefined');
        });

        test('Должна возвращать строку для ассоциативных массивов', () => {
            const obj = { key: 'value' };
            expect(Convert.toString(obj)).toBe("{\n    key: 'value',\n}");
            expect(Convert.toString({})).toBe('{}');
        });

        test('Должна возвращать строку для массивов', () => {
            const arr = [1, [2], 3];
            expect(Convert.toString(arr)).toBe('[\n    1,\n    [\n        2,\n    ],\n    3,\n]');
            expect(Convert.toString([])).toBe('[]');
        });

        test('Должна возвращать строку для именованной функции', () => {
            const func = function () {};
            expect(Convert.toString(func)).toBe('function func() {}');
        });

        test('Должна возвращать строку для безымянной функции', () => {
            expect(Convert.toString(() => {})).toBe('function () {}');
        });

        test('Должна возвращать строку для символов', () => {
            const symbol = Symbol('example');
            expect(Convert.toString(symbol)).toBe('Symbol(example)');
        });

        test('Должна возвращать строку для BigInt', () => {
            const bigInt = BigInt(123);
            expect(Convert.toString(bigInt)).toBe('123');
        });

        test('Должна возвращать строку для именованного класса', () => {
            class MyClass {
                static test = 'test';
            }
            expect(Convert.toString(MyClass)).toBe('class MyClass {}');
        });

        test('Должна возвращать строку для безымянного класса', () => {
            expect(Convert.toString(class {})).toBe('class {}');
        });

        test('Должна возвращать строку для экземпляров классов', () => {
            class MyClass {}
            const instance = new MyClass();
            expect(Convert.toString(instance)).toBe('object MyClass');
        });

        test('Должна возвращать строку для интерфейсов', () => {
            class MyContract extends Interface {}
            expect(Convert.toString(MyContract)).toBe('interface MyContract {}');
        });
    });

    describe('Convert.toDouble', () => {
        test('Должна возвращать число с плавающей точкой для строки', () => {
            expect(Convert.toDouble('123.45')).toBe(123.45);
        });

        test('Должна возвращать число с плавающей точкой для целого числа', () => {
            expect(Convert.toDouble(123)).toBe(123.0);
        });

        test('Должна возвращать 1 для true и 0 для false', () => {
            expect(Convert.toDouble(true)).toBe(1.0);
            expect(Convert.toDouble(false)).toBe(0.0);
        });

        test('Должна возвращать 0 для null и undefined', () => {
            expect(Convert.toDouble(null)).toBe(0.0);
            expect(Convert.toDouble(undefined)).toBe(0.0);
        });

        test('Должна возвращать 0 для нечисловых строк', () => {
            expect(Convert.toDouble('example')).toBe(0.0);
        });
    });

    describe('Convert.toFloat', () => {
        test('Должна возвращать число с плавающей точкой для строки', () => {
            expect(Convert.toFloat('123.45')).toBe(123.45);
        });

        test('Должна возвращать число с плавающей точкой для целого числа', () => {
            expect(Convert.toFloat(123)).toBe(123.0);
        });

        test('Должна возвращать 1 для true и 0 для false', () => {
            expect(Convert.toFloat(true)).toBe(1.0);
            expect(Convert.toFloat(false)).toBe(0.0);
        });

        test('Должна возвращать 0 для null и undefined', () => {
            expect(Convert.toFloat(null)).toBe(0.0);
            expect(Convert.toFloat(undefined)).toBe(0.0);
        });

        test('Должна возвращать 0 для нечисловых строк', () => {
            expect(Convert.toFloat('example')).toBe(0.0);
        });
    });

    describe('Convert.toInt', () => {
        test('Должна возвращать целое число для строки', () => {
            expect(Convert.toInt('123')).toBe(123);
        });

        test('Должна возвращать целое число для числа с плавающей точкой', () => {
            expect(Convert.toInt(123.45)).toBe(123);
        });

        test('Должна возвращать 1 для true и 0 для false', () => {
            expect(Convert.toInt(true)).toBe(1);
            expect(Convert.toInt(false)).toBe(0);
        });

        test('Должна возвращать 0 для null и undefined', () => {
            expect(Convert.toInt(null)).toBe(0);
            expect(Convert.toInt(undefined)).toBe(0);
        });

        test('Должна возвращать 0 для нечисловых строк', () => {
            expect(Convert.toInt('example')).toBe(0);
        });

        test('Должна возвращать целое число для строки с основанием системы счисления', () => {
            expect(Convert.toInt('10', 2)).toBe(2);
            expect(Convert.toInt('A', 16)).toBe(10);
            expect(Convert.toInt('7', 8)).toBe(7);
        });

        test('Должна возвращать целое число для строки с основанием системы счисления 2', () => {
            expect(Convert.toInt('1010', 2)).toBe(10);
        });

        test('Должна возвращать целое число для строки с основанием системы счисления 16', () => {
            expect(Convert.toInt('A', 16)).toBe(10);
        });

        test('Должна возвращать целое число для строки с основанием системы счисления 8', () => {
            expect(Convert.toInt('7', 8)).toBe(7);
        });

        test('Должна выбрасывать исключение для неверного значения параметра base', () => {
            expect(() => Convert.toInt('123', 'invalid')).toThrow(TypeError);
        });
    });

    describe('Convert.toInteger', () => {
        test('Должна возвращать целое число для строки', () => {
            expect(Convert.toInteger('123')).toBe(123);
        });

        test('Должна возвращать целое число для числа с плавающей точкой', () => {
            expect(Convert.toInteger(123.45)).toBe(123);
        });

        test('Должна возвращать 1 для true и 0 для false', () => {
            expect(Convert.toInteger(true)).toBe(1);
            expect(Convert.toInteger(false)).toBe(0);
        });

        test('Должна возвращать 0 для null и undefined', () => {
            expect(Convert.toInteger(null)).toBe(0);
            expect(Convert.toInteger(undefined)).toBe(0);
        });

        test('Должна возвращать 0 для нечисловых строк', () => {
            expect(Convert.toInteger('example')).toBe(0);
        });

        test('Должна возвращать целое число для строки с основанием системы счисления', () => {
            expect(Convert.toInteger('10', 2)).toBe(2);
            expect(Convert.toInteger('A', 16)).toBe(10);
            expect(Convert.toInteger('7', 8)).toBe(7);
        });

        test('Должна возвращать целое число для строки с основанием системы счисления 2', () => {
            expect(Convert.toInteger('1010', 2)).toBe(10);
        });

        test('Должна возвращать целое число для строки с основанием системы счисления 16', () => {
            expect(Convert.toInteger('A', 16)).toBe(10);
        });

        test('Должна возвращать целое число для строки с основанием системы счисления 8', () => {
            expect(Convert.toInteger('7', 8)).toBe(7);
        });

        test('Должна выбрасывать исключение для неверного значения параметра base', () => {
            expect(() => Convert.toInteger('123', 'invalid')).toThrow(TypeError);
        });
    });
});
