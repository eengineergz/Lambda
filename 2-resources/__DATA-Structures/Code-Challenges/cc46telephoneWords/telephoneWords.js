/* cc46 telephoneWords https://repl.it/student/submissions/1548411
https://repl.it/student/submissions/1550720

Each number key on a standard phone keypad has a set
of Latin letters written on it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg
Businesses often try to come up with clever ways to
spell out their phone number in advertisements to make it more memorable. But there are a lot of combinations!
Write a function that takes up to four digits of a phone
number, and returns a list of all of the words that can
be written on the phone with that number. (You should
return all permutations, not only English words.)

Example:
telephoneWords('2745');
   => ['APGJ',
       'APGK',
       'APGL',
       ..., // many many more of these
       'CSIL']
  * Tips:
  - Phone numbers are strings! (A phone number can start
    with a zero.)
  - The digits 0 and 1 do not have letters associated
    with them, so they should be left as numbers.
  - Don't return every combination of those digits
    in any order, just the order given.

*/
const phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};

const telephoneWords = function ( str ) {
  const target = [];
  let i;
  let j;
  const digitArr = str.split( '' );
  if ( str ) {
    for ( i = 0; i < digitArr.length; i++ ) {
      target.push( phoneDigitsToLetters[ str[ i ] ] );
    }
  }

  function combinations( arr ) {
    const newArr = arr.slice( 0 );
    if ( newArr.length === 0 ) {
      return [];
    }
    let res = [];
    const top = newArr.shift();
    const ret = combinations( newArr );
    if ( ret.length === 0 ) {
      res = top;
    } else {
      for ( i = 0; i < top.length; i++ ) {
        for ( j = 0; j < ret.length; j++ ) {
          res.push( top[ i ] + ret[ j ] );
        }
      }
    }
    return res;
  }
  return combinations( target );
};

/* eslint no-console: 0 */
// console.log(telephoneWords('45'));
telephoneWords( '45' );
