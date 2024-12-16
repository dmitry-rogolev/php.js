import { test, expect, describe } from '@jest/globals';
import Interface from '../../src/contracts/Interface.mjs';
import { is_contract } from '../../src/variables.mjs';

describe('is_contract', () => {
    class ValidContract extends Interface {}
    class InvalidContract {}
    const NotAClass = {};

    describe('Проверка классов, наследующих Interface', () => {
        test('Должен возвращать true для класса, наследующего Interface', () => {
            expect(is_contract(ValidContract)).toBe(true);
        });

        test('Должен возвращать false для класса, не наследующего Interface', () => {
            expect(is_contract(InvalidContract)).toBe(false);
        });
    });

    describe('Проверка некорректных значений', () => {
        test('Должен возвращать false для объекта, не являющегося классом', () => {
            expect(is_contract(NotAClass)).toBe(false);
        });

        test('Должен возвращать false для примитивов', () => {
            expect(is_contract(null)).toBe(false);
            expect(is_contract(undefined)).toBe(false);
            expect(is_contract(42)).toBe(false);
            expect(is_contract('строка')).toBe(false);
        });

        test('Должен возвращать false для функции', () => {
            function RegularFunction() {}
            expect(is_contract(RegularFunction)).toBe(false);
        });
    });
});
