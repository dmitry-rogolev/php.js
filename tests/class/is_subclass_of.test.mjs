import { test, expect } from '@jest/globals';
import { is_subclass_of } from '../../src/class.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';
import { Interface } from '../../src/contracts.mjs';

// Пример базового класса и подклассов
class Animal {}
class Dog extends Animal {}
class Cat extends Animal {}
class Plant {}

/**
 * https://onlinephp.io?s=s7EvyChQ4OXi5UrOSSwuVnDMy8xNzFGoroUJuOSnK6RWlKTmpWCRdE4swS0ZkJOYVwLmZ-aVpBalJSanKnjCWK4VibkFOamoFoVnlmTAVaAbnAlSn5uaV1KM3RRerrLEoviU0twCjczi-OLSJLCx8flpGupAo9V1FNQhBqlraloTVgt2PH6leanlIEdraJJoNDDQCBhcmpNDmpkgHcS4FSWAwQ5HD0qIdQA%2C&v=8.3.14
 */
describe('Функция is_subclass_of', () => {
    test('должна вернуть true для подкласса другого класса', () => {
        // Проверяем, что Dog является подклассом Animal
        expect(is_subclass_of(Dog, Animal)).toBe(true);
    });

    test('должна вернуть false для несвязанных классов', () => {
        // Проверяем, что Dog не является подклассом Plant
        expect(is_subclass_of(Dog, Plant)).toBe(false);
    });

    test('должна вернуть true для экземпляра объекта', () => {
        const dog = new Dog();
        // Проверяем, что объект dog является экземпляром Dog, и Dog - подкласс Animal
        expect(is_subclass_of(dog, Animal)).toBe(true);
    });

    test('должна вернуть false, если класс не является подклассом другого', () => {
        // Проверяем, что Dog не является подклассом Cat
        expect(is_subclass_of(Dog, Cat)).toBe(false);
    });

    test('должна выбросить ошибку, если первый аргумент не является классом или объектом', () => {
        // Проверка на ошибку для неверного типа первого аргумента
        expect(() => is_subclass_of(null, Animal)).toThrow(TypePHPJSError);
    });

    test('должна выбросить ошибку, если второй аргумент не является классом', () => {
        // Проверка на ошибку для второго аргумента, который должен быть классом
        expect(() => is_subclass_of(Dog, null)).toThrow(TypePHPJSError);
    });

    test('должна вернуть true для проверки реализации интерфейса (если применимо)', () => {
        // Предположим, что класс реализует интерфейс (сделаем проверку интерфейса)
        class InterfaceExample extends Interface {}
        class DogWithInterface extends Animal {
            static __implements = [InterfaceExample];
        }

        const dogWithInterface = new DogWithInterface();
        // Проверяем, что dogWithInterface реализует интерфейс InterfaceExample
        expect(is_subclass_of(dogWithInterface, InterfaceExample)).toBe(true);
    });
});
