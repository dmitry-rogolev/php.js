import { test, expect } from '@jest/globals';
import array_column from '../../src/array/array_column.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';
import { stdClass } from '../../src/classes.mjs';

// https://onlinephp.io?s=nZG9CoMwEMd3wXfIUIhClkbt0touLRQpVPABQtCUBGIipw6-fasg1SWV3nTc_-5-93G6NLLxPd_bgSgtVC1KEQfgQ-B76GNLfzSsKozSM6L7KCGL8EtB2zHDazHJOLPS4GWC5iv9asUsh8SNimjsRBVc68HFKmrVya20JIqpczFuhAuWWSPazbADjVywXHQCtp7R98Lj-MkGlOkYBBOUlVb3tQnm95IVJBwrRCktyu85uz0fmxp8ZyDTJn91Mb3Wv4Z5Aw%2C%2C&v=8.2.20

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

class User extends stdClass {
    username;

    constructor(username) {
        super();

        this.username = username;
    }
}

const users = [new User('user 1'), new User('user 2'), new User('user 3')];

test('array_column выбрасывает ошибку TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_column(false)).toThrow(TypePHPJSError);
    expect(() => array_column([], false)).toThrow(TypePHPJSError);
    expect(() => array_column([], 'name', false)).toThrow(TypePHPJSError);
});

test('array_column возвращает список значений при отсутствии параметра index_key.', () => {
    expect(array_column(records, 'id')).toStrictEqual([2135, 3245, 5342, 5623]);
    expect(array_column(records, 'first_name')).toStrictEqual(['John', 'Sally', 'Jane', 'Peter']);
    expect(array_column(users, 'username')).toStrictEqual(['user 1', 'user 2', 'user 3']);
});

test('array_column возвращает ассоциативный массив пар ключ-значение вида {index_key: column_key} при одновременной передаче column_key и index_key.', () => {
    expect(array_column(records, 'last_name', 'id')).toStrictEqual({
        2135: 'Doe',
        3245: 'Smith',
        5342: 'Jones',
        5623: 'Doe',
    });
});

test('array_column возвращает ассоциативный массив пар ключ-значение вида {index_key: model} при отсутствии параметра column_key.', () => {
    expect(array_column(records, null, 'first_name')).toStrictEqual({
        John: {
            id: 2135,
            first_name: 'John',
            last_name: 'Doe',
        },
        Sally: {
            id: 3245,
            first_name: 'Sally',
            last_name: 'Smith',
        },
        Jane: {
            id: 5342,
            first_name: 'Jane',
            last_name: 'Jones',
        },
        Peter: {
            id: 5623,
            first_name: 'Peter',
            last_name: 'Doe',
        },
    });
});
