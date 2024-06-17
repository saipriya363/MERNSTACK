// Object :

// A collection of properties, where each property is defined as a key-value pair.
// Each property has a key and a value.
// The value can be a string, number, boolean, array, object, or function.

// Traditional method

let student = {
    name: "saipriya",
    age: 19,
    city: "bhubaneswar",
    marks: [80, 90, 70],
    isMarried: false,
    address: { po: "RRL", pin: 751013},
};

//console.log(student);

//constructor:
let newstudent = new Object();  // {}
newstudent.name = "sai";
newstudent.age = 19;
newstudent.marks = [30,40,50];

//console.log(newstudent);

//Accessing object :

//myArray[0]
console.log(student.name);
console.log(student["city"]);
console.log(student["address"]);
