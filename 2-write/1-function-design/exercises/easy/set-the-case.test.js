// #todo

'use strict';

/**
 * sets all the characters in a string to upper or lower case
 * @param {string} [text=''] - the text to casify
 * @param {boolean} [lowerCase=true] - lower case or upper case
 *  true: set the string to lower case
 *  false: set the string to upper case
 * @returns {string} the text in all lower or upper case
 */

// -------- your solutions --------

for (const solution of [secretSolution]) {
  describe(solution.name + ': sets a text to lower or upper case', () => {
    describe("the function's default parameters", () => {
      it('second parameter defaults to true', () => {
        expect(solution('asdf')).toEqual('asdf');
      });
      it('first parameter defaults to an empty string', () => {
        expect(solution('')).toEqual('');
      });
    });
    // write the tests indicated by the comments
    describe('when set to lower case', () => {
      // when the text is an empty string
      it('with empty string', () => {
        expect(solution('', true)).toEqual('');
      });
      // when the text is all upper case
      it('with upper case string', () => {
        expect(solution('BIBHA', true)).toEqual('bibha');
      });
      // when the text is all lower case
      it('with lower case string', () => {
        expect(solution('saksham', true)).toEqual('saksham');
      });
      // when the text is mixed upper and lower case
      it('with mixed string', () => {
        expect(solution('AnIl', true)).toEqual('anil');
      });
      // when the text contains punctuation
      it('with upper case string', () => {
        expect(solution('@#|&', true)).toEqual('@#|&');
      });
      // when the text contains numbers
      it('with upper case string', () => {
        expect(solution('123456', true)).toEqual('123456');
      });
    });
    describe('when set to upper case', () => {
      it('with upper case', () => {
        expect(solution('ABCD', false)).toEqual('ABCD');
      });
      // when the text is an empty string
      it('with empty string', () => {
        expect(solution('', false)).toEqual('');
      });
      // when the text is all upper case
      it('with upper case', () => {
        expect(solution('SAKSHAM', false)).toEqual('SAKSHAM');
      });
      // when the text is all lower case
      it('with lower case string', () => {
        expect(solution('bibha', false)).toEqual('BIBHA');
      });
      // when the text is mixed upper and lower case
      it('with mixed string', () => {
        expect(solution('AnIl', false)).toEqual('ANIL');
      });
      // when the text contains punctuation
      it('with contains punctuation string', () => {
        expect(solution('&@#', false)).toEqual('&@#');
      });
      // when the text contains numbers
      it('with number string', () => {
        expect(solution('45678', false)).toEqual('45678');
      });
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = "", b = !0) { 
  if ("string" != typeof a) { throw new TypeError("text is not a string"); } 
  if ("boolean" != typeof b) { throw new TypeError("lowerCase is not a boolean"); } 
  let c = ""; return c = b ? a.toLowerCase() : a.toUpperCase(), c 
}
