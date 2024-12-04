import { test, expect, jest } from '@jest/globals';
import { TypePHPJSError } from '../../src/exceptions.mjs';
import { get_class } from '../../src/class.mjs';

test('get_class выбрасывает ошибку TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => get_class(false)).toThrow(TypePHPJSError);
});

test('Пример использования функции get_class()', () => {
    const logSpy = jest.spyOn(console, 'log');

    class Foo {
        name() {
            console.log(`Меня зовут ${get_class(this).name}`);
        }
    }

    // Создаём объект
    const bar = new Foo();

    // Внешний вызов
    console.log(`Его имя ${get_class(bar).name}`);

    expect(logSpy).toHaveBeenCalledWith('Его имя Foo');

    // Внутренний вызов
    bar.name();

    expect(logSpy).toHaveBeenCalledWith('Его имя Foo');
});
