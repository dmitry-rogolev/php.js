import PHPJSError from './PHPJSError.mjs';

/**
 * Исключение `ValueError` выбрасывается, если тип аргумента правильный, но значение аргумента неверное.
 * Например, передача отрицательного целого числа, когда функция ожидает положительное, или передача
 * пустой строки или массива, когда функция ожидает, что строка или массив не будет пустым.
 */
class ValuePHPJSError extends PHPJSError {
    name = 'ValuePHPJSError';
}

export default ValuePHPJSError;
