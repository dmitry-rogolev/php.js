/**
 * * Предопределённые константы функций работы с массивами.
 */

/**
 * CASE_LOWER используется с array_change_key_case()
 * для конвертации ключей массива в нижний регистр.
 * Это действие по умолчанию для array_change_key_case().
 */
export const CASE_LOWER = 0;

/**
 * CASE_UPPER используется c array_change_key_case()
 * для конвертации ключей массива в верхний регистр.
 */
export const CASE_UPPER = 1;

/**
 * SORT_REGULAR используется для обычного сравнения элементов массива.
 */
export const SORT_REGULAR = 0;

/**
 * SORT_NUMERIC используется для сравнения элементов как цифр.
 */
export const SORT_NUMERIC = 1;

/**
 * SORT_STRING используется для сравнения элементов как строк.
 */
export const SORT_STRING = 2;

/**
 * SORT_DESC используется с array_multisort() для сортировки
 * в порядке убывания.
 */
export const SORT_DESC = 3;

/**
 * SORT_ASC используется с array_multisort() для сортировки
 * в порядке возрастания.
 */
export const SORT_ASC = 4;

/**
 * SORT_LOCALE_STRING используется для сравнения элементов
 * как строк на базе текущей локали.
 */
export const SORT_LOCALE_STRING = 5;

/**
 * SORT_NATURAL используется для сравнения элементов как строк,
 * используя естественное упорядочивание, такое как natsort().
 */
export const SORT_NATURAL = 6;

/**
 * SORT_FLAG_CASE может быть объединена (побитовое ИЛИ)
 * с SORT_STRING или SORT_NATURAL для регистронезависимой сортировки строк.
 */
export const SORT_FLAG_CASE = 8;

export const SORT_USE_KEY = 20;

export const SORT_USE_VALUE = 21;

export const SORT_USE_BOTH = 22;

/**
 * ARRAY_FILTER_USE_KEY используется в array_filter()
 * для передачи каждого ключа в виде первого аргумента в заданную функцию.
 */
export const ARRAY_FILTER_USE_KEY = 2;

/**
 * ARRAY_FILTER_USE_BOTH используется в array_filter()
 * для передачи и значения и ключа в заданную функцию.
 */
export const ARRAY_FILTER_USE_BOTH = 1;

export const COUNT_NORMAL = 0;

export const COUNT_RECURSIVE = 1;

export const EXTR_OVERWRITE = 0;

export const EXTR_SKIP = 1;

export const EXTR_PREFIX_SAME = 2;

export const EXTR_PREFIX_ALL = 3;

export const EXTR_PREFIX_INVALID = 4;

export const EXTR_PREFIX_IF_EXISTS = 5;

export const EXTR_IF_EXISTS = 6;

export const EXTR_REFS = 256;
