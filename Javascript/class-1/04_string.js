// string
let name1 ="sai";
let name2 ="priya";
let name3 ="sahoo";
let sentence = "she is a good girl"; // 16 char

// empty string "" " "
// console.log(name1 + " " + name2 + " " + name3 + "\n" + sentence);

// charAt() : function
// It returns the character at the specified index in a string.

console.log(sentence.charAt(10)); // e

// length
console.log(sentence.length); // 16

let lengthCheck =
  "   Lorem  ipsum dolor sit amet consectetur adipisicing elit. Doloribus at rerum ea minus nulla itaque ab vero ad asperiores exercitationem    ";
console.log(lengthCheck.length); // 134

// split()
// console.log(sentence.split(" "));
console.log(sentence.toUpperCase()); // HE IS A GOOD BOY
console.log(lengthCheck);
console.log(lengthCheck.trim());
console.log(lengthCheck);




//todo Task: 1
//use all the string methods to demon demonstrate all the properties with examples

// Example:
// let sentence = "he is a good boy"; // 16 char

//console.log(sentence.includes("is"));

// todo Task: 2
// Declare a sentence and include your name in that and check wheather your name is present or not using `incude` method.
// Example:
// let sentence = Lorem ipsum dolor sit amet pramod consectetur adipisicing elit. Perferendis, nihil. 