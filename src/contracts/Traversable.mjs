import Interface from './Interface.mjs';

/**
 * Интерфейс, определяющий, является ли класс обходимым (traversable).
 *
 * Этот интерфейс не имеет методов,
 * его единственная цель - быть базовым интерфейсом для всех обходимых классов.
 */
class Traversable extends Interface {}

export default Traversable;
