import array_multisort from './array_multisort.mjs';
import { SORT_NATURAL } from './constants.mjs';

/**
 * Сортирует массив, для чего использует алгоритм «естественной сортировки»
 *
 * Эта функция использует алгоритм сортировки, который упорядочивает буквенно-цифровые строки так,
 * как это сделал бы человек. При этом функция сохраняет связи между ключами и значениями.
 * Такой алгоритм называется natural ordering.
 *
 * > **Замечание:**
 * >
 * > Функция сохраняет первоначальный порядок элементов, если при сравнении значения двух элементов равны.
 *
 * @param {Array|Object} array Входной массив.
 * @returns {true} Функция всегда возвращает `true`.
 * @throws {TypePHPJSError}
 */
export default function natsort(array) {
    return array_multisort(array, SORT_NATURAL);
}
