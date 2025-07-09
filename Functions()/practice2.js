// for a given array, print the square of each value using forEach loop

let arr = [10,20,30,40,50];

// one way
arr.forEach((square) => {
    console.log(`Square of ${square} => ${square*square}`);
});


// second way
// square is a function
// num is the parameter 
let square = (num) => {
    console.log(num*num);   // forEach() takes each array element and passes them as num argument and does num * num
};

arr.forEach(square);

