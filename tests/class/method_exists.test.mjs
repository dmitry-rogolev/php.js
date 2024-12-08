import { test, expect } from '@jest/globals';
import { method_exists } from '../../src/class.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';

/**
 * https://onlinephp.io?s=lZDNCsIwDIDPDvYOEYRusDeY4kEEL570PmZXXaFLx9o5Qfburt2_ILie2iZfviTbfZ7m4DquQ0WsFFyZ0gd7e7vOKi9vglO4l0g1lwjsxZXm-DgzncrE820SNKdguiwQyIkJIQOoZCGSNQmbaO069Vj-omPN6Uxi8M6jbHTUte-pDLrT-9p6kNkUKzTR3rnh2JRAymAHyKpxOM8PTfwZF1FSZrnX8pEdT3kDFgCZT0x8A_6BocSj-WWo_yDJ0BhZpiRf-zT4dGmL4R99fwA%2C&v=8.3.14
 */
describe('Функция method_exists', () => {
    class TestClass {
        existingMethod() {
            return 'Hello, world!';
        }
    }

    const instance = new TestClass();

    test('должна вернуть true, если метод существует в экземпляре класса', () => {
        expect(method_exists(instance, 'existingMethod')).toBe(true);
    });

    test('должна вернуть false, если метод не существует в экземпляре класса', () => {
        expect(method_exists(instance, 'nonExistentMethod')).toBe(false);
    });

    // ! PHP 8.3.14: bool(true)
    test('должна вернуть false для нестатического метода в классе', () => {
        expect(method_exists(TestClass, 'existingMethod')).toBe(false);
    });

    test('должна выбрасывать ошибку, если первый аргумент не является объектом или классом', () => {
        expect(() => method_exists(123, 'method')).toThrow(TypePHPJSError);
        expect(() => method_exists(null, 'method')).toThrow(TypePHPJSError);
        expect(() => method_exists(undefined, 'method')).toThrow(TypePHPJSError);
    });

    test('должна выбрасывать ошибку, если второй аргумент не является строкой', () => {
        expect(() => method_exists(instance, 123)).toThrow(TypePHPJSError);
        expect(() => method_exists(instance, null)).toThrow(TypePHPJSError);
    });

    test('должна корректно работать со статическими методами в классах', () => {
        class StaticTestClass {
            static staticMethod() {
                return 'Static method!';
            }
        }

        expect(method_exists(StaticTestClass, 'staticMethod')).toBe(true);
        expect(method_exists(StaticTestClass, 'nonExistentMethod')).toBe(false);
    });
});
