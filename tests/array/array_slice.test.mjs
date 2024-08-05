import { expect, test } from '@jest/globals';
import { array_slice } from '../../src/array.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';

test('array_slice выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_slice(false)).toThrow(TypePHPJSError);
    expect(() => array_slice([], false)).toThrow(TypePHPJSError);
    expect(() => array_slice([], 4, false)).toThrow(TypePHPJSError);
    expect(() => array_slice([], 4, 4, 'wrong')).toThrow(TypePHPJSError);
});

// https://onlinephp.io?s=jZDBCsIwDEDvgv8QiocNKuo8qvgpMufAgYxR58GbE0Q8-StzOBzq9g3pH5l04k1nS1PavjySjqfRMmq3eHaCMNrEMAFXKXdrCVdIEHMOHocFB1_YI2YjFYTxTFkGna1Xgedbdb4Ex7ZHYEavB5hhhTfM9A5TfcIUc73_CAELVv7WdR0JA6P8qls0KPoShnVRXxXvZk1FnuAWGa3wYrA9FrRyzi2xwCdl8U4XJabACBkfBB1pnQkjDz1dMce7TkhwAE7SCR0KU0DW8IfUNzf9ByUhVhuf2Bc%2C&v=8.2.20
test('array_slice выбирает срез массива.', () => {
    const array = ['a', 'b', 'c', 'd', 'e'];

    expect(array_slice(array, 2)).toStrictEqual(['c', 'd', 'e']);
    expect(array_slice(array, -2, 1)).toStrictEqual(['d']);
    expect(array_slice(array, 0, 3)).toStrictEqual(['a', 'b', 'c']);
    expect(array_slice(array, 2, -1)).toStrictEqual(['c', 'd']);
    expect(array_slice(array, 2, -1, true)).toStrictEqual({ 2: 'c', 3: 'd' });
});

// https://onlinephp.io?s=s7EvyCjg5QJBlcy8gtISBVuFxKKixEoNQwVbOwWlRCUdBaUkEJEMIlJARKqSpjUvV0FRZl5JfJEGWHV8cU5mcqoGxAgdBUMdBSNNTWsA&v=8.2.20
test('array_slice с одномерным массивом.', () => {
    const array = { 1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e' };

    expect(array_slice(array, 1, 2)).toStrictEqual({ 0: 'b', 1: 'c' });
    expect(array_slice(array, 1, 2, true)).toStrictEqual({ 2: 'b', 3: 'c' });
});

// https://onlinephp.io?s=s7EvyCjg5QJBlcQiBVuFxKKixEoN9UR1Wzv1xIKCnFR1HQX1JBAvKTEPCEFcEyMQvyA1sQjESwFx8osS89JT1TWtebkKijLzSuKLNMAmxRfnZCanagDN1lEw0FEw1iSoQkehpKg0FagOAA%2C%2C&v=8.2.20
test('array_slice с массивом из смешанных ключей.', () => {
    const array = { a: 'apple', b: 'banana', 42: 'pear', d: 'orange' };

    expect(array_slice(array, 0, 3)).toStrictEqual({ a: 'apple', b: 'banana', 0: 'pear' });
    expect(array_slice(array, 0, 3, true)).toStrictEqual({ a: 'apple', b: 'banana', 42: 'pear' });
});
