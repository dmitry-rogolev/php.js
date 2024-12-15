import { expect, test, describe } from '@jest/globals';
import is_array from '../../src/variables/is_array.mjs';

class stdClass {}

describe('is_array', () => {
    describe('Примитивные значения и базовые типы', () => {
        test('false не является массивом', () => {
            expect(is_array(false)).toBeFalsy();
        });

        test('true не является массивом', () => {
            expect(is_array(true)).toBeFalsy();
        });

        test('Число 3 не является массивом', () => {
            expect(is_array(3)).toBeFalsy();
        });

        test('Число 3.14 не является массивом', () => {
            expect(is_array(3.14)).toBeFalsy();
        });

        test('Строка "string" не является массивом', () => {
            expect(is_array('string')).toBeFalsy();
        });

        test('null не является массивом', () => {
            expect(is_array(null)).toBeFalsy();
        });

        test('undefined не является массивом', () => {
            expect(is_array(undefined)).toBeFalsy();
        });

        test('NaN не является массивом', () => {
            expect(is_array(NaN)).toBeFalsy();
        });

        test('Symbol не является массивом', () => {
            expect(is_array(Symbol())).toBeFalsy();
        });
    });

    describe('Массивы и объекты', () => {
        test('Обычный массив [1, 2] является массивом', () => {
            expect(is_array([1, 2])).toBeTruthy();
        });

        test('Объект с парами ключ-значение {0: 1, 1: 2} является ассоциативным массивом', () => {
            expect(is_array({ 0: 1, 1: 2 })).toBeTruthy();
        });

        test('Объект {foo: "bar"} является ассоциативным массивом', () => {
            expect(is_array({ foo: 'bar' })).toBeTruthy();
        });

        test('Объект, созданный через Object.create(null), является ассоциативным массивом', () => {
            const noProtoObject = Object.create(null);
            noProtoObject.foo = 'bar';
            expect(is_array(noProtoObject)).toBeTruthy();
        });

        test('Proxy является массивом', () => {
            const handler = {};
            const proxy = new Proxy([1, 2, 3], handler); // Проксируем массив
            expect(is_array(proxy)).toBeTruthy();
        });
    });

    describe('Не массивы', () => {
        describe('Классы', () => {
            test('Экземпляр класса stdClass не является массивом', () => {
                expect(is_array(new stdClass())).toBeFalsy();
            });

            test('Класс stdClass сам по себе не является массивом', () => {
                expect(is_array(stdClass)).toBeFalsy();
            });
        });

        describe('Глобальные объекты', () => {
            // Массив глобальных объектов, которые не являются массивами
            const globalObjects = [Object, Function, Boolean];

            globalObjects.forEach(globalObj => {
                test(`${globalObj.name} не является массивом`, () => {
                    expect(is_array(globalObj)).toBeFalsy();
                });
            });

            test('Symbol не является массивом', () => {
                expect(is_array(Symbol)).toBeFalsy();
            });
        });

        describe('Обработка текста', () => {
            test('String не является массивом', () => {
                expect(is_array(String)).toBeFalsy();
            });

            test('RegExp не является массивом', () => {
                expect(is_array(RegExp)).toBeFalsy();
                expect(is_array(/abc/)).toBeFalsy();
            });
        });

        describe('Числа и даты', () => {
            test('Number не является массивом', () => {
                expect(is_array(Number)).toBeFalsy();
            });

            test('BigInt не является массивом', () => {
                expect(is_array(BigInt)).toBeFalsy();
                expect(is_array(123n)).toBeFalsy();
            });

            test('Math не является массивом', () => {
                expect(is_array(Math)).toBeFalsy();
            });

            test('Date не является массивом', () => {
                expect(is_array(Date)).toBeFalsy();
                expect(is_array(new Date())).toBeFalsy();
            });
        });

        describe('Структурированные данные', () => {
            test('Array не является массивом', () => {
                expect(is_array(Array)).toBeFalsy();
            });

            test('Экземпляр Map не является массивом', () => {
                expect(is_array(Map)).toBeFalsy();
                expect(is_array(new Map())).toBeFalsy();
            });

            test('Экземпляр Set не является массивом', () => {
                expect(is_array(Set)).toBeFalsy();
                expect(is_array(new Set())).toBeFalsy();
            });

            test('WeakMap не является массивом', () => {
                expect(is_array(WeakMap)).toBeFalsy();
                expect(is_array(new WeakMap())).toBeFalsy();
            });

            test('WeakSet не является массивом', () => {
                expect(is_array(WeakSet)).toBeFalsy();
                expect(is_array(new WeakSet())).toBeFalsy();
            });

            test('ArrayBuffer не является массивом', () => {
                expect(is_array(ArrayBuffer)).toBeFalsy();
                expect(is_array(new ArrayBuffer(8))).toBeFalsy();
            });

            test('SharedArrayBuffer не является массивом', () => {
                expect(is_array(SharedArrayBuffer)).toBeFalsy();
                expect(is_array(new SharedArrayBuffer(8))).toBeFalsy();
            });

            test('DataView не является массивом', () => {
                expect(is_array(DataView)).toBeFalsy();
                expect(is_array(new DataView(new ArrayBuffer(8)))).toBeFalsy();
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
                    expect(is_array(ArrayType)).toBeFalsy();
                    expect(is_array(new ArrayType(8))).toBeFalsy();
                });
            });
        });

        describe('Объекты абстракции управления', () => {
            test('Promise не является массивом', () => {
                expect(is_array(new Promise(() => {}))).toBeFalsy();
            });

            test('Generator не является массивом', () => {
                function* gen() {}
                expect(is_array(gen())).toBeFalsy();
            });

            test('GeneratorFunction не является массивом', () => {
                function* gen() {}
                expect(is_array(gen.constructor)).toBeFalsy();
            });

            test('AsyncFunction не является массивом', () => {
                async function func() {}
                expect(is_array(func)).toBeFalsy();
            });

            test('AsyncGenerator не является массивом', () => {
                async function* gen() {}
                expect(is_array(gen())).toBeFalsy();
            });

            test('AsyncGeneratorFunction не является массивом', () => {
                async function* gen() {}
                expect(is_array(gen.constructor)).toBeFalsy();
            });
        });

        describe('Отражение', () => {
            test('Reflect не является массивом', () => {
                expect(is_array(Reflect)).toBeFalsy();
            });
        });

        describe('Интернационализация', () => {
            test('Intl не является массивом', () => {
                expect(is_array(Intl)).toBeFalsy();
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
                    expect(is_array(errorType)).toBeFalsy();
                });
            });
        });

        describe('Веб-API (объекты, зависящие от браузера)', () => {
            test('Window не является массивом', () => {
                expect(is_array(Window)).toBeFalsy();
            });

            test('document не является массивом', () => {
                expect(is_array(document)).toBeFalsy();
            });

            test('navigator не является массивом', () => {
                expect(is_array(navigator)).toBeFalsy();
            });

            test('location не является массивом', () => {
                expect(is_array(location)).toBeFalsy();
            });

            test('Function не является массивом', () => {
                expect(is_array(Function)).toBeFalsy();
            });

            test('screen не является массивом', () => {
                expect(is_array(screen)).toBeFalsy();
            });

            test('history не является массивом', () => {
                expect(is_array(history)).toBeFalsy();
            });

            test('localStorage не является массивом', () => {
                expect(is_array(localStorage)).toBeFalsy();
            });

            test('Function не является массивом', () => {
                expect(is_array(Function)).toBeFalsy();
            });

            test('sessionStorage не является массивом', () => {
                expect(is_array(sessionStorage)).toBeFalsy();
            });

            test('XMLHttpRequest не является массивом', () => {
                expect(is_array(XMLHttpRequest)).toBeFalsy();
            });

            test('WebSocket не является массивом', () => {
                expect(is_array(WebSocket)).toBeFalsy();
                expect(is_array(new WebSocket('ws://localhost'))).toBeFalsy();
            });

            test('Event не является массивом', () => {
                expect(is_array(Event)).toBeFalsy();
                expect(is_array(new Event('click'))).toBeFalsy();
            });

            test('CustomEvent не является массивом', () => {
                expect(is_array(CustomEvent)).toBeFalsy();
                expect(is_array(new CustomEvent('test'))).toBeFalsy();
            });

            test('AbortController не является массивом', () => {
                expect(is_array(AbortController)).toBeFalsy();
                expect(is_array(new AbortController())).toBeFalsy();
            });

            test('FormData не является массивом', () => {
                expect(is_array(FormData)).toBeFalsy();
            });

            test('Blob не является массивом', () => {
                expect(is_array(Blob)).toBeFalsy();
                expect(is_array(new Blob([]))).toBeFalsy();
            });

            test('File не является массивом', () => {
                expect(is_array(File)).toBeFalsy();
                expect(is_array(new File([], 'test.txt'))).toBeFalsy();
            });

            test('FileReader не является массивом', () => {
                expect(is_array(FileReader)).toBeFalsy();
                expect(is_array(new FileReader())).toBeFalsy();
            });

            test('Performance не является массивом', () => {
                expect(is_array(Performance)).toBeFalsy();
            });
        });

        describe('Веб-хранилище и сетевое взаимодействие', () => {
            test('URL не является массивом', () => {
                expect(is_array(URL)).toBeFalsy();
            });

            test('URLSearchParams не является массивом', () => {
                expect(is_array(URLSearchParams)).toBeFalsy();
            });

            test('Location не является массивом', () => {
                expect(is_array(Location)).toBeFalsy();
            });

            test('Cookies не является массивом', () => {
                expect(is_array(document.cookie)).toBeFalsy();
            });

            test('IndexedDB не является массивом', () => {
                expect(is_array(window.indexedDB)).toBeFalsy();
            });
        });

        describe('Другие', () => {
            test('JSON не является массивом', () => {
                expect(is_array(JSON)).toBeFalsy();
            });

            test('Math не является массивом', () => {
                expect(is_array(Math)).toBeFalsy();
            });

            test('console не является массивом', () => {
                expect(is_array(console)).toBeFalsy();
            });

            test('setTimeout не является массивом', () => {
                expect(is_array(setTimeout)).toBeFalsy();
            });

            test('clearTimeout не является массивом', () => {
                expect(is_array(clearTimeout)).toBeFalsy();
            });

            test('setInterval не является массивом', () => {
                expect(is_array(setInterval)).toBeFalsy();
            });

            test('clearInterval не является массивом', () => {
                expect(is_array(clearInterval)).toBeFalsy();
            });

            test('setImmediate не является массивом', () => {
                expect(is_array(setImmediate)).toBeFalsy();
            });

            test('clearImmediate не является массивом', () => {
                expect(is_array(clearImmediate)).toBeFalsy();
            });

            test('process не является массивом', () => {
                expect(is_array(process)).toBeFalsy();
            });
        });
    });
});
