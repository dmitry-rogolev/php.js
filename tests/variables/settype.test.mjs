import { expect, test, describe } from '@jest/globals';
import { settype } from '../../src/variables.mjs';
import { stdClass } from '../../src/classes.mjs';

describe('Функция settype', () => {
    test('Должна возвращать булевое значение', () => {
        expect(settype('string', 'boolean')).toBe(true);
        expect(settype('', 'boolean')).toBe(false);
    });

    test('Должна возвращать целое число', () => {
        expect(settype('123', 'integer')).toBe(123);
        expect(settype('123', 'int')).toBe(123);
    });

    test('Должна возвращать число с плавающей точкой', () => {
        expect(settype('123.45', 'float')).toBe(123.45);
        expect(settype('123.45', 'double')).toBe(123.45);
    });

    test('Должна возвращать строку', () => {
        expect(settype(123, 'string')).toBe('123');
    });

    test('Должна возвращать массив', () => {
        expect(settype('example', 'array')).toEqual(['example']);
    });

    test('Должна возвращать объект', () => {
        const obj = new stdClass();
        obj.value = 'example';
        expect(settype('example', 'object')).toStrictEqual(obj);
    });

    test('Должна возвращать исходное значение для неизвестного типа', () => {
        expect(settype('example', 'unknown')).toBe('example');
    });
});
