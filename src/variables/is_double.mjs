import is_float from './is_float.mjs';

/**
 * Проверяет, является ли переданное значение числом с плавающей точкой.
 *
 * Эта функция служит синонимом для проверки чисел с плавающей точкой. Она вызывает функцию `is_float`, которая
 * проверяет, является ли значение числом с дробной частью. В JavaScript все числа с плавающей точкой представлены
 * как числа с двойной точностью (64 бита), так что на практике нет различий между функциями `is_double` и `is_float`.
 *
 * ### Параметры
 *
 * - `value` (any)
 *
 *      Значение, которое нужно проверить на числовой тип с плавающей точкой.
 *
 * ### Описание
 *
 * Функция проверяет, является ли переданное значение числом с плавающей точкой (которое не является целым числом).
 * В случае, если число имеет дробную часть (например, 3.14), оно будет считаться числом с плавающей точкой. Если
 * число является целым, функция вернёт `false`. Для значений, которые не являются числами (например, строки, булевы
 * значения, `null` или `undefined`), также будет возвращён результат `false`.
 *
 * Эта функция полезна, когда необходимо проверить числовое значение, которое может быть представлено с дробной частью.
 *
 * ### Возвращаемое значение
 *
 * Функция возвращает:
 * - `true`, если значение является числом с плавающей точкой.
 * - `false`, если значение не является числом с плавающей точкой (например, целое число или нечисловое значение).
 *
 * ### Примеры использования
 *
 * 1. **Проверка чисел с плавающей точкой**
 *
 * ```js
 * is_double(3.14); // true
 * is_double(-0.001); // true
 * is_double(2.0); // false (2.0 является целым числом)
 * ```
 *
 * 2. **Проверка целых чисел**
 *
 * ```js
 * is_double(5); // false
 * is_double(0); // false
 * is_double(-10); // false
 * ```
 *
 * 3. **Проверка NaN**
 *
 * ```js
 * is_double(NaN); // false
 * ```
 *
 * 4. **Проверка строк и других типов**
 *
 * ```js
 * is_double('3.14'); // false
 * is_double(true); // false
 * is_double(null); // false
 * is_double(undefined); // false
 * ```
 *
 * @param {any} value Значение для проверки.
 * @returns {boolean} Возвращает `true`, если значение является числом с плавающей точкой, иначе `false`.
 */
export default function is_double(value) {
    return is_float(value);
}
