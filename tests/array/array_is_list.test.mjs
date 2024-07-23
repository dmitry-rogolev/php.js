import { expect, test } from '@jest/globals';
import { array_is_list } from '../../src/array.mjs';
import { TypePHPJSError } from '../../src/exceptions.mjs';

// https://onlinephp.io?s=rZLPTsJAEMbvJLzDhMtCYgA5in9OJh5M5N6QZtUiJGibAibe-BM1BiN3o-_QNDYSkPIKM2_kbCuSKiJUL83udmbn933fbu9ZVSuZSCaMk6oJIpcDadvySq819Hqt0QR00cdXdKmNDt2hgx51oWm3DMAXHNMAcEo96lCX-nQN-MZVHergMOhzswKyUDoo6ftHh_NVcTZNK2-B4N2ltPXT1rmVjsxOa-VMpvjJtvCe-NwMOcUhf0dLQT8GpLQ87OyCkJZVN8QGCNOWF2eGYAGpJQJ-aPpnWRVZb8zzCAPw6YZDcKgbRDFZJx2IzMeneRPghDe3vJyEo_nHQB16bCfkxfeIU9pmHN9-aAp8C-5daBU-sgMPii8q1QkROW8_-FCbBuzWiHorEIcRxsGOdv6NnYFdFS-XhKZzvB4f9Ll4CKqN68ccCm8XivryEiumKYKTY2mv-Yijrb_JemZMZbmi89h0X2niV6ng79W7VMGMZtpXQC_Ewy4sQ34H&v=8.2.20

test('array_is_list принимает первым параметром только массив.', () => {
    expect(() => array_is_list(true)).toThrow(TypePHPJSError);
    expect(array_is_list([1, 2, 3])).toBeTruthy();
    expect(array_is_list({ 0: 1, 1: 2 })).toBeTruthy();
});

test('array_is_list возвращает true для пустых массивов.', () => {
    expect(array_is_list([])).toBeTruthy();
    expect(array_is_list({})).toBeTruthy();
});

test('array_is_list возвращает true для списков.', () => {
    expect(array_is_list(['apple', 2, 3])).toBeTruthy();
    expect(array_is_list({ 0: 'apple', 1: 'orange' })).toBeTruthy();

    // В javascript ключи в Object сортируются, поэтому данный объект будет выглядеть так:
    // { 0: 'orange', 1: 'apple' }
    // В PHP функция array_is_list для данного массива выдаст false.
    expect(array_is_list({ 1: 'apple', 0: 'orange' })).toBeTruthy();
});

test('array_is_list возвращает false для ассоциативных массивов.', () => {
    // Массив начинается не с 0
    expect(array_is_list({ 1: 'apple', 2: 'orange' })).toBeFalsy();
    // Ключи массива не являются целыми числами
    expect(array_is_list({ 0: 'apple', foo: 'bar' })).toBeFalsy();
    // Непоследовательные ключи
    expect(array_is_list({ 0: 'apple', 2: 'bar' })).toBeFalsy();
});
