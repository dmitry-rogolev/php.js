import variables from './variables.mjs';

if (window) {
    for (const function_name in variables) {
        window[function_name] = variables[function_name];
    }
} else {
    for (const function_name in variables) {
        global[function_name] = variables[function_name];
    }
}
