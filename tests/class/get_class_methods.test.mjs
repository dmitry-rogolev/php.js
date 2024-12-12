import { test, expect } from '@jest/globals';
import { TypePHPJSError } from '../../src/exceptions.mjs';
import { get_class_methods } from '../../src/class.mjs';

describe('get_class_methods', () => {
    // ! PHP 8.3.14
    // array(2) {
    //     [0]=>
    //     string(12) "staticMethod"
    //     [1]=>
    //     string(14) "instanceMethod"
    // }
    //
    // https://onlinephp.io?s=s7EvyCjg5eLlSs5JLC5W8K10BtPVvFwKQFBQmpSTmaxQXJJYAqTSSvOSSzLz86B839SSjPwUDU2F6loU1XBlmXlAhXnJqSgKa0GWlSUWxaeU5hZopKeWxINtjs8FKyrWUIc6QV1T0xoA&v=8.3.14
    //
    // Тест на получение методов статического класса
    test('Возвращает методы статического класса', () => {
        class MyClass {
            static staticMethod() {}
            instanceMethod() {}
        }

        const result = get_class_methods(MyClass);

        expect(result).toEqual({
            staticMethod: MyClass.staticMethod,
        });
    });

    // https://onlinephp.io?s=s7EvyCjg5eLlSs5JLC5W8K10BtPVvFwKQFBQmpSTmayQVpqXXJKZn6eQmVdckpiXnOqbWpKRn6KhqVBdi11hYl5-SUZqEYq6WpA1KjAjFGwV8lLLYRZqaFqDZYtSi0tzSoBy6akl8WAnxeeCzSjWgOuEKC1LLIpPKc0t0IDq0bQGAA%2C%2C&v=8.3.14
    //
    // Тест на получение методов объекта
    test('Возвращает методы объекта', () => {
        class MyClass {
            instanceMethod() {}
            anotherMethod() {}
        }

        const instance = new MyClass();

        const result = get_class_methods(instance);

        expect(result).toEqual({
            instanceMethod: instance.instanceMethod,
            anotherMethod: instance.anotherMethod,
        });
    });

    // https://onlinephp.io?s=s7EvyCjg5eLlSs5JLC5WcM0tKKl0BjOra0HCKkWpxaU5JQq2CumpJfFgRfG5qSUZ-SnFGuoI1eqa1iDVZYlF8SmluQUaUG2a1gA%2C&v=8.3.14
    //
    // Тест на пустой класс
    test('Возвращает пустой объект для класса без методов', () => {
        class EmptyClass {}

        const result = get_class_methods(EmptyClass);

        expect(result).toEqual({});
    });

    // Тест на выброс ошибки при неверном типе параметра
    test('Выбрасывает ошибку, если передан не объект и не класс', () => {
        expect(() => get_class_methods(null)).toThrow(TypePHPJSError);
        expect(() => get_class_methods(123)).toThrow(TypePHPJSError);
        expect(() => get_class_methods('string')).toThrow(TypePHPJSError);
        expect(() => get_class_methods([])).toThrow(TypePHPJSError);
    });

    // https://onlinephp.io?s=bY6_DoIwEMZnm_QdbiChjLqicXDmGUgtJzQppWmvGEJ4dwuiLt7yDff7_pyvrnOccaaMDAGq6bbpzNnBxbvRCgJ5bVvInB8ceprgAvkoTcS8TNCPe0SrSA8WeqRuaI6igHnhDNL9J047saz1mbaBpFWY4i0-P0NEkUoyjyEaSp8Wqd6G1u-IIL6-FeRslL5uYu_E7inKFw%2C%2C&v=8.3.14
    //
    // Тест на экземпляр класса с методами и свойствами
    test('Возвращает только методы, игнорируя свойства', () => {
        class MyClass {
            method1() {}
            method2() {}
            property = 'value';
        }

        const instance = new MyClass();
        const result = get_class_methods(instance);

        expect(result).toEqual({
            method1: instance.method1,
            method2: instance.method2,
        });
    });

    // https://onlinephp.io?s=s7EvyCjg5eLlSs5JLC5WCEgsSs0rcQazq3m5FICgoDQpJzNZobgksQRIpZXmJZdk5ucpFIBV-qaWZOSnaGgqVNfyctUizHHOyMxJgRiTWlGSmpdCitHJIM2YJqsUpRaX5pQo2Cqkp5bEg-2JzwWrKtZQR1iormkNUl2WWBSfUppboAHVpmkNAA%2C%2C&v=8.3.14
    //
    // Тест на наследование класса
    test('Возвращает методы из всей цепочки наследования класса', () => {
        class ParentClass {
            static parentMethod() {}
        }

        class ChildClass extends ParentClass {
            static childMethod() {}
        }

        const result = get_class_methods(ChildClass);

        expect(result).toEqual({
            childMethod: ChildClass.childMethod,
            parentMethod: ChildClass.parentMethod,
        });
    });

    // https://onlinephp.io?s=lY5BCsIwEEX3gdxhFi6SM1Rx0bXgDUqajKaSpqGZVKH07iZRUHDlbGbgv_-Y_THYwBln2qkY4axm9NTWe-UM8oTUu0FDJEV5XZLXNEweQiVPSHYyQsK6cbZ9PK0dnHlp8EHozT9qXcq_5t3U3-AAHu9feiGbnMwYk6McXpG6-kE31n4UpVUYzhY1dyaNQbxx2TwB&v=8.3.14
    //
    // Тест на наследование объекта
    test('Возвращает методы из всей цепочки наследования объекта', () => {
        class ParentClass {
            parentMethod() {}
        }

        class ChildClass extends ParentClass {
            childMethod() {}
        }

        const obj = new ChildClass();
        const result = get_class_methods(obj);

        expect(result).toEqual({
            childMethod: obj.childMethod,
            parentMethod: obj.parentMethod,
        });
    });
});
