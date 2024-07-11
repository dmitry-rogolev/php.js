import { test, expect, jest } from '@jest/globals';
import get_magic_proxy from '../../src/functions/get_magic_proxy.mjs';

class PropertyTest {
    _data = {};

    constructor() {
        return get_magic_proxy(this);
    }

    __set(name, value) {
        console.log(`Установка ${name} в ${value}`);

        this._data[name] = value;
    }

    __get(name) {
        console.log(`Получение ${name}`);

        return this._data[name];
    }

    __isset(name) {
        console.log(`Установлено ли "${name}"?`);

        return name in this._data;
    }

    __unset(name) {
        console.log(`Уничтожение ${name}`);

        delete this._data[name];
    }
}

test('__set', () => {
    const logSpy = jest.spyOn(console, 'log');
    const obj = new PropertyTest();
    obj.a = 1;

    expect(logSpy).toHaveBeenCalledWith('Установка a в 1');
});

test('__get', () => {
    const logSpy = jest.spyOn(console, 'log');
    const obj = new PropertyTest();
    obj.a = 1;

    expect(obj.a).toBe(1);
    expect(logSpy).toHaveBeenCalledWith('Получение a');
});

test('__isset', () => {
    const logSpy = jest.spyOn(console, 'log');
    const obj = new PropertyTest();

    expect('a' in obj).toBeFalsy();

    obj.a = 1;

    expect('a' in obj).toBeTruthy();
    expect(logSpy).toHaveBeenCalledWith('Установлено ли "a"?');
});

test('__unset', () => {
    const logSpy = jest.spyOn(console, 'log');
    const obj = new PropertyTest();

    obj.a = 1;
    delete obj.a;

    expect('a' in obj).toBeFalsy();
    expect(logSpy).toHaveBeenCalledWith('Уничтожение a');
});
