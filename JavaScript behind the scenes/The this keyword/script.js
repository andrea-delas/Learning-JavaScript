///////////////////////////////////////
// Lecture: The this keyword


console.log(this);  // window - deafult object


calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);  
    console.log(this);
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this); // result is john - object
        console.log(2016 - this.yearOfBirth);

        function innerFunction() {
            console.log(this);  // again window - default object beacause this is a regular function, not a method
        }
        innerFunction();
        
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984,
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();



