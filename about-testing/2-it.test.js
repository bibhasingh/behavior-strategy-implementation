'use strict';

/* it

  it is used to wrap each test case
  if there was an error:
    it will fail
  if there was no error:
    it will pass


  it is an IMPLICIT GLOBAL DEPENDENCY
    it is used in test files without being declared
  to run test files you need a specialized test environment
    you can run these files in the browser using `study-lenses`
    or from node using `$ mocha path/to/file.js`
  if

*/

describe('an entire test suite', () => {
  it('a single passing test', () => {
    const hello = 'from in a describe';
    console.log(hello);
  });
  it('a single failing test', () => {
    throw new Error('something went wrong!');
  });
});







