///////////////////////////////////////
// Lecture: Hoisting


//functions
calculateAge(1965);

function calculateAge(year) {
    console.log(2016 - year);
}


//retirement(1956);

var retirement = function(year) {
    console.log(65 - (2016 - year));
}


// variables

console.log(age);  // result is undefined
var age = 23;
console.log(age);   // result is 23



function foo() {
    var age = 65;
    console.log(age);
}

foo();  // result is 65
console.log(age); // result is 23 because because var age = 23 
                  // is defined in the variable object of the global 
                  // execution context object



