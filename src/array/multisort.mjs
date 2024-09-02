import { TypePHPJSError, ValuePHPJSError } from '../exceptions.mjs';
import { is_array, is_callable, is_int, is_null, is_numeric, isset } from '../variables.mjs';
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
    SORT_USE_BOTH,
    SORT_USE_KEY,
    SORT_USE_VALUE,
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
        [SORT_ASC]: {
            [SORT_USE_KEY]: (a, b) => {
                a = is_numeric(a) ? Number(a) : a;
                b = is_numeric(b) ? Number(b) : b;

                const result = a < b ? -1 : a > b ? 1 : 0;

                lastSort.push(result);

                return result;
            },
            [SORT_USE_VALUE]: (a, b) => {
                a = is_numeric(a) ? Number(a) : a;
                b = is_numeric(b) ? Number(b) : b;

                const result = a < b ? -1 : a > b ? 1 : 0;

                lastSort.push(result);

                return result;
            },
            [SORT_USE_BOTH]: (a, b) => {
                const keyA = is_numeric(a[0]) ? Number(a[0]) : a[0];
                const keyB = is_numeric(b[0]) ? Number(b[0]) : b[0];
                const valueA = is_numeric(a[1]) ? Number(a[1]) : a[1];
                const valueB = is_numeric(b[1]) ? Number(b[1]) : b[1];

                const result =
                    valueA < valueB
                        ? -1
                        : valueA > valueB
                          ? 1
                          : keyA < keyB
                            ? -1
                            : keyA > keyB
                              ? 1
                              : 0;

                lastSort.push(result);

                return result;
            },
        },
        [SORT_DESC]: {
            [SORT_USE_KEY]: (a, b) => {
                a = is_numeric(a) ? Number(a) : a;
                b = is_numeric(b) ? Number(b) : b;

                const result = a < b ? 1 : a > b ? -1 : 0;

                lastSort.push(result);

                return result;
            },
            [SORT_USE_VALUE]: (a, b) => {
                a = is_numeric(a) ? Number(a) : a;
                b = is_numeric(b) ? Number(b) : b;

                const result = a < b ? 1 : a > b ? -1 : 0;

                lastSort.push(result);

                return result;
            },
            [SORT_USE_BOTH]: (a, b) => {
                const keyA = is_numeric(a[0]) ? Number(a[0]) : a[0];
                const keyB = is_numeric(b[0]) ? Number(b[0]) : b[0];
                const valueA = is_numeric(a[1]) ? Number(a[1]) : a[1];
                const valueB = is_numeric(b[1]) ? Number(b[1]) : b[1];

                const result =
                    valueA < valueB
                        ? 1
                        : valueA > valueB
                          ? -1
                          : keyA < keyB
                            ? 1
                            : keyA > keyB
                              ? -1
                              : 0;

                lastSort.push(result);

                return result;
            },
        },
    },
    [SORT_NUMERIC]: {
        [SORT_ASC]: {
            [SORT_USE_KEY]: (a, b) => {
                a = Number(a);
                b = Number(b);

                const result = a < b ? -1 : a > b ? 1 : 0;

                lastSort.push(result);

                return result;
            },
            [SORT_USE_VALUE]: (a, b) => {
                a = Number(a);
                b = Number(b);

                const result = a < b ? -1 : a > b ? 1 : 0;

                lastSort.push(result);

                return result;
            },
            [SORT_USE_BOTH]: (a, b) => {
                const keyA = Number(a[0]);
                const keyB = Number(b[0]);
                const valueA = Number(a[1]);
                const valueB = Number(b[1]);

                const result =
                    valueA < valueB
                        ? -1
                        : valueA > valueB
                          ? 1
                          : keyA < keyB
                            ? -1
                            : keyA > keyB
                              ? 1
                              : 0;

                lastSort.push(result);

                return result;
            },
        },
        [SORT_DESC]: {
            [SORT_USE_KEY]: (a, b) => {
                a = Number(a);
                b = Number(b);

                const result = a < b ? 1 : a > b ? -1 : 0;

                lastSort.push(result);

                return result;
            },
            [SORT_USE_VALUE]: (a, b) => {
                a = Number(a);
                b = Number(b);

                const result = a < b ? 1 : a > b ? -1 : 0;

                lastSort.push(result);

                return result;
            },
            [SORT_USE_BOTH]: (a, b) => {
                const keyA = Number(a[0]);
                const keyB = Number(b[0]);
                const valueA = Number(a[1]);
                const valueB = Number(b[1]);

                const result =
                    valueA < valueB
                        ? 1
                        : valueA > valueB
                          ? -1
                          : keyA < keyB
                            ? 1
                            : keyA > keyB
                              ? -1
                              : 0;

                lastSort.push(result);

                return result;
            },
        },
    },
    [SORT_STRING]: {
        [SORT_ASC]: {
            [SORT_USE_KEY]: (a, b) => {
                a = String(a);
                b = String(b);

                const result = a < b ? -1 : a > b ? 1 : 0;

                lastSort.push(result);

                return result;
            },
            [SORT_USE_VALUE]: (a, b) => {
                a = String(a);
                b = String(b);

                const result = a < b ? -1 : a > b ? 1 : 0;

                lastSort.push(result);

                return result;
            },
            [SORT_USE_BOTH]: (a, b) => {
                const keyA = String(a[0]);
                const keyB = String(b[0]);
                const valueA = String(a[1]);
                const valueB = String(b[1]);

                const result =
                    valueA < valueB
                        ? -1
                        : valueA > valueB
                          ? 1
                          : keyA < keyB
                            ? -1
                            : keyA > keyB
                              ? 1
                              : 0;

                lastSort.push(result);

                return result;
            },
        },
        [SORT_DESC]: {
            [SORT_USE_KEY]: (a, b) => {
                a = String(a);
                b = String(b);

                const result = a < b ? 1 : a > b ? -1 : 0;

                lastSort.push(result);

                return result;
            },
            [SORT_USE_VALUE]: (a, b) => {
                a = String(a);
                b = String(b);

                const result = a < b ? 1 : a > b ? -1 : 0;

                lastSort.push(result);

                return result;
            },
            [SORT_USE_BOTH]: (a, b) => {
                const keyA = String(a[0]);
                const keyB = String(b[0]);
                const valueA = String(a[1]);
                const valueB = String(b[1]);

                const result =
                    valueA < valueB
                        ? 1
                        : valueA > valueB
                          ? -1
                          : keyA < keyB
                            ? 1
                            : keyA > keyB
                              ? -1
                              : 0;

                lastSort.push(result);

                return result;
            },
        },
    },
    [SORT_NATURAL]: {
        [SORT_ASC]: {
            [SORT_USE_KEY]: (a, b) => {
                if (is_numeric(a) && is_numeric(b)) {
                    a = Number(a);
                    b = Number(b);

                    const result = a < b ? -1 : a > b ? 1 : 0;

                    lastSort.push(result);

                    return result;
                }

                const result = natcompare(String(a), String(b));

                lastSort.push(result);

                return result;
            },
            [SORT_USE_VALUE]: (a, b) => {
                if (is_numeric(a) && is_numeric(b)) {
                    a = Number(a);
                    b = Number(b);

                    const result = a < b ? -1 : a > b ? 1 : 0;

                    lastSort.push(result);

                    return result;
                }

                const result = natcompare(String(a), String(b));

                lastSort.push(result);

                return result;
            },
            [SORT_USE_BOTH]: (a, b) => {
                const keyA = is_numeric(a[0]) ? Number(a[0]) : a[0];
                const keyB = is_numeric(b[0]) ? Number(b[0]) : b[0];

                if (is_numeric(a[1]) && is_numeric(b[1])) {
                    const valueA = Number(a[1]);
                    const valueB = Number(b[1]);

                    const result =
                        valueA < valueB
                            ? -1
                            : valueA > valueB
                              ? 1
                              : keyA < keyB
                                ? -1
                                : keyA > keyB
                                  ? 1
                                  : 0;

                    lastSort.push(result);

                    return result;
                }

                const valueA = String(a[1]);
                const valueB = String(b[1]);

                let result = natcompare(valueA, valueB);

                if (result === 0) {
                    result = natcompare(keyA, keyB);
                }

                lastSort.push(result);

                return result;
            },
        },
        [SORT_DESC]: {
            [SORT_USE_KEY]: (a, b) => {
                if (is_numeric(a) && is_numeric(b)) {
                    a = Number(a);
                    b = Number(b);

                    const result = a < b ? 1 : a > b ? -1 : 0;

                    lastSort.push(result);

                    return result;
                }

                const result = natcompare(String(b), String(a));

                lastSort.push(result);

                return result;
            },
            [SORT_USE_VALUE]: (a, b) => {
                if (is_numeric(a) && is_numeric(b)) {
                    a = Number(a);
                    b = Number(b);

                    const result = a < b ? 1 : a > b ? -1 : 0;

                    lastSort.push(result);

                    return result;
                }

                const result = natcompare(String(b), String(a));

                lastSort.push(result);

                return result;
            },
            [SORT_USE_BOTH]: (a, b) => {
                const keyA = is_numeric(a[0]) ? Number(a[0]) : a[0];
                const keyB = is_numeric(b[0]) ? Number(b[0]) : b[0];

                if (is_numeric(a[1]) && is_numeric(b[1])) {
                    const valueA = Number(a[1]);
                    const valueB = Number(b[1]);

                    const result =
                        valueA < valueB
                            ? 1
                            : valueA > valueB
                              ? -1
                              : keyA < keyB
                                ? 1
                                : keyA > keyB
                                  ? -1
                                  : 0;

                    lastSort.push(result);

                    return result;
                }

                const valueA = String(a[1]);
                const valueB = String(b[1]);

                let result = natcompare(valueB, valueA);

                if (result === 0) {
                    result = natcompare(keyB, keyA);
                }

                lastSort.push(result);

                return result;
            },
        },
    },
    [SORT_STRING | SORT_FLAG_CASE]: {
        [SORT_ASC]: {
            [SORT_USE_KEY]: (a, b) => {
                a = String(a).toLowerCase();
                b = String(b).toLowerCase();

                const result = a < b ? -1 : a > b ? 1 : 0;

                lastSort.push(result);

                return result;
            },
            [SORT_USE_VALUE]: (a, b) => {
                a = String(a).toLowerCase();
                b = String(b).toLowerCase();

                const result = a < b ? -1 : a > b ? 1 : 0;

                lastSort.push(result);

                return result;
            },
            [SORT_USE_BOTH]: (a, b) => {
                const keyA = is_numeric(a[0]) ? Number(a[0]) : a[0];
                const keyB = is_numeric(b[0]) ? Number(b[0]) : b[0];
                const valueA = String(a[1]).toLowerCase();
                const valueB = String(b[1]).toLowerCase();

                const result =
                    valueA < valueB
                        ? -1
                        : valueA > valueB
                          ? 1
                          : keyA < keyB
                            ? -1
                            : keyA > keyB
                              ? 1
                              : 0;

                lastSort.push(result);

                return result;
            },
        },
        [SORT_DESC]: {
            [SORT_USE_KEY]: (a, b) => {
                a = String(a).toLowerCase();
                b = String(b).toLowerCase();

                const result = a < b ? 1 : a > b ? -1 : 0;

                lastSort.push(result);

                return result;
            },
            [SORT_USE_VALUE]: (a, b) => {
                a = String(a).toLowerCase();
                b = String(b).toLowerCase();

                const result = a < b ? 1 : a > b ? -1 : 0;

                lastSort.push(result);

                return result;
            },
            [SORT_USE_BOTH]: (a, b) => {
                const keyA = is_numeric(a[0]) ? Number(a[0]) : a[0];
                const keyB = is_numeric(b[0]) ? Number(b[0]) : b[0];
                const valueA = String(a[1]).toLowerCase();
                const valueB = String(b[1]).toLowerCase();

                const result =
                    valueA < valueB
                        ? 1
                        : valueA > valueB
                          ? -1
                          : keyA < keyB
                            ? 1
                            : keyA > keyB
                              ? -1
                              : 0;

                lastSort.push(result);

                return result;
            },
        },
    },
    [SORT_NATURAL | SORT_FLAG_CASE]: {
        [SORT_ASC]: {
            [SORT_USE_KEY]: (a, b) => {
                if (is_numeric(a) && is_numeric(b)) {
                    a = Number(a);
                    b = Number(b);

                    const result = a < b ? -1 : a > b ? 1 : 0;

                    lastSort.push(result);

                    return result;
                }

                const result = natcompare(String(a).toLowerCase(), String(b).toLowerCase());

                lastSort.push(result);

                return result;
            },
            [SORT_USE_VALUE]: (a, b) => {
                if (is_numeric(a) && is_numeric(b)) {
                    a = Number(a);
                    b = Number(b);

                    const result = a < b ? -1 : a > b ? 1 : 0;

                    lastSort.push(result);

                    return result;
                }

                const result = natcompare(String(a).toLowerCase(), String(b).toLowerCase());

                lastSort.push(result);

                return result;
            },
            [SORT_USE_BOTH]: (a, b) => {
                const keyA = is_numeric(a[0]) ? Number(a[0]) : a[0];
                const keyB = is_numeric(b[0]) ? Number(b[0]) : b[0];

                if (is_numeric(a[1]) && is_numeric(b[1])) {
                    const valueA = Number(a[1]);
                    const valueB = Number(b[1]);

                    const result =
                        valueA < valueB
                            ? -1
                            : valueA > valueB
                              ? 1
                              : keyA < keyB
                                ? -1
                                : keyA > keyB
                                  ? 1
                                  : 0;

                    lastSort.push(result);

                    return result;
                }

                const valueA = String(a[1]).toLowerCase();
                const valueB = String(b[1]).toLowerCase();

                let result = natcompare(valueA, valueB);

                if (result === 0) {
                    result = natcompare(keyA, keyB);
                }

                lastSort.push(result);

                return result;
            },
        },
        [SORT_DESC]: {
            [SORT_USE_KEY]: (a, b) => {
                if (is_numeric(a) && is_numeric(b)) {
                    a = Number(a);
                    b = Number(b);

                    const result = a < b ? 1 : a > b ? -1 : 0;

                    lastSort.push(result);

                    return result;
                }

                const result = natcompare(String(b).toLowerCase(), String(a).toLowerCase());

                lastSort.push(result);

                return result;
            },
            [SORT_USE_VALUE]: (a, b) => {
                if (is_numeric(a) && is_numeric(b)) {
                    a = Number(a);
                    b = Number(b);

                    const result = a < b ? 1 : a > b ? -1 : 0;

                    lastSort.push(result);

                    return result;
                }

                const result = natcompare(String(b).toLowerCase(), String(a).toLowerCase());

                lastSort.push(result);

                return result;
            },
            [SORT_USE_BOTH]: (a, b) => {
                const keyA = is_numeric(a[0]) ? Number(a[0]) : a[0];
                const keyB = is_numeric(b[0]) ? Number(b[0]) : b[0];

                if (is_numeric(a[1]) && is_numeric(b[1])) {
                    const valueA = Number(a[1]);
                    const valueB = Number(b[1]);

                    const result =
                        valueA < valueB
                            ? 1
                            : valueA > valueB
                              ? -1
                              : keyA < keyB
                                ? 1
                                : keyA > keyB
                                  ? -1
                                  : 0;

                    lastSort.push(result);

                    return result;
                }

                const valueA = String(a[1]).toLowerCase();
                const valueB = String(b[1]).toLowerCase();

                let result = natcompare(valueB, valueA);

                if (result === 0) {
                    result = natcompare(keyB, keyA);
                }

                lastSort.push(result);

                return result;
            },
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

function is_use(value) {
    return value === SORT_USE_KEY || value === SORT_USE_VALUE || value === SORT_USE_BOTH;
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
    let use;
    let compareFunction;

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
                    use: isset(use) ? use : SORT_USE_VALUE,
                    compare_function: compareFunction,
                });

                arr = undefined;
                order = undefined;
                flag = undefined;
                use = undefined;
                compareFunction = undefined;
            }

            arr = arg;
        } else if (is_int(arg)) {
            if (!isset(arr) || (is_order(arg) && isset(order)) || (is_flag(arg) && isset(flag))) {
                throw new TypePHPJSError(
                    `Argument #${i + 1} (array) must be an array or a sort flag that has not already been specified.`,
                );
            }

            if (is_order(arg)) {
                order = arg;
            } else if (is_flag(arg)) {
                flag = arg;
            } else if (is_use(arg)) {
                use = arg;
            } else {
                throw new ValuePHPJSError(`Argument #${i + 1} must be a valid sort flag.`);
            }
        } else if (is_callable(arg)) {
            compareFunction = arg;
        } else {
            throw new TypePHPJSError(`Argument #${i + 1} (array) must be an array or a sort flag.`);
        }
    }

    // В цикле выше последний массив из args никогда не будет добавлен в parsedArgs.
    parsedArgs.push({
        array: {
            original: arr,
            sorted: Object.entries(arr),
        },
        order: isset(order) ? order : SORT_ASC,
        flag: isset(flag) ? flag : SORT_REGULAR,
        use: isset(use) ? use : SORT_USE_VALUE,
        compare_function: compareFunction,
    });

    return parsedArgs;
}

export default function multisort(array1, array1_sort_order, array1_sort_flags, ...rest) {
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
        const compareFunction = isset(argument.compare_function)
            ? (a, b) => {
                  if (argument.use === SORT_USE_KEY) {
                      a = a[0];
                      b = b[0];
                  } else if (argument.use === SORT_USE_VALUE) {
                      a = a[1];
                      b = b[1];
                  }

                  const result = argument.compare_function(a, b);

                  lastSort.push(result);

                  return result;
              }
            : (a, b) => {
                  if (argument.use === SORT_USE_KEY) {
                      a = a[0];
                      b = b[0];
                  } else if (argument.use === SORT_USE_VALUE) {
                      a = a[1];
                      b = b[1];
                  }

                  return compareFunctions[argument.flag][argument.order][argument.use](a, b);
              };

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
