const arr = ['nice', 76354, true, null, undefined];

console.log( arr );
console.log( Array.isArray(arr) );

const movies = [ 'Salaar', 'Animal', 'Wonka', 'Arrow', 'PeaceMaker' ];

console.log( movies.length );
console.log( 'Nice'.length );

// indexing
console.log( movies[2] ); // also works with strings
console.log( movies.indexOf('PeaceMaker') ); // also works with strings
console.log( movies.at(-4) ); // also works with strings
movies[3] = 'Batman'; 
console.log( movies );
movies[3] = 'Arrow';
console.log( movies[20] );

// slicing
console.log( movies.slice(1, 4) );
console.log( movies.slice(1, 20) );
console.log( movies.slice(2) );
console.log( movies.slice(-4) );

// modifying arrays
movies.push('Flashpoint'); // adds to the end
movies.unshift('Deadpool'); // adds to the start
console.log( movies );

movies.pop(); // removes from the end
movies.shift(); // removes from the start
console.log( movies );

// inserting and replacing elements
// movies.splice(2, 2); // removes 2 elements starting from index 2
// movies.splice(2); // removes all elements starting from index 2
// movies.splice(2, 2, 'Superman', 'Ironman', 'Dr. Strange'); // removes 2 elements starting from index 2 and adds 3 elements
movies.splice(2, 0, 'Superman'); // inserts 1 element at index 2
// console.log( movies.splice(2, 2) );
console.log( movies );