import { test, expect } from '@jest/globals';
import { get_object_vars } from '../../src/class.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';
import { stdClass } from '../../src/classes.mjs';

// Тестируем простую работу с объектами
describe('get_object_vars', () => {
    // Тест на корректное извлечение свойств объекта
    test('Возвращает видимые нестатические свойства объекта', () => {
        class MyClass {
            constructor() {
                this.mine = 'test';
                this.value = 42;
            }

            method() {
                console.log('This is a method');
            }
        }

        const obj = new MyClass();
        const result = get_object_vars(obj);

        expect(result).toEqual({ mine: 'test', value: 42 });
        // Метод не должен быть в результатах
        expect(result.method).toBeUndefined();
    });

    // Тест на выбрасывание исключения, если передан не объект
    test('Выбрасывает ошибку, если передан не объект', () => {
        expect(() => get_object_vars(null)).toThrow(TypePHPJSError);
        expect(() => get_object_vars(123)).toThrow(TypePHPJSError);
        expect(() => get_object_vars('string')).toThrow(TypePHPJSError);
        expect(() => get_object_vars([])).toThrow(TypePHPJSError);
    });

    // Тест на пустой объект
    test('Возвращает пустой массив для пустого объекта', () => {
        const result = get_object_vars(new stdClass());
        expect(result).toEqual({});
    });

    // Тест с объектом, у которого есть только методы
    test('Возвращает пустой объект, если в объекте только методы', () => {
        class MyClass {
            method1() {}
            method2() {}
        }

        const obj = new MyClass();
        const result = get_object_vars(obj);
        expect(result).toEqual({});
    });

    // Тест на объект с символами как свойствами
    test('игнорирует символы', () => {
        const symbolKey = Symbol('symbol');

        class MyClass {
            [symbolKey] = 'symbolValue';
            mine = 'test';
        }

        const obj = new MyClass();

        const result = get_object_vars(obj);
        expect(result).toEqual({ mine: 'test' });
    });
});
