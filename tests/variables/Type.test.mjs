import { expect, test, describe } from '@jest/globals';
import Interface from '../../src/contracts/Interface.mjs';
import Traversable from '../../src/contracts/Traversable.mjs';
import { array } from '../../src/array.mjs';
import { Countable } from '../../src/spl/contracts.mjs';
import { Type } from '../../src/variables.mjs';

class stdClass {}

describe('Класс Type', () => {
    describe('isArray', () => {
        describe('Примитивные значения и базовые типы', () => {
            test('false не является массивом', () => {
                expect(Type.isArray(false)).toBeFalsy();
            });

            test('true не является массивом', () => {
                expect(Type.isArray(true)).toBeFalsy();
            });

            test('Число 3 не является массивом', () => {
                expect(Type.isArray(3)).toBeFalsy();
            });

            test('Число 3.14 не является массивом', () => {
                expect(Type.isArray(3.14)).toBeFalsy();
            });

            test('Строка "string" не является массивом', () => {
                expect(Type.isArray('string')).toBeFalsy();
            });

            test('null не является массивом', () => {
                expect(Type.isArray(null)).toBeFalsy();
            });

            test('undefined не является массивом', () => {
                expect(Type.isArray(undefined)).toBeFalsy();
            });

            test('NaN не является массивом', () => {
                expect(Type.isArray(NaN)).toBeFalsy();
            });

            test('Symbol не является массивом', () => {
                expect(Type.isArray(Symbol())).toBeFalsy();
            });
        });

        describe('Массивы и объекты', () => {
            test('Обычный массив [1, 2] является массивом', () => {
                expect(Type.isArray([1, 2])).toBeTruthy();
            });

            test('Объект с парами ключ-значение {0: 1, 1: 2} является ассоциативным массивом', () => {
                expect(Type.isArray({ 0: 1, 1: 2 })).toBeTruthy();
            });

            test('Объект {foo: "bar"} является ассоциативным массивом', () => {
                expect(Type.isArray({ foo: 'bar' })).toBeTruthy();
            });

            test('Объект, созданный через Object.create(null), является ассоциативным массивом', () => {
                const noProtoObject = Object.create(null);
                noProtoObject.foo = 'bar';
                expect(Type.isArray(noProtoObject)).toBeTruthy();
            });

            test('Proxy является массивом', () => {
                const handler = {};
                const proxy = new Proxy([1, 2, 3], handler); // Проксируем массив
                expect(Type.isArray(proxy)).toBeTruthy();
            });
        });

        describe('Не массивы', () => {
            describe('Классы', () => {
                test('Экземпляр класса stdClass не является массивом', () => {
                    expect(Type.isArray(new stdClass())).toBeFalsy();
                });

                test('Класс stdClass сам по себе не является массивом', () => {
                    expect(Type.isArray(stdClass)).toBeFalsy();
                });
            });

            describe('Глобальные объекты', () => {
                // Массив глобальных объектов, которые не являются массивами
                const globalObjects = [Object, Function, Boolean];

                globalObjects.forEach(globalObj => {
                    test(`${globalObj.name} не является массивом`, () => {
                        expect(Type.isArray(globalObj)).toBeFalsy();
                    });
                });

                test('Symbol не является массивом', () => {
                    expect(Type.isArray(Symbol)).toBeFalsy();
                });
            });

            describe('Обработка текста', () => {
                test('String не является массивом', () => {
                    expect(Type.isArray(String)).toBeFalsy();
                });

                test('RegExp не является массивом', () => {
                    expect(Type.isArray(RegExp)).toBeFalsy();
                    expect(Type.isArray(/abc/)).toBeFalsy();
                });
            });

            describe('Числа и даты', () => {
                test('Number не является массивом', () => {
                    expect(Type.isArray(Number)).toBeFalsy();
                });

                test('BigInt не является массивом', () => {
                    expect(Type.isArray(BigInt)).toBeFalsy();
                    expect(Type.isArray(123n)).toBeFalsy();
                });

                test('Math не является массивом', () => {
                    expect(Type.isArray(Math)).toBeFalsy();
                });

                test('Date не является массивом', () => {
                    expect(Type.isArray(Date)).toBeFalsy();
                    expect(Type.isArray(new Date())).toBeFalsy();
                });
            });

            describe('Структурированные данные', () => {
                test('Array не является массивом', () => {
                    expect(Type.isArray(Array)).toBeFalsy();
                });

                test('Экземпляр Map не является массивом', () => {
                    expect(Type.isArray(Map)).toBeFalsy();
                    expect(Type.isArray(new Map())).toBeFalsy();
                });

                test('Экземпляр Set не является массивом', () => {
                    expect(Type.isArray(Set)).toBeFalsy();
                    expect(Type.isArray(new Set())).toBeFalsy();
                });

                test('WeakMap не является массивом', () => {
                    expect(Type.isArray(WeakMap)).toBeFalsy();
                    expect(Type.isArray(new WeakMap())).toBeFalsy();
                });

                test('WeakSet не является массивом', () => {
                    expect(Type.isArray(WeakSet)).toBeFalsy();
                    expect(Type.isArray(new WeakSet())).toBeFalsy();
                });

                test('ArrayBuffer не является массивом', () => {
                    expect(Type.isArray(ArrayBuffer)).toBeFalsy();
                    expect(Type.isArray(new ArrayBuffer(8))).toBeFalsy();
                });

                test('SharedArrayBuffer не является массивом', () => {
                    expect(Type.isArray(SharedArrayBuffer)).toBeFalsy();
                    expect(Type.isArray(new SharedArrayBuffer(8))).toBeFalsy();
                });

                test('DataView не является массивом', () => {
                    expect(Type.isArray(DataView)).toBeFalsy();
                    expect(Type.isArray(new DataView(new ArrayBuffer(8)))).toBeFalsy();
                });

                test('Typed Arrays не являются массивами', () => {
                    const typedArrays = [
                        Int8Array,
                        Uint8Array,
                        Uint8ClampedArray,
                        Int16Array,
                        Uint16Array,
                        Int32Array,
                        Uint32Array,
                        Float32Array,
                        Float64Array,
                        BigInt64Array,
                        BigUint64Array,
                    ];
                    typedArrays.forEach(ArrayType => {
                        expect(Type.isArray(ArrayType)).toBeFalsy();
                        expect(Type.isArray(new ArrayType(8))).toBeFalsy();
                    });
                });
            });

            describe('Объекты абстракции управления', () => {
                test('Promise не является массивом', () => {
                    expect(Type.isArray(new Promise(() => {}))).toBeFalsy();
                });

                test('Generator не является массивом', () => {
                    function* gen() {}
                    expect(Type.isArray(gen())).toBeFalsy();
                });

                test('GeneratorFunction не является массивом', () => {
                    function* gen() {}
                    expect(Type.isArray(gen.constructor)).toBeFalsy();
                });

                test('AsyncFunction не является массивом', () => {
                    async function func() {}
                    expect(Type.isArray(func)).toBeFalsy();
                });

                test('AsyncGenerator не является массивом', () => {
                    async function* gen() {}
                    expect(Type.isArray(gen())).toBeFalsy();
                });

                test('AsyncGeneratorFunction не является массивом', () => {
                    async function* gen() {}
                    expect(Type.isArray(gen.constructor)).toBeFalsy();
                });
            });

            describe('Отражение', () => {
                test('Reflect не является массивом', () => {
                    expect(Type.isArray(Reflect)).toBeFalsy();
                });
            });

            describe('Интернационализация', () => {
                test('Intl не является массивом', () => {
                    expect(Type.isArray(Intl)).toBeFalsy();
                });
            });

            describe('Обработка ошибок', () => {
                const errorTypes = [
                    Error,
                    EvalError,
                    RangeError,
                    ReferenceError,
                    SyntaxError,
                    TypeError,
                    URIError,
                ];

                // Тестируем все ошибки из списка
                errorTypes.forEach(errorType => {
                    test(`${errorType.name} не является массивом`, () => {
                        expect(Type.isArray(errorType)).toBeFalsy();
                    });
                });
            });

            describe('Веб-API (объекты, зависящие от браузера)', () => {
                test('Window не является массивом', () => {
                    expect(Type.isArray(Window)).toBeFalsy();
                });

                test('document не является массивом', () => {
                    expect(Type.isArray(document)).toBeFalsy();
                });

                test('navigator не является массивом', () => {
                    expect(Type.isArray(navigator)).toBeFalsy();
                });

                test('location не является массивом', () => {
                    expect(Type.isArray(location)).toBeFalsy();
                });

                test('Function не является массивом', () => {
                    expect(Type.isArray(Function)).toBeFalsy();
                });

                test('screen не является массивом', () => {
                    expect(Type.isArray(screen)).toBeFalsy();
                });

                test('history не является массивом', () => {
                    expect(Type.isArray(history)).toBeFalsy();
                });

                test('localStorage не является массивом', () => {
                    expect(Type.isArray(localStorage)).toBeFalsy();
                });

                test('Function не является массивом', () => {
                    expect(Type.isArray(Function)).toBeFalsy();
                });

                test('sessionStorage не является массивом', () => {
                    expect(Type.isArray(sessionStorage)).toBeFalsy();
                });

                test('XMLHttpRequest не является массивом', () => {
                    expect(Type.isArray(XMLHttpRequest)).toBeFalsy();
                });

                test('WebSocket не является массивом', () => {
                    expect(Type.isArray(WebSocket)).toBeFalsy();
                    expect(Type.isArray(new WebSocket('ws://localhost'))).toBeFalsy();
                });

                test('Event не является массивом', () => {
                    expect(Type.isArray(Event)).toBeFalsy();
                    expect(Type.isArray(new Event('click'))).toBeFalsy();
                });

                test('CustomEvent не является массивом', () => {
                    expect(Type.isArray(CustomEvent)).toBeFalsy();
                    expect(Type.isArray(new CustomEvent('test'))).toBeFalsy();
                });

                test('AbortController не является массивом', () => {
                    expect(Type.isArray(AbortController)).toBeFalsy();
                    expect(Type.isArray(new AbortController())).toBeFalsy();
                });

                test('FormData не является массивом', () => {
                    expect(Type.isArray(FormData)).toBeFalsy();
                });

                test('Blob не является массивом', () => {
                    expect(Type.isArray(Blob)).toBeFalsy();
                    expect(Type.isArray(new Blob([]))).toBeFalsy();
                });

                test('File не является массивом', () => {
                    expect(Type.isArray(File)).toBeFalsy();
                    expect(Type.isArray(new File([], 'test.txt'))).toBeFalsy();
                });

                test('FileReader не является массивом', () => {
                    expect(Type.isArray(FileReader)).toBeFalsy();
                    expect(Type.isArray(new FileReader())).toBeFalsy();
                });

                test('Performance не является массивом', () => {
                    expect(Type.isArray(Performance)).toBeFalsy();
                });
            });

            describe('Веб-хранилище и сетевое взаимодействие', () => {
                test('URL не является массивом', () => {
                    expect(Type.isArray(URL)).toBeFalsy();
                });

                test('URLSearchParams не является массивом', () => {
                    expect(Type.isArray(URLSearchParams)).toBeFalsy();
                });

                test('Location не является массивом', () => {
                    expect(Type.isArray(Location)).toBeFalsy();
                });

                test('Cookies не является массивом', () => {
                    expect(Type.isArray(document.cookie)).toBeFalsy();
                });

                test('IndexedDB не является массивом', () => {
                    expect(Type.isArray(window.indexedDB)).toBeFalsy();
                });
            });

            describe('Другие', () => {
                test('JSON не является массивом', () => {
                    expect(Type.isArray(JSON)).toBeFalsy();
                });

                test('Math не является массивом', () => {
                    expect(Type.isArray(Math)).toBeFalsy();
                });

                test('console не является массивом', () => {
                    expect(Type.isArray(console)).toBeFalsy();
                });

                test('setTimeout не является массивом', () => {
                    expect(Type.isArray(setTimeout)).toBeFalsy();
                });

                test('clearTimeout не является массивом', () => {
                    expect(Type.isArray(clearTimeout)).toBeFalsy();
                });

                test('setInterval не является массивом', () => {
                    expect(Type.isArray(setInterval)).toBeFalsy();
                });

                test('clearInterval не является массивом', () => {
                    expect(Type.isArray(clearInterval)).toBeFalsy();
                });

                test('setImmediate не является массивом', () => {
                    expect(Type.isArray(setImmediate)).toBeFalsy();
                });

                test('clearImmediate не является массивом', () => {
                    expect(Type.isArray(clearImmediate)).toBeFalsy();
                });

                test('process не является массивом', () => {
                    expect(Type.isArray(process)).toBeFalsy();
                });
            });
        });
    });

    describe('isBool', () => {
        test('должна возвращать true для значения true', () => {
            expect(Type.isBool(true)).toBe(true);
        });

        test('должна возвращать true для значения false', () => {
            expect(Type.isBool(false)).toBe(true);
        });

        test('должна возвращать false для значения числа', () => {
            expect(Type.isBool(0)).toBe(false);
            expect(Type.isBool(1)).toBe(false);
        });

        test('должна возвращать false для строки', () => {
            expect(Type.isBool('true')).toBe(false);
            expect(Type.isBool('false')).toBe(false);
        });

        test('должна возвращать false для объекта', () => {
            expect(Type.isBool({})).toBe(false);
            expect(Type.isBool([])).toBe(false);
        });

        test('должна возвращать false для null', () => {
            expect(Type.isBool(null)).toBe(false);
        });

        test('должна возвращать false для undefined', () => {
            expect(Type.isBool(undefined)).toBe(false);
        });

        test('должна возвращать false для функции', () => {
            expect(Type.isBool(() => {})).toBe(false);
        });

        test('должна возвращать false для объекта Boolean', () => {
            expect(Type.isBool(new Boolean(true))).toBe(false);
        });
    });

    describe('isBoolean', () => {
        test('должна возвращать true для значения true', () => {
            expect(Type.isBoolean(true)).toBe(true);
        });

        test('должна возвращать true для значения false', () => {
            expect(Type.isBoolean(false)).toBe(true);
        });

        test('должна возвращать false для значения числа', () => {
            expect(Type.isBoolean(0)).toBe(false);
            expect(Type.isBoolean(1)).toBe(false);
        });

        test('должна возвращать false для строки', () => {
            expect(Type.isBoolean('true')).toBe(false);
            expect(Type.isBoolean('false')).toBe(false);
        });

        test('должна возвращать false для объекта', () => {
            expect(Type.isBoolean({})).toBe(false);
            expect(Type.isBoolean([])).toBe(false);
        });

        test('должна возвращать false для null', () => {
            expect(Type.isBoolean(null)).toBe(false);
        });

        test('должна возвращать false для undefined', () => {
            expect(Type.isBoolean(undefined)).toBe(false);
        });

        test('должна возвращать false для функции', () => {
            expect(Type.isBoolean(() => {})).toBe(false);
        });

        test('должна возвращать false для объекта Boolean', () => {
            expect(Type.isBoolean(new Boolean(true))).toBe(false);
        });
    });

    describe('isCallable', () => {
        test('должна возвращать true для обычной функции', () => {
            function example() {}
            expect(Type.isCallable(example)).toBe(true);
        });

        test('должна возвращать false для класса', () => {
            class MyClass {}
            expect(Type.isCallable(MyClass)).toBe(false);
        });

        test('должна возвращать false для объектов', () => {
            class MyClass {}
            const obj = new MyClass();
            expect(Type.isCallable(obj)).toBe(false);
        });

        test('должна возвращать false для массивов', () => {
            expect(Type.isCallable([])).toBe(false);
            expect(Type.isCallable({})).toBe(false);
            expect(Type.isCallable(Object.create(null))).toBe(false);
        });

        test('должна возвращать false для примитивных типов', () => {
            expect(Type.isCallable(42)).toBe(false);
            expect(Type.isCallable('hello')).toBe(false);
            expect(Type.isCallable(null)).toBe(false);
            expect(Type.isCallable(undefined)).toBe(false);
        });

        test('должна возвращать true для стрелочных функций', () => {
            expect(Type.isCallable(() => {})).toBe(true);
        });
    });

    describe('isClass', () => {
        test('должен возвращать true для класса', () => {
            class MyClass {}
            expect(Type.isClass(MyClass)).toBe(true);
        });

        test('должен возвращать false для функции-конструктора', () => {
            function MyFunction() {}
            expect(Type.isClass(MyFunction)).toBe(false);
        });

        test('должен возвращать false для объекта', () => {
            expect(Type.isClass({})).toBe(false);
        });

        test('должен возвращать false для массива', () => {
            expect(Type.isClass([])).toBe(false);
        });

        test('должен возвращать false для null', () => {
            expect(Type.isClass(null)).toBe(false);
        });

        test('должен возвращать false для числа', () => {
            expect(Type.isClass(42)).toBe(false);
        });

        test('должен возвращать false для строки', () => {
            expect(Type.isClass('hello')).toBe(false);
        });

        test('должен возвращать false для булевого значения', () => {
            expect(Type.isClass(true)).toBe(false);
        });

        test('должен возвращать false для встроенных объектов, таких как Map', () => {
            expect(Type.isClass(new Map())).toBe(false);
        });

        test('должен возвращать false для встроенных объектов, таких как Date', () => {
            expect(Type.isClass(new Date())).toBe(false);
        });

        test('должен возвращать false для объекта, созданного через Object.create(null)', () => {
            const noProtoObject = Object.create(null);
            noProtoObject.foo = 'bar';
            expect(Type.isClass(noProtoObject)).toBe(false);
        });
    });

    describe('isContract', () => {
        class ValidContract extends Interface {}
        class InvalidContract {}
        const NotAClass = {};

        test('должен возвращать true для класса, наследующего Interface', () => {
            expect(Type.isContract(ValidContract)).toBe(true);
        });

        test('должен возвращать false для класса, не наследующего Interface', () => {
            expect(Type.isContract(InvalidContract)).toBe(false);
        });

        test('должен возвращать false для объекта, не являющегося классом', () => {
            expect(Type.isContract(NotAClass)).toBe(false);
        });

        test('должен возвращать false для примитивов', () => {
            expect(Type.isContract(null)).toBe(false);
            expect(Type.isContract(undefined)).toBe(false);
            expect(Type.isContract(42)).toBe(false);
            expect(Type.isContract('строка')).toBe(false);
        });

        test('должен возвращать false для функции', () => {
            function RegularFunction() {}
            expect(Type.isContract(RegularFunction)).toBe(false);
        });
    });

    describe('isCountable', () => {
        test('должна возвращать true для массивов', () => {
            expect(Type.isCountable([1, 2, 3])).toBe(true);
            expect(Type.isCountable([])).toBe(true);
        });

        test('должна возвращать true для ассоциативных массивов', () => {
            expect(Type.isCountable({ foo: 'bar' })).toBe(true);
            expect(Type.isCountable({})).toBe(true);
        });

        test('должна возвращать true для объектов, реализующих интерфейс Countable', () => {
            class Collection {
                static __implements = [Countable];
                count() {
                    return 10;
                }
            }
            const collect = new Collection();
            expect(Type.isCountable(collect)).toBe(true);
        });

        test('должна возвращать false для несчётных значений', () => {
            expect(Type.isCountable(42)).toBe(false);
            expect(Type.isCountable('string')).toBe(false);
            expect(Type.isCountable(null)).toBe(false);
            expect(Type.isCountable(undefined)).toBe(false);
        });

        test('должна возвращать false для пользовательских классов без реализации Countable', () => {
            class MyCollection {}
            const myObject = new MyCollection();
            expect(Type.isCountable(myObject)).toBe(false);
        });
    });

    describe('isDouble', () => {
        test('должна возвращать true для чисел с плавающей точкой', () => {
            expect(Type.isDouble(3.14)).toBe(true);
            expect(Type.isDouble(-0.001)).toBe(true);
        });

        test('должна возвращать false для целых чисел', () => {
            expect(Type.isDouble(2)).toBe(false);
            expect(Type.isDouble(0)).toBe(false);
            expect(Type.isDouble(-5)).toBe(false);
        });

        test('должна возвращать false для NaN', () => {
            expect(Type.isDouble(NaN)).toBe(false);
        });

        test('должна возвращать false для строк', () => {
            expect(Type.isDouble('3.14')).toBe(false);
            expect(Type.isDouble('test')).toBe(false);
        });

        test('должна возвращать false для булевых значений', () => {
            expect(Type.isDouble(true)).toBe(false);
            expect(Type.isDouble(false)).toBe(false);
        });

        test('должна возвращать false для null и undefined', () => {
            expect(Type.isDouble(null)).toBe(false);
            expect(Type.isDouble(undefined)).toBe(false);
        });

        test('должна возвращать false для объектов и массивов', () => {
            expect(Type.isDouble({})).toBe(false);
            expect(Type.isDouble([])).toBe(false);
        });
    });

    describe('isFloat', () => {
        test('должна возвращать true для чисел с плавающей точкой', () => {
            expect(Type.isFloat(3.14)).toBe(true);
            expect(Type.isFloat(-0.5)).toBe(true);
        });

        test('должна возвращать true для дробных чисел, полученных в результате вычислений', () => {
            expect(Type.isFloat(0.1 + 0.2)).toBe(true); // Результат из-за особенностей работы с плавающей точкой
        });

        test('должна возвращать false для целых чисел', () => {
            expect(Type.isFloat(0)).toBe(false);
            expect(Type.isFloat(42)).toBe(false);
            expect(Type.isFloat(-100)).toBe(false);
        });

        test('должна возвращать false для строк', () => {
            expect(Type.isFloat('3.14')).toBe(false);
            expect(Type.isFloat('test')).toBe(false);
        });

        test('должна возвращать false для NaN', () => {
            expect(Type.isFloat(NaN)).toBe(false);
        });

        test('должна возвращать false для булевых значений', () => {
            expect(Type.isFloat(true)).toBe(false);
            expect(Type.isFloat(false)).toBe(false);
        });

        test('должна возвращать false для null и undefined', () => {
            expect(Type.isFloat(null)).toBe(false);
            expect(Type.isFloat(undefined)).toBe(false);
        });

        test('должна возвращать false для объектов и массивов', () => {
            expect(Type.isFloat({})).toBe(false);
            expect(Type.isFloat([])).toBe(false);
        });

        test('должна возвращать false для Infinity и -Infinity', () => {
            expect(Type.isFloat(Infinity)).toBe(false);
            expect(Type.isFloat(-Infinity)).toBe(false);
        });
    });

    describe('isInt', () => {
        test('должна возвращать true для целых чисел', () => {
            expect(Type.isInt(42)).toBe(true);
            expect(Type.isInt(0)).toBe(true);
            expect(Type.isInt(-123)).toBe(true);
        });

        test('должна возвращать false для дробных чисел', () => {
            expect(Type.isInt(3.14)).toBe(false);
            expect(Type.isInt(-0.001)).toBe(false);
        });

        test('должна возвращать false для строк', () => {
            expect(Type.isInt('42')).toBe(false);
            expect(Type.isInt('test')).toBe(false);
        });

        test('должна возвращать false для булевых значений', () => {
            expect(Type.isInt(true)).toBe(false);
            expect(Type.isInt(false)).toBe(false);
        });

        test('должна возвращать false для null и undefined', () => {
            expect(Type.isInt(null)).toBe(false);
            expect(Type.isInt(undefined)).toBe(false);
        });

        test('должна возвращать false для NaN', () => {
            expect(Type.isInt(NaN)).toBe(false);
        });

        test('должна возвращать false для Infinity и -Infinity', () => {
            expect(Type.isInt(Infinity)).toBe(false);
            expect(Type.isInt(-Infinity)).toBe(false);
        });

        test('должна возвращать false для объектов и массивов', () => {
            expect(Type.isInt({})).toBe(false);
            expect(Type.isInt([])).toBe(false);
        });
    });

    describe('isInteger', () => {
        test('должна возвращать true для целых чисел', () => {
            expect(Type.isInteger(42)).toBe(true);
            expect(Type.isInteger(0)).toBe(true);
            expect(Type.isInteger(-7)).toBe(true);
        });

        test('должна возвращать false для чисел с плавающей точкой', () => {
            expect(Type.isInteger(3.14)).toBe(false);
            expect(Type.isInteger(-0.99)).toBe(false);
        });

        test('должна возвращать false для специальных чисел', () => {
            expect(Type.isInteger(NaN)).toBe(false);
            expect(Type.isInteger(Infinity)).toBe(false);
            expect(Type.isInteger(-Infinity)).toBe(false);
        });

        test('должна возвращать false для строк', () => {
            expect(Type.isInteger('42')).toBe(false);
            expect(Type.isInteger('3.14')).toBe(false);
        });

        test('должна возвращать false для логических значений', () => {
            expect(Type.isInteger(true)).toBe(false);
            expect(Type.isInteger(false)).toBe(false);
        });

        test('должна возвращать false для null и undefined', () => {
            expect(Type.isInteger(null)).toBe(false);
            expect(Type.isInteger(undefined)).toBe(false);
        });

        test('должна возвращать false для объектов и массивов', () => {
            expect(Type.isInteger({})).toBe(false);
            expect(Type.isInteger([])).toBe(false);
        });

        test('должна возвращать false для функций', () => {
            expect(Type.isInteger(() => {})).toBe(false);
        });
    });

    describe('isIterable', () => {
        test('должна возвращать true для массивов', () => {
            expect(Type.isIterable([1, 2, 3])).toBe(true);
        });

        test('должна возвращать true для ассоциативных массивов', () => {
            expect(Type.isIterable({ foo: 'bar' })).toBe(true);
            expect(Type.isIterable(array({ foo: 'bar' }))).toBe(true);
        });

        test('должна возвращать true для объектов, реализующих Traversable', () => {
            class Collection {
                static __implements = [Traversable];
            }
            const instance = new Collection();
            expect(Type.isIterable(instance)).toBe(true);
        });

        test('должна возвращать false для примитивных значений', () => {
            expect(Type.isIterable(42)).toBe(false);
            expect(Type.isIterable('hello')).toBe(false);
            expect(Type.isIterable(null)).toBe(false);
            expect(Type.isIterable(undefined)).toBe(false);
        });
    });

    describe('isLong', () => {
        test('должна возвращать true для положительных целых чисел', () => {
            expect(Type.isLong(1)).toBe(true);
            expect(Type.isLong(100)).toBe(true);
            expect(Type.isLong(123456)).toBe(true);
        });

        test('должна возвращать true для отрицательных целых чисел', () => {
            expect(Type.isLong(-1)).toBe(true);
            expect(Type.isLong(-100)).toBe(true);
            expect(Type.isLong(-123456)).toBe(true);
        });

        test('должна возвращать true для нуля', () => {
            expect(Type.isLong(0)).toBe(true);
        });

        test('должна возвращать false для чисел с плавающей точкой', () => {
            expect(Type.isLong(1.1)).toBe(false);
            expect(Type.isLong(-0.5)).toBe(false);
            expect(Type.isLong(3.14159)).toBe(false);
        });

        test('должна возвращать false для значений не типа number', () => {
            expect(Type.isLong('42')).toBe(false); // строка
            expect(Type.isLong(true)).toBe(false); // логическое значение
            expect(Type.isLong(null)).toBe(false); // null
            expect(Type.isLong(undefined)).toBe(false); // undefined
            expect(Type.isLong({})).toBe(false); // объект
            expect(Type.isLong([])).toBe(false); // массив
        });

        test('должна возвращать false для специальных числовых значений', () => {
            expect(Type.isLong(Infinity)).toBe(false); // бесконечность
            expect(Type.isLong(-Infinity)).toBe(false); // отрицательная бесконечность
            expect(Type.isLong(NaN)).toBe(false); // не число
        });
    });

    describe('isNull', () => {
        test('должна возвращать true для значения null', () => {
            expect(Type.isNull(null)).toBe(true);
        });

        test('должна возвращать false для значения undefined', () => {
            expect(Type.isNull(undefined)).toBe(false);
        });

        test('должна возвращать false для чисел', () => {
            expect(Type.isNull(0)).toBe(false);
            expect(Type.isNull(42)).toBe(false);
        });

        test('должна возвращать false для строк', () => {
            expect(Type.isNull('')).toBe(false);
            expect(Type.isNull('null')).toBe(false);
        });

        test('должна возвращать false для булевых значений', () => {
            expect(Type.isNull(true)).toBe(false);
            expect(Type.isNull(false)).toBe(false);
        });

        test('должна возвращать false для объектов и массивов', () => {
            expect(Type.isNull({})).toBe(false);
            expect(Type.isNull([])).toBe(false);
        });

        test('должна возвращать false для функций', () => {
            expect(Type.isNull(() => {})).toBe(false);
        });
    });

    describe('isNumber', () => {
        test('должна возвращать true для числовых значений', () => {
            expect(Type.isNumber(42)).toBe(true);
            expect(Type.isNumber(3.14)).toBe(true);
            expect(Type.isNumber(-0.99)).toBe(true);
        });

        test('должна возвращать false для специальных числовых значений', () => {
            expect(Type.isNumber(NaN)).toBe(false);
            expect(Type.isNumber(Infinity)).toBe(false);
            expect(Type.isNumber(-Infinity)).toBe(false);
        });

        test('должна возвращать false для значений не типа number', () => {
            expect(Type.isNumber('42')).toBe(false); // строка
            expect(Type.isNumber(true)).toBe(false); // логическое значение
            expect(Type.isNumber(null)).toBe(false); // null
            expect(Type.isNumber(undefined)).toBe(false); // undefined
            expect(Type.isNumber({})).toBe(false); // объект
            expect(Type.isNumber([])).toBe(false); // массив
        });
    });

    describe('isNumeric', () => {
        test('должна возвращать true для числовых значений', () => {
            expect(Type.isNumeric(42)).toBe(true);
            expect(Type.isNumeric(3.14)).toBe(true);
            expect(Type.isNumeric(-0.99)).toBe(true);
        });

        test('должна возвращать true для числовых строк', () => {
            expect(Type.isNumeric('42')).toBe(true);
            expect(Type.isNumeric('3.14')).toBe(true);
            expect(Type.isNumeric('-0.99')).toBe(true);
        });

        test('должна возвращать false для специальных числовых значений', () => {
            expect(Type.isNumeric(NaN)).toBe(false);
            expect(Type.isNumeric(Infinity)).toBe(false);
            expect(Type.isNumeric(-Infinity)).toBe(false);
        });

        test('должна возвращать false для значений не типа number или string', () => {
            expect(Type.isNumeric(true)).toBe(false); // логическое значение
            expect(Type.isNumeric(null)).toBe(false); // null
            expect(Type.isNumeric(undefined)).toBe(false); // undefined
            expect(Type.isNumeric({})).toBe(false); // объект
            expect(Type.isNumeric([])).toBe(false); // массив
        });
    });

    describe('isObject', () => {
        test('должен возвращать true для объектов, созданных с использованием классов', () => {
            class MyClass {}
            const myClassInstance = new MyClass();
            expect(Type.isObject(myClassInstance)).toBe(true);
        });

        test('должен возвращать false для классов', () => {
            class MyClass {}
            expect(Type.isObject(MyClass)).toBe(false);
        });

        test('должен возвращать false для обычных объектов', () => {
            const obj = {};
            expect(Type.isObject(obj)).toBe(false);
        });

        test('должен возвращать false для массивов', () => {
            const arr = [];
            expect(Type.isObject(arr)).toBe(false);
        });

        test('должен возвращать false для объектов, таких как Date', () => {
            const date = new Date();
            expect(Type.isObject(date)).toBe(false);
        });

        test('должен возвращать false для null', () => {
            expect(Type.isObject(null)).toBe(false);
        });

        test('должен возвращать false для числа', () => {
            expect(Type.isObject(42)).toBe(false);
        });

        test('должен возвращать false для строки', () => {
            expect(Type.isObject('string')).toBe(false);
        });

        test('должен возвращать false для объектов, таких как Map', () => {
            const map = new Map();
            expect(Type.isObject(map)).toBe(false);
        });

        test('должен возвращать false для объектов, созданных с Object.create(null)', () => {
            const objNoProto = Object.create(null);
            expect(Type.isObject(objNoProto)).toBe(false);
        });
    });

    describe('isScalar', () => {
        test('должна возвращать true для чисел', () => {
            expect(Type.isScalar(42)).toBe(true);
            expect(Type.isScalar(3.14)).toBe(true);
            expect(Type.isScalar(-0.99)).toBe(true);
        });

        test('должна возвращать true для строк', () => {
            expect(Type.isScalar('hello')).toBe(true);
            expect(Type.isScalar('')).toBe(true);
        });

        test('должна возвращать true для булевых значений', () => {
            expect(Type.isScalar(true)).toBe(true);
            expect(Type.isScalar(false)).toBe(true);
        });

        test('должна возвращать true для символов', () => {
            expect(Type.isScalar(Symbol('symbol'))).toBe(true);
        });

        test('должна возвращать false для null и undefined', () => {
            expect(Type.isScalar(null)).toBe(false);
            expect(Type.isScalar(undefined)).toBe(false);
        });

        test('должна возвращать false для объектов и массивов', () => {
            expect(Type.isScalar({})).toBe(false);
            expect(Type.isScalar([])).toBe(false);
        });

        test('должна возвращать false для функций', () => {
            expect(Type.isScalar(() => {})).toBe(false);
        });
    });

    describe('isString', () => {
        test('должна возвращать true для строк', () => {
            expect(Type.isString('hello')).toBe(true);
            expect(Type.isString('')).toBe(true);
            expect(Type.isString(`template string`)).toBe(true);
        });

        test('должна возвращать false для чисел', () => {
            expect(Type.isString(42)).toBe(false);
            expect(Type.isString(3.14)).toBe(false);
        });

        test('должна возвращать false для булевых значений', () => {
            expect(Type.isString(true)).toBe(false);
            expect(Type.isString(false)).toBe(false);
        });

        test('должна возвращать false для null и undefined', () => {
            expect(Type.isString(null)).toBe(false);
            expect(Type.isString(undefined)).toBe(false);
        });

        test('должна возвращать false для объектов и массивов', () => {
            expect(Type.isString({})).toBe(false);
            expect(Type.isString([])).toBe(false);
        });

        test('должна возвращать false для функций', () => {
            expect(Type.isString(() => {})).toBe(false);
        });
    });

    describe('isSymbol', () => {
        test('должна возвращать true для символов', () => {
            expect(Type.isSymbol(Symbol('symbol'))).toBe(true);
            expect(Type.isSymbol(Symbol.iterator)).toBe(true);
        });

        test('должна возвращать false для строк', () => {
            expect(Type.isSymbol('hello')).toBe(false);
        });

        test('должна возвращать false для чисел', () => {
            expect(Type.isSymbol(42)).toBe(false);
        });

        test('должна возвращать false для булевых значений', () => {
            expect(Type.isSymbol(true)).toBe(false);
            expect(Type.isSymbol(false)).toBe(false);
        });

        test('должна возвращать false для null и undefined', () => {
            expect(Type.isSymbol(null)).toBe(false);
            expect(Type.isSymbol(undefined)).toBe(false);
        });

        test('должна возвращать false для объектов и массивов', () => {
            expect(Type.isSymbol({})).toBe(false);
            expect(Type.isSymbol([])).toBe(false);
        });

        test('должна возвращать false для функций', () => {
            expect(Type.isSymbol(() => {})).toBe(false);
        });
    });

    describe('isUndefined', () => {
        test('должна возвращать true для значения undefined', () => {
            expect(Type.isUndefined(undefined)).toBe(true);
        });

        test('должна возвращать false для значений других типов', () => {
            expect(Type.isUndefined('hello')).toBe(false); // строка
            expect(Type.isUndefined(42)).toBe(false); // число
            expect(Type.isUndefined(true)).toBe(false); // логическое значение
            expect(Type.isUndefined(null)).toBe(false);
            expect(Type.isUndefined({})).toBe(false); // объект
            expect(Type.isUndefined([])).toBe(false); // массив
            expect(Type.isUndefined(() => {})).toBe(false); // функция
        });
    });
});
