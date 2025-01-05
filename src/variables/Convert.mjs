import to_array from './to_array.mjs';
import to_bool from './to_bool.mjs';
import to_float from './to_float.mjs';
import to_int from './to_int.mjs';
import to_object from './to_object.mjs';
import to_string from './to_string.mjs';

/**
 * Класс для преобразования значений в различные типы данных.
 *
 * ### Описание
 *
 * Класс `Convert` предоставляет методы для преобразования значений в различные типы данных, такие как boolean, integer, float, string, array и object. Каждый метод обрабатывает различные типы данных и возвращает их преобразованное представление.
 *
 * ### Методы
 *
 * - `toArray(value: any): Array|Object` - Преобразует значение в массив.
 * - `toBool(value: any): boolean` - Преобразует значение в логическое значение.
 * - `toBoolean(value: any): boolean` - Синоним метода `toBool`.
 * - `toDouble(value: any): number` - Преобразует значение в число с плавающей точкой (синоним метода `toFloat`).
 * - `toFloat(value: any): number` - Преобразует значение в число с плавающей точкой.
 * - `toInt(value: any, base: number = 10): number` - Преобразует значение в целое число.
 * - `toInteger(value: any, base: number = 10): number` - Синоним метода `toInt`.
 * - `toObject(value: any): object` - Преобразует значение в объект.
 * - `toString(value: any): string` - Преобразует значение в строку.
 *
 * ### Примеры использования
 *
 * ```js
 * const result1 = Convert.toArray('example');
 * // Результат: ["example"]
 *
 * const result2 = Convert.toBool(1);
 * // Результат: true
 *
 * const result3 = Convert.toDouble('123.45');
 * // Результат: 123.45
 *
 * const result4 = Convert.toInt('10', 2);
 * // Результат: 2
 *
 * const result5 = Convert.toObject({ key: 'value' });
 * // Результат: { key: "value" }
 *
 * const result6 = Convert.toString(123);
 * // Результат: '123'
 * ```
 */
class Convert {
    /**
     * Преобразует значение в array.
     *
     * ### Описание
     *
     * Метод `toArray` используется для преобразования различных типов данных в массив. Если значение
     * уже является массивом (тип `Array` или ассоциативный массив), возвращается оно же. Объекты
     * (экземпляры классов) преобразуются в массив с одним элементом.
     *
     * #### Примечание
     *
     * Метод `toArray` для объектов (ассоциативных массивов) возвращает результат
     * работы функции `array`, которая создает объект-контейнер пар ключ-значение
     * (ассоциативный массив) с помощью конструкции `Object.create(null)`,
     * копирует все видимые пары в этот контейнер, а также добавляет итератор
     * `Symbol.iterator` для перебора контейнера в цикле `for-of`.
     *
     * ### Параметры
     *
     * - `value` (any)
     *      Значение, которое необходимо преобразовать.
     *
     * ### Возвращаемое значение
     *
     * Возвращает массив, содержащий переданное значение. Если значение уже является массивом, возвращается оно же.
     *
     * ### Примеры использования
     *
     * 1. Преобразование строки в массив:
     *
     *    ```js
     *    const result = Convert.toArray('example');
     *    // Результат: ["example"]
     *    ```
     *
     * 2. Преобразование числа в массив:
     *
     *    ```js
     *    const result = Convert.toArray(123);
     *    // Результат: [123]
     *    ```
     *
     * 3. Преобразование массива (без изменений):
     *
     *    ```js
     *    const result = Convert.toArray([1, 2, 3]);
     *    // Результат: [1, 2, 3]
     *    ```
     *
     * 4. Преобразование объекта в массив:
     *
     *    ```js
     *    const result = Convert.toArray({ key: 'value' });
     *    // Результат: { key: "value" }
     *
     *    const proto = Object.getPrototypeOf(result);
     *    // Результат: null
     *
     *    for (const [key, value] of result) {
     *        console.log(key, value);
     *    }
     *    // Результат: 'key', 'value'
     *    ```
     *
     * 5. Преобразование экземпляра класса в массив:
     *
     *    ```js
     *    class MyClass {}
     *
     *    const instance = new MyClass();
     *    const result = Convert.toArray(instance);
     *    // Результат: [instance]
     *    ```
     *
     * 6. Преобразование null:
     *
     *    ```js
     *    const result = Convert.toArray(null);
     *    // Результат: []
     *    ```
     *
     * 7. Преобразование undefined:
     *
     *    ```js
     *    const result = Convert.toArray(undefined);
     *    // Результат: []
     *    ```
     *
     * @param {any} value Значение, которое необходимо преобразовать.
     * @returns {Array|Object} Преобразованное значение.
     */
    static toArray(value) {
        return to_array(value);
    }

    /**
     * Преобразует значение в boolean.
     *
     * ### Описание
     *
     * Метод `toBool` используется для преобразования различных типов данных в логическое значение.
     * Если значение является пустым массивом, метод возвращает `false`.
     *
     * ### Параметры
     *
     * - `value` (any)
     *      Значение, которое необходимо преобразовать.
     *
     * ### Возвращаемое значение
     *
     * Возвращает логическое значение, соответствующее переданному значению.
     *
     * ### Примеры использования
     *
     * 1. Преобразование пустого массива в `false`:
     *
     *    ```js
     *    const result = Convert.toBool([]);
     *    // Результат: false
     *    ```
     *
     * 2. Преобразование пустого ассоциативного массива в `false`:
     *
     *    ```js
     *    const result = Convert.toBool({});
     *    // Результат: false
     *    ```
     *
     * 3. Преобразование непустого массива в `true`:
     *
     *    ```js
     *    const result = Convert.toBool([1, 2, 3]);
     *    // Результат: true
     *    ```
     *
     * 4. Преобразование других значений:
     *
     *    ```js
     *    const result1 = Convert.toBool('example');
     *    // Результат: true
     *
     *    const result2 = Convert.toBool(123);
     *    // Результат: true
     *
     *    const result3 = Convert.toBool(null);
     *    // Результат: false
     *
     *    const result4 = Convert.toBool(undefined);
     *    // Результат: false
     *    ```
     *
     * @param {any} value Значение, которое необходимо преобразовать.
     * @returns {boolean} Преобразованное значение.
     */
    static toBool(value) {
        return to_bool(value);
    }

    /**
     * Преобразует значение в boolean.
     *
     * ### Описание
     *
     * Метод `toBoolean` является синонимом метода `toBool` и используется для преобразования различных типов данных в логическое значение.
     * Если значение является пустым массивом, метод возвращает `false`.
     *
     * ### Параметры
     *
     * - `value` (any)
     *      Значение, которое необходимо преобразовать.
     *
     * ### Возвращаемое значение
     *
     * Возвращает логическое значение, соответствующее переданному значению.
     *
     * ### Примеры использования
     *
     * 1. Преобразование пустого массива в `false`:
     *
     *    ```js
     *    const result = Convert.toBoolean([]);
     *    // Результат: false
     *    ```
     *
     * 2. Преобразование пустого ассоциативного массива в `false`:
     *
     *    ```js
     *    const result = Convert.toBoolean({});
     *    // Результат: false
     *    ```
     *
     * 3. Преобразование непустого массива в `true`:
     *
     *    ```js
     *    const result = Convert.toBoolean([1, 2, 3]);
     *    // Результат: true
     *    ```
     *
     * 4. Преобразование других значений:
     *
     *    ```js
     *    const result1 = Convert.toBoolean('example');
     *    // Результат: true
     *
     *    const result2 = Convert.toBoolean(123);
     *    // Результат: true
     *
     *    const result3 = Convert.toBoolean(null);
     *    // Результат: false
     *
     *    const result4 = Convert.toBoolean(undefined);
     *    // Результат: false
     *    ```
     *
     * @param {any} value Значение, которое необходимо преобразовать.
     * @returns {boolean} Преобразованное значение.
     */
    static toBoolean(value) {
        return to_bool(value);
    }

    /**
     * Преобразует значение в число с плавающей точкой.
     *
     * ### Описание
     *
     * Метод `toDouble` используется для преобразования различных типов данных в число с плавающей точкой. Он является оберткой над методом `toFloat`.
     *
     * ### Параметры
     *
     * - `value` (any)
     *      Значение, которое необходимо преобразовать.
     *
     * ### Возвращаемое значение
     *
     * Возвращает число с плавающей точкой, соответствующее переданному значению.
     *
     * ### Примеры использования
     *
     * 1. Преобразование строки в число с плавающей точкой:
     *
     *    ```js
     *    const result = Convert.toDouble('123.45');
     *    // Результат: 123.45
     *    ```
     *
     * 2. Преобразование целого числа в число с плавающей точкой:
     *
     *    ```js
     *    const result = Convert.toDouble(123);
     *    // Результат: 123.0
     *    ```
     *
     * 3. Преобразование булевых значений:
     *
     *    ```js
     *    const result1 = Convert.toDouble(true);
     *    // Результат: 1.0
     *
     *    const result2 = Convert.toDouble(false);
     *    // Результат: 0.0
     *    ```
     *
     * 4. Преобразование других значений:
     *
     *    ```js
     *    const result1 = Convert.toDouble(null);
     *    // Результат: 0.0
     *
     *    const result2 = Convert.toDouble(undefined);
     *    // Результат: 0.0
     *
     *    const result3 = Convert.toDouble('example');
     *    // Результат: 0.0
     *    ```
     *
     * @param {any} value Значение, которое необходимо преобразовать.
     * @returns {number} Преобразованное значение.
     */
    static toDouble(value) {
        return to_float(value);
    }

    /**
     * Преобразует значение в число с плавающей точкой.
     *
     * ### Описание
     *
     * Метод `toFloat` используется для преобразования различных типов данных в число с плавающей точкой. Если значение не является числом или строкой, метод возвращает `1` для истинных значений и `0` для ложных значений.
     *
     * ### Параметры
     *
     * - `value` (any)
     *      Значение, которое необходимо преобразовать.
     *
     * ### Возвращаемое значение
     *
     * Возвращает число с плавающей точкой, соответствующее переданному значению.
     *
     * ### Примеры использования
     *
     * 1. Преобразование строки в число с плавающей точкой:
     *
     *    ```js
     *    const result = Convert.toFloat('123.45');
     *    // Результат: 123.45
     *    ```
     *
     * 2. Преобразование целого числа в число с плавающей точкой:
     *
     *    ```js
     *    const result = Convert.toFloat(123);
     *    // Результат: 123.0
     *    ```
     *
     * 3. Преобразование булевых значений:
     *
     *    ```js
     *    const result1 = Convert.toFloat(true);
     *    // Результат: 1.0
     *
     *    const result2 = Convert.toFloat(false);
     *    // Результат: 0.0
     *    ```
     *
     * 4. Преобразование других значений:
     *
     *    ```js
     *    const result1 = Convert.toFloat(null);
     *    // Результат: 0.0
     *
     *    const result2 = Convert.toFloat(undefined);
     *    // Результат: 0.0
     *
     *    const result3 = Convert.toFloat('example');
     *    // Результат: 0.0
     *    ```
     *
     * @param {any} value Значение, которое необходимо преобразовать.
     * @returns {number} Преобразованное значение.
     */
    static toFloat(value) {
        return to_float(value);
    }

    /**
     * Преобразует значение в целое число.
     *
     * ### Описание
     *
     * Метод `toInt` используется для преобразования различных типов данных в целое число. Если значение не является числом или строкой, метод возвращает `1` для истинных значений и `0` для ложных значений.
     *
     * ### Параметры
     *
     * - `value` (any)
     *      Значение, которое необходимо преобразовать.
     *
     * - `base` (number)
     *      Основание системы счисления для преобразования строки в число. По умолчанию `10`.
     *
     * ### Возвращаемое значение
     *
     * Возвращает целое число, соответствующее переданному значению.
     *
     * ### Примеры использования
     *
     * 1. Преобразование строки в целое число:
     *
     *    ```js
     *    const result = Convert.toInt('123');
     *    // Результат: 123
     *    ```
     *
     * 2. Преобразование числа с плавающей точкой в целое число:
     *
     *    ```js
     *    const result = Convert.toInt(123.45);
     *    // Результат: 123
     *    ```
     *
     * 3. Преобразование булевых значений:
     *
     *    ```js
     *    const result1 = Convert.toInt(true);
     *    // Результат: 1
     *
     *    const result2 = Convert.toInt(false);
     *    // Результат: 0
     *    ```
     *
     * 4. Преобразование других значений:
     *
     *    ```js
     *    const result1 = Convert.toInt(null);
     *    // Результат: 0
     *
     *    const result2 = Convert.toInt(undefined);
     *    // Результат: 0
     *
     *    const result3 = Convert.toInt('example');
     *    // Результат: 0
     *    ```
     *
     * 5. Преобразование строки с основанием системы счисления:
     *
     *    ```js
     *    const result1 = Convert.toInt('10', 2);
     *    // Результат: 2
     *
     *    const result2 = Convert.toInt('A', 16);
     *    // Результат: 10
     *
     *    const result3 = Convert.toInt('7', 8);
     *    // Результат: 7
     *    ```
     *
     * @param {any} value Значение, которое необходимо преобразовать.
     * @param {number} [base=10] Основание системы счисления для преобразования строки в число.
     * @returns {number} Преобразованное значение.
     */
    static toInt(value, base = 10) {
        return to_int(value, base);
    }

    /**
     * Преобразует значение в целое число.
     *
     * ### Описание
     *
     * Метод `toInteger` является синонимом метода `toInt` и используется для преобразования различных типов данных в целое число.
     * Если значение не является числом или строкой, метод возвращает `1` для истинных значений и `0` для ложных значений.
     *
     * ### Параметры
     *
     * - `value` (any)
     *      Значение, которое необходимо преобразовать.
     *
     * - `base` (number)
     *      Основание системы счисления для преобразования строки в число. По умолчанию `10`.
     *
     * ### Возвращаемое значение
     *
     * Возвращает целое число, соответствующее переданному значению.
     *
     * ### Примеры использования
     *
     * 1. Преобразование строки в целое число:
     *
     *    ```js
     *    const result = Convert.toInteger('123');
     *    // Результат: 123
     *    ```
     *
     * 2. Преобразование числа с плавающей точкой в целое число:
     *
     *    ```js
     *    const result = Convert.toInteger(123.45);
     *    // Результат: 123
     *    ```
     *
     * 3. Преобразование булевых значений:
     *
     *    ```js
     *    const result1 = Convert.toInteger(true);
     *    // Результат: 1
     *
     *    const result2 = Convert.toInteger(false);
     *    // Результат: 0
     *    ```
     *
     * 4. Преобразование других значений:
     *
     *    ```js
     *    const result1 = Convert.toInteger(null);
     *    // Результат: 0
     *
     *    const result2 = Convert.toInteger(undefined);
     *    // Результат: 0
     *
     *    const result3 = Convert.toInteger('example');
     *    // Результат: 0
     *    ```
     *
     * 5. Преобразование строки с основанием системы счисления:
     *
     *    ```js
     *    const result1 = Convert.toInteger('10', 2);
     *    // Результат: 2
     *
     *    const result2 = Convert.toInteger('A', 16);
     *    // Результат: 10
     *
     *    const result3 = Convert.toInteger('7', 8);
     *    // Результат: 7
     *    ```
     *
     * @param {any} value Значение, которое необходимо преобразовать.
     * @param {number} [base=10] Основание системы счисления для преобразования строки в число.
     * @returns {number} Преобразованное значение.
     */
    static toInteger(value, base = 10) {
        return to_int(value, base);
    }

    /**
     * Преобразует значение в объект.
     *
     * ### Описание
     *
     * Метод `toObject` используется для преобразования различных типов данных в объект. Если значение уже является объектом, оно возвращается без изменений. Если значение является классом, возвращается новый экземпляр этого класса. Если значение является массивом, элементы массива копируются в новый объект. Для других значений создается объект с полем `value`, содержащим это значение.
     *
     * ### Параметры
     *
     * - `value` (any)
     *      Значение, которое необходимо преобразовать.
     *
     * ### Возвращаемое значение
     *
     * Возвращает объект, соответствующий переданному значению.
     *
     * ### Примеры использования
     *
     * 1. Преобразование объекта:
     *
     *    ```js
     *    class MyClass {}
     *    const obj = new MyClass();
     *    const result = Convert.toObject(obj);
     *    // Результат: obj
     *    ```
     *
     * 2. Преобразование класса:
     *
     *    ```js
     *    class MyClass {}
     *    const result = Convert.toObject(MyClass);
     *    // Результат: экземпляр MyClass
     *    ```
     *
     * 3. Преобразование null и undefined:
     *
     *    ```js
     *    const result1 = Convert.toObject(null);
     *    // Результат: экземпляр stdClass
     *
     *    const result2 = Convert.toObject(undefined);
     *    // Результат: экземпляр stdClass
     *    ```
     *
     * 4. Преобразование массива:
     *
     *    ```js
     *    const arr = [1, 2, 3];
     *    const result = Convert.toObject(arr);
     *    // Результат: объект с элементами массива
     *    ```
     *
     * 5. Преобразование других значений:
     *
     *    ```js
     *    const result = Convert.toObject('example');
     *    // Результат: объект с полем value, содержащим 'example'
     *    ```
     *
     * @param {any} value Значение, которое необходимо преобразовать.
     * @returns {object} Преобразованное значение.
     */
    static toObject(value) {
        return to_object(value);
    }

    /**
     * Преобразует значение в строку.
     *
     * ### Описание
     *
     * Метод `toString` используется для преобразования различных типов данных в строку. Он обрабатывает массивы, объекты, классы, функции, символы и другие типы данных, возвращая их строковое представление.
     *
     * ### Параметры
     *
     * - `value` (any)
     *      Значение, которое необходимо преобразовать.
     *
     * ### Возвращаемое значение
     *
     * Возвращает строку, соответствующую переданному значению.
     *
     * ### Примеры использования
     *
     * 1. Преобразование строки:
     *
     *    ```js
     *    const result = Convert.toString('example');
     *    // Результат: 'example'
     *    ```
     *
     * 2. Преобразование числа:
     *
     *    ```js
     *    const result = Convert.toString(123);
     *    // Результат: '123'
     *    ```
     *
     * 3. Преобразование булевых значений:
     *
     *    ```js
     *    const result1 = Convert.toString(true);
     *    // Результат: 'true'
     *
     *    const result2 = Convert.toString(false);
     *    // Результат: 'false'
     *    ```
     *
     * 4. Преобразование null и undefined:
     *
     *    ```js
     *    const result1 = Convert.toString(null);
     *    // Результат: 'null'
     *
     *    const result2 = Convert.toString(undefined);
     *    // Результат: 'undefined'
     *    ```
     *
     * 5. Преобразование массива:
     *
     *    ```js
     *    const arr = [1, 2, 3];
     *    const result = Convert.toString(arr);
     *    // Результат: '[\n    1,\n    2,\n    3,\n]'
     *    ```
     *
     * 6. Преобразование объекта:
     *
     *    ```js
     *    const obj = { key: 'value' };
     *    const result = Convert.toString(obj);
     *    // Результат: '{\n    key: 'value',\n}'
     *    ```
     *
     * 7. Преобразование функции:
     *
     *    ```js
     *    const func = function() {};
     *    const result = Convert.toString(func);
     *    // Результат: 'function func() {}'
     *    ```
     *
     * 8. Преобразование символа:
     *
     *    ```js
     *    const symbol = Symbol('example');
     *    const result = Convert.toString(symbol);
     *    // Результат: 'Symbol(example)'
     *    ```
     *
     * 9. Преобразование BigInt:
     *
     *    ```js
     *    const bigInt = BigInt(123);
     *    const result = Convert.toString(bigInt);
     *    // Результат: '123'
     *    ```
     *
     * 10. Преобразование класса:
     *
     *    ```js
     *    class MyClass {
     *        static test = 'test';
     *    }
     *    const result = Convert.toString(MyClass);
     *    // Результат: 'class MyClass {}'
     *    ```
     *
     * 11. Преобразование экземпляра класса:
     *
     *    ```js
     *    class MyClass {}
     *    const instance = new MyClass();
     *    const result = Convert.toString(instance);
     *    // Результат: 'object MyClass'
     *    ```
     *
     * 12. Преобразование интерфейса:
     *
     *    ```js
     *    class MyContract extends Interface {}
     *    const result = Convert.toString(MyContract);
     *    // Результат: 'interface MyContract {}'
     *    ```
     *
     * @param {any} value Значение, которое необходимо преобразовать.
     * @returns {string} Преобразованное значение.
     */
    static toString(value) {
        return to_string(value);
    }
}

export default Convert;
