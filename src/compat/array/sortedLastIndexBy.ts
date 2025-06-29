import { sortedIndexBy } from './sortedIndexBy.ts';
import { ValueIteratee } from '../_internal/ValueIteratee.ts';

type PropertyName = string | number | symbol;

// Lodash 스타일의 Iteratee 타입 정의
type Iteratee<T, R> = ((value: T) => R) | PropertyName | [PropertyName, any] | Partial<T>;

/**
 * This method is like `sortedLastIndex` except that it accepts `iteratee`
 * which is invoked for `value` and each element of `array` to compute their
 * sort ranking. The iteratee is invoked with one argument: (value).
 *
 * @template T
 * @param {ArrayLike<T> | null | undefined} array - The sorted array to inspect.
 * @param {T} value - The value to evaluate.
 * @param {ValueIteratee<T>} iteratee - The iteratee invoked per element.
 * @returns {number} Returns the index at which `value` should be inserted into `array`.
 *
 * @example
 * sortedLastIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, 'x');
 * // => 1
 */
export function sortedLastIndexBy<T>(
  array: ArrayLike<T> | null | undefined,
  value: T,
  iteratee: ValueIteratee<T>
): number;

/**
 * This method is like `sortedLastIndex` except that it accepts `iteratee`
 * which is invoked for `value` and each element of `array` to compute their
 * sort ranking. The iteratee is invoked with one argument: (value).
 *
 * @param {ArrayLike<T> | null | undefined} array The sorted array to inspect.
 * @param {T} value The value to evaluate.
 * @param {(value: T) => R | PropertyName | [PropertyName, any] | Partial<T>} iteratee The iteratee invoked per element.
 * @returns {number} Returns the highest index at which `value` should be inserted
 *  into `array`.
 * @example
 * const objects = [{ 'n': 4 }, { 'n': 5 }]
 * sortedLastIndexBy(objects, { 'n': 4 }, ({ n }) => n)
 * // => 1
 */
export function sortedLastIndexBy<T, R>(
  array: ArrayLike<T> | null | undefined,
  value: T,
  iteratee?: Iteratee<T, R>
): number {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return sortedIndexBy(array, value, iteratee, true);
}
