/*  For today's coding challenge your job is to write functions
 *  so that each function call works.
 *
 *  Example:
 *
 *  greeting('Hey guys', (message) => {
 *     console.log(message);
 *  });
 *
 *  You would then define the greeting function to make the invocation work.
 *
 *  const greeting = (str, cb) => {
 *    cb(str);
 *  };
 *
 */

// Write a function called firstItem that passes the first item of the given array to the callback function
// version 1 √
const firstItem = ( array, cb ) => {
  cb( array[ 0 ] )
}

// // version 2 √
// const firstItem = (array, cb) => {
//   x = array.shift(); // <--- degrades the array
//   console.log(x);
// }
// version 3 √
// const firstItem = (array, cb) => {
//   console.log(array.shift()); // <--- degrades the array
// }

const foods = [ 'pineapple', 'mango', 'ribeye', 'curry', 'tacos', 'ribeye', 'mango' ];

firstItem( foods, ( firstItem ) => {
  console.log( `The first item is ${firstItem}.` );
} );

// Write a function called getLength that passes the length of the array into the callback
// version 1 √
const getLength = ( anArray, cb ) => {
  cb( anArray.length );
}

getLength( foods, ( length ) => {
  console.log( `The length of the array is ${length}.` );
} );

// Write a function called last which passes the last item of the array into the callback
// version 1 √
const last = ( theArray, cb ) => {
  cb( theArray[ theArray.length - 1 ] )
}

last( foods, ( lastItem ) => {
  console.log( `The last item in the array is ${lastItem}.` );
} );

// Write a function called sumNums that adds two numbers and passes the result to the callback
// version 1 √
const sumNums = ( x, y, cb ) => {
  cb( x + y );
}

sumNums( 5, 10, ( sum ) => {
  console.log( `The sum is ${sum}.` );
} );

// Write a function called multiplyNums that adds two numbers and passes the result to the callback
// version 1 √
const multiplyNums = ( x, y, cb ) => {
  cb( x * y );
}

multiplyNums( 5, 10, ( product ) => {
  console.log( `The product is ${product}.` );
} );

// Write a function called contains that checks if an item is present inside of the given array.
// Pass true to the callback if it is, otherwise pass false
// version 1 √
const contains = ( array, str, cb ) => {
  cb( array.includes( str ) );
}

contains( foods, 'ribeye', ( result ) => {
  console.log( result ? 'ribeye is in the array' : 'ribeye is not in the array' );
} );

// Write a function called removeDuplicates that removes all duplicate values from the given array.
// Pass the array to the callback function.  Do not mutate the original array.
// version 1 √
const removeDuplicates = ( array, cb ) => {
  cb( Array.from( new Set( array ) ) );
}

removeDuplicates( foods, ( uniqueFoods ) => {
  console.log( `foods with duplicates removed: ${uniqueFoods}` );
} );

// Write a function called forEach that iterates over the provided array and passes the value and index into the callback.
// version 1 √
const forEach = ( array, cb ) => {
  for ( let i = 0; i < array.length; i++ ) {
    cb( array[ i ], i );
  }
}

forEach( foods, ( value, index ) => {
  console.log( `${value} is at index ${index}.` );
} );
