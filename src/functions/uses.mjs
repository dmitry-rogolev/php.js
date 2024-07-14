import is_class from '../variables/is_class.mjs';

/**
 * Проверяет, используется ли переданный трейт в переданном классе
 *
 * Проверяет, присутствует ли переданный трейт в статичном поле `__traits`
 * в самом классе или в его родительских классах.
 *
 * @param {Object} class_object Класс, требующий проверки использования трейта.
 * @param {Object} trait Трейт, используемый в классе.
 * @returns {boolean} Возвращает `true`, если переданный трейт используется в классе, иначе `false`.
 * @throws {TypeError}
 */
export default function uses(class_object, trait) {
    if (!is_class(class_object)) {
        throw new TypeError('The "class_object" parameter must be of the "class" type.');
    }

    if (!is_class(trait)) {
        throw new TypeError('The "trait" parameter must be of the "class" type.');
    }

    let proto = class_object;

    while (is_class(proto)) {
        if (proto.__traits) {
            for (const mix of proto.__traits) {
                if (new mix() instanceof trait) {
                    return true;
                }
            }
        }

        proto = Object.getPrototypeOf(proto);
    }

    return false;
}
