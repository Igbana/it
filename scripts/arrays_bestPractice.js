// iterates over array elements, faster and better way
let fruits = ["Apple", "Orange", "Plum"];
for (let fruit of fruits) {
    alert( fruit );
}

// This method below is much more slower
let arr = ["Apple", "Orange", "Pear"];
for (let key in arr) {
    alert( arr[key] );
}

/* NB: Ways to misuse a list:
 * Holes in a list (skipping indices)
 * Populating a list in reverse order
 * Using a list like a normal object by using non-integer keys(indices) to add items
*/

/*NB: Length of a list is not the count of the list;
 its the highest numeric index + 1.
 You can truncate a list by assigning its length property to a smaller number
 So the simplest way to clear a list id arr.length = 0;
 A new variable to an array is a pointer to that array, so modifications will affect the both
 And weirdly, you don't compare arrays with equality sign...mahd
 Push and pop are faster than shift and unshift (what are those sef smh)
*/

//Splice

//arr.splice(start[, deleteCount, elem1, ..., elemN])
let arr2 = ["I", "study", "JavaScript"];
arr2.splice(1, 1); // from index 1 remove 1 element
alert( arr2 );


let arr3 = ["I", "study", "JavaScript", "right", "now"];
let removed = arr3.splice(0, 2); // remove 2 first elements
alert( removed );

let arr4 = ["I", "study", "JavaScript"];
// from index 2
// delete 0
// then insert "complex" and "language"
arr4.splice(2, 0, "complex", "language");
alert( arr4 );