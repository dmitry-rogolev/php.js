import { expect, test } from '@jest/globals';
import { array_map } from '../../src/array.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';

test('array_map выбрасывает исключение TypePHPJSError при передаче неверного типа параметра.', () => {
    expect(() => array_map(false)).toThrow(TypePHPJSError);
    expect(() => array_map(null, false)).toThrow(TypePHPJSError);
    expect(() => array_map(null, [], false)).toThrow(TypePHPJSError);
});

// https://onlinephp.io?s=s7EvyCjg5eLlUkksKkqsVLBViDbUUTDSUTCOteblKkssik8pzS3QAEvG5yYWaOSV5uToKEBUa2paAwA%2C&v=8.2.20
test('array_map возвращает массив без изменения при отсутствии параметра callback и параметра arrays.', () => {
    expect(array_map(null, [1, 2, 3])).toStrictEqual([1, 2, 3]);
});

// https://onlinephp.io?s=s7EvyCjg5eLlSivNSy7JzM9TSC5NStVQydPk5arm5VIAgqLUktKiPAWgmIKWApTQtOblqgVpU0lUsFWINtRRMNJRMNZRMNFRMI0FyqkkAYUTi4oSK-NzEws01EGGqusoqCSCNBYUZeaVxBdpqCRpWgMA&v=8.2.20
test('array_map применяет callback-функцию к переданному массиву.', () => {
    expect(array_map(v => v ** 3, [1, 2, 3, 4, 5])).toStrictEqual([1, 8, 27, 64, 125]);
});

// https://onlinephp.io?s=fZDPSgMxEMbvgbzDUALZhfTgv4u1-hAeiyxptnZz2EnIZhEpe_BpvHosiu0rxDdyNiq0CgbCF-abX75Jrm584znj7L5HE61D6Br3UN16jbZrCosRBCroYrC4BtGWl99nzjacAa2win1AmKTntP14Sm9pBxuBA6R92k1zaZ9e0jvpa9rClMx2mMw4G45SW-3_DdUh6MffmQuBML-mhruf-4SGOSxOFJwqOFNwruBi9MRyLMsenVQga9eNEsMqq-l1DNkwFo2TI0CIISSnVjRbIQ-_hXqFpr0sqdXTkLEKhTDlF1gfgwcvyxz8Aety9gk%2C&v=8.2.20
test('array_map применяет callback-функцию ко всем элементам указанных массивов.', () => {
    expect(
        array_map(
            (k, v) => `Число ${k} по-испански - ${v}`,
            [1, 2, 3, 4, 5],
            ['uno', 'dos', 'tres', 'cuatro', 'cinco'],
        ),
    ).toStrictEqual([
        'Число 1 по-испански - uno',
        'Число 2 по-испански - dos',
        'Число 3 по-испански - tres',
        'Число 4 по-испански - cuatro',
        'Число 5 по-испански - cinco',
    ]);
});

// https://onlinephp.io?s=HYtLCsMwDET3gdxBC4MT0Ka_VVp6kFKCYrvEkNpGtVt6-6paDING752vZS1913eG4AK3HcIe4YBwRDjdJ5mX_2xzChbB1k_WWjno_ciNteM7WMWd4i0p5_NLcQ7arlFlfbiYXFZBFC8KMdN3flIZUts2BEOSReJGgQrHVGcejB-nHw%2C%2C&v=8.2.20
test('array_map выполняет zip-операцию при отсутствии параметра callback.', () => {
    expect(
        array_map(
            null,
            [1, 2, 3, 4, 5],
            ['one', 'two', 'three', 'four', 'five'],
            ['uno', 'dos', 'tres', 'cuatro', 'cinco'],
        ),
    ).toStrictEqual([
        [1, 'one', 'uno'],
        [2, 'two', 'dos'],
        [3, 'three', 'tres'],
        [4, 'four', 'cuatro'],
        [5, 'five', 'cinco'],
    ]);
});

// https://onlinephp.io?s=jc7BCsIwDAbge6HvkEOhHezirnP6IENGNqsOu67EdjDEdzeDXQYq5vjz_Un2x3ALUkihkAgqqPUjUu-vdztrqA6gJ3TJ6lMpxSX5Lvajh67dGYUZPKUAHrIxkYda4aJeG1gwzEG1H_ASr4UJqTmnIRj-AedmwGA0H9FMOMmy8hspVvIb-uRcDn-Qzao3&v=8.2.20
test('array_map со строковыми ключами.', () => {
    const array = { stringkey: 'value' };

    expect(array_map(v => [v], array)).toStrictEqual({ stringkey: ['value'] });
    expect(array_map((a, b) => [a, b], array, array)).toStrictEqual([['value', 'value']]);
    expect(array_map(null, array)).toStrictEqual({ stringkey: 'value' });
    expect(array_map(null, array, array)).toStrictEqual([['value', 'value']]);
});

// https://onlinephp.io?s=dZHLSsNQEIb3hbzDUAJJIKbeQGitPohIOdZ4IWkJSRPozlgvCxVB3Bd8gnoJprVJX2HOGzlzTFxpNufPnG9-_pmzux-cBVpDa-giDKELB1oD6DOSDQO6e2DgFDN5gW_yDuegjpWcyBQXhl2TmxX5JC-xJLb8l9yqyBeiMqLzP8jDDqdptQCnROW4JPIWZ1iQztqAz1hSD4eijhxz2HG2nXUuMZlyBpAPfOA7ozlhK_r5kvf4KSc4p6sM8JVLmLH8IJGTf6FmVK4FQTNcsJapIuQjqBClCrJkWF6DvCLHgsAbnsWhLfaF7x-JvkerPBma0Sg8H56C7tlQy8Rq15p20dQ9WKvy0l1TDa-HbhT7I7KgNxHj3kAE5q-xXRU9dxyZ_GhWXUmEH7tVzVJGiQh7x_GAun8crc43&v=8.2.20
test('array_map с ассоциативными массивами.', () => {
    const array = {
        v1: 'Первый выпуск',
        v2: 'Второй выпуск',
        v3: 'Третий выпуск',
    };

    expect(
        array_map((k, v) => `${k} - это ${v}`, Object.keys(array), Object.values(array)),
    ).toStrictEqual(['v1 - это Первый выпуск', 'v2 - это Второй выпуск', 'v3 - это Третий выпуск']);
});
