import * as classes from './classes.mjs';

if (window) {
    for (const class_name in classes) {
        window[class_name] = classes[class_name];
    }
} else {
    for (const class_name in classes) {
        global[class_name] = classes[class_name];
    }
}
