import array_key_exists from './array_key_exists.mjs';

/**
 * Проверяет, существует ли в массиве заданный ключ или индекс
 *
 * Функция `key_exists()` возвращает `true`, если заданный ключ `(key)` содержится в массиве.
 * В параметр `key` разрешено передавать значение, которое допустимо в качестве индекса массива.
 *
 * @param {Number|String} key Проверяемое значение.
 * @param {Array|Object} array Массив с проверяемыми ключами.
 * @returns {boolean} Возвращает `true` в случае успешного выполнения или `false` в случае возникновения ошибки.
 * @throws {TypePHPJSError}
 */
export default function key_exists(key, array) {
    return array_key_exists(key, array);
}
