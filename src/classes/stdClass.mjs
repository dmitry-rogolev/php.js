import get_magic_proxy from '../functions/get_magic_proxy.mjs';
import implementable from '../functions/implementable.mjs';
import traitable from '../functions/traitable.mjs';
import verify_implementation_of_contracts from '../functions/verify_implementation_of_contracts.mjs';
import is_array from '../variables/is_array.mjs';

/**
 * Пустой класс общего назначения
 *
 * Некоторые функции создают экземпляры этого класса, например, `objval`
 */
class stdClass {
    constructor() {
        verify_implementation_of_contracts(Object.getPrototypeOf(this).constructor);

        return get_magic_proxy(this);
    }

    static __set_state(properties) {
        if (!is_array(properties) || properties instanceof Array) {
            throw new TypeError('The "properties" parameter must be an associative array.');
        }

        return Object.assign(new this(), properties);
    }
}

implementable(stdClass);

traitable(stdClass);

export default stdClass;
