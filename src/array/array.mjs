import { is_array } from '../variables.mjs';

/**
 * Создаёт массив из переданных значений, обрабатывая ассоциативные массивы (объекты с ключами).
 *
 * ### Параметры
 *
 * - `values` {...any}
 *
 *      Один или несколько элементов, которые могут быть массивами, объектами или другими значениями.
 *
 * ### Описание
 *
 * Функция принимает произвольное количество аргументов и возвращает массив, содержащий переданные значения.
 * Если среди переданных значений есть ассоциативные массивы (объекты, не являющиеся массивами и с ненулевым прототипом),
 * они преобразуются:
 *
 * - Создаётся новый объект без прототипа.
 * - Добавляются все свойства исходного объекта.
 * - Добавляется итератор, позволяющий использовать объект в цикле `for-of` для получения пар `[ключ, значение]`.
 *
 * Если передано только одно значение, и это массив, функция возвращает его напрямую.
 *
 * ### Возвращаемое значение
 *
 * Массив, содержащий переданные значения, с преобразованием ассоциативных массивов.
 * Если передано одно значение и это массив, возвращается он сам.
 *
 * ### Примеры использования
 *
 * 1. Простые массивы:
 *
 *     ```js
 *     const result = array([1, 2, 3]);
 *     console.log(result); // [1, 2, 3]
 *     ```
 *
 * 2. Ассоциативные массивы (объекты с ключами и значениями):
 *
 *     ```js
 *     const result = array({ foo: 'bar', baz: 42 });
 *     for (const [key, value] of result[0]) {
 *         console.log(key, value);
 *     }
 *     // Вывод:
 *     // foo bar
 *     // baz 42
 *     ```
 *
 * 3. Смешанные значения:
 *
 *     ```js
 *     const result = array([1, 2, 3], { foo: 'bar' }, 'hello');
 *     console.log(result);
 *     // Вывод: [[1, 2, 3], { foo: 'bar' }, 'hello']
 *     ```
 *
 * 4. Объекты, созданные без прототипа:
 *
 *     ```js
 *     const noProtoObject = Object.create(null);
 *     noProtoObject.foo = 'bar';
 *     const result = array(noProtoObject);
 *     for (const [key, value] of result[0]) {
 *         console.log(key, value);
 *     }
 *     // Вывод:
 *     // foo bar
 *     ```
 *
 * @param {...any} values - Один или несколько элементов, которые могут быть массивами, объектами или другими значениями.
 * @returns {Array|Object} Массив, содержащий переданные значения, с преобразованием ассоциативных массивов.
 * Если передано одно значение и это массив, возвращается он сам.
 */
export default function array(...values) {
    const result = [];

    for (const value of values) {
        if (is_array(value) && !Array.isArray(value)) {
            const assocArray = Object.create(null);

            Object.assign(assocArray, value);

            Object.defineProperty(assocArray, Symbol.iterator, {
                enumerable: false,
                writable: true,
                configurable: true,
                *value() {
                    for (const key in this) {
                        if (Object.hasOwn(this, key)) {
                            yield [key, this[key]];
                        }
                    }
                },
            });

            result.push(assocArray);
        } else {
            result.push(value);
        }
    }

    if (result.length === 1 && is_array(result[0])) {
        return result[0];
    }

    return result;
}
