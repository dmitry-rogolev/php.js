import { expect, test } from '@jest/globals';
import { array_replace } from '../../src/array.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';

test('array_replace выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_replace(false)).toThrow(TypePHPJSError);
    expect(() => array_replace([], false)).toThrow(TypePHPJSError);
});

test('array_replace возвращает массив без изменения при отсутствии параметра replacements.', () => {
    expect(array_replace(['foo'])).toStrictEqual(['foo']);
});

// https://onlinephp.io?s=bY5BCoNADEX3gncIoYsRXBTpztoeRTISVGrTkJmNt69OtVAp2SSf_x653nXQPMuzk6fA0ACZ0ezwZSQ9YwnoSZZZN1KdUmQU1LPZjEW9kMY6UcdPlhi-hjM0N0AdhXfskpJu-A9WB7I3Uk61z28Pjnuj3TiXfi7hx3M4q9WgNkpszW2eon4D&v=8.2.20
test('array_replace заменяет элементы массива элементами других переданных массивов.', () => {
    expect(
        array_replace(
            ['orange', 'banana', 'apple', 'raspberry'],
            { 0: 'pineapple', 4: 'cherry' },
            { 0: 'grape' },
        ),
    ).toStrictEqual(['grape', 'banana', 'apple', 'raspberry', 'cherry']);

    expect(array_replace({ foo: 'bar' }, ['baz'], { bax: 'ban', foo: 'test' })).toStrictEqual({
        foo: 'test',
        0: 'baz',
        bax: 'ban',
    });
});
