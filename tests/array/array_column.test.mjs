import { test, expect } from '@jest/globals';
import array_column from '../../src/array/array_column.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';

test('array_column выбрасывает ошибку TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_column(false)).toThrow(TypePHPJSError);
    expect(() => array_column([], false)).toThrow(TypePHPJSError);
    expect(() => array_column([], 'name', false)).toThrow(TypePHPJSError);
});

test('array_column возвращает значения одного столбца массива объектов.', () => {
    const records = [
        {
            id: 2135,
            first_name: 'John',
            last_name: 'Doe',
        },
        {
            id: 3245,
            first_name: 'Sally',
            last_name: 'Smith',
        },
        {
            id: 5342,
            first_name: 'Jane',
            last_name: 'Jones',
        },
        {
            id: 5623,
            first_name: 'Peter',
            last_name: 'Doe',
        },
    ];

    expect(array_column(records, 'first_name')).toStrictEqual(['John', 'Sally', 'Jane', 'Peter']);

    expect(array_column(records, 'last_name', 'id')).toStrictEqual({
        2135: 'Doe',
        3245: 'Smith',
        5342: 'Jones',
        5623: 'Doe',
    });

    class User {
        username;

        constructor(username) {
            this.username = username;
        }
    }

    const users = [new User('user 1'), new User('user 2'), new User('user 3')];

    expect(array_column(users, 'username')).toStrictEqual(['user 1', 'user 2', 'user 3']);
});
