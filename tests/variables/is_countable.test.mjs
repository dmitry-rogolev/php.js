import { test, expect } from '@jest/globals';
import Countable from '../../src/spl/contracts/Countable.mjs';
import { is_countable } from '../../src/variables.mjs';

describe('Функция is_countable', () => {
    test('Должна возвращать true для массивов', () => {
        expect(is_countable([1, 2, 3])).toBe(true); // Обычный массив
        expect(is_countable([])).toBe(true); // Пустой массив
    });

    test('Должна возвращать true для ассоциативных массивов (объектов)', () => {
        expect(is_countable({ foo: 'bar' })).toBe(true); // Обычный объект
        expect(is_countable({})).toBe(true); // Пустой объект
    });

    test('Должна возвращать true для объектов, реализующих интерфейс Countable', () => {
        class Collection {
            static __implements = [Countable];
            count() {
                return 10;
            }
        }
        const collect = new Collection();
        expect(is_countable(collect)).toBe(true); // Экземпляр класса с Countable
    });

    test('Должна возвращать false для чисел', () => {
        expect(is_countable(42)).toBe(false); // Примитивное значение
        expect(is_countable(-10)).toBe(false);
    });

    test('Должна возвращать false для строк', () => {
        expect(is_countable('строка')).toBe(false); // Строка
        expect(is_countable('')).toBe(false); // Пустая строка
    });

    test('Должна возвращать false для null и undefined', () => {
        expect(is_countable(null)).toBe(false); // null
        expect(is_countable(undefined)).toBe(false); // undefined
    });

    test('Должна возвращать false для объектов, не реализующих интерфейс Countable', () => {
        class MyCollection {}
        const myObject = new MyCollection();
        expect(is_countable(myObject)).toBe(false); // Экземпляр класса без Countable
    });

    test('Должна возвращать false для функций', () => {
        function myFunction() {}
        const arrowFunction = () => {};
        expect(is_countable(myFunction)).toBe(false); // Обычная функция
        expect(is_countable(arrowFunction)).toBe(false); // Стрелочная функция
    });

    test('Должна возвращать false для других типов данных', () => {
        expect(is_countable(true)).toBe(false); // Булево значение
        expect(is_countable(Symbol('test'))).toBe(false); // Символ
    });
});
