// #todo

'use strict';

/**
 * takes an array of strings and returns a new array of numbers
 *  the new array contains all the numbery strings, cast to numbers
 * does not modify the argument (no side-effects)
 * @param {string[]} arrayOfStrings - the array of strings
 * @returns {number[]} an array containing only numbers, and not NaN
 * @example
 *  ['1', '2', 'e', '.'] // --> [1, 2]
 */

// -------- your solutions --------

for (const solution of [secretSolution]) {
  describe(solution.name + ': get numbery array', () => {
    describe('array without number string_', () => {
      it('_array without number string with alphabete only', () => {
        expect(solution(['hello', 'how','where'])).toEqual([]);
      });
      it('_array without number string with alphanumeric', () => {
        expect(solution(['he11o', 'h5w','w1ere'])).toEqual([]);
      });
    });
    describe('array with number string_', () => {
      it('_array with number string', () => {
        expect(solution(['101', '11','23'])).toEqual([101,11,23]);
      });
    });
    describe('array with number and alphanumeric  string_', () => {
      it('_array with mix string', () => {
        expect(solution(['saksham','101','sunita', '11','anil','23'])).toEqual([101,11,23]);
      });
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfStrings is not an array"); } const b = a.some(a => "string" != typeof a); if (b) { throw new TypeError("arrayOfStrings contains non-strings"); } const c = a.map(a => +a), d = c.filter(a => !Number.isNaN(a)); return d }
