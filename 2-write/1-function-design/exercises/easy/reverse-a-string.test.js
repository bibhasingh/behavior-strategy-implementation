// #todo

'use strict';

/**
 * reverses a string
 * @param {string} [toReverse=''] - the string to reverse
 * @returns {string} the reversed argument
 */

// -------- your solutions --------

for (const solution of [secretSolution]) {
  // the main test suite for the function
  describe(solution.name + ': reverses a string', () => {
    it('default parameter is an empty string -> ""', () => {
      expect(solution()).toEqual('');
    });
    it('an empty string -> ""', () => {
      expect(solution('')).toEqual('');
    });
    it('a string with all capital letters', () => {
      expect(solution('ASDF')).toEqual('FDSA');
    });
    it('a string with all small letters', () => {
      expect(solution('saksham')).toEqual('mahskas');
    });
    it('a string with all number', () => {
      expect(solution('95432')).toEqual('23459');
    });
    it('a string with sentence', () => {
      expect(solution('my name is bibha')).toEqual('ahbib si eman ym');
    });
    it('a string with number and letters', () => {
      expect(solution('123anil')).toEqual('lina321');
    });
    it('a string with special charecter', () => {
      expect(solution('&@#%$')).toEqual('$%#@&');
    });
    // write at least 5 more tests ...
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = '') { if ("string" != typeof a) throw new TypeError("toReverse is not a string"); return a.split("").reverse().join("") }
