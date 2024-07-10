/**
 * Базовый класс для всех внутренних интерфейсов библиотеки php.js
 */
class Interface {
    static [Symbol.hasInstance](obj) {
        if (this.prototype.isPrototypeOf(obj)) {
            return true;
        }

        let proto = Object.getPrototypeOf(obj).constructor;

        while (proto) {
            if (
                proto.__implements?.includes(this) ||
                proto.__implements?.some(contract => new contract() instanceof this)
            ) {
                return true;
            }

            proto = Object.getPrototypeOf(proto);
        }

        return false;
    }
}

export default Interface;
