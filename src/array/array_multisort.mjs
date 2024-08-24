import { TypePHPJSError, ValuePHPJSError } from '../exceptions.mjs';
import { is_array, is_int, is_null, is_numeric, isset } from '../variables.mjs';
import array_fill from './array_fill.mjs';
import array_reduce from './array_reduce.mjs';
import array_splice from './array_splice.mjs';
import {
    SORT_ASC,
    SORT_DESC,
    SORT_FLAG_CASE,
    SORT_NATURAL,
    SORT_NUMERIC,
    SORT_REGULAR,
    SORT_STRING,
} from './constants.mjs';
import count from './count.mjs';
import natcompare from './natcompare.mjs';

/**
 * Результаты сравнения двух элементов массива при его сортировки.
 *
 * Представляет собой список целых чисел (-1, 0, 1), где -1 означает, что значение A < значения B,
 * 0 - значение А и значение В равны, 1 - значение А больше значения В.
 */
let lastSort = [];

const compareFunctions = {
    [SORT_REGULAR]: {
        [SORT_ASC]: (a, b) => {
            const valueA = is_numeric(a[1]) ? Number(a[1]) : a[1];
            const valueB = is_numeric(b[1]) ? Number(b[1]) : b[1];

            let result = 0;

            if (valueA < valueB) {
                result = -1;
            } else if (valueA > valueB) {
                result = 1;
            }

            lastSort.push(result);

            return result;
        },
        [SORT_DESC]: (a, b) => {
            const valueA = is_numeric(a[1]) ? Number(a[1]) : a[1];
            const valueB = is_numeric(b[1]) ? Number(b[1]) : b[1];

            let result = 0;

            if (valueA < valueB) {
                result = 1;
            } else if (valueA > valueB) {
                result = -1;
            }

            lastSort.push(result);

            return result;
        },
    },
    [SORT_NUMERIC]: {
        [SORT_ASC]: (a, b) => {
            const valueA = Number(a[1]);
            const valueB = Number(b[1]);

            let result = 0;

            if (valueA < valueB) {
                result = -1;
            } else if (valueA > valueB) {
                result = 1;
            }

            lastSort.push(result);

            return result;
        },
        [SORT_DESC]: (a, b) => {
            const valueA = Number(a[1]);
            const valueB = Number(b[1]);

            let result = 0;

            if (valueA < valueB) {
                result = 1;
            } else if (valueA > valueB) {
                result = -1;
            }

            lastSort.push(result);

            return result;
        },
    },
    [SORT_STRING]: {
        [SORT_ASC]: (a, b) => {
            const valueA = String(a[1]);
            const valueB = String(b[1]);

            let result = 0;

            if (valueA < valueB) {
                result = -1;
            } else if (valueA > valueB) {
                result = 1;
            }

            lastSort.push(result);

            return result;
        },
        [SORT_DESC]: (a, b) => {
            const valueA = String(a[1]);
            const valueB = String(b[1]);

            let result = 0;

            if (valueA < valueB) {
                result = 1;
            } else if (valueA > valueB) {
                result = -1;
            }

            lastSort.push(result);

            return result;
        },
    },
    [SORT_NATURAL]: {
        [SORT_ASC]: (a, b) => {
            if (is_numeric(a[1]) && is_numeric(b[1])) {
                const valueA = Number(a[1]);
                const valueB = Number(b[1]);

                let result = 0;

                if (valueA < valueB) {
                    result = -1;
                } else if (valueA > valueB) {
                    result = 1;
                }

                lastSort.push(result);

                return result;
            }

            const valueA = String(a[1]);
            const valueB = String(b[1]);

            const result = natcompare(valueA, valueB);

            lastSort.push(result);

            return result;
        },
        [SORT_DESC]: (a, b) => {
            if (is_numeric(a) && is_numeric(b)) {
                const valueA = Number(a[1]);
                const valueB = Number(b[1]);

                let result = 0;

                if (valueA < valueB) {
                    result = 1;
                } else if (valueA > valueB) {
                    result = -1;
                }

                lastSort.push(result);

                return result;
            }

            const valueA = String(a[1]);
            const valueB = String(b[1]);

            const result = natcompare(valueB, valueA);

            lastSort.push(result);

            return result;
        },
    },
    [SORT_STRING | SORT_FLAG_CASE]: {
        [SORT_ASC]: (a, b) => {
            const valueA = String(a[1]).toLowerCase();
            const valueB = String(b[1]).toLowerCase();

            let result = 0;

            if (valueA < valueB) {
                result = -1;
            } else if (valueA > valueB) {
                result = 1;
            }

            lastSort.push(result);

            return result;
        },
        [SORT_DESC]: (a, b) => {
            const valueA = String(a[1]).toLowerCase();
            const valueB = String(b[1]).toLowerCase();

            let result = 0;

            if (valueA < valueB) {
                result = 1;
            } else if (valueA > valueB) {
                result = -1;
            }

            lastSort.push(result);

            return result;
        },
    },
    [SORT_NATURAL | SORT_FLAG_CASE]: {
        [SORT_ASC]: (a, b) => {
            if (is_numeric(a[1]) && is_numeric(b[1])) {
                const valueA = Number(a[1]);
                const valueB = Number(b[1]);

                let result = 0;

                if (valueA < valueB) {
                    result = -1;
                } else if (valueA > valueB) {
                    result = 1;
                }

                lastSort.push(result);

                return result;
            }

            const valueA = String(a[1]).toLowerCase();
            const valueB = String(b[1]).toLowerCase();

            const result = natcompare(valueA, valueB);

            lastSort.push(result);

            return result;
        },
        [SORT_DESC]: (a, b) => {
            if (is_numeric(a) && is_numeric(b)) {
                const valueA = Number(a[1]);
                const valueB = Number(b[1]);

                let result = 0;

                if (valueA < valueB) {
                    result = 1;
                } else if (valueA > valueB) {
                    result = -1;
                }

                lastSort.push(result);

                return result;
            }

            const valueA = String(a[1]).toLowerCase();
            const valueB = String(b[1]).toLowerCase();

            const result = natcompare(valueB, valueA);

            lastSort.push(result);

            return result;
        },
    },
};

function is_order(value) {
    return value === SORT_ASC || value === SORT_DESC;
}

function is_flag(value) {
    return (
        value === SORT_REGULAR ||
        value === SORT_NUMERIC ||
        value === SORT_STRING ||
        value === SORT_NATURAL ||
        value === (SORT_STRING | SORT_FLAG_CASE) ||
        value === (SORT_NATURAL | SORT_FLAG_CASE)
    );
}

function parseArgs(args) {
    /**
     * Длина первого массива. Все последующие массивы должны быть такой же длины. Если это не так, возвращается false.
     */
    let mainLength = null;

    /**
     * Список валидированных аргументов.
     */
    const parsedArgs = [];

    let arr;
    let order;
    let flag;

    // Проводим валидацию входных аргументов.
    for (let i = 0; i < args.length; i++) {
        const arg = args[i];

        // Если передан массив, но он имеет длину, отличающуюся от длины первого массива, возвращаем false.
        // Иначе вносим его в список сортируемых массивов.
        if (is_array(arg)) {
            // При получении первого массива, сохраняем его длину. Все последующие массивы должны быть такой же длины.
            if (is_null(mainLength)) {
                mainLength = count(arg);
            }

            if (count(arg) !== mainLength) {
                throw new ValuePHPJSError('Array sizes are inconsistent.');
            }

            if (isset(arr)) {
                parsedArgs.push({
                    array: {
                        original: arr,
                        sorted: Object.entries(arr),
                    },
                    order: isset(order) ? order : SORT_ASC,
                    flag: isset(flag) ? flag : SORT_REGULAR,
                });

                arr = undefined;
                order = undefined;
                flag = undefined;
            }

            arr = arg;
        } else if (is_int(arg)) {
            if (!isset(arr) || (is_order(arg) && isset(order)) || (is_flag(arg) && isset(flag))) {
                throw new TypePHPJSError(
                    `Argument #${i} (array) must be an array or a sort flag that has not already been specified.`,
                );
            }

            if (is_order(arg)) {
                order = arg;
            } else if (is_flag(arg)) {
                flag = arg;
            } else {
                throw new ValuePHPJSError(`Argument #${i} must be a valid sort flag.`);
            }
        } else {
            throw new TypePHPJSError(`Argument #${i} (array) must be an array or a sort flag.`);
        }
    }

    // В цикле выше последний массив из args никогда не будет добавлен в arrays.
    parsedArgs.push({
        array: {
            original: arr,
            sorted: Object.entries(arr),
        },
        order: isset(order) ? order : SORT_ASC,
        flag: isset(flag) ? flag : SORT_REGULAR,
    });

    return parsedArgs;
}

/**
 * Сортирует несколько массивов или многомерные массивы
 *
 * Функцией `array_multisort()` пользуются для одновременной сортировки нескольких массивов
 * или одного многомерного массива по одному или несколькими уровням вложенности.
 *
 * Ассоциативные строковые `(string)` ключи будут сохранены, но числовые ключи будут переиндексированы.
 *
 * @param {Array|Object} array1 Сортируемый массив `(array)`.
 * @param {any} array1_sort_order
 *
 * Порядок сортировки предыдущего аргумента массива `(array)`. Указывают константу `SORT_ASC`
 * для сортировки по возрастанию или константу `SORT_DESC` для сортировки по убыванию.
 *
 * Этот аргумент разрешено менять местами с аргументом `array1_sort_flags` или не указывать,
 * тогда функция возьмёт за основу значение `SORT_ASC`.
 *
 * @param {any} array1_sort_flags
 *
 * Настройки сортировки для предыдущего аргумента массива `(array)`:
 *
 * Флаг способа сортировки:
 *
 * - `SORT_REGULAR` — обычное сравнение элементов (без изменения типов)
 * - `SORT_NUMERIC` — числовое сравнение элементов
 * - `SORT_STRING` — строковое сравнение элементов
 * - `SORT_NATURAL` — строковое сравнение элементов через алгоритм естественной сортировки (natural order), как в функции `natsort()`
 * - `SORT_FLAG_CASE` — разрешено объединять через бинарное ИЛИ с константой `SORT_STRING` или `SORT_NATURAL` для сортировки строк без учёта регистра
 *
 * Этот аргумент разрешено менять местами с аргументом `array1_sort_order` или не указывать, тогда функция возьмёт за основу значение `SORT_REGULAR`.
 *
 * @returns {true}
 * @throws {TypePHPJSError|ValuePHPJSError}
 */
export default function array_multisort(array1, array1_sort_order, array1_sort_flags, ...rest) {
    rest.unshift(array1, array1_sort_order, array1_sort_flags);

    // Фильтруем аргументы на значение undefined, в случае отсутствия одного из аргументов.
    rest = rest.filter(v => isset(v));

    /**
     * Валидированные входные аргументы.
     */
    const args = parseArgs(rest);

    /**
     * Длина первого массива. Все последующие массивы должны быть такой же длины.
     */
    const mainLength = count(args[0].array.original);

    /**
     * Массив, содержащий по два индекса начала и конца сортировки массива на каждый раздел.
     */
    let sortComponents = [0, mainLength];

    const thingsToSort = array_fill(0, mainLength, true);

    /**
     * Список всех результатов сортировки текущего массива.
     */
    let lastSorts = [];

    /**
     * Результат сортировки конкретного раздела текущего массива.
     */
    let nLastSort = [];

    /**
     * Функция сравнения элементов, возвращающая результат сортировки текущего массива.
     *
     * @returns {Number}
     */
    const compareFunctionDuplicator = () => nLastSort.shift();

    // Сортируем массивы.
    for (const argument of args) {
        lastSorts = [];
        nLastSort = [];
        lastSort = [];

        // Если сортировка элементов текущего массива не требуется, переходим к следующему массиву.
        if (sortComponents.length === 0) {
            continue;
        }

        /**
         * Функция сравнения элементов массива.
         */
        const compareFunction = compareFunctions[argument.flag][argument.order];

        // Сортируем элементы текущего массива.
        for (let i = 0; i < sortComponents.length; i += 2) {
            const sorted = argument.array.sorted.slice(
                sortComponents[i],
                sortComponents[i + 1] + 1,
            );

            sorted.sort(compareFunction);

            lastSorts.push([...lastSort]);

            argument.array.sorted.splice(sortComponents[i], sorted.length, ...sorted);
        }

        // Сортируем все массивы, кроме текущего.
        for (const arg of args) {
            if (Object.is(argument, arg)) {
                continue;
            }

            for (let i = 0; i < sortComponents.length; i += 2) {
                const sorted = arg.array.sorted.slice(sortComponents[i], sortComponents[i + 1] + 1);

                nLastSort = [...lastSorts[i / 2]];

                sorted.sort(compareFunctionDuplicator);

                lastSorts.push([...lastSort]);

                arg.array.sorted.splice(sortComponents[i], sorted.length, ...sorted);
            }
        }

        let previousValue = null;
        sortComponents = [];

        // Формируем разделы сортировки следующих массивов.
        for (let i = 0; i < argument.array.sorted.length; i++) {
            const value = argument.array.sorted[i];

            if (!thingsToSort[i]) {
                if (sortComponents.length % 2 !== 0) {
                    sortComponents.push(i - 1);
                }

                previousValue = null;

                continue;
            }

            if (!(sortComponents.length % 2 !== 0)) {
                if (previousValue !== null) {
                    if (value[1] === previousValue) {
                        sortComponents.push(i - 1);
                    } else {
                        thingsToSort[i] = false;
                    }
                }

                previousValue = value[1];
            } else if (value[1] !== previousValue) {
                sortComponents.push(i - 1);
                previousValue = value[1];
            }
        }

        if (sortComponents.length % 2 !== 0) {
            sortComponents.push(argument.array.sorted.length - 1);
        }
    }

    // Изменяем порядок элементов в переданных массивах.
    for (const argument of args) {
        array_splice(argument.array.original, 0);

        let index = 0;

        array_reduce(
            argument.array.sorted,
            (carry, item) => {
                if (is_numeric(item[0])) {
                    carry[index] = item[1];
                    index++;
                } else {
                    carry[item[0]] = item[1];
                }

                return carry;
            },
            argument.array.original,
        );
    }

    return true;
}
