import boolval from './boolval.mjs';

/**
 * Проверяет, пуста ли переменная
 *
 * Проверяет, считается ли переменная пустой.
 * Переменная считается пустой, если при приведении
 * ее значения к `boolean` функцией `boolval`
 * возвращается `false`.
 *
 * Функция `empty` - это эквивалент инструкции `!boolval(variable)`.
 *
 * @param {any} variable Проверяемая переменная.
 * @returns {boolean}
 *
 * Возвращает `true`, если переданная в параметр `variable`
 * переменная содержит пустое значение или равно нулю,
 * то есть ложно. В остальных случаях возвращает `false`.
 */
export default function empty(variable) {
    return !boolval(variable);
}
