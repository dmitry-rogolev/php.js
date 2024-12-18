/**
 * Базовый класс для всех внутренних интерфейсов библиотеки php.js
 */
class Interface {
    static [Symbol.hasInstance](value) {
        if (
            !(value instanceof Object) ||
            !Object.getPrototypeOf(value).constructor ||
            !Object.getPrototypeOf(value).constructor.toString().startsWith('class ')
        ) {
            return false;
        }

        let proto = Object.getPrototypeOf(value).constructor;

        while (proto) {
            if (proto.__implements && proto.__implements.includes(this)) {
                return true;
            }

            proto = Object.getPrototypeOf(proto);
        }

        return false;
    }
}

export default Interface;
