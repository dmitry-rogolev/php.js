import { test, expect } from '@jest/globals';
import { TypePHPJSError } from '../../src/exceptions.mjs';
import { get_parent_class } from '../../src/class.mjs';

test('get_parent_class выбрасывает ошибку TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => get_parent_class(false)).toThrow(TypePHPJSError);
});

test('get_parent_class возвращает родительский класс объекта.', () => {
    class Foo {}

    const foo = new Foo();

    expect(get_parent_class(foo)).toBe(Foo);
});

test('get_parent_class возвращает родительский класс класса.', () => {
    class Foo {}
    class Bar extends Foo {}

    expect(get_parent_class(Bar)).toBe(Foo);
});

test('get_parent_class возвращает false при отсутствии родительского класса.', () => {
    class Foo {}

    expect(get_parent_class(Foo)).toBeFalsy();
});
