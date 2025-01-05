import { expect, test, describe } from '@jest/globals';
import {
    to_array,
    to_bool,
    to_double,
    empty,
    to_float,
    gettype,
    to_int,
    is_array,
    is_bool,
    is_callable,
    is_class,
    is_contract,
    is_countable,
    is_double,
    is_float,
    is_int,
    is_integer,
    is_iterable,
    is_long,
    is_null,
    is_number,
    is_numeric,
    is_object,
    is_scalar,
    is_string,
    is_symbol,
    is_undefined,
    to_object,
    print,
    settype,
    to_string,
    print_type,
    isset,
    to_boolean,
    to_integer,
    Convert,
} from './../src/variables.mjs';
import { stdClass } from '../src/classes.mjs';

describe('variables', () => {
    test('Должны быть определены все функции и классы', () => {
        expect(is_array).not.toBeUndefined();
        expect(is_bool).not.toBeUndefined();
        expect(is_class).not.toBeUndefined();
        expect(is_number).not.toBeUndefined();
        expect(is_float).not.toBeUndefined();
        expect(is_double).not.toBeUndefined();
        expect(is_int).not.toBeUndefined();
        expect(is_integer).not.toBeUndefined();
        expect(is_long).not.toBeUndefined();
        expect(is_null).not.toBeUndefined();
        expect(is_numeric).not.toBeUndefined();
        expect(is_object).not.toBeUndefined();
        expect(is_string).not.toBeUndefined();
        expect(is_scalar).not.toBeUndefined();
        expect(is_symbol).not.toBeUndefined();
        expect(is_undefined).not.toBeUndefined();
        expect(is_callable).not.toBeUndefined();
        expect(to_array).not.toBeUndefined();
        expect(to_bool).not.toBeUndefined();
        expect(to_boolean).not.toBeUndefined();
        expect(to_float).not.toBeUndefined();
        expect(to_double).not.toBeUndefined();
        expect(empty).not.toBeUndefined();
        expect(gettype).not.toBeUndefined();
        expect(to_int).not.toBeUndefined();
        expect(to_integer).not.toBeUndefined();
        expect(isset).not.toBeUndefined();
        expect(to_string).not.toBeUndefined();
        expect(print).not.toBeUndefined();
        expect(print_type).not.toBeUndefined();
        expect(settype).not.toBeUndefined();
        expect(is_contract).not.toBeUndefined();
        expect(is_iterable).not.toBeUndefined();
        expect(is_countable).not.toBeUndefined();
        expect(to_object).not.toBeUndefined();
        expect(Convert).not.toBeUndefined();
    });

    test('Функции должны корректно работать', () => {
        expect(to_array('example')).toEqual(['example']);
        expect(to_bool(1)).toBe(true);
        expect(to_boolean(1)).toBe(true);
        expect(to_float('123.45')).toBe(123.45);
        expect(to_double('123.45')).toBe(123.45);
        expect(to_int('123')).toBe(123);
        expect(to_integer('123')).toBe(123);
        expect(to_object('example')).toEqual({ value: 'example' });
        expect(to_string(123)).toBe('123');
    });

    test('Функции проверки типов должны корректно работать', () => {
        class MyClass {}
        expect(is_array([])).toBe(true);
        expect(is_bool(true)).toBe(true);
        expect(is_class(class {})).toBe(true);
        expect(is_number(123)).toBe(true);
        expect(is_float(123.45)).toBe(true);
        expect(is_double(123.45)).toBe(true);
        expect(is_int(123)).toBe(true);
        expect(is_integer(123)).toBe(true);
        expect(is_long(123)).toBe(true);
        expect(is_null(null)).toBe(true);
        expect(is_numeric('123')).toBe(true);
        expect(is_object(new MyClass())).toBe(true);
        expect(is_string('example')).toBe(true);
        expect(is_scalar(123)).toBe(true);
        expect(is_symbol(Symbol('example'))).toBe(true);
        expect(is_undefined(undefined)).toBe(true);
        expect(is_callable(() => {})).toBe(true);
        expect(is_contract(class {})).toBe(false);
        expect(is_iterable([])).toBe(true);
        expect(is_countable([])).toBe(true);
    });

    test('Функции работы с переменными должны корректно работать', () => {
        const obj = { key: 'value' };
        const stdObject = new stdClass();
        stdObject.key = 'value';
        expect(empty([])).toBe(true);
        expect(gettype(123)).toBe('integer');
        expect(isset(obj.key)).toBe(true);
        const newStdObject = settype(obj, 'object');
        expect(newStdObject).toStrictEqual(stdObject);
        expect(newStdObject.key).toBe('value');
    });

    test('Функции вывода должны корректно работать', () => {
        expect(print('example')).toBeUndefined();
        expect(print_type(123)).toBeUndefined();
    });

    test('Класс Convert должен корректно работать', () => {
        expect(Convert.toArray('example')).toEqual(['example']);
        expect(Convert.toBool(1)).toBe(true);
        expect(Convert.toBoolean(1)).toBe(true);
        expect(Convert.toFloat('123.45')).toBe(123.45);
        expect(Convert.toDouble('123.45')).toBe(123.45);
        expect(Convert.toInt('123')).toBe(123);
        expect(Convert.toInteger('123')).toBe(123);
        expect(Convert.toObject('example')).toEqual({ value: 'example' });
        expect(Convert.toString(123)).toBe('123');
    });
});
