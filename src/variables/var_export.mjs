import is_array from './is_array.mjs';
import is_object from './is_object.mjs';
import is_string from './is_string.mjs';

/**
 * Выводит или возвращает интерпретируемое строковое представление переменной
 *
 * `var_export()` возвращает структурированную информацию о данной переменной.
 * Функция аналогична `var_dump()` за одним исключением:
 * возвращаемое представление является полноценным JavaScript-кодом.
 *
 * @param {any} value Переменная, которую необходимо экспортировать.
 * @param {boolean} return_result Если передано и значение равно `true`, `var_export()` вернёт представление переменной вместо его вывода.
 * @returns {?string} Возвращает представление переменной,
 * если параметр `return_result` передан и равен `true`.
 * В противном случае функция возвращает `null`.
 */
export default function var_export(value, return_result = false) {
    let result;

    if (is_string(value)) {
        result = `'${value}'`;
    } else if (is_array(value)) {
        if (value instanceof Array) {
            result = '[';

            if (value.length) {
                result += '\n';
            }

            for (let i = 0; i < value.length; i++) {
                const v = value[i];

                result += `  ${var_export(v, true).replace(/\n/g, '\n  ')},\n`;
            }

            result += ']';
        } else {
            result = '{';

            if (Object.values(value).length) {
                result += '\n';
            }

            for (const k in value) {
                const v = value[k];

                result += `  '${k}': ${var_export(v, true).replace(/\n/g, '\n  ')},\n`;
            }

            result += '}';
        }
    } else if (is_object(value)) {
        result = `${Object.getPrototypeOf(value)?.constructor?.name ?? 'stdClass'}.__set_state({`;

        if (Object.values(value).length) {
            result += '\n';
        }

        for (const k in value) {
            const v = value[k];

            result += `  '${k}': ${var_export(v, true).replace(/\n/g, '\n  ')},\n`;
        }

        result += '})';
    } else {
        result = String(value);
    }

    if (return_result) {
        return result;
    }

    console.log(result);

    return null;
}
