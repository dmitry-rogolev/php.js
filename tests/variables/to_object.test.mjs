import { expect, test, describe } from '@jest/globals';
import { to_object } from '../../src/variables.mjs';
import stdClass from '../../src/classes/stdClass.mjs';

describe('Функция to_object', () => {
    test('Должна возвращать объект для объекта', () => {
        class MyClass {}
        const obj = new MyClass();
        expect(to_object(obj)).toBe(obj);
    });

    test('Должна возвращать экземпляр класса для класса', () => {
        class MyClass {}
        const instance = to_object(MyClass);
        expect(instance).toBeInstanceOf(MyClass);
    });

    test('Должна возвращать stdClass для null и undefined', () => {
        expect(to_object(null)).toBeInstanceOf(stdClass);
        expect(to_object(undefined)).toBeInstanceOf(stdClass);
    });

    test('Должна возвращать объект с элементами массива для массива', () => {
        const arr = [1, 2, 3];
        const obj = to_object(arr);
        expect(obj).toBeInstanceOf(stdClass);
        expect(obj[0]).toBe(1);
        expect(obj[1]).toBe(2);
        expect(obj[2]).toBe(3);
    });

    test('Должна возвращать объект с полем value для других значений', () => {
        const obj = to_object('example');
        expect(obj).toBeInstanceOf(stdClass);
        expect(obj.value).toBe('example');
    });
});
