class ExtensibleFunction extends Function {
    constructor() {
        super('...args', 'return this.__self__.__call__(...args)');

        this.__self__ = this.bind(this);

        Object.defineProperty(this.__self__, 'name', {
            configurable: true,
            enumerable: true,
            value: undefined,
            writable: true,
        });
        delete this.__self__.name;

        Object.defineProperty(this.__self__, 'length', {
            configurable: true,
            enumerable: true,
            value: undefined,
            writable: true,
        });
        delete this.__self__.length;

        return this.__self__;
    }

    __call__() {
        throw new Error('The "__call__" method is not implemented.');
    }
}

export default ExtensibleFunction;
