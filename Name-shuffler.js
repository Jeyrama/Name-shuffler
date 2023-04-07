/*
Write a function that returns a string in 
which first name is swapped with last name.
*/


// Solution

function nameShuffle(str){
  return str.split(' ').reverse().join(' ')
}

// or

const nameShuffler = str => str.split(' ').reverse().join(' ');