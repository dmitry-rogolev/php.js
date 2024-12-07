import { test, expect } from '@jest/globals';
import { TypePHPJSError } from '../../src/exceptions.mjs';
import { is_a } from '../../src/class.mjs';
import { stdClass } from '../../src/classes.mjs';

test('is_a выбрасывает ошибку TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => is_a(false)).toThrow(TypePHPJSError);
    expect(() => is_a(stdClass, false)).toThrow(TypePHPJSError);
});

test('is_a проверяет принадлежность объекта к классу.', () => {
    class Foo {}
    class Bar extends Foo {}
    class Baz {}

    const bar = new Bar();
    const baz = new Baz();

    expect(is_a(bar, Foo)).toBeTruthy();
    expect(is_a(baz, Foo)).toBeFalsy();
});

test('is_a проверяет принадлежность класса к классу.', () => {
    class Foo {}
    class Bar extends Foo {}
    class Baz {}

    expect(is_a(Bar, Foo)).toBeTruthy();
    expect(is_a(Baz, Foo)).toBeFalsy();
});
