import * as exceptions from './exceptions.mjs';

if (window) {
    for (const exception_name in exceptions) {
        window[exception_name] = exceptions[exception_name];
    }
} else {
    for (const exception_name in exceptions) {
        global[exception_name] = exceptions[exception_name];
    }
}
