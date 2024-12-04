import * as functions from './class.mjs';

if (window) {
    for (const function_name in functions) {
        window[function_name] = functions[function_name];
    }
} else {
    for (const function_name in functions) {
        global[function_name] = functions[function_name];
    }
}
