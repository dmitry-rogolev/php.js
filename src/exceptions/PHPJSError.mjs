import { Throwable } from '../contracts.mjs';
import { is_int, is_null, is_string } from '../variables.mjs';
import { stdClass } from '../classes.mjs';
import StackTrace from 'stacktrace-js';

/**
 * Базовый класс для всех внутренних ошибок библиотеки php.js.
 */
class PHPJSError extends stdClass {
    static __implements = [Throwable];

    name = 'PHPJSError';

    /**
     * Сообщение об ошибке
     *
     * @var {string}
     */
    _message;

    /**
     * Строковое представление трассировки стека
     *
     * @var {string}
     */
    _string;

    /**
     * Код ошибки
     *
     * @var {number}
     */
    _code;

    /**
     * Имя файла, в котором произошла ошибка
     *
     * @var {string}
     */
    _file;

    /**
     * Номер строки, в которой произошла ошибка
     *
     * @var {number}
     */
    _line;

    /**
     * Трассировка стека в виде массива
     *
     * @var {Array}
     */
    _trace;

    /**
     * Ранее выброшенное исключение
     *
     * @var {Throwable}
     */
    _previous;

    constructor(message = '', code = 0, previous = null) {
        super();

        if (!is_string(message)) {
            throw new TypeError('The "message" parameter must be of the "string" type.');
        }

        if (!is_int(code)) {
            throw new TypeError('The "code" parameter must be of the "integer" type.');
        }

        if (!is_null(previous) && !(previous instanceof Throwable)) {
            throw new TypeError('The "previous" parameter must be of the "Throwable" type.');
        }

        this._message = message;
        this._code = code;
        this._previous = previous;

        this._trace = StackTrace.getSync().slice(1);
        this._string = this._trace.join('\n');
        this._file = this._trace[0].fileName;
        this._line = this._trace[0].lineNumber;
    }

    /**
     * Возвращает сообщение об ошибке.
     *
     * @returns {string}
     */
    getMessage() {
        return this._message;
    }

    /**
     * Возвращает предыдущий объект Throwable (третий параметр конструктора PHPJSError::__construct()).
     *
     * @returns {?Throwable}
     */
    getPrevious() {
        return this._previous;
    }

    /**
     * Возвращает код ошибки.
     *
     * @returns {number}
     */
    getCode() {
        return this._code;
    }

    /**
     * Получить имя файла, в котором произошла ошибка.
     *
     * @returns {string}
     */
    getFile() {
        return this._file;
    }

    /**
     * Получить номер строки, в которой произошла ошибка.
     *
     * @returns {number}
     */
    getLine() {
        return this._line;
    }

    /**
     * Возвращает трассировку стека.
     *
     * @returns {Array}
     */
    getTrace() {
        return this._trace;
    }

    /**
     * Возвращает трассировку стека в виде строки.
     *
     * @returns {string}
     */
    getTraceAsString() {
        return this._string;
    }

    /**
     * Позволяет классу решать, как он должен реагировать при преобразовании в строку.
     *
     * @returns {string}
     */
    __toString() {
        return this._string;
    }
}

export default PHPJSError;
