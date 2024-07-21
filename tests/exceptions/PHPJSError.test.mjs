import { test, expect } from '@jest/globals';
import { is_class } from '../../src/variables.mjs';
import { Interface } from '../../src/contracts.mjs';
import { PHPJSError } from '../../src/exceptions.mjs';
import { stdClass } from '../../src/classes.mjs';
import StackTrace from 'stacktrace-js';

class Contract extends Interface {
    test() {}
}

class Trait {
    static staticProperty = 'staticProperty';
    dynamicProperty = 'dynamicProperty';

    static staticMethod() {}
    dynamicMethod() {}
}

class NotImplementedPHPJSError extends PHPJSError {
    static test() {}
}

NotImplementedPHPJSError.implements(Contract);

class TestPHPJSError extends PHPJSError {
    test() {}
}

TestPHPJSError.implements(Contract);
TestPHPJSError.use(Trait);

test('PHPJSError это класс.', () => {
    // PHPJSError должен быть классом.
    expect(is_class(PHPJSError)).toBeTruthy();

    // PHPJSError должен расширять класс stdClass.
    expect(new PHPJSError()).toBeInstanceOf(stdClass);
});

test('PHPJSError имеет статичный магический метод __set_state.', () => {
    // PHPJSError должен иметь статичный магический метод `__set_state`.
    expect(PHPJSError).toHaveProperty('__set_state');
});

test('PHPJSError имеет возможность реализации интерфейсов.', () => {
    // При отсутствии реализации интерфейса, должна выбрасываться ошибка.
    expect(() => new NotImplementedPHPJSError()).toThrow(Error);

    // При реализации интерфейса, не должна выбрасываться ошибка.
    expect(() => new TestPHPJSError()).not.toThrow(Error);

    // При первой проверке реализации интерфейса, должно добавляться статичное свойство `__verified_implementation`.
    expect(TestPHPJSError).toHaveProperty('__verified_implementation', true);
});

test('PHPJSError имеет возможность использования трейтов.', () => {
    expect(TestPHPJSError).toHaveProperty('staticProperty', 'staticProperty');
    expect(TestPHPJSError).toHaveProperty('staticMethod');
    expect(new TestPHPJSError()).toHaveProperty('dynamicProperty', 'dynamicProperty');
    expect(new TestPHPJSError()).toHaveProperty('dynamicMethod');
});

test('PHPJSError имеет свойство _message', () => {
    expect(new PHPJSError('error')).toHaveProperty('_message', 'error');
    expect(() => new PHPJSError(404)).toThrow(TypeError);
});

test('PHPJSError имеет свойство _code', () => {
    expect(new PHPJSError('error', 404)).toHaveProperty('_code', 404);
    expect(() => new PHPJSError('error', 'string')).toThrow(TypeError);
});

test('PHPJSError имеет свойство _previous', () => {
    const previous = new PHPJSError();
    expect(new PHPJSError('error', 404, previous)).toHaveProperty('_previous', previous);
    expect(() => new PHPJSError('error', 404, 'wrong')).toThrow(TypeError);
});

test('PHPJSError имеет свойство name', () => {
    expect(new PHPJSError()).toHaveProperty('name', 'PHPJSError');
});

test('PHPJSError имеет свойство _trace', () => {
    expect(new PHPJSError()._trace).toBeInstanceOf(Array);
});

test('PHPJSError имеет свойство _string', () => {
    expect(new PHPJSError()).toHaveProperty('_string');
});

test('PHPJSError имеет свойство _file', () => {
    expect(new PHPJSError()).toHaveProperty('_file', __filename);
});

test('PHPJSError имеет свойство _line', () => {
    expect(new PHPJSError()).toHaveProperty('_line', StackTrace.getSync()[0].lineNumber);
});

test('PHPJSError имеет метод getMessage', () => {
    const error = new PHPJSError();

    expect(error.getMessage()).toBe(error._message);
});

test('PHPJSError имеет метод getPrevious', () => {
    const error = new PHPJSError();

    expect(error.getPrevious()).toBe(error._previous);
});

test('PHPJSError имеет метод getCode', () => {
    const error = new PHPJSError();

    expect(error.getCode()).toBe(error._code);
});

test('PHPJSError имеет метод getFile', () => {
    const error = new PHPJSError();

    expect(error.getFile()).toBe(error._file);
});

test('PHPJSError имеет метод getLine', () => {
    const error = new PHPJSError();

    expect(error.getLine()).toBe(error._line);
});

test('PHPJSError имеет метод getTrace', () => {
    const error = new PHPJSError();

    expect(error.getTrace()).toBe(error._trace);
});

test('PHPJSError имеет метод getTraceAsString', () => {
    const error = new PHPJSError();

    expect(error.getTraceAsString()).toBe(error._string);
});

test('PHPJSError имеет метод __toString', () => {
    const error = new PHPJSError();

    expect(error.__toString()).toBe(error._string);
});
